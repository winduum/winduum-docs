# Drawer
Provides a scroll drawer that uses native HTML5 `dialog` and CSS `scroll-snap` property.<br>
Can be dismissed with touch gestures on touch devices.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/drawer" />

### Usage
::: code-group
```css
@import "winduum/src/components/drawer/index.css" layer(components);
```
<<< @/public/examples/components/drawer/left.html#body{} [html]
<<< @/../examples/src/pages/components/drawer/left.liquid#js{} [js]
:::

### Variants
* <LinkGh name="default" path="components/drawer" />
* <LinkGh name="content" path="components/drawer" />

### Props
* <LinkGh name="default" path="components/drawer/props" />
* <LinkGh name="content" path="components/drawer/props" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/drawer" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/blob/main/components/drawer" />

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
<<< @/public/examples/components/drawer/left.html#body{} [html]
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
<<< @/public/examples/components/drawer/right.html#body{} [html]
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
<<< @/public/examples/components/drawer/bottom.html#body{} [html]
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
<<< @/public/examples/components/drawer/top.html#body{} [html]
<<< @/../examples/src/pages/components/drawer/top.liquid#js{} [js]
:::

## Javascript API

### `showDrawer`

* **Type:** `(element: HTMLElement | Element, distance: number, direction: 'left' | 'top') => void`
* **Kind:** `sync`

Scroll the drawer to open state.

### `closeDrawer`

* **Type:** `(element: HTMLElement | Element, distance: number, direction: 'left' | 'top') => void`
* **Kind:** `sync`

Scroll the drawer to closed state.

### `scrollDrawer`

* **Type:** `(element: HTMLElement | Element, options: ScrollDrawerOptions) => void`
* **Kind:** `sync`

Sets correct classes and attributes upon scroll. Events `c-drawer:open` and `c-drawer:close` are dispatched upon opening or closing the drawer.

#### ScrollDrawerOptions

---

##### snapClass

* **Type:** `string`
* **Default:** `snap-x snap-mandatory`

A classes that are added for snapping purposes once the drawer is open.

---

##### opacityProperty

* **Type:** `string`
* **Default:** `--tw-bg-opacity`

A CSS property for animating the background opacity upon scroll.

---

##### opacityRatio

* **Type:** `number`
* **Default:** `1`

You can either set `1` or `0` depending on the direction the drawer is opened. Right and bottom drawer should be set to `0`.

---

##### scrollOpen

* **Type:** `number`
* **Default:** `0`

Scroll position indicating that the drawer is opened.

---

##### scrollClose

* **Type:** `number`
* **Default:** `element.scrollWidth - element.clientWidth`

Scroll position indicating that the drawer is closed.

---

##### scrollSize

* **Type:** `number`
* **Default:** `element.scrollWidth - element.clientWidth`

Maximum scroll size of the drawer.

---

##### scrollDirection

* **Type:** `number`
* **Default:** `element.scrollLeft`

Current scroll position of the drawer.
