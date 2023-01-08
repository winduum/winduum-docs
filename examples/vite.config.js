import { resolve, join, normalize, relative } from 'path'
import { defineConfig } from 'vituum'
import liquid from '@vituum/liquid'

const htmlPlugin = () => {
    return {
        plugin: () => {
            return {
                name: 'html-transform',
                transformIndexHtml: {
                    enforce: 'post',
                    async transform(html, { path }) {
                        return html.replaceAll(
                            'rel="stylesheet" href="/assets/',
                            `rel="stylesheet" href="${relative(path, '/views/').slice(0, -2)}assets/`
                        )
                    }
                }
            }
        }
    }
}

export default defineConfig({
    output: resolve(process.cwd(), '../docs/public/examples'),
    integrations: [liquid(), htmlPlugin()],
    templates: {
        format: 'liquid'
    },
    vite: {
        build: {
            manifest: false
        }
    }
})
