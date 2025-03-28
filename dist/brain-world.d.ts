import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { EventEmitter } from 'tseep';
import { BrainSceneLights } from './parts/lights';
import { BrainModel } from './parts/model';
import Mouse from './parts/mouse';
import Sizes from './parts/sizes';
type BrainParams = {
    domTarget: HTMLElement;
    sizes?: Sizes;
    clearColor?: string;
    camZ?: number;
    moveAmount?: number;
    moveSpeed?: number;
    fov?: number;
    webglContainer?: HTMLElement;
};
export declare class BrainWorld extends EventEmitter<{
    resize: () => void;
    load: (model: BrainModel) => void;
    updateView: () => void;
    updateScale: () => void;
}> {
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    camera: THREE.PerspectiveCamera;
    sizes: Sizes;
    container: HTMLElement;
    mouse: Mouse;
    lights: BrainSceneLights;
    gltfLoader: GLTFLoader;
    loadingManager: THREE.LoadingManager;
    domTarget: HTMLElement;
    domRect: DOMRect;
    model?: BrainModel;
    boxSize: THREE.Vector3;
    rafId: number | null;
    camPos: {
        z: number;
        y: number;
        x: number;
    };
    moveAmount: number;
    moveSpeed: number;
    constructor({ sizes, fov, domTarget, clearColor, camZ, moveAmount, moveSpeed, webglContainer, }: BrainParams);
    loadModel: (path: string) => void;
    setModel: (geo: THREE.BufferGeometry) => BrainModel;
    onResize: () => void;
    onScroll: () => void;
    setViewport: () => void;
    setScale: () => void;
    tick: () => void;
    start: () => void;
    stop: () => void;
    destroy(): void;
    render: () => void;
}
export {};
