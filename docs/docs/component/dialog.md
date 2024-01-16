# Dialog
Modal component that uses native HTML5 dialog functionality.

* [`winduum/src/components/dialog.css`](https://github.com/winduum/winduum/blob/main/src/components/dialog.css)
* [`winduum/src/components/dialog.js`](https://github.com/winduum/winduum/blob/main/src/components/dialog.js)

### Single Import

```css
@import "winduum/components/dialog.css" layer(components);
```

## Example

<button class="ui-btn" id="showDialog">Show dialog</button>

::: code-group
```html
<button class="ui-btn" id="showDialog">Show dialog</button>

<dialog class="c-dialog">
    <form class="c-dialog-content" method="dialog">
        <div class="ui-heading">Example dialog</div>
        <br>
        <div class="ui-text">
            <p>You can close this dialog with Esc, clicking outside, or by form submit</p>
        </div>
        <br>
        <button class="ui-btn">Close dialog</button>
    </form>
</dialog>
```
```js
import { showDialog } from 'winduum/src/components/dialog.js'

document.querySelector('#showDialog').addEventListener('click', () => {
    showDialog(document.querySelector('dialog'))
})
```
:::

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

#### remove

* **Type:** `boolean`
* **Default:** `true`

A boolean that indicates whether the dialog should be removed from the DOM when it is closed.

#### openClass

* **Type:** `string`
* **Default:** `visible`

A string representing a CSS class that will be aded when dialog is visible.

#### scrollbarWidthProperty

* **Type:** `string`
* **Default:** `--c-dialog-scrollbar-width`

A CSS property representing a scrollbar width, when dialog is showed the document scrollbar is hidden, this adds necessary padding.

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

* **Type:** `boolean`
* **Default:** `true`

A boolean that indicates whether the dialog should be removed from the DOM when it is closed.

#### openClass

* **Type:** `string`
* **Default:** `visible`

A string representing a CSS class that will be aded when dialog is visible.

#### scrollbarWidthProperty

* **Type:** `string`
* **Default:** `--c-dialog-scrollbar-width`

A CSS property representing a scrollbar width, when dialog is showed the document scrollbar is hidden, this adds necessary padding.

## insertDialog

* **Type:** `(content: String, options?: InsertOptions) => Promise<void>`
* **Kind:** `async`

Inserts a dialog into the DOM by either appending it to an existing dialog element found by the selector `.lib-dialog.is-inserted` or creating a new one. After that it is shown with the `showDialog` function.

### Example

```js
import { insertDialog } from 'winduum/src/libraries/Dialog.js'

document.querySelector('#insertDialog').addEventListener('click', async () => {
    await insertDialog(`
        <dialog class="c-dialog">
            <div class="c-dialog-content">
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
* **Default:** `inserted`

A string representing a CSS selector for finding inserted dialog in the DOM.

#### selector

* **Type:** `string`
* **Default:** `dialog.inserted`

Selector of `<dialog>` element to target, be default the selector is inserted dynamically via `content` option

#### append

* **Type:** `boolean`
* **Default:** `false`

A boolean that indicates whether the new dialog should be appended after an existing one found by the selector or replaced.

#### show

* **Type:** `ShowOptions`
* **Default:** `undefined`

Additional show options, same as in `ShowOptions`

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

* **Type:** `string`
* **Default:** `undefined`

A string representing the URL to fetch the dialog content from. Must return JSON with `content` key.

#### insert

* **Type:** `InsertOptions`
* **Default:** `undefined`

Additional insert options, same as in `InsertOptions`
