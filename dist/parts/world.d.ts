import * as THREE from 'three';
import { EventEmitter } from 'tseep';
import Sizes from './sizes';
export type WorldParams = {
    sizes?: Sizes;
    container?: HTMLElement;
    camera?: {
        fov?: number;
        near?: number;
        far?: number;
    };
};
export default class World extends EventEmitter {
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    camera: THREE.PerspectiveCamera;
    sizes: Sizes;
    container: HTMLElement;
    constructor({ sizes, camera: { fov, near, far }, container, }?: WorldParams);
    onResize: () => void;
    render: () => void;
    destroy(): void;
}
