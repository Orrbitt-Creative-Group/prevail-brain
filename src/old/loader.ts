import * as THREE from 'three'
import { createElement } from './dom'
import { EventEmitter } from 'tseep'
import { map } from '../utils/math-utils'

type LoaderStylesOpts = {
    barColor?: string
    bgColor?: string
    durationOut?: number
    durationIn?: number
}

const loaderStyles = ({
    barColor = '#f1c40f',
    bgColor = '#2c3e50',
    durationOut = 500,
    durationIn = 300,
}: LoaderStylesOpts = {}) => `
.loader__bar {
   position: fixed;
   z-index: 100;
   width: 100%;
   height: 10px;
   background: ${barColor};
   left: 0;
   bottom: 0;
   transition: transform ${durationIn}ms ease-out; 
   transform-origin: left;
   transform: scaleX(0);
}

.loader__cover {
   position: fixed;
   z-index: 99;
   width: 100%;
   height: 100%;
   background: ${bgColor};
   left: 0;
   top: 0;
   transition: opacity ${durationOut}ms ease-in-out;
}

.loader--finished .loader__bar,
.loader--finished .loader__cover {
   pointer-events: none;
}
.loader--finished .loader__bar {
   transition: transform ${durationOut}ms linear;
}
`

type LoaderOpts = {
    styles?: LoaderStylesOpts
    scaleStart?: number
}

export class Loader extends EventEmitter<{ ready: () => void }> {
    manager: THREE.LoadingManager
    cover: HTMLElement
    bar: HTMLElement
    container: HTMLElement
    style: HTMLElement
    startTime: number
    lastTransitionTime: number = -1
    durationOut = 500
    durationIn = 300
    scaleStart: number

    constructor({ styles, scaleStart = 50 }: LoaderOpts = {}) {
        super()
        this.manager = new THREE.LoadingManager(this.onFinished, this.onProgress)

        this.startTime = performance.now()
        if (styles?.durationIn) this.durationIn = styles.durationIn
        if (styles?.durationOut) this.durationOut = styles.durationOut
        this.scaleStart = scaleStart

        this.bar = createElement('div', { class: 'loader__bar' })
        this.cover = createElement('div', { class: 'loader__cover' })
        this.container = createElement('div', { class: 'loader' }, [this.bar, this.cover])
        this.style = createElement('style', {}, loaderStyles({ ...styles }))

        document.body.append(this.container, this.style)

        setTimeout(() => {
            this.bar.style.transform = `scaleX(${scaleStart}%)`
        })
    }

    onFinished = () => {
        let leftTime: number
        if (this.lastTransitionTime > 0) {
            leftTime = this.durationIn - (performance.now() - this.lastTransitionTime)
        } else {
            leftTime = this.durationIn - (performance.now() - this.startTime)
        }

        window.setTimeout(
            () => {
                this.container.classList.add('loader--finished')
                this.cover.style.opacity = '0'
                this.bar.style.transformOrigin = 'right'
                this.bar.style.transform = 'scaleX(0)'
                this.emit('ready')
            },
            leftTime > 0 ? leftTime : 0
        )
    }

    onProgress = (_: any, itemsLoaded: number, itemsTotal: number) => {
        this.lastTransitionTime = performance.now()
        const progress = itemsLoaded / itemsTotal
        const mappedProgress = map(progress, 0, 1, this.scaleStart, 100)

        this.bar.style.transform = `scaleX(${mappedProgress}%)`
    }
}
