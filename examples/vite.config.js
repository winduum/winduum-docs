import { resolve, relative } from 'path'
import { defineConfig } from 'vite'
import vituum from 'vituum'
import liquid from '@vituum/vite-plugin-liquid'
import tailwindcss from '@tailwindcss/vite'
import { examplesIndex } from '../examples-index-plugin.js'
import { browserslistToTargets } from 'lightningcss'
import browserslist from 'browserslist'
import browserslistToEsbuild from "browserslist-to-esbuild";

const htmlPlugin = () => {
    return {
        name: 'html-transform',
        order: 'post',
        transformIndexHtml(html, { path }) {
            return html.replaceAll(
              '"/assets/',
              `"${relative(path, '/src/pages/').slice(0, -2)}assets/`
            )
        }
    }
}

export default defineConfig({
    plugins: [vituum(), tailwindcss(), liquid({
        root: './src'
    }), examplesIndex({
        pagesDirectory: resolve(process.cwd(), 'src/pages'),
        extension: '.liquid'
    }), htmlPlugin()],
    css: {
      transformer: 'lightningcss',
      lightningcss: {
          targets: browserslistToTargets(browserslist()),
          include: 0,
          drafts: {
              customMedia: true,
          },
      }
    },
    build: {
        target: browserslistToEsbuild(),
        manifest: false,
        modulePreload: false,
        emptyOutDir: true,
        outDir: resolve(process.cwd(), '../docs/public/examples')
    }
})
