# Dialog
Modal component that uses native HTML5 `dialog` functionality.

Dialogs are fully controlled by the web platform — opening and closing is handled with
native [Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API)
(`command` / `commandfor`) and the [`closedby`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#closedby)
attribute, so no JavaScript API is needed.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/dialog" />

## Styles

### Variants
* <LinkGh name="default" path="components/dialog" />
* <LinkGh name="content" path="components/dialog" />
* <LinkGh name="drawer" path="components/dialog" />

### Props
* <LinkGh name="default" path="components/dialog/props" />
* <LinkGh name="content" path="components/dialog/props" />


## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/dialog" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/dialog" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/dialog" />

## Example

<div class="iframe">
    <button class="x-button" command="show-modal" commandfor="dialogExample">Show dialog</button>
</div>

<dialog class="x-dialog" id="dialogExample" closedby="any">
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
```html [winduum]
<button class="x-button" command="show-modal" commandfor="dialogMain">
    Open Dialog
</button>
<dialog class="x-dialog" id="dialogMain">
    <div class="x-dialog-content">
        <h1 class="x-heading">Hello there!</h1>
        <button class="x-dialog muted accent-main" command="close" commandfor="dialogMain">
            Close me!
        </button>
    </div>
</dialog>
```

```vue [winduum-vue]
<script setup>
  import { useId } from 'vue'
  import { Dialog, DialogContent } from '@/components/dialog'
  import { Heading } from '@/components/heading'
  import { Button } from '@/components/button'
  
  const dialogMain = useId()
</script>

<template>
  <Button command="show-modal" :commandfor="dialogMain">
    Open Dialog
  </Button>
  <Dialog :id="dialogMain">
    <DialogContent>
      <Heading>Hello there!</Heading>
      <Button variant="muted" class="accent-main" command="close" :commandfor="dialogMain">
        Close me!
      </Button>
    </DialogContent>
  </Dialog>
</template>
```
```vue [winduum-react]
```
:::

## JavaScript

There is no JavaScript API — dialogs use the native [`HTMLDialogElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement)
interface. If you need to control a dialog programmatically, use the native methods directly

```js
document.querySelector('#dialogExample').showModal()
document.querySelector('#dialogExample').close()
```

The `winduum/src/components/dialog` side-effect script additionally

* closes an open dialog when clicking its backdrop, based on the `closedby` attribute (fallback for browsers without native `closedby` support)
* keeps `--default-scrollbar-width` on `<html>` updated via a `ResizeObserver`, which the dialog CSS uses to compensate for the hidden page scrollbar
