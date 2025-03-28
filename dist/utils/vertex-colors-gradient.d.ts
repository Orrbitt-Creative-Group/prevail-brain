import * as THREE from 'three';
type ColorGradientOpts = {
    color1: string;
    color2: string;
    min?: number;
    max?: number;
    axis?: 'x' | 'y' | 'z';
};
export declare function vertexColorsGradient(geometry: THREE.BufferGeometry, { color1, color2, min, max, axis }: ColorGradientOpts): void;
export {};
