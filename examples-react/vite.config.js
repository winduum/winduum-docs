import { resolve, relative } from 'path'
import { defineConfig } from 'vite'
import vituum from 'vituum'
import tailwindcss from '@tailwindcss/vite'
import framework from '@vitejs/plugin-react'
import { examplesIndex } from '../examples-index-plugin.js'

const htmlPlugin = () => ({
    name: 'html-transform',
    transformIndexHtml: {
        order: 'post',
        handler(html, { path }) {
            return html.replaceAll(
                '"/assets/',
                `"${relative(path, '/src/pages/').slice(0, -2)}assets/`
            )
        }
    }
})

export default defineConfig({
    resolve: {
        alias: [
            {
                find: '@/components/field',
                replacement: resolve(process.cwd(), 'src/adapters/field/index.ts')
            },
            {
                find: '@',
                replacement: resolve(process.cwd(), 'node_modules/winduum-react/src')
            }
        ]
    },
    plugins: [vituum(), framework(), tailwindcss(), examplesIndex({
        pagesDirectory: resolve(process.cwd(), 'src/pages'),
        extension: '.html'
    }), htmlPlugin()],
    build: {
        target: 'esnext',
        manifest: false,
        modulePreload: false,
        emptyOutDir: true,
        outDir: resolve(process.cwd(), '../docs/public/examples-react')
    }
})
