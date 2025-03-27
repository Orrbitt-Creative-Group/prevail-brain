import * as THREE from 'three'
import { map } from './utils/math-utils'
import Mouse from './utils/mouse'
import Sizes from './utils/sizes'
import World from './utils/world'
import { vertexColorsGradient } from './utils/vertex-colors-gradient'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import GUI from 'lil-gui'
import './style.scss'

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
    dirLights: {
        instance: THREE.DirectionalLight
        helper: THREE.DirectionalLightHelper
        helperColor: string
    }[] = []
    phongMat!: THREE.MeshPhongMaterial
    shaderMat!: THREE.ShaderMaterial
    brainGeo: THREE.BufferGeometry
    box: THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>
    brain: THREE.Mesh<THREE.BufferGeometry, THREE.MeshPhongMaterial | THREE.ShaderMaterial>
    boxHelper: THREE.BoxHelper
    controls: OrbitControls
    gui = new GUI()
    bbox: THREE.Box3
    domTarget: HTMLElement
    baseCamZ = 2
    currentFn: () => void

    constructor({ world, brain, mouse, dirLightInfo }: BrainSceneParams) {
        this.world = world
        this.sizes = this.world.sizes
        this.brainGeo = brain
        this.mouse = mouse
        this.controls = new OrbitControls(this.world.camera, this.world.renderer.domElement)

        this.world.camera.position.set(0, 0, this.baseCamZ)
        this.world.renderer.setClearColor('#ffffff')

        this.createMaterials()

        let box = new THREE.BoxGeometry()

        this.brain = new THREE.Mesh(this.brainGeo, this.phongMat)
        this.box = new THREE.Mesh(box, this.shaderMat)
        this.brainGeo.computeBoundingBox()
        this.bbox = new THREE.Box3()
        this.bbox.setFromObject(this.brain)
        this.boxHelper = new THREE.BoxHelper(this.brain, 0xff0000)
        this.makeDirLights(dirLightInfo || dirLightInfoDefaults)

        this.domTarget = document.querySelector('.webgl-brain') as HTMLElement

        this.world.scene.add(this.brain, this.box, this.boxHelper)
        this.brain.visible = false

        this.currentFn = this.setObjectToDom
        this.setupGui()

        this.setCurrent()
        this.world.on('resize', this.setCurrent)
    }

    setCurrent = () => {
        this.currentFn()
    }

    setupGui = () => {
        let cam = this.gui.addFolder('Camera')
        let pos = this.world.camera.position
        cam.add(pos, 'x').name('pos x').step(0.01).listen().disable().decimals(2)
        cam.add(pos, 'y').name('pos y').step(0.01).listen().disable().decimals(2)
        cam.add(pos, 'z').name('pos z').step(0.01).listen().disable().decimals(2)
        cam.add(this.world.camera, 'zoom').name('zoom').step(0.01).listen().disable().decimals(2)
        cam.add(this.world.camera, 'aspect').disable().listen().decimals(2)
        let debg = {
            visible: 'box',
        }

        this.gui
            .add(this, 'currentFn', {
                setCameraOther: this.setCameraOther,
                setCameraToWindow: this.setCameraToWindow,
                setObjectToWindow: this.setObjectToWindow,
                setObjectToDom: this.setObjectToDom,
            })
            .onChange(this.setCurrent)
        this.gui.add(this, 'setCurrent')

        this.gui.add(debg, 'visible', ['box', 'brain']).onChange((v: 'box' | 'brain') => {
            this.box.visible = v === 'box'
            this.brain.visible = v === 'brain'
        })

        let obj = this.gui.addFolder('Object')
        obj.add(this.brain.scale, 'x').name('scale x').step(0.01).listen().disable().decimals(2)
        obj.add(this.brain.scale, 'y').name('scale y').step(0.01).listen().disable().decimals(2)
        obj.add(this.brain.scale, 'z').name('scale z').step(0.01).listen().disable().decimals(2)
    }

    createMaterials() {
        this.phongMat = new THREE.MeshPhongMaterial({ vertexColors: true })
        this.shaderMat = new THREE.ShaderMaterial({
            vertexShader: `
				varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
				}
			`,
            fragmentShader: `
				varying vec2 vUv;
				void main() {
					vec2 uv = vUv;
					float yval = fract(uv.y * 5.0);
					gl_FragColor = vec4(uv.y, yval, 0.5, 1.0);
			}`,
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

    // setObject = () => {
    //     let bbox = new THREE.Box3()
    //     this.brain.scale.set(1, 1, 1)
    //     bbox.setFromObject(this.brain)
    //     let size = bbox.getSize(new THREE.Vector3())
    //     let boxAspect = size.x / size.y
    //     let winAspect = this.sizes.width / this.sizes.height

    //     let fov = this.world.camera.fov * (Math.PI / 180)
    //     let z = this.sizes.height / Math.tan(fov / 2) / 2
    //     let camZ = this.world.camera.position.z - size.z * 0.5
    //     let scale = camZ / z

    //     let scaleX = 1
    //     let scaleY = 1
    //     let scaleZ = 1

    //     if (boxAspect < winAspect) {
    //         scaleX = this.sizes.width * scale
    //         scaleY = scaleX / boxAspect
    //     } else {
    //         scaleY = this.sizes.height * scale
    //         scaleX = scaleY / boxAspect
    //     }
    //     scaleZ = scaleX

    //     this.box.scale.set(scaleX, scaleY, scaleZ)
    //     this.box.position.set(0, 0, 0)
    // }

    resetAndGetCurrent = () => {
        this.brain.scale.set(1, 1, 1)
        this.brain.position.set(0, 0, 0)
        this.box.scale.set(1, 1, 1)
        this.box.position.set(0, 0, 0)
        this.world.camera.position.z = this.baseCamZ
        this.world.camera.zoom = 1
        this.world.camera.updateProjectionMatrix()

        let obj = this.brain.visible ? this.brain : this.box
        this.bbox.setFromObject(obj)

        return obj
    }

    setCameraToWindow = () => {
        let findDist = (sy: number, sz: number, fov: number) => {
            return sy / 2 / Math.tan((fov * (Math.PI / 180)) / 2) + sz / 2
        }

        let obj = this.resetAndGetCurrent()

        let boxSize = this.bbox.getSize(new THREE.Vector3())

        let camera = this.world.camera
        camera.zoom = camera.aspect <= 1 ? camera.aspect : 1
        camera.position.z = findDist(boxSize.y, boxSize.z, camera.fov)
        camera.updateProjectionMatrix()
    }

    setObjectToWindow = () => {
        let findDist = (sy: number, sz: number, fov: number) => {
            return sy / 2 / Math.tan(fov / 2) + sz / 2
        }
        let obj = this.resetAndGetCurrent()
        this.bbox.setFromObject(obj)
        let boxSize = this.bbox.getSize(new THREE.Vector3())

        let camera = this.world.camera
        let camZ = camera.position.z
        let fov = camera.fov * (Math.PI / 180)
        let needZ = findDist(boxSize.y, boxSize.z, fov)
        let scale = camZ / needZ

        obj.scale.set(scale, scale, scale)
        obj.geometry.computeBoundingBox()
        this.bbox.setFromObject(obj)
        camera.zoom = camera.aspect <= 1 ? camera.aspect : 1
        camera.updateProjectionMatrix()
    }

    setObjectToDom = () => {
        let findDist = (sy: number, sz: number, fov: number) => {
            return sy / 2 / Math.tan(fov / 2) + sz / 2
        }
        let obj = this.resetAndGetCurrent()
        this.bbox.setFromObject(obj)
        let boxSize = this.bbox.getSize(new THREE.Vector3())

        const camera = this.world.camera
        const rect = this.domTarget.getBoundingClientRect()

        let camZ = camera.position.z
        let fov = camera.fov * (Math.PI / 180)
        let needZ = findDist(boxSize.y, boxSize.z, fov)
        let scale = camZ / needZ

        const visibleHeight = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z
        // const scaleFactor = (rect.height / window.innerHeight) * (visibleHeight / scale)
        // obj.scale.setScalar(scale)
        obj.scale.set(scale, scale, scale)

        let amt = rect.height / this.sizes.height
        let zoom = camera.aspect <= 1 ? camera.aspect : 1
        zoom *= amt
        camera.zoom = 1 * amt
        camera.updateProjectionMatrix()
        this.boxHelper.update()

        // obj.scale.set(scale, scale, scale)
        // obj.geometry.computeBoundingBox()
        // this.bbox.setFromObject(obj)
    }

    setCameraOther = () => {
        let obj = this.resetAndGetCurrent()
        let boxSize = this.bbox.getSize(new THREE.Vector3())

        const fov = this.world.camera.fov * (Math.PI / 180)

        let toa = Math.tan(fov / 2)
        let zh = boxSize.y / (2 * toa) + boxSize.z / 2
        zh = (boxSize.y / toa + boxSize.z) / 2

        // const fovh = 2 * Math.atan(Math.tan(fov / 2) * this.world.camera.aspect)
        // let dx = Math.abs(boxSize.x / 2 / Math.tan(fovh / 2)) + boxSize.z / 2
        // let dy = Math.abs(boxSize.y / 2 / Math.tan(fov / 2)) + boxSize.z / 2

        // let cameraZ = Math.max(dx, dy)
        this.world.camera.position.set(0, 0, zh)
        this.world.camera.lookAt(0, 0, 0)
        this.world.camera.updateProjectionMatrix()
    }

    tick = () => {
        this.world.render()
        this.controls.update()

        window.requestAnimationFrame(this.tick)
    }

    start = () => {
        window.requestAnimationFrame(this.tick)
    }
}
