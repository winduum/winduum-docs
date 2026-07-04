---
description: "Let it bake and fly from your Toaster!"
---

# Toast
Let it bake and fly from your [Toaster](/docs/components/toaster)!

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/toast/basic.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/toast" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/toast" />
* <LinkGh name="winduum-elements" url="https://github.com/winduum/winduum-elements/tree/main/components/toast" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/tree/main/components/toast" />

## Styles

### Variants
* <LinkGh name="default" url="https://github.com/winduum/winduum/blob/next/src/components/toast/default.css" />
* <LinkGh name="content" url="https://github.com/winduum/winduum/blob/next/src/components/toast/content.css" />

### Props
* <LinkGh name="default" path="components/toast/props" />
* <LinkGh name="content" path="components/toast/props" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/toast/basic.html"></iframe>

::: code-group
<<< @/public/examples/components/toast/basic.html#body{} [winduum]
```html [winduum-elements]

```
```html [winduum-stimulus]

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
