import { resolve, relative } from 'path'
import { defineConfig } from 'vite'
import vituum from 'vituum'
import liquid from '@vituum/vite-plugin-liquid'
import postcss from '@vituum/vite-plugin-postcss'

const htmlPlugin = () => {
    return {
        name: 'html-transform',
        transformIndexHtml: {
            order: 'post',
            async transform(html, { path }) {
                return html.replaceAll(
                    '"/assets/',
                    `"${relative(path, '/src/pages/').slice(0, -2)}assets/`
                )
            }
        }
    }
}

export default defineConfig({
    plugins: [vituum(), postcss(), liquid({
        root: './src'
    }), htmlPlugin()],
    build: {
        manifest: false,
        modulePreload: false,
        outDir: resolve(process.cwd(), '../docs/public/examples')
    }
})
