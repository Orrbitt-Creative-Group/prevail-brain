import Sizes from './sizes'
import { EventEmitter } from 'tseep'
import * as THREE from 'three'

export default class Mouse extends EventEmitter<{ move: () => void }> {
    pos = new THREE.Vector2()
    screenPos = new THREE.Vector2()
    sizes: Sizes

    constructor(sizes: Sizes) {
        super()

        this.sizes = sizes
        window.addEventListener('mousemove', this.onMouseMove)
    }

    onMouseMove = (e: MouseEvent) => {
        this.screenPos.set(e.clientX, e.clientY)
        this.pos.set(
            (e.clientX / this.sizes.width) * 2 - 1,
            -(e.clientY / this.sizes.height) * 2 + 1
        )
        this.emit('move')
    }

    destroy = () => {
        this.removeAllListeners()
        window.removeEventListener('mousemove', this.onMouseMove)
    }
}
