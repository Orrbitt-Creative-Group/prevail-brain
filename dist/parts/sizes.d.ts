import { EventEmitter } from 'tseep';
export default class Sizes extends EventEmitter<{
    resize: () => void;
}> {
    width: number;
    height: number;
    pixelRatio: number;
    constructor();
    onResize: () => void;
    destroy: () => void;
}
