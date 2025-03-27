import { EventEmitter } from 'tseep'

export default class Sizes extends EventEmitter<{ resize: () => void }> {
    width = window.innerWidth
    height = window.innerHeight
    pixelRatio = Math.min(window.devicePixelRatio, 2)

    constructor() {
        super()
        this.onResize()

        window.addEventListener('resize', this.onResize)
    }

    onResize = () => {
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        this.emit('resize')
    }

    destroy = () => {
        window.removeEventListener('resize', this.onResize)
        this.removeAllListeners()
    }
}
