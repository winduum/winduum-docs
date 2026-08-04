---
description: "Bake your Toast and let it fly! You should insert in into your <body>"
---

# Toaster
Bake your [Toast](/docs/components/toast) and let it fly! You should insert in into your `<body>`

The toaster uses the [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
(`popover="manual"`) so toasts always appear in the [top-layer](https://developer.mozilla.org/en-US/docs/Glossary/Top_layer) —
even above open dialogs. Use `toasterObserver` to show/hide the toaster popover automatically as toasts are added and removed.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/toaster/default.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/toaster" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/toaster" />
* <LinkGh name="winduum-elements" url="https://github.com/winduum/winduum-elements/tree/main/components/toaster" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/tree/main/components/toaster" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/toaster" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/toaster" />

## Styles

### Variants
* <LinkGh name="default" url="https://github.com/winduum/winduum/blob/next/src/components/toaster/default.css" />

### Props
* <LinkGh name="default" path="components/toaster/props" />

## Scripts
The Toaster script shows or hides the toaster popover as toasts are added or removed.

::: info
For `winduum-elements` and `winduum-stimulus`, toasts are expected to be appended into the Toaster from the backend, for example via ajax. You can also append the HTML manually, for example with `insertAdjacentHTML`.
:::

## Examples

### Default

The toaster lives at the end of your `<body>` — toasts are inserted into it and the popover shows/hides automatically via `toasterObserver`.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/toaster/default.html"></iframe>

::: code-group
<<< @/public/examples/components/toaster/default.html#body{} [winduum-elements]
<<< @/../examples-stimulus/src/pages/components/toaster/default.liquid#body{} [winduum-stimulus]
<<< @/../examples-vue/src/pages/components/toaster/default.vue [winduum-vue]
<<< @/../examples-react/src/pages/components/toaster/default.tsx [winduum-react]
:::

## JavaScript API

### `closeToaster`

* **Type:** `(element:  HTMLElement, options?: CloseToastOptions) => void`
* **Kind:** `sync`

All toasts are closed at once.

#### Example

```js
import { closeToaster } from 'winduum/src/components/toaster'

document.querySelector('#closeToaster').addEventListener('click', () => {
    closeToaster(document.querySelector('.x-toaster'))
})
```

### `toasterObserver`

* **Type:** `() => MutationObserver`
* **Kind:** `sync`

Returns a `MutationObserver` that shows the toaster popover when the first toast is inserted
and hides it when the last toast is removed. Observe the toaster element with `{ childList: true }`.

#### Example

```js
import { toasterObserver } from 'winduum/src/components/toaster'

const observer = toasterObserver()

observer.observe(document.querySelector('.x-toaster'), {
    childList: true,
})
```
