import * as THREE from 'three';
import World from './world';
declare const dirLightInfoDefaults: {
    x: number;
    y: number;
    z: number;
    intensity: number;
}[];
export type LightInfo = (typeof dirLightInfoDefaults)[number];
export declare class BrainSceneLights {
    world: World;
    lightsArray: {
        instance: THREE.DirectionalLight;
        helper?: THREE.DirectionalLightHelper;
    }[];
    constructor(world: World, info?: {
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
