# Toast
Let it bake and fly from your [Toaster](/docs/components/toaster)!

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/toast" />

## Usage

::: code-group
```css
@import "winduum/src/components/toast/index.css" layer(components);
```
```js
import { showToast, closeToast } from 'winduum/src/components/toaster'

document.querySelector('#insertToast').addEventListener('click', async () => {
    const toaster = document.querySelector('.x-toaster')

    toaster.insertAdjacentHTML('beforeend', `
        <li class="x-toast" role="status" aria-live="assertive" aria-atomic="true" popover="manual">
            <div class="x-toast-content">
                <div class="flex-col">
                    <div class="x-title">Hello toast</div>
                    <div class="x-text">Amazing toast</div>
                </div>
                <button class="x-button muted ml-auto" data-action="closeToast">Close</button>
            </div>
        </li>
    `)

    await showToast(toaster.children[toaster.children.length - 1])

    const closeToastButton = document.querySelectorAll('[data-action="closeToast"]')[document.querySelectorAll('[data-action="closeToast"]').length - 1]

    closeToastButton.addEventListener('click', ({ currentTarget }) => {
        closeToast(currentTarget.closest('.c-toast'))
    })
})
```
```html
<body>
    <!-- your html !-->
    <ol class="x-toaster items-end"></ol>
</body>
```
:::

### Variants
* <LinkGh name="default" url="https://github.com/winduum/winduum/blob/main/src/components/toast/default.css" />
* <LinkGh name="content" url="https://github.com/winduum/winduum/blob/main/src/components/toast/content.css" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/toast" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/blob/main/components/toast" />

## Example

<div class="iframe">
    <button class="x-button" id="showToast">Show toast</button>
</div>

::: code-group
```html
<button class="x-button" id="insertToast">Show toast</button>

<ol class="x-toaster items-end"></ol>

<script type="module">
    import { showToast, closeToast } from 'winduum/src/components/toaster'

    document.querySelector('#insertToast').addEventListener('click', async () => {
        const toaster = document.querySelector('.x-toaster')

        toaster.insertAdjacentHTML('beforeend', `
            <li class="x-toast" role="status" aria-live="assertive" aria-atomic="true" popover="manual">
                <div class="x-toast-content">
                    <div class="flex-col">
                        <div class="x-title">Hello toast</div>
                        <div class="x-text">Amazing toast</div>
                    </div>
                    <button class="x-button muted ml-auto" data-action="closeToast">Close</button>
                </div>
            </li>
        `)

        await showToast(toaster.children[toaster.children.length - 1])

        const closeToastButton = document.querySelectorAll('[data-action="closeToast"]')[document.querySelectorAll('[data-action="closeToast"]').length - 1]

        closeToastButton.addEventListener('click', ({ currentTarget }) => {
            closeToast(currentTarget.closest('.c-toast'))
        })
    })
</script>
```
:::

## JavaScript API

### `showToast`

* **Type:** `(selector:  HTMLElement, options?: ShowToastOptions) => Promise<void>`
* **Kind:** `async`

Applies an enter animation to existing toast.

#### Example

```js
import { showToast } from 'winduum/src/components/toaster'

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

* **Type:** `number`
* **Default:** `null`

---

##### heightProperty

* **Type:** `string`
* **Default:** `--x-toast-height`

---

##### close

* **Type:** `CloseToastOptions`
* **Default:** `{}`

---

<br>

### `closeToast`

* **Type:** `(selector:  HTMLElement, options?: CloseToastOptions) => Promise<void>`
* **Kind:** `async`

Applies an exit animation to existing toast and removes it from DOM.

#### Example

```js
import { showToast } from 'winduum/src/components/toaster'

document.querySelector('#closeToast').addEventListener('click', async () => {
    await closeToast(document.querySelector('#toastElement'))
})
```

<br>

#### CloseToastOptions

---

##### closedAttribute

* **Type:** `data-closed`
* **Default:** `out`

---

##### heightProperty

* **Type:** `string`
* **Default:** `--x-toast-height`

---
