# Toast
Let it bake and fly from your [Toaster](/docs/components/toaster)!

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/toast" />

## Styles

### Variants
* <LinkGh name="default" url="https://github.com/winduum/winduum/blob/main/src/components/toast/default.css" />
* <LinkGh name="content" url="https://github.com/winduum/winduum/blob/main/src/components/toast/content.css" />

### Props
* <LinkGh name="default" path="components/toast/props" />
* <LinkGh name="content" path="components/toast/props" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/toast" />
* <LinkGh name="winduum-elements" url="https://github.com/winduum/winduum-elements/tree/main/components/toast" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/tree/main/components/toast" />

## Example

<div class="iframe">
    <button class="x-button" id="showToast">Show toast</button>
</div>

::: code-group
```html [winduum]
<button class="x-button" id="insertToast">Show toast</button>

<ol class="x-toaster items-end" popover="manual"></ol>

<script type="module">
    import { showToast, closeToast } from 'winduum/src/components/toast'

    document.querySelector('#insertToast').addEventListener('click', async () => {
        const toaster = document.querySelector('.x-toaster')

        toaster.insertAdjacentHTML('beforeend', `
            <li class="x-toast" role="status" aria-live="assertive" aria-atomic="true">
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
            closeToast(currentTarget.closest('.x-toast'))
        })
    })
</script>
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
