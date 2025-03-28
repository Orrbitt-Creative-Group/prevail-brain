import * as THREE from 'three'
import { EventEmitter } from 'tseep'
import { BrainModel } from './parts/model'
import './style.scss'
import { map } from './utils/math-utils'
import Mouse from './parts/mouse'
import Sizes from './parts/sizes'
import World from './parts/world'

export type BrainParams = {
    world: World
    model: BrainModel
    mouse: Mouse
    domTarget: HTMLElement
}

export class BrainDomMotion extends EventEmitter<{
    updateScale: () => void
    updateView: () => void
}> {
    world: World
    mouse: Mouse
    sizes: Sizes
    model: BrainModel
    domTarget: HTMLElement
    domRect: DOMRect
    camPos = { z: 2, y: 0, x: 0 }
    moveAmount = 0.5
    moveSpeed = 0.025
    boxSize = new THREE.Vector3(1, 0.8418079614639282, 0.8022598028182983)

    rafId: number | null = null

    constructor({ world, model, mouse, domTarget }: BrainParams) {
        super()
        this.world = world
        this.sizes = this.world.sizes
        this.mouse = mouse
        this.model = model

        this.domTarget = domTarget
        this.domRect = this.domTarget.getBoundingClientRect()

        this.world.camera.position.set(this.camPos.x, this.camPos.y, this.camPos.z)

        this.setViewport()
        this.setScale()

        this.world.on('resize', this.onResize)
        window.addEventListener('scroll', this.onScroll)
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
        this.world.renderer.setViewport(left, top, this.sizes.width, this.sizes.height)
        this.emit('updateView')
    }

    setScale = () => {
        let findDist = (sy: number, sz: number, fov: number) => {
            return sy / 2 / Math.tan(fov / 2) + sz / 2
        }

        const camera = this.world.camera
        let camZ = camera.position.z
        let fov = camera.fov * (Math.PI / 180)
        let needZ = findDist(this.boxSize.y, this.boxSize.z, fov)
        let scale = camZ / needZ

        this.model.scale.setScalar(scale)

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

        this.world.camera.position.lerp(new THREE.Vector3(camX, camY, camZ), this.moveSpeed)
        this.world.camera.lookAt(0, 0, 0)

        this.world.render()

        this.rafId = window.requestAnimationFrame(this.tick)
    }

    start = () => {
        if (this.rafId !== null) return
        this.world.camera.position.set(
            this.camPos.x - this.moveAmount * 2,
            this.camPos.y - this.moveAmount * 1.5,
            this.camPos.z - this.moveAmount * 2
        )

        this.rafId = window.requestAnimationFrame(this.tick)
    }

    stop = () => {
        if (this.rafId) window.cancelAnimationFrame(this.rafId)
        this.rafId = null
    }

    destroy = () => {
        this.world.off('resize', this.onResize)
        window.removeEventListener('scroll', this.onScroll)
        this.stop()
    }
}
