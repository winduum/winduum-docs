# Popover
Popover can be used for dropdowns and other popovers when an element is clicked and focused.
You have following types of trigger as an option:
* trigger on focus with CSS `trigger-focus` class
* trigger on hover with CSS `trigger-hover` class
* trigger on click with JS and the `[popover]` attribute

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/popover" />

### Dependencies

* [floating-ui](https://floating-ui.com/) - for `[popover]` trigger

## Usage

::: code-group
```css
@import "winduum/src/components/popover/index.css" layer(components);
```
<<< @/public/examples/components/popover/basic.html#body{} [html]
```vue
<script setup>
    import { ref } from 'vue'
    import { Popover, PopoverContent } from '@/components/popover'
    import { Button } from '@/components/button'
</script>

<template>
    <Popover>
        <Button>Open Popover</Button>
        <PopoverContent>
            Popover content
        </PopoverContent>
    </Popover>
</template>
```
:::

### Variants
* <LinkGh name="default" path="components/popover" />
* <LinkGh name="content" path="components/popover" />
  
### Tokens
Applicable to `x-popover-content`
* `bottom bottom-start`
* `bottom bottom-end`
* `top top-start`
* `top top-end`
* `right right-start`
* `right right-end`
* `left left-start`
* `left left-end`
* `bottom inline-center`
* `top inline-center`
* `right block-center`
* `left block-center`

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/popover" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/popover" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/popover" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/blob/main/components/popover" />

## Examples


### focus-trigger

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/popover/basic.html"></iframe>

<<< @/public/examples/components/popover/basic.html#body{}

### hover-trigger

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/popover/hover.html"></iframe>

<<< @/public/examples/components/popover/hover.html#body{}

### [popover]

This is using advantages of [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) with [floating-ui](https://floating-ui.com/). 
It's also backwards compatible as it's leveraging only the `showPopover` and `hidePopover` for the [top-layer](https://developer.mozilla.org/en-US/docs/Glossary/Top_layer) support.

Popover is placed dynamically upon available space, and auto updates itself when needed.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/popover/api.html"></iframe>

<<< @/public/examples/components/popover/api.html#body{}


## JavaScript API

### `showPopover`

* **Type:** `(element: HTMLElement | Element, options?: ShowPopoverOptions) => Promise<void>`
* **Kind:** `async`

#### Example

```js
import { showPopover, hidePopover } from '/src/components/popover'

const popoverActionElement = document?.querySelector('[popovertargetaction="show"]')

popoverActionElement?.addEventListener('click', async (e) => {
    e.preventDefault()
    
    const currentTarget = e.currentTarget
    await showPopover(currentTarget, {
        placement: 'right-end',
    })
})

// close on esc
window.addEventListener('keydown', ({ key }) => {
    if (key === 'Escape') {
        hidePopover(popoverActionElement)
    }
})

// outside dismiss
window.addEventListener('click', ({ target }) => {
    if (!window.popover?.contains(target) && !popoverActionElement?.isEqualNode(target) && popoverActionElement?.ariaExpanded === 'true') {
        hidePopover(popoverActionElement)
    }
})
```
<br>

#### `ShowPopoverOptions`

---

##### anchorSelector

* **Type:** `string`
* **Default:** `undefined`

By default, the anchor selector is the trigger button, you can change this to other selector.

---

##### openAttribute

* **Type:** `string`
* **Default:** `data-open`

A string representing an attribute that will be added when popover is visible.

---

##### compute

* **Type:** `boolean`
* **Default:** `true`

Determines if the popover should be anchored and computed with `@floating-ui/dom`

---

##### placement

* **Type:** `Placement`
* **Default:** `undefined`

Determines [placement](https://floating-ui.com/docs/computePosition#placement) of the popover with `@floating-ui/dom`, also adds a corresponding class to the popover target.

---

##### middleware

* **Type:** `Array<Middleware | null | undefined | false>`
* **Default:** `[offset(12 ?? options?.offset), flip(options?.flip), shift({ padding: 8, ...options?.shift })]`

Customize [middleware](https://floating-ui.com/docs/computePosition#middleware) for `@floating-ui/dom`

---

##### offset

* **Type:** `OffsetOptions`
* **Default:** `12`

Customize [offset](https://floating-ui.com/docs/offset#options) options for `@floating-ui/dom`

---

##### flip

* **Type:** `FlipOptions`
* **Default:** `undefined`

Customize [flip](https://floating-ui.com/docs/flip#options) options for `@floating-ui/dom`

---

##### shift

* **Type:** `ShiftOptions`
* **Default:** `undefined`

Customize [shift](https://floating-ui.com/docs/shift#options) options for `@floating-ui/dom`

---

<br>

### `hidePopover`

* **Type:** `(element: HTMLElement | Element) => Promise<void>`
* **Kind:** `async`

#### Example

```js
import { hidePopover } from '/src/components/popover'

const popoverActionElement = document?.querySelector('[popovertargetaction="hide"]')

popoverActionElement?.addEventListener('click', async (e) => {
    e.preventDefault()
    
    const currentTarget = e.currentTarget
    await hidePopover(currentTarget)
})
```
<br>

### `togglePopover`

* **Type:** `(element: HTMLElement | Element, options?: ShowPopoverOptions) => Promise<void>`
* **Kind:** `async`

#### Example

```js
import { togglePopover, hidePopover } from '/src/components/popover'

const popoverActionElement = document?.querySelector('[popovertargetaction="toggle"]')

popoverActionElement?.addEventListener('click', async (e) => {
    e.preventDefault()
    
    const currentTarget = e.currentTarget
    await togglePopover(currentTarget)
})

// close on esc
window.addEventListener('keydown', ({ key }) => {
    if (key === 'Escape') {
        hidePopover(popoverActionElement)
    }
})

// outside dismiss
window.addEventListener('click', ({ target }) => {
    if (!window.popover?.contains(target) && !popoverActionElement?.isEqualNode(target) && popoverActionElement?.ariaExpanded === 'true') {
        hidePopover(popoverActionElement)
    }
})
```
<br>
