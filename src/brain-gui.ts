import { BrainDomMotion } from './brain-scene-motion'
import GUI from 'lil-gui'
import * as THREE from 'three'
import { BrainWorld } from './brain-world'
import { BrainModel } from './parts/model'

export const makeBrainGui = (world: BrainWorld, model: BrainModel, gui: GUI) => {
    modelGui(gui, world, model)

    infoFolder(gui, model, world).close()
    lightFolder(gui, world).close()
    matFolder(gui, model).close()
}

const modelGui = (gui: GUI, world: BrainWorld, model: BrainModel) => {
    let debg = {
        showBoxHelper: false,
    }
    let boxHelper = new THREE.BoxHelper(model, 0xff0000)
    boxHelper.visible = false
    world.scene.add(boxHelper)

    world.on('updateScale', () => boxHelper.update())

    let f = gui.addFolder('motion/camera')
    f.add(debg, 'showBoxHelper').onChange((val: boolean) => {
        boxHelper.visible = val
    })
    f.add(world, 'moveSpeed', 0, 0.1, 0.001)
    f.add(world, 'moveAmount', 0, 1, 0.01)
    f.add(world, 'start')
    f.add(world, 'stop')

    f.add(world.camera, 'fov', 1, 180).onChange(() => {
        world.camera.updateProjectionMatrix()
        world.setScale()
    })
    return f
}

const infoFolder = (gui: GUI, model: BrainModel, world: BrainWorld) => {
    let inf = gui.addFolder('Info')
    let pos = world.camera.position
    inf.add(pos, 'x').name('cam x').listen().disable().decimals(2)
    inf.add(pos, 'y').name('cam y').listen().disable().decimals(2)
    inf.add(pos, 'z').name('cam z').listen().disable().decimals(2)
    inf.add(world.camera, 'zoom').listen().disable().decimals(2)
    inf.add(world.camera, 'aspect').listen().disable().decimals(2)

    inf.add(model.scale, 'x').name('brain scale').listen().decimals(2).disable()
    return inf
}

const makeLightsWithHelpers = (world: BrainWorld) => {
    let lights = world.lights.lightsArray
    let colors = ['#9500ff', '#00ff00', '#ff0088', '#ff9d00']

    lights.forEach((lt, i) => {
        if (!lt.helper) {
            lt.helper = new THREE.DirectionalLightHelper(lt.instance, 1, colors[i % 3])
            world.scene.add(lt.helper)
            lt.helper.visible = false
        }
    })

    return lights as { instance: THREE.DirectionalLight; helper: THREE.DirectionalLightHelper }[]
}

const lightFolder = (gui: GUI, br: BrainWorld) => {
    let debg = {
        showLightHelpers: false,
        lightsCastShadow: true,
    }
    let lf = gui.addFolder('Lights')
    let lights = makeLightsWithHelpers(br)

    lf.add(debg, 'lightsCastShadow').onChange((val: boolean) => {
        lights.forEach((light) => {
            light.instance.castShadow = val
        })
    })
    lf.add(debg, 'showLightHelpers').onChange((val: boolean) => {
        lights.forEach((light) => {
            light.helper.visible = val
        })
    })
    lights.forEach((lt, i) => {
        let folder = lf.addFolder(`light ${i + 1}`)
        folder.$title.style.borderLeft = `5px solid ${lt.helper.color?.toString()}`
        folder.onChange(() => lt.helper.update())
        folder.add(lt.instance.position, 'x', -10, 10)
        folder.add(lt.instance.position, 'y', -10, 10)
        folder.add(lt.instance.position, 'z', -10, 10)
        folder.add(lt.instance, 'intensity', 0, 10, 0.1)
    })

    return lf
}

const matFolder = (gui: GUI, model: BrainModel) => {
    let mat = model.material
    let mf = gui.addFolder('Material').close()
    let debg = {
        phongColor: '#ffffff',
        emissive: mat.emissive.getHexString(),
        specular: mat.specular.getHexString(),
        color1: model._color1,
        color2: model._color2,
    }
    mf.add(mat, 'vertexColors').onChange((val: boolean) => {
        if (!val) {
            c1.hide()
            c2.hide()
        } else {
            c1.show()
            c2.show()
            mat.color.set('#ffffff')
            debg.phongColor = '#ffffff'
        }
    })

    let c1 = mf
        .addColor(debg, 'color1')
        .name('vertexColor 1')
        .onChange(() => {
            model._color1 = debg.color1
            model.setVertexColors()
        })
    let c2 = mf
        .addColor(debg, 'color2')
        .name('vertexColor 2')
        .onChange(() => {
            model._color2 = debg.color2
            model.setVertexColors()
        })
    mf.onChange(() => (mat.needsUpdate = true))
    mf.addColor(debg, 'phongColor')
        .onChange((val: string) => mat.color.set(val))
        .listen()
    mf.addColor(debg, 'emissive').onChange((val: string) => mat.emissive.set(val))
    mf.addColor(debg, 'specular').onChange((val: string) => mat.specular.set(val))
    mf.add(mat, 'shininess', 0, 100, 1).onChange(() => (mat.needsUpdate = true))
    return mf
}
