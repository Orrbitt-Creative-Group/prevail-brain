import { defineConfig } from 'vite'

export default defineConfig({
    resolve: {
        alias: {
            'three/examples/jsm': 'three/examples/jsm',
            'three/addons': 'three/examples/jsm',
            'three/tsl': 'three/webgpu',
            // three: 'three/webgpu',
        },
    },
    build: {
        lib: {
            entry: ['src/brain-world.ts'],
            name: 'brain',
        },
        minify: 'esbuild',
    },
})
