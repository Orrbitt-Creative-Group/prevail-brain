import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { BrainSceneLights } from './lights'
import { BrainModel } from './model'
import Mouse from './utils/mouse'
import Sizes from './utils/sizes'
import World from './utils/world'
import { BrainDomMotion } from './brain-scene-motion'

type BrainParams = {
    domTarget: HTMLElement
}

export class BrainWrapper {
    world: World
    sizes: Sizes
    mouse: Mouse
    lights: BrainSceneLights
    gltfLoader: GLTFLoader
    loadingManager = new THREE.LoadingManager()
    domTarget: HTMLElement
    domRect: DOMRect
    model?: BrainModel
    domMotion?: BrainDomMotion

    constructor({ domTarget }: BrainParams) {
        this.sizes = new Sizes()
        this.mouse = new Mouse(this.sizes)
        this.world = new World(this.sizes)
        this.world.renderer.setClearColor('#ffffff')
        this.world.camera.updateProjectionMatrix()

        this.domTarget = domTarget
        this.domRect = this.domTarget.getBoundingClientRect()

        this.lights = new BrainSceneLights(this.world)
        this.gltfLoader = new GLTFLoader(this.loadingManager)
    }

    loadModel = (path: string) => {
        this.gltfLoader.load(path, (gltf) => {
            const children = gltf.scene.children
            if (children[0] instanceof THREE.Mesh) {
                let brainmesh = children[0]
                let brain = brainmesh.geometry as THREE.BufferGeometry
                let model = this.setModel(brain)
                this.domMotion = new BrainDomMotion({
                    world: this.world,
                    model,
                    mouse: this.mouse,
                    domTarget: this.domTarget,
                })
                this.domMotion.start()
            }
        })
    }

    setModel = (geo: THREE.BufferGeometry) => {
        if (this.model) {
            this.world.scene.remove(this.model)
            this.model.destroy()
            this.model = undefined
        }

        this.model = new BrainModel(geo)
        this.world.scene.add(this.model)
        return this.model
    }

    destroy = () => {
        if (this.model) {
            this.world.scene.remove(this.model)
            this.model.destroy()
            this.model = undefined
        }
        this.world.destroy()
        this.sizes.destroy()
        this.mouse.destroy()
    }
}
