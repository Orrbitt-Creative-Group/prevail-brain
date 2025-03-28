import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: ['src/brain-world.ts'],
            name: 'brain',
        },
        minify: 'esbuild',
    },
})
