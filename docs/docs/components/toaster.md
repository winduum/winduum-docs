# Toaster
Make your toasts fly from the toaster!

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/toaster" />

## Usage

::: code-group
```css
@import "winduum/src/components/toaster/index.css" layer(components);
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
        end: `<button class="ui-btn muted ml-auto" data-action="closeToast">Close</button>`
    })

    const closeToastButton = document.querySelectorAll('[data-action="closeToast"]')[document.querySelectorAll('[data-action="closeToast"]').length - 1]

    closeToastButton.addEventListener('click', ({ currentTarget }) => {
        closeToast(currentTarget.closest('.c-toast'))
    })
})
```
:::

### Variants
* <LinkGh name="toaster-default" url="https://github.com/winduum/winduum/blob/main/src/components/toaster/default.css" />
* <LinkGh name="toast-default" url="https://github.com/winduum/winduum/blob/main/src/components/toast/default.css" />
* <LinkGh name="toast-content" url="https://github.com/winduum/winduum/blob/main/src/components/toast/content.css" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/toaster" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/toaster" /> <small>(soon)</small>

## Example

<div class="iframe">
    <button class="ui-btn" id="showToast">Show toast</button>
</div>

::: code-group
```html
<button class="ui-btn" id="insertToast">Show toast</button>

<script type="module">
    import { insertToaster, insertToast, closeToast } from 'winduum/src/components/toaster'

    document.querySelector('#insertToast').addEventListener('click', () => {
        insertToaster(document.querySelector('dialog[open]') || document.body, {
            classes: 'items-end'
        })

        insertToast(document.querySelector('.c-toaster'), {
            title: 'Hello toast!',
            text: 'Amazing toast!',
            end: `<button class="ui-btn muted ml-auto" data-action="closeToast">Close</button>`
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
* **Default:** `--c-toast-height`

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
* **Default:** `--c-toast-height`

---

<br>

### `insertToaster`

* **Type:** `(element: HTMLElement, options?: InsertToasterOptions) => Promise<void>`
* **Kind:** `async`

Inserts a toaster into the DOM. Apply before inserting any toasts.

#### Example

```js
import { insertToaster } from 'winduum/src/components/toaster'

insertToaster(document.querySelector('dialog[open]') || document.body)
```

<br>

#### InsertToasterOptions

---

##### classes

* **Type:** `string`
* **Default:** `''`

A string representing a CSS classes, you can use it for positioning. Apply `justify-start` or `justify-end` or `flex-col-reverse` to show toaster on top.

---

<br>

### `insertToast`

* **Type:** `(element: HTMLElement, options?: InsertToastOptions) => Promise<void>`
* **Kind:** `async`

Inserts toast into a toaster.

#### Example

```js
import { insertToast } from 'winduum/src/components/toaster'

insertToast(document.querySelector('.c-toaster'), {
    title: 'Hello toast!',
    text: 'Amazing toast!',
    show: {
        autoHide: 3000
    }
})
```

<br>

#### InsertToastOptions

---

##### classes

* **Type:** `string`
* **Default:** `undefined`

A string representing a CSS classes, you can use it for additional styling.

---

##### title

* **Type:** `string`
* **Default:** `''`
 
Title for the toast.

---

<br>

##### text

* **Type:** `string`
* **Default:** `''`

Text for the toast.

---

<br>

##### start

* **Type:** `string`
* **Default:** `''`

HTML content you can add to the start of the toast.

---

<br>

##### end

* **Type:** `string`
* **Default:** `''`

HTML content you can add to the end of the toast.

---

<br>

##### show

* **Type:** `ShowToastOptions`
* **Default:** `{}`

---

<br>

### `closeToaster`

* **Type:** `(selector:  HTMLElement, options?: CloseToastOptions) => Promise<void>`
* **Kind:** `async`

All toasts are closed and toaster is removed from DOM.

#### Example

```js
import { showToast } from 'winduum/src/components/toaster'

document.querySelector('#closeToaster').addEventListener('click', async () => {
    await closeToaster(document.querySelector('.c-toaster'))
})
```
