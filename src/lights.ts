import * as THREE from 'three'
import World from './utils/world'

const dirLightInfoDefaults = [
    { x: -5, y: 1.2, z: 4, intensity: 4 },
    { x: 0, y: 1.2, z: 4.5, intensity: 5 },
    { x: 3, y: 1.2, z: -5, intensity: 5 },
]

export type LightInfo = (typeof dirLightInfoDefaults)[number]

export class BrainSceneLights {
    world: World
    lights: { instance: THREE.DirectionalLight; helper?: THREE.DirectionalLightHelper }[] = []

    constructor(world: World, info = dirLightInfoDefaults) {
        this.world = world
        this.setLights(info)
    }

    destroyLights = () => {
        this.lights.forEach(({ instance, helper }) => {
            this.world.scene.remove(instance)
            instance.dispose()
            if (helper) {
                this.world.scene.remove(helper)
                helper.dispose()
            }
        })
        this.lights = []
    }

    setLights = (info = dirLightInfoDefaults) => {
        this.destroyLights()
        info.forEach((info) => {
            const instance = new THREE.DirectionalLight(0xffffff, info.intensity)
            instance.position.set(info.x, info.y, info.z)
            this.world.scene.add(instance)
            this.lights.push({ instance })
        })
    }
}
