---
description: "Let it bake and fly from your Toaster!"
---

# Toast
Let it bake and fly from your [Toaster](/docs/components/toaster)!

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/toast/default.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/toast" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/toast" />
* <LinkGh name="winduum-elements" url="https://github.com/winduum/winduum-elements/tree/main/components/toast" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/tree/main/components/toast" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/toast" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/toast" />

## Styles

### Variants
* <LinkGh name="default" url="https://github.com/winduum/winduum/blob/next/src/components/toast/default.css" />
* <LinkGh name="content" url="https://github.com/winduum/winduum/blob/next/src/components/toast/content.css" />

### Props
* <LinkGh name="default" path="components/toast/props" />
* <LinkGh name="content" path="components/toast/props" />

## Scripts
The Toast script runs enter/exit animations and handles optional auto-hide.

::: info
For `winduum-elements` and `winduum-stimulus`, toasts are expected to be appended into the Toaster from the backend, for example via ajax. You can also append the HTML manually, for example with `insertAdjacentHTML`.
:::

## Examples

### Default

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/toast/default.html"></iframe>

::: code-group
```html [winduum-elements]
<x-toaster class="x-toaster items-end" popover="manual">
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

    const toasts = ref<number[]>([])

    const showToast = () => {
        toasts.value.push(Date.now())
    }

    const closeToast = (toast: number) => {
        toasts.value = toasts.value.filter(item => item !== toast)
    }
</script>

<template>
    <Button @click="showToast">Show toast</Button>

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
    const [toasts, setToasts] = useState<number[]>([])

    const showToast = () => {
        setToasts(current => [...current, Date.now()])
    }

    const closeToast = (toast: number) => {
        setToasts(current => current.filter(item => item !== toast))
    }

    return (
        <>
            <Button onClick={showToast}>Show toast</Button>

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

### `showToast`

* **Type:** `(element:  HTMLElement, options?: ShowToastOptions) => Promise<void>`
* **Kind:** `async`

Applies an enter animation to existing toast and schedules its auto-hide.

#### Example

```js
import { showToast } from 'winduum/src/components/toast'

document.querySelector('#showToast').addEventListener('click', async () => {
    await showToast(document.querySelector('#toastElement'))
})
```
<br>

#### ShowToastOptions

---

##### openAttribute

* **Type:** `string`
* **Default:** `data-open`

---

##### autoHide

* **Type:** `number | null`
* **Default:** `7500`

Time in ms after which the toast closes automatically — the delay scales with the number of toasts in the toaster. Set to `null` to disable.

---

##### heightProperty

* **Type:** `string`
* **Default:** `--x-toast-block-size`

---

##### close

* **Type:** `CloseToastOptions`
* **Default:** `{}`

Options passed to `closeToast` when the toast auto-hides.

---

<br>

### `closeToast`

* **Type:** `(element:  HTMLElement, options?: CloseToastOptions) => Promise<void>`
* **Kind:** `async`

Applies an exit animation to existing toast and removes it from DOM.

#### Example

```js
import { closeToast } from 'winduum/src/components/toast'

document.querySelector('#closeToast').addEventListener('click', async () => {
    await closeToast(document.querySelector('#toastElement'))
})
```

<br>

#### CloseToastOptions

---

##### closedAttribute

* **Type:** `string`
* **Default:** `data-closed`

---

##### heightProperty

* **Type:** `string`
* **Default:** `--x-toast-block-size`

---

##### remove

* **Type:** `boolean`
* **Default:** `true`

Determines whether the toast is removed from the DOM after the exit animation.
