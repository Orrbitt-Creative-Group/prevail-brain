import './style.css'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import Mouse from './utils/mouse'
import World from './utils/world'
import Sizes from './utils/sizes'
import { BrainScene } from './brain-scene'
import { Loader } from './utils/loader'

THREE.ColorManagement.enabled = true

const sizes = new Sizes()
const world = new World(sizes, { controls: false, stats: true })
const mouse = new Mouse(sizes)

let brainScene: BrainScene

world.renderer.shadowMap.enabled = true

const loader = new Loader({ styles: { barColor: '#00c2c1', bgColor: '#fafafa' } })
console.log(loader)
const gltfLoader = new GLTFLoader(loader.manager)

const baseUrl = import.meta.env.DEV ? '' : import.meta.env.BASE_URL
gltfLoader.load(`${baseUrl}/brain3-rotate-with-normals.glb`, (gltf) => {
    const children = gltf.scene.children
    if (children[0] instanceof THREE.Mesh) {
        let brainmesh = children[0]
        let brain = brainmesh.geometry as THREE.BufferGeometry

        brainScene = new BrainScene({ brain, world, mouse })
        loader.on('ready', brainScene.start)
    }
})
