export const lerp = (x: number, y: number, a: number) => {
    return x * (1 - a) + y * a
}

export const map = (
    value: number,
    start1: number,
    stop1: number,
    start2: number,
    stop2: number
) => {
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1))
}

export const clamp = (x: number, min: number, max: number) => {
    return Math.min(Math.max(x, min), max)
}
