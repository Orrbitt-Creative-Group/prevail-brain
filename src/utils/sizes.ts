import { EventEmitter } from 'tseep'

export default class Sizes extends EventEmitter<{ resize: () => void }> {
    width: number
    height: number
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
    pixelRatio = Math.min(window.devicePixelRatio, 2)
    container?: HTMLElement

    constructor({ container }: { container?: HTMLElement } = {}) {
        super()
        this.container = container
        this.onResize()
        this.width = this.container ? this.container.clientWidth : this.windowWidth
        this.height = this.container ? this.container.clientHeight : this.windowHeight

        window.addEventListener('resize', this.onResize)
    }

    onResize = () => {
        // this.width = this.container.innerWidth
        this.windowWidth = window.innerWidth
        this.windowHeight = window.innerHeight
        this.width = this.container ? this.container.clientWidth : this.windowWidth
        this.height = this.container ? this.container.clientHeight : this.windowHeight
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        this.emit('resize')
    }
}
