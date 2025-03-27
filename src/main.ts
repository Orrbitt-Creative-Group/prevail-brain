import GUI from 'lil-gui'
import { BrainWrapper } from './brainwrap'
import './style.scss'
import { makeBrainGui } from './brain-scene-3-gui'

const initWebglBrain = ({ brainContainer }: { brainContainer: HTMLElement }) => {
    const baseUrl = import.meta.env.DEV ? '' : import.meta.env.BASE_URL
    let scene = new BrainWrapper({ domTarget: brainContainer })
    scene.loadModel(`${baseUrl}/brain-centered-withnormals.glb`)

    let gui = new GUI()
    // makeBrainGui(brain, gui)
}

const container = document.querySelector<HTMLElement>('.webgl-container')
const brainContainer = document.querySelector<HTMLElement>('.webgl-brain')
if (container && brainContainer) initWebglBrain({ brainContainer })
