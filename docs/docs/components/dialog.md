---
description: "Modal component that uses native HTML5 dialog functionality."
---

# Dialog
Modal component that uses native HTML5 `dialog` functionality.

Dialogs are fully controlled by the web platform — opening and closing is handled with
native [Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API)
(`command` / `commandfor`) and the [`closedby`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#closedby)
attribute, so no JavaScript API is needed.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/dialog/basic.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/dialog" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/dialog" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/dialog" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/dialog" />

::: info Browser support
The `dialog` element is Baseline. For older browsers cover
[Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) with [invokers-polyfill](https://www.npmjs.com/package/invokers-polyfill) —
the [`closedby`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#closedby) attribute is covered by the
[side-effect script](#javascript) below. See [Polyfills](/docs/polyfills).
:::

## Styles

### Variants
* <LinkGh name="default" path="components/dialog" />
* <LinkGh name="content" path="components/dialog" />
* <LinkGh name="drawer" path="components/dialog" />

### Props
* <LinkGh name="default" path="components/dialog/props" />
* <LinkGh name="content" path="components/dialog/props" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/dialog/basic.html"></iframe>

::: code-group
<<< @/public/examples/components/dialog/basic.html#body{} [winduum]
<<< @/../examples-stimulus/src/pages/components/dialog/basic.liquid#body{} [winduum-stimulus]
<<< @/../examples-vue/src/pages/components/dialog/basic.vue [winduum-vue]
<<< @/../examples-react/src/pages/components/dialog/basic.tsx [winduum-react]
:::

## Accessibility

The native `dialog` element provides accessibility out of the box — `showModal()` moves focus into the dialog, makes the rest of the page inert, closes on <kbd>Esc</kbd> and returns focus to the trigger on close. Light-dismiss behavior is controlled declaratively with the `closedby` attribute.

## JavaScript

Always include the dialog side-effect script in every installation variant:

```js
import '/src/components/dialog/index.js'
```

There is no JavaScript API — dialogs use the native [`HTMLDialogElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement)
interface. If you need to control a dialog programmatically, use the native methods directly

```js
document.querySelector('#dialogExample').showModal()
document.querySelector('#dialogExample').close()
```

The `winduum/src/components/dialog` side-effect script additionally

* closes an open dialog when clicking its backdrop, based on the `closedby` attribute (fallback for browsers without native `closedby` support)
* keeps `--default-scrollbar-width` on `<html>` updated via a `ResizeObserver`, which the dialog CSS uses to compensate for the hidden page scrollbar
