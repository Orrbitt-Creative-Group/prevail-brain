import * as THREE from 'three'
import { vertexColorsGradient } from './utils/vertex-colors-gradient'

const LIGHTBLUE = '#00c2c1'
const DARKBLUE = '#1414c2'

export class BrainModel extends THREE.Mesh<THREE.BufferGeometry, THREE.MeshPhongMaterial> {
    _color1 = LIGHTBLUE
    _color2 = DARKBLUE

    constructor(geometry: THREE.BufferGeometry) {
        let mat = new THREE.MeshPhongMaterial({ vertexColors: true })
        super(geometry, mat)
        this.castShadow = true
        this.receiveShadow = true
        this.setVertexColors()
    }

    setVertexColors() {
        vertexColorsGradient(this.geometry, {
            color1: this._color1,
            color2: this._color2,
            min: -0.4,
            max: 0.4,
            axis: 'z',
        })
    }

    destroy = () => {
        this.geometry.dispose()
        this.material.dispose()
    }
}
