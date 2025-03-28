import * as THREE from 'three';
import { BrainWorld } from '../brain-world';
declare const dirLightInfoDefaults: {
    x: number;
    y: number;
    z: number;
    intensity: number;
}[];
export type LightInfo = (typeof dirLightInfoDefaults)[number];
export declare class BrainSceneLights {
    world: BrainWorld;
    lightsArray: {
        instance: THREE.DirectionalLight;
        helper?: THREE.DirectionalLightHelper;
    }[];
    constructor(world: BrainWorld, info?: {
        x: number;
        y: number;
        z: number;
        intensity: number;
    }[]);
    destroyLights: () => void;
    setLights: (info?: {
        x: number;
        y: number;
        z: number;
        intensity: number;
    }[]) => void;
}
export {};
