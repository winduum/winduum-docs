# Dialog
Modal component that uses native HTML5 dialog functionality.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/dialog" />

## Usage

::: code-group
```css
@import "winduum/src/components/dialog/index.css" layer(components);
```
```js
import { showDialog } from 'winduum/src/components/dialog'

document.querySelector('#showDialog').addEventListener('click', () => {
    showDialog(document.querySelector('dialog'))
})
```
```vue
<script setup>
    import { ref } from 'vue'
    import { Dialog, DialogContent } from '@/components/dialog'
    import { UiHeading } from '@/components/ui/heading'
    import { UiBtn } from '@/components/ui/btn'

    const dialogMain = ref()
</script>

<template>
    <UiBtn @click="dialogMain.show()">Open Dialog</UiBtn>
    <Dialog ref="dialogMain">
        <DialogContent>
            <UiHeading>Hello there!</UiHeading>
            <UiBtn variant="muted" class="accent-main" @click="dialogMain.close()">
                Close me!
            </UiBtn>
        </DialogContent>
    </Dialog>
</template>
```
:::

### Variants
* <LinkGh name="default" path="components/dialog" />
* <LinkGh name="content" path="components/dialog" />

### Props
* <LinkGh name="default-props" path="components/dialog" />
* <LinkGh name="content-props" path="components/dialog" />


### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/dialog.js" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/dialog.vue" /> <small>(soon)</small>

## Example

<div class="iframe">
    <button class="ui-btn" id="showDialog">Show dialog</button>
</div>

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

<script type="module">
    import { showDialog } from 'winduum/src/components/dialog'

    document.querySelector('#showDialog').addEventListener('click', () => {
        showDialog(document.querySelector('dialog'))
    })
</script>
```
```vue
<script setup>
    import { ref } from 'vue'
    import { Dialog, DialogContent } from '@/components/dialog'
    import { UiHeading } from '@/components/ui/heading'
    import { UiBtn } from '@/components/ui/btn'

    const dialogMain = ref()
</script>

<template>
    <UiBtn @click="dialogMain.show()">Open Dialog</UiBtn>
    <Dialog ref="dialogMain">
        <DialogContent>
            <UiHeading>Hello there!</UiHeading>
            <UiBtn variant="muted" class="accent-main" @click="dialogMain.close()">
                Close me!
            </UiBtn>
        </DialogContent>
    </Dialog>
</template>

```
:::

## JavaScript API

### `showDialog`

* **Type:** `(selector:  HTMLDialogElement, options?: ShowOptions) => Promise<void>`
* **Kind:** `async`

Shows an existing `<dialog>`. It takes a `selector` argument, which is a CSS selector that identifies the dialog DOM element to be displayed. It also takes an options argument, which is an object that specifies how the dialog should be displayed.

The `closeDialog` event is sent upon closing with the `esc` key or clicking outside the dialog content window.

#### Example

```js
import { showDialog } from 'winduum/src/libraries/dialog'

document.querySelector('#showDialog').addEventListener('click', async () => {
    await showDialog(document.querySelector('#dialogElement'))
})
```
<br>

#### `ShowOptions`

---

##### closable

* **Type:** `boolean`
* **Default:** `true`

A boolean that indicates whenever is dialog closable by clicking outside or with `esc` key.

---

##### remove

* **Type:** `boolean`
* **Default:** `true`

A boolean that indicates whether the dialog should be removed from the DOM when it is closed.

---

##### openClass

* **Type:** `string`
* **Default:** `visible`

A string representing a CSS class that will be aded when dialog is visible.

---

##### scrollbarWidthProperty

* **Type:** `string`
* **Default:** `--c-dialog-scrollbar-width`

A CSS property representing a scrollbar width, when dialog is showed the document scrollbar is hidden, this adds necessary padding.

---

<br>

### `closeDialog`

* **Type:** `(selector:  HTMLDialogElement, options?: CloseOptions) => Promise<void>`
* **Kind:** `async`

Closes an existing `<dialog>`. It takes a `selector` argument, which is a CSS selector that identifies the dialog DOM element to be displayed. It also takes an options argument, which is an object that specifies how the dialog should be closed.

When dialog closes it sends native `close` event you can listen to, additionally `c-dialog:dismiss` event is sent when dialog animation finishes. 

#### Example

```js
import { closeDialog } from 'winduum/src/components/dialog'

document.querySelector('#closeDialog').addEventListener('click', async () => {
    await closeDialog(document.querySelector('#dialogElement'))
})
```

<br>

#### `CloseOptions`

---

##### remove

* **Type:** `boolean`
* **Default:** `true`

A boolean that indicates whether the dialog should be removed from the DOM when it is closed.

---

##### openClass

* **Type:** `string`
* **Default:** `visible`

A string representing a CSS class that will be aded when dialog is visible.

---

##### scrollbarWidthProperty

* **Type:** `string`
* **Default:** `--c-dialog-scrollbar-width`

A CSS property representing a scrollbar width, when dialog is showed the document scrollbar is hidden, this adds necessary padding.

---

<br>

### `insertDialog`

* **Type:** `(content: String, options?: InsertOptions) => Promise<void>`
* **Kind:** `async`

Inserts a dialog into the DOM by either appending it to an existing dialog element found by the selector `.lib-dialog.is-inserted` or creating a new one. After that it is shown with the `showDialog` function.

#### Example

```js
import { insertDialog } from 'winduum/src/components/dialog'

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

<br>

#### `InsertOptions`

---

##### class

* **Type:** `string`
* **Default:** `inserted`

A string representing a CSS selector for finding inserted dialog in the DOM.

---

##### selector

* **Type:** `string`
* **Default:** `dialog.inserted`

Selector of `<dialog>` element to target, be default the selector is inserted dynamically via `content` option

---

##### append

* **Type:** `boolean`
* **Default:** `false`

A boolean that indicates whether the new dialog should be appended after an existing one found by the selector or replaced.

---

##### show

* **Type:** `ShowOptions`
* **Default:** `undefined`

Additional show options, same as in `ShowOptions`

---

<br>

### `fetchDialog`

* **Type:** `(options: FetchOptions) => Promise<void>`
* **Kind:** `async`

A function that fetches dialog content from a URL and inserts it into the DOM with the `insertDialog` function.

#### Example

```js
import { fetchDialog } from 'winduum/src/components/dialog'

document.querySelector('#fetchDialog').addEventListener('click', async () => {
    await fetchDialog({
        url: '/api/dialog'
    })
})
```

<br>

#### `FetchOptions`

---

##### url

* **Type:** `string`
* **Default:** `undefined`

A string representing the URL to fetch the dialog content from. Must return JSON with `content` key.

---

##### insert

* **Type:** `InsertOptions`
* **Default:** `undefined`

Additional insert options, same as in `InsertOptions`
