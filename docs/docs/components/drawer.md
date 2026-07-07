---
description: "Provides a scroll drawer that uses native HTML5 dialog and CSS scroll-snap property."
---

# Drawer
Provides a scroll drawer that uses native HTML5 `dialog` and CSS `scroll-snap` property.<br>
Can be dismissed with touch gestures on touch devices.

The drawer is opened with native [Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API)
(`command="show-modal"` / `command="request-close"`) and the scroll behavior is driven by the `Drawer` custom element from
[winduum-elements](https://github.com/winduum/winduum-elements/tree/main/components/drawer)
(or the [winduum-stimulus](https://github.com/winduum/winduum-stimulus/tree/main/components/drawer) controller).
Thanks to the `noscript` variant, the drawer degrades gracefully even without JavaScript.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/drawer/left.html" style="height: 420px; margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/drawer" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/drawer" />
* <LinkGh name="winduum-elements" url="https://github.com/winduum/winduum-elements/tree/main/components/drawer" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/tree/main/components/drawer" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/drawer" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/drawer" />

::: info Browser support
For older browsers cover [Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) with
[invokers-polyfill](https://www.npmjs.com/package/invokers-polyfill) and — when using `winduum-elements` — customized built-in elements with
[@webreflection/custom-elements-builtin](https://www.npmjs.com/package/@webreflection/custom-elements-builtin).
Missing [`scroll-initial-target`](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-initial-target) support is handled by the
[`showDrawer`](#showdrawer) helper itself. See [Polyfills](/docs/polyfills).
:::

## Styles

### Variants
* <LinkGh name="default" path="components/drawer" />
* <LinkGh name="content" path="components/drawer" />
* <LinkGh name="scroller" path="components/drawer" />
* <LinkGh name="noscript" path="components/drawer" />
* <LinkGh name="nosnap" path="components/drawer" />

### Props
* <LinkGh name="default" path="components/drawer/props" />
* <LinkGh name="content" path="components/drawer/props" />

## Scripts
The Drawer script connects the dialog open flow with drawer snapping, swipe dismissal
and trigger `aria-expanded` state.

## Examples

### Left

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/drawer/left.html" style="height: 420px"></iframe>

::: code-group
<<< @/public/examples/components/drawer/left.html#body{} [winduum-elements]
```html [winduum-stimulus]
<div data-controller="invoke">
  <button
    class="x-button"
    data-action="click->invoke#action"
    data-invoke-action="x-drawer#show"
    data-invoke-target="#drawerLeftElement"
  >
    Show drawer
  </button>
  <dialog class="x-drawer" id="drawerLeftElement" closedby="any" data-controller="x-drawer">
    <div class="x-drawer-scroller snap-x snap-mandatory">
      <nav class="x-drawer-content" data-x-drawer-target="content">
        Drawer content
        <button class="x-button muted" command="request-close" commandfor="drawerLeftElement">
          Close drawer
        </button>
      </nav>
    </div>
  </dialog>
</div>
```
```vue [winduum-vue]
<script setup>
  import { useId } from 'vue'
  import { Drawer, DrawerContent, DrawerScroller } from '@/components/drawer'
  import { Button } from '@/components/button'
  
  const drawerLeft = useId()
</script>

<template>
  <Button command="show-modal" :commandfor="drawerLeft">Show drawer</Button>
  <Drawer :id="drawerLeft" closedby="any">
    <DrawerScroller class="snap-x snap-mandatory">
      <DrawerContent as="nav">
        Drawer content
        <Button class="muted" command="request-close" :commandfor="drawerLeft">
          Close drawer
        </Button>
      </DrawerContent>
    </DrawerScroller>
  </Drawer>
</template>
```
```jsx [winduum-react]
import { useId } from "react"
import { Drawer, DrawerContent, DrawerScroller } from "@/components/drawer"
import { Button } from "@/components/button"

export function Example() {
    const drawerLeft = useId()

    return (
        <>
            <Button command="show-modal" commandfor={drawerLeft}>Show drawer</Button>
            <Drawer id={drawerLeft} closedby="any">
                <DrawerScroller className="snap-x snap-mandatory">
                    <DrawerContent as="nav">
                        Drawer content
                        <Button className="muted" command="request-close" commandfor={drawerLeft}>
                            Close drawer
                        </Button>
                    </DrawerContent>
                </DrawerScroller>
            </Drawer>
        </>
    )
}
```
:::

### Right

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/drawer/right.html" style="height: 420px"></iframe>

<<< @/public/examples/components/drawer/right.html#body{} [winduum]

### Bottom

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/drawer/bottom.html" style="height: 420px"></iframe>

<<< @/public/examples/components/drawer/bottom.html#body{} [winduum]

### Top

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/drawer/top.html" style="height: 420px"></iframe>

<<< @/public/examples/components/drawer/top.html#body{} [winduum]

### No Script

Fully animated drawer when JavaScript is disabled.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/drawer/noscript.html" style="height: 420px"></iframe>

<<< @/public/examples/components/drawer/noscript.html#body{} [winduum-elements]

### No Snap

CSS only drawer variant that does not need JavaScript and works the same way as No Script.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/drawer/nosnap.html" style="height: 420px"></iframe>

<<< @/public/examples/components/drawer/nosnap.html#body{} [winduum-elements]

## JavaScript API

Low-level helpers used by `winduum-elements` and `winduum-stimulus` — you can use them to build your own integration.
All functions take a `placement` of `'left' | 'right' | 'top' | 'bottom'` and operate on the **scroller** element (`.x-drawer-scroller`).

### `showDrawer`

* **Type:** `(element: HTMLElement, placement: 'left' | 'right' | 'top' | 'bottom') => Promise<void>`
* **Kind:** `async`

Scrolls the drawer scroller to its open state. Resets the scroll position first in browsers without
[`scroll-initial-target`](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-initial-target) support.
Call it after `dialog.showModal()`.

```js
import { showDrawer } from 'winduum/src/components/drawer'

dialogElement.showModal()
await showDrawer(dialogElement.firstElementChild, 'left')
```

### `closeDrawer`

* **Type:** `(element: HTMLElement, placement: 'left' | 'right' | 'top' | 'bottom') => void`
* **Kind:** `sync`

Scrolls the drawer scroller to its closed state — the dismiss animation is handled by scroll snapping,
and the dialog is closed by `drawerObserver` once the content leaves the viewport.

### `scrollDrawer`

* **Type:** `(element: HTMLElement, placement: 'left' | 'right' | 'top' | 'bottom', reverse?: boolean, behavior?: 'auto' | 'instant') => void`
* **Kind:** `sync`

Scrolls the drawer scroller to the open (or closed, with `reverse: true`) position.

### `drawerEvents`

* **Type:** `(element: HTMLDialogElement, contentElement: HTMLElement, placement: 'left' | 'right' | 'top' | 'bottom', signal?: AbortSignal) => void`
* **Kind:** `sync`

Wires up dialog events — closes the drawer with the scroll animation on `cancel` (Esc) and on click outside the content.

### `drawerObserver`

* **Type:** `(element: HTMLDialogElement, placement: 'left' | 'right' | 'top' | 'bottom') => IntersectionObserver`
* **Kind:** `sync`

Returns an `IntersectionObserver` that closes the dialog once the drawer content is scrolled/swiped out of view.
Observe the content element with it.

```js
import { drawerObserver } from 'winduum/src/components/drawer'

const observer = drawerObserver(dialogElement, 'left')
observer.observe(contentElement)
```

### `drawerProperties`

* **Type:** `(element: HTMLElement, placement: 'left' | 'right' | 'top' | 'bottom') => ['top' | 'left', number, number]`
* **Kind:** `sync`

Returns the scroll axis and the open/closed scroll distances for the given placement.

### `isVerticalDrawer`

* **Type:** `(placement: 'left' | 'right' | 'top' | 'bottom') => boolean`
* **Kind:** `sync`

Returns `true` for `top` and `bottom` placements.
