# Dialog
Modal component that uses native HTML5 `dialog` functionality.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/dialog" />

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
    import { Heading } from '@/components/heading'
    import { Button } from '@/components/button'

    const dialogMain = ref()
</script>

<template>
    <UiBtn @click="dialogMain.show()">Open Dialog</UiBtn>
    <Dialog ref="dialogMain">
        <DialogContent>
            <Heading>Hello there!</Heading>
            <Button variant="muted" class="accent-main" @click="dialogMain.close()">
                Close me!
            </Button>
        </DialogContent>
    </Dialog>
</template>
```
:::

### Variants
* <LinkGh name="default" path="components/dialog" />
* <LinkGh name="content" path="components/dialog" />

### Props
* <LinkGh name="default" path="components/dialog/props" />
* <LinkGh name="content" path="components/dialog/props" />


### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/dialog" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/dialog" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/dialog" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/blob/main/components/dialog" />

## Example

<div class="iframe">
    <button class="x-button" id="showDialog">Show dialog</button>
</div>

<dialog class="x-dialog" id="dialogExample">
    <form class="x-dialog-content" method="dialog">
      <div class="x-heading">Example dialog</div>
      <br>
      <div class="x-text">
          <p>You can close this dialog with Esc, clicking outside, or by form submit</p>
      </div>
      <br>
      <button class="x-button">Close dialog</button>
    </form>
</dialog>

::: code-group
```html
<button class="x-button" id="showDialog">Show dialog</button>

<dialog class="x-dialog">
    <form class="x-dialog-content" method="dialog">
        <div class="x-heading">Example dialog</div>
        <br>
        <div class="x-text">
            <p>You can close this dialog with Esc, clicking outside, or by form submit</p>
        </div>
        <br>
        <button class="x-button">Close dialog</button>
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
    import { Heading } from '@/components/heading'
    import { Button } from '@/components/btn'

    const dialogMain = ref()
</script>

<template>
    <UiBtn @click="dialogMain.show()">Open Dialog</UiBtn>
    <Dialog ref="dialogMain">
        <DialogContent>
            <Heading>Hello there!</Heading>
            <Button variant="muted" class="accent-main" @click="dialogMain.close()">
                Close me!
            </Button>
        </DialogContent>
    </Dialog>
</template>

```
:::

## JavaScript API

### `showDialog`

* **Type:** `(selector:  HTMLDialogElement, options?: DefaultOptions) => Promise<void>`
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

#### `DefaultOptions`

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

##### openAttribute

* **Type:** `string`
* **Default:** `data-open`

A string representing a CSS attribute that will be added when the dialog is visible.

---

##### contentSelector

* **Type:** `string`
* **Default:** `.x-dialog-content`

A string representing a CSS selector representing the dialog content

---

##### scrollbarWidthProperty

* **Type:** `string`
* **Default:** `--x-dialog-scrollbar-width`

A CSS property representing a scrollbar width, when dialog is showed the document scrollbar is hidden, this adds necessary padding.

---

<br>

### `closeDialog`

* **Type:** `(selector:  HTMLDialogElement, options?: DefaultOptions) => Promise<void>`
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

