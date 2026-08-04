import type { Component } from 'vue'
import { createApp } from 'vue'

if (!('command' in HTMLButtonElement.prototype)) {
    const { apply } = await import('invokers-polyfill/fn')
    apply()
}

if (!Object.prototype.hasOwnProperty.call(HTMLButtonElement.prototype, 'interestForElement')) {
    await import('interestfor')
}

const examples = import.meta.glob<{ default: Component }>('./pages/**/*.vue')
const pathname = window.location.pathname
    .replace(/^\/examples-vue/, '')
    .replace(/\.html$/, '.vue')
const loadExample = examples[`./pages${pathname}`]

if (!loadExample) throw new Error(`Vue example not found: ${pathname}`)

const { default: Example } = await loadExample()

createApp(Example).mount('#app')
