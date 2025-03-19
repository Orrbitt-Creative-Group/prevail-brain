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
    _mouseMovement = false
    moveSpeed = 0.025
    moveAmount = 0.5
    // camZOffset = 0.2
    camZOffset = 0
    _color1 = LIGHTBLUE
    _color2 = DARKBLUE

    box: THREE.Box3
    boxHelper: THREE.Box3Helper

    boxSize = new THREE.Vector3(1, 0.8418079614639282, 0.8022598028182983)

    constructor({ world, brain, mouse, dirLightInfo }: BrainSceneParams) {
        this.world = world
        this.sizes = this.world.sizes
        this.brainGeo = brain
        this.mouse = mouse

        this.world.camera.position.set(this.camPos.x, this.camPos.y, this.camPos.z)
        // this.world.renderer.setClearColor('#ffffff')

        this.createMaterials()
        this.setVertexColors()

        let box = new THREE.BoxGeometry()
        this.setVertexColors(box)

        this.brain = new THREE.Mesh(this.brainGeo, this.phongMat)
        this.brain.castShadow = true
        this.brain.receiveShadow = true

        this.box = new THREE.Box3()
        this.box.setFromCenterAndSize(new THREE.Vector3(0, 0, 0), this.boxSize)
        this.boxHelper = new THREE.Box3Helper(this.box, 0xff0000)

        this.makeDirLights(dirLightInfo || dirLightInfoDefaults)

        this.world.scene.add(this.brain, this.boxHelper)
        // this.setToCamera()

        // this.world.on('resize', this.setToCamera)
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
            min: -0.8,
            max: 0.8,
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

    setCamera = (first = false) => {
        this.box.setFromCenterAndSize(new THREE.Vector3(0, 0, 0), this.boxSize)
        let size = this.box.getSize(new THREE.Vector3())
        let center = this.box.getCenter(new THREE.Vector3())
        let min = this.box.min
        let max = this.box.max

        // 	"x": 1.7746353149414062,
        // 	"y": 1.4943400621414185,
        // 	"z": 1.4238027930259705
        // }

        const fov = this.world.camera.fov * (Math.PI / 180)
        const fovh = 2 * Math.atan(Math.tan(fov / 2) * this.world.camera.aspect)
        let dx = Math.abs(size.x / 2 / Math.tan(fovh / 2))
        let dy = Math.abs(size.y / 2 / Math.tan(fov / 2))

        let cameraZ = Math.max(dx, dy) * (1 + this.camZOffset)
        this.camPos.z = cameraZ
        this.box.setFromObject(this.brain)
    }

    // setToCenter = () => {
    //     let bbox = new THREE.Box3()
    //     bbox.setFromObject(this.brain)
    //     let boxSize = bbox.getSize(new THREE.Vector3())
    //     let boxCenter = bbox.getCenter(new THREE.Vector3())
    //     this.brain.position.x = -boxCenter.x
    //     this.brain.position.z = -boxCenter.z
    //     this.brain.position.y = -boxCenter.y
    //     console.log({ boxSize, boxCenter })
    // }

    setToCamera = () => {
        this.brain.scale.set(1, 1, 1)

        console.log('setToCamera')

        this.box.setFromCenterAndSize(new THREE.Vector3(0, 0, 0), this.boxSize)
        let boxSize = this.box.getSize(new THREE.Vector3())

        let objZ = Math.abs(this.camPos.z - this.box.max.z)

        let fov = this.world.camera.fov * (Math.PI / 180)
        let camHeight = 2 * Math.tan(fov / 2) * this.camPos.z
        let camWidth = camHeight * this.world.camera.aspect
        let hfov = 2 * Math.atan(camWidth / 2 / this.camPos.z)

        let heightAtObject = 2 * Math.tan(fov / 2) * objZ
        let widthAtObject = 2 * Math.tan(hfov / 2) * objZ

        // let objHeight = 2 * Math.tan(fov / 2) * objZ
        // let objWidth = objHeight * boxAspect

        this.brain.scale.set(widthAtObject / boxSize.x, heightAtObject / boxSize.y, 1)
        this.box.setFromObject(this.brain)
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
