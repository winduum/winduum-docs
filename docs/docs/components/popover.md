# Popover
Popover can be used for dropdowns and other popovers when an element is clicked, focused or hovered.
You have the following types of trigger as an option:
* trigger on click with `command="toggle-popover"` and `commandfor`
* trigger on hover/focus with the [`interestfor`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/interestfor) attribute (see the [Interest](/docs/variants/interest) variant)

Popovers are build entirely on the web platform — the `[popover]` attribute,
[Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API)
(`command="toggle-popover"` / `show-popover` / `hide-popover`) and
[CSS Anchor Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning).

No JavaScript is required in browsers with anchor positioning support.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/popover" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/popover" />
* <LinkGh name="winduum-elements" url="https://github.com/winduum/winduum-elements/tree/main/components/popover" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/tree/main/components/popover" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/popover" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/popover" />

## Styles

### Variants
* <LinkGh name="default" path="components/popover" />
* <LinkGh name="content" path="components/popover" />

### Props
* <LinkGh name="default" path="components/popover/props" />
* <LinkGh name="content" path="components/popover/props" />

### Tokens
Positioning of `x-popover` is provided by the [Position](/docs/utilities/position) utilities
* `top` `top-start` `top-end`
* `bottom` `bottom-start` `bottom-end`
* `left` `left-start` `left-end`
* `right` `right-start` `right-end`

## Examples

### Basic Popover

Native [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) with
[Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) —
the popover lives in the [top-layer](https://developer.mozilla.org/en-US/docs/Glossary/Top_layer), gets light-dismiss
(Esc, clicking outside) and keyboard handling for free, without a single line of JavaScript.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/popover/basic.html"></iframe>

::: code-group
<<< @/public/examples/components/popover/basic.html#body{} [winduum]
```vue [winduum-vue]

```
```vue [winduum-react]

```
:::

### Interest Popover

Shows the popover when the user *shows interest* in the trigger — hover or keyboard focus — via the `interestfor` attribute.
Use the [interestfor](https://www.npmjs.com/package/interestfor) polyfill for browsers without native support.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/popover/hover.html"></iframe>

::: code-group
<<< @/public/examples/components/popover/hover.html#body{} [winduum]
```vue [winduum-vue]

```
```vue [winduum-react]

```
:::

### Positioning fallback

Same as the above examples, but wrapped as component, which applies
the floating-ui positioning fallback in browsers without CSS Anchor Positioning.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/popover/api.html"></iframe>

::: code-group
<<< @/public/examples/components/popover/api.html#body{} [winduum-elements]
```vue [winduum-stimulus]

```
```vue [winduum-vue]

```
```vue [winduum-react]

```
:::


## JavaScript API

The core popover component needs no JavaScript — use the native
[`showPopover`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/showPopover) /
[`hidePopover`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidePopover) /
[`togglePopover`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/togglePopover) methods for programmatic control.

Two helpers are exported for the floating-ui positioning fallback (they require [`@floating-ui/dom`](https://floating-ui.com/) as a dependency).
They are used internally by `winduum-elements` and `winduum-stimulus`, but you can use them to build your own integration.

### `computePositionPopover`

* **Type:** `(referenceElement: HTMLElement, floatingElement: HTMLElement, placement: Placement, options?: ComputePositionConfig | boolean) => Promise<void>`
* **Kind:** `async`

Computes the popover position with `@floating-ui/dom` and applies it to the floating element.
When native CSS anchor positioning is supported, only the placement class is applied and positioning is left to CSS.
Passing `options: true` enables the built-in `flip()` middleware.

#### Example

```js
import { computePositionPopover } from 'winduum/src/components/popover'

const trigger = document.querySelector('#popoverTrigger')
const popover = document.querySelector('#popoverElement')

popover.addEventListener('toggle', async ({ newState }) => {
    if (newState === 'open') {
        await computePositionPopover(trigger, popover, 'bottom-start')
    }
})
```

### `autoUpdatePopover`

* **Type:** `(referenceElement: HTMLElement, floatingElement: HTMLElement, placement: Placement, options?: ComputePositionConfig | boolean) => Promise<() => void>`
* **Kind:** `async`

Same as `computePositionPopover`, but keeps the position updated on scroll and resize via floating-ui
[`autoUpdate`](https://floating-ui.com/docs/autoUpdate). Returns a cleanup function — call it when the popover closes.

#### Example

```js
import { autoUpdatePopover } from 'winduum/src/components/popover'

let cleanup

popover.addEventListener('toggle', async ({ newState }) => {
    if (newState === 'open') {
        cleanup = await autoUpdatePopover(trigger, popover, 'bottom-start')
    } else {
        cleanup?.()
    }
})
```
