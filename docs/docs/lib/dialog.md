# Dialog

Provides CSS and JS to add HTML5 dialog functionality. 

* [`winduum/src/libraries/dialog.css`](https://github.com/winduum/winduum/blob/main/src/libraries/dialog.css)
* [`winduum/src/libraries/dialog.js`](https://github.com/winduum/winduum/blob/main/src/libraries/dialog.js)

You can use this together with [Dialog](/docs/component/dialog) component or style your own dialog.

### CSS Properties

```css
:where(.lib-dialog) {
    --lib-ripple-bg: rgb(var(--color-dark) / var(--tw-bg-opacity, 0.8));
    --lib-dialog-py: 2rem;
    --lib-dialog-px: 1.5rem;
    --lib-dialog-animation-duration: var(--transition-duration);
}
```

## showDialog

* **Type:** `(options) => Promise<void>`
* **Kind:** `async`

Shows a dialog, either existing one via `selector` option or inserts a new dialog dynamically via `content` option.

```js
import { showDialog } from 'winduum/src/libraries/dialog.js'

document.querySelector('#showDialog').addEventListener('click', async () => {
    await showDialog({
        selector: document.querySelector('#dialogElement')
    })
})
```

### content

* **Type:** `string`
* **Default:** `undefined`

HTML of dialog element to append dynamically into `<dialog>` element

### selector

* **Type:** `string | HTMLElement`
* **Default:** `.lib-dialog.is-inserted`

Selector of `<dialog>` element to use, be default the selector is inserted dynamically via `content` option

### remove

* **Type:** `boolean`
* **Default:** `false`

Whenever to remove `<dialog>` element after closing it

### append

* **Type:** `boolean`
* **Default:** `false`

Whenever to replace dynamically opened dialog with a new one, or append a new one

### closable

* **Type:** `boolean`
* **Default:** `true`

Controls if dialog is closable via `esc` or clicking outside

### class

* **Type:** `string`
* **Default:** `lib-dialog`

Class to use on `<dialog>` element

## closeDialog

* **Type:** `(options) => Promise<void>`
* **Kind:** `async`

Closes a dialog, either existing one via `selector` option or inserted one dynamically via `content` option.

```js
import { closeDialog } from 'winduum/src/libraries/Dialog.js'

document.querySelector('#closeDialog').addEventListener('click', async () => {
    await closeDialog({
        selector: document.querySelector('#dialogElement')
    })
})
```

### selector

Selector of `<dialog>` element to use, closes existing opened dialog if not provided 

### remove

Whenever to remove `<dialog>` element after closing it

## fetchDialog

* **Type:** `(options) => Promise<void>`
* **Kind:** `async`

Fetches dialog HTML from the server and shows the dialog dynamically

```js
import { fetchDialog } from 'winduum/src/libraries/dialog.js'

document.querySelector('#fetchDialog').addEventListener('click', async () => {
    await fetchDialog({
        url: '/api/dialog'
    })
})
```

### url

Url from to fetch, must return JSON with `content` key

### showOptions

Additional show options, same as in `showDialog`
