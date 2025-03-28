import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { BrainSceneLights } from './parts/lights';
import { BrainModel } from './parts/model';
import Mouse from './parts/mouse';
import World from './parts/world';
type BrainParams = {
    domTarget: HTMLElement;
    clearColor?: string;
    camZ?: number;
    moveAmount?: number;
    moveSpeed?: number;
    fov?: number;
    webglContainer?: HTMLElement;
};
export declare class BrainWorld extends World {
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
    constructor({ domTarget, clearColor, camZ, moveAmount, moveSpeed, fov, webglContainer, }: BrainParams);
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
}
export {};
