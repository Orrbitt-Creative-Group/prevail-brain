import * as THREE from 'three';
export declare class BrainModel extends THREE.Mesh<THREE.BufferGeometry, THREE.MeshPhongMaterial> {
    _color1: string;
    _color2: string;
    constructor(geometry: THREE.BufferGeometry);
    setVertexColors(): void;
    destroy: () => void;
}
