import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { BrainSceneLights } from './parts/lights'
import { BrainModel } from './parts/model'
import Mouse from './parts/mouse'
import World from './parts/world'
import { map } from './utils/math-utils'

type BrainParams = {
    domTarget: HTMLElement
    clearColor?: string
    camZ?: number
    moveAmount?: number
    moveSpeed?: number
    fov?: number
    webglContainer?: HTMLElement
}

export class BrainWorld extends World {
    mouse: Mouse
    lights: BrainSceneLights
    gltfLoader: GLTFLoader
    loadingManager = new THREE.LoadingManager()
    domTarget: HTMLElement
    domRect: DOMRect
    model?: BrainModel
    boxSize = new THREE.Vector3(1, 0.8418079614639282, 0.8022598028182983)
    rafId: number | null = null

    camPos = { z: 2, y: 0, x: 0 }
    moveAmount = 0.5
    moveSpeed = 0.025

    constructor({
        domTarget,
        clearColor,
        camZ,
        moveAmount,
        moveSpeed,
        fov,
        webglContainer,
    }: BrainParams) {
        super({ container: webglContainer, camera: { fov: fov } })
        this.mouse = new Mouse(this.sizes)
        if (clearColor) {
            this.renderer.setClearColor(clearColor)
        }
        if (camZ) this.camPos.z = camZ
        if (moveAmount) this.moveAmount = moveAmount
        if (moveSpeed) this.moveSpeed = moveSpeed

        this.domTarget = domTarget
        this.domRect = this.domTarget.getBoundingClientRect()

        this.lights = new BrainSceneLights(this)
        this.gltfLoader = new GLTFLoader(this.loadingManager)
    }

    loadModel = (path: string) => {
        this.gltfLoader.load(path, (gltf) => {
            const children = gltf.scene.children
            if (children[0] instanceof THREE.Mesh) {
                let brainmesh = children[0]
                let brain = brainmesh.geometry as THREE.BufferGeometry
                let model = this.setModel(brain)
                this.start()
                this.emit('load', model)
            }
        })
    }

    setModel = (geo: THREE.BufferGeometry) => {
        if (this.model) {
            this.scene.remove(this.model)
            this.model.destroy()
            this.model = undefined
        }

        this.model = new BrainModel(geo)
        this.scene.add(this.model)

        this.setScale()
        this.setViewport()
        return this.model
    }

    onResize = () => {
        this.domRect = this.domTarget.getBoundingClientRect()

        this.setScale()
        this.setViewport()
    }

    onScroll = () => {
        this.domRect = this.domTarget.getBoundingClientRect()
        this.setViewport()
    }

    setViewport = () => {
        let rectCx = this.domRect.left + this.domRect.width * 0.5
        let rectCy = -this.domRect.top - this.domRect.height * 0.5
        let left = rectCx - this.sizes.width * 0.5
        let top = rectCy + this.sizes.height * 0.5
        this.renderer.setViewport(left, top, this.sizes.width, this.sizes.height)
        this.emit('updateView')
    }

    setScale = () => {
        let findDist = (sy: number, sz: number, fov: number) => {
            return sy / 2 / Math.tan(fov / 2) + sz / 2
        }

        const camera = this.camera
        let camZ = this.camPos.z
        let fov = camera.fov * (Math.PI / 180)
        let needZ = findDist(this.boxSize.y, this.boxSize.z, fov)
        let scale = camZ / needZ

        console.log('scale', scale)
        console.log('model', this.model)
        this.model?.scale.setScalar(scale)

        let amt = this.domRect.height / this.sizes.height
        camera.zoom = 1 * amt
        camera.updateProjectionMatrix()
        this.emit('updateScale')
    }

    tick = () => {
        let camZ = this.camPos.z

        let camX = this.camPos.x
        camX = map(
            this.mouse.pos.x,
            1,
            -1,
            this.camPos.x - this.moveAmount,
            this.camPos.x + this.moveAmount
        )
        let camY = this.camPos.y
        camY = map(
            this.mouse.pos.y,
            1,
            -1,
            this.camPos.y - this.moveAmount,
            this.camPos.y + this.moveAmount
        )

        this.camera.position.lerp(new THREE.Vector3(camX, camY, camZ), this.moveSpeed)
        this.camera.lookAt(0, 0, 0)

        this.render()

        this.rafId = window.requestAnimationFrame(this.tick)
    }

    start = () => {
        if (this.rafId !== null) return
        this.camera.position.set(
            this.camPos.x + this.moveAmount * 3,
            this.camPos.y - this.moveAmount,
            this.camPos.z + this.moveAmount * 2
        )
        this.onResize()
        this.sizes.on('resize', this.onResize)
        window.addEventListener('scroll', this.onScroll)
        this.rafId = window.requestAnimationFrame(this.tick)
    }

    stop = () => {
        if (this.rafId) window.cancelAnimationFrame(this.rafId)
        this.sizes.off('resize', this.onResize)
        window.removeEventListener('scroll', this.onScroll)
        this.rafId = null
    }

    destroy() {
        if (this.model) {
            this.scene.remove(this.model)
            this.model.destroy()
            this.model = undefined
        }
        this.sizes.destroy()
        this.mouse.destroy()
        this.stop()
        window.removeEventListener('scroll', this.onScroll)
        super.destroy()
    }
}
