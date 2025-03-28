import * as THREE from 'three'
import { DefaultEventMap, EventEmitter, type Listener } from 'tseep'
import Sizes from './sizes'

export type WorldParams = {
    sizes?: Sizes
    container?: HTMLElement
    camera?: {
        fov?: number
        near?: number
        far?: number
    }
}

export default class World extends EventEmitter {
    scene: THREE.Scene
    renderer: THREE.WebGLRenderer
    camera: THREE.PerspectiveCamera
    sizes: Sizes
    container: HTMLElement

    constructor({
        sizes,
        camera: { fov = 50, near = 0.1, far = 6 } = {},
        container,
    }: WorldParams = {}) {
        super()
        THREE.ColorManagement.enabled = true

        this.sizes = sizes || new Sizes()
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        this.renderer.shadowMap.enabled = true
        this.renderer.outputColorSpace = THREE.SRGBColorSpace

        if (!container) {
            this.container = document.createElement('div')
            this.container.classList.add('webgl-container')
            this.container.setAttribute(
                'style',
                'position: fixed; width: 100%; height: 100%; top: 0; left: 0;'
            )
            document.body.appendChild(this.container)
        } else {
            this.container = container
        }
        this.container.appendChild(this.renderer.domElement)

        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(fov, 1, near, far)

        this.onResize()
        this.sizes.on('resize', this.onResize)
    }

    onResize = () => {
        let { width, height } = this.container.getBoundingClientRect()
        this.camera.aspect = width / height
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(width, height)
        this.renderer.setPixelRatio(this.sizes.pixelRatio)
        this.emit('resize')
    }

    render = () => {
        this.renderer.render(this.scene, this.camera)
    }

    destroy() {
        this.scene.clear()
        this.renderer.domElement.remove()
        this.renderer.dispose()
        this.removeAllListeners()
    }
}
