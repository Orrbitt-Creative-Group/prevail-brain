import GUI from 'lil-gui'
import { BrainWorld } from './brain-world'
import './style.scss'
import { makeBrainGui } from './brain-gui'
import { BrainModel } from './parts/model'

const initWebglBrain = ({ brainContainer }: { brainContainer: HTMLElement }) => {
    const baseUrl = import.meta.env.DEV ? '' : import.meta.env.BASE_URL
    let world = new BrainWorld({ domTarget: brainContainer })
    world.loadModel(`${baseUrl}/brain-centered-withnormals.glb`)
    world.on('load', (model: BrainModel) => {
        let gui = new GUI()
        makeBrainGui(world, model, gui)
    })
}

const container = document.querySelector<HTMLElement>('.webgl-container')
const brainContainer = document.querySelector<HTMLElement>('.webgl-brain')
if (container && brainContainer) initWebglBrain({ brainContainer })
