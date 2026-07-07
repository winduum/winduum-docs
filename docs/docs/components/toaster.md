---
description: "Bake your Toast and let it fly! You should insert in into your <body>"
---

# Toaster
Bake your [Toast](/docs/components/toast) and let it fly! You should insert in into your `<body>`

The toaster uses the [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
(`popover="manual"`) so toasts always appear in the [top-layer](https://developer.mozilla.org/en-US/docs/Glossary/Top_layer) —
even above open dialogs. Use `toasterObserver` to show/hide the toaster popover automatically as toasts are added and removed.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/toaster/default.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/toaster" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/toaster" />
* <LinkGh name="winduum-elements" url="https://github.com/winduum/winduum-elements/tree/main/components/toaster" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/tree/main/components/toaster" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/toaster" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/toaster" />

## Styles

### Variants
* <LinkGh name="default" url="https://github.com/winduum/winduum/blob/next/src/components/toaster/default.css" />

### Props
* <LinkGh name="default" path="components/toaster/props" />

## Scripts
The Toaster script shows or hides the toaster popover as toasts are added or removed.

::: info
For `winduum-elements` and `winduum-stimulus`, toasts are expected to be appended into the Toaster from the backend, for example via ajax. You can also append the HTML manually, for example with `insertAdjacentHTML`.
:::

## Examples

### Default

The toaster lives at the end of your `<body>` — toasts are inserted into it and the popover shows/hides automatically via `toasterObserver`.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/toaster/default.html"></iframe>

::: code-group
```html [winduum-elements]
<button class="x-button muted" command="--close" commandfor="toasterDefault">Close all</button>

<x-toaster class="x-toaster items-end" popover="manual" id="toasterDefault">
    <x-toast class="x-toast" role="status" aria-live="assertive" aria-atomic="true">
        <div class="x-toast-content">
            <div class="flex-col">
                <div class="x-title">Hello toast</div>
                <div class="x-text">Amazing toast</div>
            </div>
            <button class="x-button muted ml-auto" command="--close">Close</button>
        </div>
    </x-toast>
</x-toaster>
```
```html [winduum-stimulus]
<button class="x-button muted" data-action="click->x-toaster#close">Close all</button>

<ol class="x-toaster items-end" popover="manual" data-controller="x-toaster">
    <li class="x-toast" role="status" aria-live="assertive" aria-atomic="true" data-controller="x-toast" data-action="x-toast:connect->x-toast#show">
        <div class="x-toast-content">
            <div class="flex-col">
                <div class="x-title">Hello toast</div>
                <div class="x-text">Amazing toast</div>
            </div>
            <button class="x-button muted ml-auto" data-action="click->x-toast#close">Close</button>
        </div>
    </li>
</ol>
```
```vue [winduum-vue]
<script setup lang="ts">
    import { ref } from 'vue'
    import { Button } from '@/components/button'
    import { Title } from '@/components/title'
    import { Text } from '@/components/text'
    import { Toast, ToastContent } from '@/components/toast'
    import { Toaster } from '@/components/toaster'

    const toasts = ref<number[]>([Date.now()])

    const closeToast = (toast: number) => {
        toasts.value = toasts.value.filter(item => item !== toast)
    }

    const closeToaster = () => {
        toasts.value = []
    }
</script>

<template>
    <Button class="muted" @click="closeToaster">Close all</Button>

    <Toaster class="items-end">
        <Toast v-for="toast in toasts" :key="toast" @close="closeToast(toast)">
            <ToastContent>
                <div class="flex-col">
                    <Title>Hello toast</Title>
                    <Text>Amazing toast</Text>
                </div>
                <Button class="muted ml-auto" data-action="closeToast">Close</Button>
            </ToastContent>
        </Toast>
    </Toaster>
</template>
```
```jsx [winduum-react]
import { useState } from "react"
import { Button } from "@/components/button"
import { Title } from "@/components/title"
import { Text } from "@/components/text"
import { Toast, ToastContent } from "@/components/toast"
import { Toaster } from "@/components/toaster"

export function Example() {
    const [toasts, setToasts] = useState<number[]>([Date.now()])

    const closeToast = (toast: number) => {
        setToasts(current => current.filter(item => item !== toast))
    }

    const closeToaster = () => {
        setToasts([])
    }

    return (
        <>
            <Button className="muted" onClick={closeToaster}>Close all</Button>

            <Toaster className="items-end">
                {toasts.map((toast) => (
                    <Toast key={toast} onClose={() => closeToast(toast)}>
                        <ToastContent>
                            <div className="flex-col">
                                <Title>Hello toast</Title>
                                <Text>Amazing toast</Text>
                            </div>
                            <Button className="muted ml-auto" data-action="closeToast">Close</Button>
                        </ToastContent>
                    </Toast>
                ))}
            </Toaster>
        </>
    )
}
```
:::

## JavaScript API

### `closeToaster`

* **Type:** `(element:  HTMLElement, options?: CloseToastOptions) => void`
* **Kind:** `sync`

All toasts are closed at once.

#### Example

```js
import { closeToaster } from 'winduum/src/components/toaster'

document.querySelector('#closeToaster').addEventListener('click', () => {
    closeToaster(document.querySelector('.x-toaster'))
})
```

### `toasterObserver`

* **Type:** `() => MutationObserver`
* **Kind:** `sync`

Returns a `MutationObserver` that shows the toaster popover when the first toast is inserted
and hides it when the last toast is removed. Observe the toaster element with `{ childList: true }`.

#### Example

```js
import { toasterObserver } from 'winduum/src/components/toaster'

const observer = toasterObserver()

observer.observe(document.querySelector('.x-toaster'), {
    childList: true,
})
```
