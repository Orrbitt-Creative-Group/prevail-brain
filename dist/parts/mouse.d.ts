import Sizes from './sizes';
import { EventEmitter } from 'tseep';
import * as THREE from 'three';
export default class Mouse extends EventEmitter<{
    move: () => void;
}> {
    pos: THREE.Vector2;
    screenPos: THREE.Vector2;
    sizes: Sizes;
    constructor(sizes: Sizes);
    onMouseMove: (e: MouseEvent) => void;
    destroy: () => void;
}
