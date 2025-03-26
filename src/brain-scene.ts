import * as THREE from 'three'
import { map } from './utils/math-utils'
import Mouse from './utils/mouse'
import Sizes from './utils/sizes'
import World from './utils/world'
import { vertexColorsGradient } from './utils/vertex-colors-gradient'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

const LIGHTBLUE = '#00c2c1'
const DARKBLUE = '#1414c2'

const dirLightInfoDefaults = [
    { x: -5, y: 1.2, z: 4, intensity: 4 },
    { x: 0, y: 1.2, z: 4.5, intensity: 5 },
    { x: 3, y: 1.2, z: -5, intensity: 5 },
]

export type BrainSceneParams = {
    world: World
    brain: THREE.BufferGeometry
    mouse: Mouse
    dirLightInfo?: { x: number; y: number; z: number; intensity: number }[]
    domTarget: HTMLElement
}

export class BrainScene {
    world: World
    mouse: Mouse
    sizes: Sizes
    clock = new THREE.Clock()
    dirLights: {
        instance: THREE.DirectionalLight
        helper: THREE.DirectionalLightHelper
        helperColor: string
    }[] = []
    phongMat!: THREE.MeshPhongMaterial
    brainGeo: THREE.BufferGeometry
    brain: THREE.Mesh<THREE.BufferGeometry, THREE.MeshPhongMaterial | THREE.ShaderMaterial>
    camPos = { z: 2, y: 0, x: 0 }
    // y: -0.3,
    // x: -0.2,
    _mouseMovement = true
    moveSpeed = 0.025
    moveAmount = 0.5
    // camZOffset = 0.2
    camZOffset = 0.2
    _color1 = LIGHTBLUE
    _color2 = DARKBLUE

    boxActual = new THREE.Box3()
    boxHelper = new THREE.Box3Helper(this.boxActual, 0xff0000)

    boxDefault = new THREE.Box3()
    boxSize = new THREE.Vector3(1, 0.8418079614639282, 0.8022598028182983)
    domTarget: HTMLElement

    constructor({ world, brain, mouse, dirLightInfo, domTarget }: BrainSceneParams) {
        this.world = world
        this.sizes = this.world.sizes
        this.brainGeo = brain
        this.mouse = mouse
        this.domTarget = domTarget

        this.world.camera.position.set(this.camPos.x, this.camPos.y, this.camPos.z)
        // this.world.renderer.setClearColor('#ffffff')

        this.createMaterials()
        this.setVertexColors()

        let box = new THREE.BoxGeometry()
        this.setVertexColors(box)

        this.brain = new THREE.Mesh(this.brainGeo, this.phongMat)
        this.brain.castShadow = true
        this.brain.receiveShadow = true

        // this.box = new THREE.Box3()
        this.boxDefault.setFromCenterAndSize(new THREE.Vector3(0, 0, 0), this.boxSize)
        this.boxActual.setFromObject(this.brain)
        this.boxHelper = new THREE.Box3Helper(this.boxActual, 0xff0000)

        this.makeDirLights(dirLightInfo || dirLightInfoDefaults)

        this.world.scene.add(this.brain, this.boxHelper)
        this.setToCamera()
        this.world.on('resize', this.setToCamera)

        //@ts-ignore
        window.brain = this
        // @ts-ignore
        window.THREE = THREE
    }

    get mouseMovement() {
        return this._mouseMovement
    }

    set mouseMovement(val: boolean) {
        this._mouseMovement = val
        if (!val) {
            this.world.camera.rotation.set(0, 0, 0)
        }
    }

    get color1() {
        return this._color1
    }

    set color1(val: string) {
        this._color1 = val
        this.setVertexColors()
    }

    get color2() {
        return this._color2
    }

    set color2(val: string) {
        this._color2 = val
        this.setVertexColors()
    }

    createMaterials() {
        this.phongMat = new THREE.MeshPhongMaterial({ vertexColors: true })
    }

