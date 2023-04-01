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

* **Type:** `(selector:  HTMLDialogElement, options?: ShowOptions) => Promise<void>`
* **Kind:** `async`

Shows an existing `<dialog>`. It takes a `selector` argument, which is a CSS selector that identifies the dialog DOM element to be displayed. It also takes an options argument, which is an object that specifies how the dialog should be displayed.

### Example

```js
import { showDialog } from 'winduum/src/libraries/dialog.js'

document.querySelector('#showDialog').addEventListener('click', async () => {
    await showDialog(document.querySelector('#dialogElement'))
})
```

### ShowOptions
<br>

#### closable

* **Type:** `boolean`
* **Default:** `true`

A boolean that indicates whenever is dialog closable by clicking outside or with `esc` key.

## closeDialog

* **Type:** `(selector:  HTMLDialogElement, options?: CloseOptions) => Promise<void>`
* **Kind:** `async`

Closes an existing `<dialog>`. It takes a `selector` argument, which is a CSS selector that identifies the dialog DOM element to be displayed. It also takes an options argument, which is an object that specifies how the dialog should be closed.

### Example

```js
import { closeDialog } from 'winduum/src/libraries/Dialog.js'

document.querySelector('#closeDialog').addEventListener('click', async () => {
    await closeDialog(document.querySelector('#dialogElement'))
})
```

### CloseOptions
<br>

#### remove

A boolean that indicates whether the dialog should be removed from the DOM when it is closed.

## insertDialog

* **Type:** `(content: String, options?: InsertOptions) => Promise<void>`
* **Kind:** `async`

Inserts a dialog into the DOM by either appending it to an existing dialog element found by the selector `.lib-dialog.is-inserted` or creating a new one. After that it is shown with the `showDialog` function.

### Example

```js
import { insertDialog } from 'winduum/src/libraries/Dialog.js'

document.querySelector('#closeDialog').addEventListener('click', async () => {
    await insertDialog(`
        <dialog class="lib-dialog">
            <div class="c-dialog">
                This is inserted dialog
            </div>
        </dialog>
    `)
})
```

### InsertOptions
<br>

#### class

* **Type:** `string`
* **Default:** `lib-dialog is-inserted`

A string representing a CSS selector for finding inserted dialog in the DOM.

#### selector

* **Type:** `string`
* **Default:** `.lib-dialog.is-inserted`

Selector of `<dialog>` element to target, be default the selector is inserted dynamically via `content` option### selector

#### append

* **Type:** `boolean`
* **Default:** `false`

A boolean that indicates whether the new dialog should be appended after an existing one found by the selector or replaced.

#### remove

* **Type:** `boolean`
* **Default:** `false`

A boolean that indicates whether the dialog should be removed from the DOM when it is closed.

#### closable

* **Type:** `boolean`
* **Default:** `true`

A boolean that indicates whenever is dialog closable by clicking outside or with `esc` key.

## fetchDialog

* **Type:** `(options: FetchOptions) => Promise<void>`
* **Kind:** `async`

A function that fetches dialog content from a URL and inserts it into the DOM with the `insertDialog` function.

### Example

```js
import { fetchDialog } from 'winduum/src/libraries/dialog.js'

document.querySelector('#fetchDialog').addEventListener('click', async () => {
    await fetchDialog({
        url: '/api/dialog'
    })
})
```

### FetchOptions
<br>

#### url

A string representing the URL to fetch the dialog content from. Must return JSON with `content` key.

#### insertOptions

Additional insert options, same as in `insertDialog`
