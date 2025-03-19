import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import Mouse from './utils/mouse'
import World from './utils/world'
import Sizes from './utils/sizes'
import { BrainScene } from './brain-scene'
import { Loader } from './utils/loader'
import { BrainGui } from './brain-gui'
import GUI from 'lil-gui'
import './style.scss'

const initWebglBrain = ({
    container,
    brainContainer,
}: {
    container: HTMLElement
    brainContainer: HTMLElement
}) => {
    THREE.ColorManagement.enabled = true

    const sizes = new Sizes({ container })
    const world = new World(sizes, { controls: false, stats: true, container })
    const mouse = new Mouse(sizes)

    let brainScene: BrainScene

    world.renderer.shadowMap.enabled = true

    const loader = new Loader({ styles: { barColor: '#00c2c1', bgColor: '#fafafa' } })
    const gltfLoader = new GLTFLoader(loader.manager)

    const baseUrl = import.meta.env.DEV ? '' : import.meta.env.BASE_URL
    gltfLoader.load(`${baseUrl}/brain-withnormals-kindanormalized.glb`, (gltf) => {
        const children = gltf.scene.children
        if (children[0] instanceof THREE.Mesh) {
            let brainmesh = children[0]
            let brain = brainmesh.geometry as THREE.BufferGeometry

            brainScene = new BrainScene({ brain, world, mouse, domTarget: brainContainer })
            let gui = new GUI()
            new BrainGui(brainScene, gui).init()
            loader.on('ready', brainScene.start)
        }
    })
}

const container = document.querySelector<HTMLElement>('.webgl-container')
const brainContainer = document.querySelector<HTMLElement>('.webgl-brain')
if (container && brainContainer) initWebglBrain({ container: brainContainer, brainContainer })
