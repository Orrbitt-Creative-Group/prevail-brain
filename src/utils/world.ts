import * as THREE from 'three'
import Sizes from './sizes'
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import { EventEmitter } from 'tseep'
import { createElement } from './dom'

type WorldOptions = {
    controls?: boolean
    stats?: boolean
    container?: HTMLElement
    camera?: {
        fov?: number
        near?: number
        far?: number
    }
}

export default class World extends EventEmitter<{ resize: () => void }> {
    scene: THREE.Scene
    renderer: THREE.WebGLRenderer
    camera: THREE.PerspectiveCamera
    sizes: Sizes
    controls?: OrbitControls
    stats?: Stats
    container: HTMLElement

    constructor(
        sizes: Sizes,
        {
            controls = false,
            stats = false,
            camera: { fov = 75, near = 0.1, far = 300 } = {},
            container,
        }: WorldOptions = {}
    ) {
        super()
        this.sizes = sizes
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        // this.renderer.setClearColor('#000')
        this.renderer.outputColorSpace = THREE.SRGBColorSpace

        if (!container) {
            this.container = createElement('div', {
                class: 'webgl-container',
                style: 'position: fixed; width: 100%; height: 100%; top: 0; left: 0;',
            })
            document.body.appendChild(this.container)
        } else {
            this.container = container
        }
        this.container.appendChild(this.renderer.domElement)

        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(fov, 1, near, far)
        if (controls) {
            this.controls = new OrbitControls(this.camera, this.renderer.domElement)
            this.controls.enableDamping = true
        }

        if (stats) {
            this.stats = new Stats()
            document.body.appendChild(this.stats.dom)
        }

        this.onResize()
        this.sizes.on('resize', this.onResize)
    }

    onResize = () => {
        let width = window.innerWidth
        let height = window.innerHeight
        this.camera.aspect = width / height
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(width, height)
        this.renderer.setPixelRatio(this.sizes.pixelRatio)
        this.emit('resize')
    }

    render = () => {
        this.renderer.render(this.scene, this.camera)
        if (this.controls && this.controls.enabled) {
            this.controls.update()
        }
        if (this.stats) this.stats.update()
    }
}