    setVertexColors(geo = this.brainGeo) {
        vertexColorsGradient(geo, {
            color1: this._color1,
            color2: this._color2,
            min: -0.4,
            max: 0.4,
            axis: 'z',
        })
    }

    makeDirLights(lightInfo = dirLightInfoDefaults) {
        if (this.dirLights.length) {
            this.dirLights.forEach((light) => {
                this.world.scene.remove(light.instance)
                this.world.scene.remove(light.helper)
                light.helper.dispose()
                light.instance.dispose()
            })
        }
        this.dirLights = []
        let colors = ['#9500ff', '#00ff00', '#ff0088', '#ff9d00']
        lightInfo.forEach(({ x, y, z, intensity }, i) => {
            let light = new THREE.DirectionalLight('#ffffff', intensity)
            light.position.set(x, y, z)
            light.castShadow = true
            this.world.scene.add(light)
            let helperColor = colors[i % 3]

            let helper = new THREE.DirectionalLightHelper(light, 2, helperColor)
            this.world.scene.add(helper)
            helper.visible = false

            this.dirLights.push({ instance: light, helper, helperColor })
        })
    }

    reset = () => {
        this.brain.scale.set(1, 1, 1)
        this.brain.position.set(0, 0, 0)
        this.camPos.z = 2
    }

    setToDomTarget = () => {
        let rect = this.domTarget.getBoundingClientRect()
        let fov = this.world.camera.fov
        let camZ = this.camPos.z - this.boxSize.z * 0.5
        let z = (this.sizes.height / Math.tan((fov * Math.PI) / 360)) * 0.5
        let scale = camZ / z

        let scaleX = 1
        let scaleY = 1
        let aspect = this.boxSize.x / this.boxSize.y
        if (rect.width / rect.height > aspect) {
            scaleX = rect.height * scale * aspect
            scaleY = rect.height * scale
        } else {
            scaleX = rect.width * scale
            scaleY = (rect.width * scale) / aspect
        }

        // let scaleX = rect.width * scale
        // let scaleY = rect.height * scale
        let scaleZ = this.boxSize.z * scaleX
        this.brain.scale.set(scaleX, scaleY, scaleZ)
        this.brain.position.set(
            (rect.left + rect.width * 0.5 - this.sizes.width * 0.5) * scale,
            (-rect.top - rect.height * 0.5 + this.sizes.height * 0.5) * scale,
            0
        )

        this.boxActual.setFromObject(this.brain)
    }

    setToCamera = () => {
        // return this.setToDomTarget()
        this.brain.scale.set(1, 1, 1)

        let objZ = Math.abs(this.camPos.z - this.boxDefault.max.z)

        let fov = this.world.camera.fov * (Math.PI / 180)
        let camHeight = 2 * Math.tan(fov / 2) * this.camPos.z
        let camWidth = camHeight * this.world.camera.aspect
        let hfov = 2 * Math.atan(camWidth / 2 / this.camPos.z)

        let heightAtObject = 2 * Math.tan(fov / 2) * objZ
        let widthAtObject = 2 * Math.tan(hfov / 2) * objZ

        let scaleX = widthAtObject / this.boxSize.x
        let scaleY = heightAtObject / this.boxSize.y
        let scaleZ = this.boxSize.z * scaleX
        this.brain.scale.set(scaleX, scaleY, scaleZ)
        this.boxActual.setFromObject(this.brain)
    }

    tick = () => {
        if (this._mouseMovement) {
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
        } else {
            this.world.camera.position.lerp(
                new THREE.Vector3(this.camPos.x, this.camPos.y, this.camPos.z),
                this.moveSpeed
            )
        }
        this.world.camera.lookAt(0, 0, 0)

        this.world.render()

        window.requestAnimationFrame(this.tick)
    }

    start = () => {
        this.world.camera.position.set(
            this.camPos.x - this.moveAmount * 2,
            this.camPos.y - this.moveAmount * 1,
            this.camPos.z - this.moveAmount * 4
        )
        window.requestAnimationFrame(this.tick)
    }
}
