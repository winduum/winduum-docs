# Toast
Your toast ready from toaster!

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/toast" />

## Usage

::: code-group
```css
@import "winduum/src/components/toast/index.css" layer(components);
```
```js
import { insertToaster, insertToast, closeToast } from 'winduum/src/components/toaster'

document.querySelector('#insertToast').addEventListener('click', () => {
    insertToaster(document.querySelector('dialog[open]') || document.body, {
        classes: 'items-end'
    })
    
    insertToast(document.querySelector('.c-toaster'), {
        title: 'Hello toast!',
        text: 'Amazing toast!',
        end: `<button class="x-button muted ml-auto" data-action="closeToast">Close</button>`
    })

    const closeToastButton = document.querySelectorAll('[data-action="closeToast"]')[document.querySelectorAll('[data-action="closeToast"]').length - 1]

    closeToastButton.addEventListener('click', ({ currentTarget }) => {
        closeToast(currentTarget.closest('.c-toast'))
    })
})
```
:::

### Variants
* <LinkGh name="default" url="https://github.com/winduum/winduum/blob/next/src/components/toast/default.css" />
* <LinkGh name="content" url="https://github.com/winduum/winduum/blob/next/src/components/toast/content.css" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/toast" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/blob/main/components/toast" />

## Example

<div class="iframe">
    <button class="x-button" id="showToast">Show toast</button>
</div>

::: code-group
```html
<button class="x-button" id="insertToast">Show toast</button>

<script type="module">
    import { insertToaster, insertToast, closeToast } from 'winduum/src/components/toaster'

    document.querySelector('#insertToast').addEventListener('click', () => {
        insertToaster(document.querySelector('dialog[open]') || document.body, {
            classes: 'items-end'
        })

        insertToast(document.querySelector('.c-toaster'), {
            title: 'Hello toast!',
            text: 'Amazing toast!',
            end: `<button class="x-button muted ml-auto" data-action="closeToast">Close</button>`
        })

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

##### visibleClass

* **Type:** `string`
* **Default:** `in`

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

##### hiddenClass

* **Type:** `string`
* **Default:** `out`

---

##### heightProperty

* **Type:** `string`
* **Default:** `--x-toast-height`

---
