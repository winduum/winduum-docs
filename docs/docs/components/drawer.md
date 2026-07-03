# Drawer
Provides a scroll drawer that uses native HTML5 `dialog` and CSS `scroll-snap` property.<br>
Can be dismissed with touch gestures on touch devices.

The drawer is opened with native [Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API)
(`command="show-modal"` / `command="request-close"`) and the scroll behavior is driven by the `Drawer` custom element from
[winduum-elements](https://github.com/winduum/winduum-elements/tree/main/components/drawer)
(or the [winduum-stimulus](https://github.com/winduum/winduum-stimulus/tree/main/components/drawer) controller).
Thanks to the `noscript` variant, the drawer degrades gracefully even without JavaScript.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/drawer" />

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

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/drawer" />
* <LinkGh name="winduum-elements" url="https://github.com/winduum/winduum-elements/tree/main/components/drawer" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/tree/main/components/drawer" />

## Examples

### Left

<div class="iframe">
    <button class="x-button" id="showDrawerLeftElement">Show left drawer</button>
</div>

<dialog class="x-drawer" id="drawerLeftElement" inert>
    <div class="x-drawer-content p-6" style="max-width: 24rem; border-right: 1px solid var(--color-body-secondary);">
        <div>Drawer content</div>
        <button class="x-button muted mt-4" id="closeDrawerLeftElement">Close drawer</button>
    </div>
</dialog>

::: code-group
<<< @/public/examples/components/drawer/left.html#body{} [winduum]
<<< @/../examples/src/pages/components/drawer/left.liquid#js{} [js]
:::

### Right

<div class="iframe">
    <button class="x-button" id="showDrawerRightElement">Show right drawer</button>
</div>

<dialog class="x-drawer after:-order-last" id="drawerRightElement" inert>
    <div class="x-drawer-content p-6" style="max-width: 24rem; border-left: 1px solid var(--color-body-secondary);">
        <div>Drawer content</div>
        <button class="x-button muted mt-4" id="closeDrawerRightElement">Close drawer</button>
    </div>
</dialog>

::: code-group
<<< @/public/examples/components/drawer/right.html#body{} [winduum]
<<< @/../examples/src/pages/components/drawer/right.liquid#js{} [js]
:::


### Bottom

<div class="iframe">
    <button class="x-button" id="showDrawerBottomElement">Show bottom drawer</button>
</div>

<dialog class="x-drawer flex flex-col after:-order-last" id="drawerBottomElement" inert>
    <div class="x-drawer-content p-6" style="max-height: 24rem; border-top: 1px solid var(--color-body-secondary);">
        <div>Drawer content</div> 
        <button class="x-button muted mt-4" id="closeDrawerBottomElement">Close drawer</button>
    </div>
</dialog>

::: code-group
<<< @/public/examples/components/drawer/bottom.html#body{} [winduum]
<<< @/../examples/src/pages/components/drawer/bottom.liquid#js{} [js]
:::

### Top

<div class="iframe">
    <button class="x-button" id="showDrawerTopElement">Show top drawer</button>
</div>

<dialog class="x-drawer flex flex-col" id="drawerTopElement" inert>
    <div class="x-drawer-content p-6" style="max-height: 24rem; border-bottom: 1px solid var(--color-body-secondary);">
        <div>Drawer content</div>
        <button class="x-button muted mt-4" id="closeDrawerTopElement">Close drawer</button>
    </div>
</dialog>

::: code-group
<<< @/public/examples/components/drawer/top.html#body{} [winduum]
<<< @/../examples/src/pages/components/drawer/top.liquid#js{} [js]
:::

## Javascript API

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
