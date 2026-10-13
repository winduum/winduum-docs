import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

if (!('command' in HTMLButtonElement.prototype)) {
    const { apply } = await import('invokers-polyfill/fn')
    apply()
}

if (!Object.prototype.hasOwnProperty.call(HTMLButtonElement.prototype, 'interestForElement')) {
    await import('interestfor')
}

const examples = import.meta.glob<{ Example: React.ComponentType }>('./pages/**/*.tsx')
const pathname = window.location.pathname
    .replace(/^\/examples-react/, '')
    .replace(/\.html$/, '.tsx')
const loadExample = examples[`./pages${pathname}`]

if (!loadExample) throw new Error(`React example not found: ${pathname}`)

const { Example } = await loadExample()

createRoot(document.querySelector('#app')!).render(
    <StrictMode>
        <Example />
    </StrictMode>
)
