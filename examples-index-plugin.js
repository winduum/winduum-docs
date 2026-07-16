import { readdir } from 'node:fs/promises'
import { extname, relative, resolve, sep } from 'node:path'

const marker = '<!-- examples-index -->'

const escapeHTML = value => value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')

const readPages = async directory => {
    const entries = await readdir(directory, { withFileTypes: true })
    const files = await Promise.all(entries.map(entry => {
        const path = resolve(directory, entry.name)

        return entry.isDirectory() ? readPages(path) : path
    }))

    return files.flat()
}

const filterScript = `
<script>
    const filter = document.querySelector('[data-example-filter]')
    const count = document.querySelector('[data-example-count]')
    const items = [...document.querySelectorAll('[data-example-item]')]

    const updateExamples = () => {
        const query = filter.value.trim().toLowerCase()
        let visible = 0

        for (const item of items) {
            const matches = item.dataset.examplePath.includes(query)

            item.hidden = !matches
            visible += Number(matches)
        }

        count.textContent = visible
    }

    filter.addEventListener('input', updateExamples)
    updateExamples()
</script>`

export const examplesIndex = ({ pagesDirectory, extension }) => ({
    name: 'examples-index',
    transformIndexHtml: {
        order: 'post',
        async handler(html) {
            if (!html.includes(marker)) return html

            const pages = (await readPages(pagesDirectory))
                .filter(file => extname(file) === extension)
                .map(file => relative(pagesDirectory, file).split(sep).join('/').slice(0, -extension.length))
                .filter(page => page !== 'index')
                .sort((first, second) => first.localeCompare(second))

            const links = pages.map(page => {
                const label = page
                    .split('/')
                    .map(part => part.replaceAll('-', ' '))
                    .join(' / ')
                const safePage = escapeHTML(page)
                const searchValue = escapeHTML(`${page} ${label}`.toLowerCase())

                return `<li class="example-item" data-example-item data-example-path="${searchValue}"><a class="example-link" href="${encodeURI(page)}.html"><strong>${escapeHTML(label)}</strong><code>${safePage}.html</code></a></li>`
            }).join('')

            return html
                .replace(marker, links)
                .replace('</body>', `${filterScript}\n</body>`)
        }
    }
})
