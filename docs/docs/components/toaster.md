# Toaster
Bake your [Toast](/docs/components/toast) and let it fly! You should insert in into your `<body>`

The toaster uses the [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
(`popover="manual"`) so toasts always appear in the [top-layer](https://developer.mozilla.org/en-US/docs/Glossary/Top_layer) —
even above open dialogs. Use `toasterObserver` to show/hide the toaster popover automatically as toasts are added and removed.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/toaster/basic.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/toaster" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/toaster" />
* <LinkGh name="winduum-elements" url="https://github.com/winduum/winduum-elements/tree/main/components/toaster" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/tree/main/components/toaster" />

## Styles

### Variants
* <LinkGh name="default" url="https://github.com/winduum/winduum/blob/main/src/components/toaster/default.css" />

### Props
* <LinkGh name="default" path="components/toaster/props" />

## Examples

### Basic

The toaster lives at the end of your `<body>` — toasts are inserted into it and the popover shows/hides automatically via `toasterObserver`.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/toaster/basic.html"></iframe>

::: code-group
<<< @/public/examples/components/toaster/basic.html#body{} [winduum]
```html [winduum-elements]

```
```html [winduum-stimulus]

```
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
