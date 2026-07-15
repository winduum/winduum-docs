---
description: "Provides an experimental scroll carousel built around emerging native carousel APIs."
---

# Carousel Experimental
Provides an experimental scroll carousel that uses native CSS `scroll-snap` and emerging carousel-related browser APIs.

The carousel is CSS-first — scrolling, snapping and layout are handled by CSS alone.

A small JavaScript layer mirrors the behavior of
[CSS Native Carousels](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Overflow/Carousels),
so you can build carousels like [chrome.dev/carousel](https://chrome.dev/carousel/)
without using `::scroll-button()`, `::scroll-marker-group` and `::scroll-marker` directly.

::: warning Experimental browser support
This version depends on emerging browser APIs whose support is still incomplete. Not all required APIs have polyfills, so behavior cannot yet be made consistent across all supported browsers. Use the [stable Carousel](/docs/components/carousel) when broad browser compatibility is required.
:::

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/carousel-experimental/full.html" style="height: 420px; margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/carousel-experimental" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/carousel-experimental" />
* <LinkGh name="winduum-elements" url="https://github.com/winduum/winduum-elements/tree/main/components/carousel-experimental" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/tree/next/components/carousel-experimental" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/tree/next/src/components/carousel-experimental" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/tree/next/src/components/carousel-experimental" />

## Styles

### Variants
* <LinkGh name="default" path="components/carousel-experimental" />
* <LinkGh name="content" path="components/carousel-experimental" />

## Scripts
The Carousel script wires marker and navigation controls and keeps the active snap
and scroll edge state in sync.

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/carousel-experimental/basic.html" style="height: 620px"></iframe>

::: code-group
<<< @/public/examples/components/carousel-experimental/basic.html#body{} [winduum-elements]
<<< @/../examples-stimulus/src/pages/components/carousel-experimental/basic.liquid#body{} [winduum-stimulus]
<<< @/../examples-vue/src/pages/components/carousel-experimental/basic.vue [winduum-vue]
<<< @/../examples-react/src/pages/components/carousel-experimental/basic.tsx [winduum-react]
:::

### Full

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/carousel-experimental/full.html" style="height: 620px"></iframe>

::: code-group
<<< @/public/examples/components/carousel-experimental/full.html#body{} [winduum-elements]
<<< @/../examples-stimulus/src/pages/components/carousel-experimental/full.liquid#body{} [winduum-stimulus]
<<< @/../examples-vue/src/pages/components/carousel-experimental/full.vue [winduum-vue]
<<< @/../examples-react/src/pages/components/carousel-experimental/full.tsx [winduum-react]
:::

## JavaScript API

Low-level helpers used by `winduum-elements`, `winduum-stimulus`, `winduum-vue` and `winduum-react` — you can use them to build your own integration.

### `scrollBy`

* **Type:** `(element: HTMLElement, options: { direction?: number, vertical?: boolean, ratio?: number }) => void`
* **Kind:** `sync`

Scrolls the carousel content by a portion of its visible size.
`direction` is `1` (next) or `-1` (prev), `ratio` determines how much of the visible size is scrolled (default `0.85`).

```js
import { scrollBy } from 'winduum/src/components/carousel-experimental'

nextElement.addEventListener('click', () => scrollBy(contentElement, { direction: 1 }))
prevElement.addEventListener('click', () => scrollBy(contentElement, { direction: -1 }))
```

### `toggleScrollState`

* **Type:** `(element: HTMLElement, options: { prevElement?: HTMLButtonElement, nextElement?: HTMLButtonElement, vertical?: boolean }) => void`
* **Kind:** `sync`

Updates the carousel scroll state — toggles `data-scroll-start`, `data-scroll-end` and `data-scroll-none`
attributes on the content element and disables the prev/next buttons at the edges. Call it on `scroll`.

```js
contentElement.addEventListener('scroll', () => {
    toggleScrollState(contentElement, { prevElement, nextElement })
})
```

### `setCurrentAttribute`

* **Type:** `(element: HTMLElement, index: number, attributeName?: string) => void`
* **Kind:** `sync`

Marks the child at `index` with the given attribute (default `aria-current`) and removes it from the previous one.

### `setSnappedAttribute`

* **Type:** `(element: HTMLElement, target: HTMLElement, markerGroupElement?: HTMLElement) => void`
* **Kind:** `sync`

Sets `data-snapped` on the currently snapped item and syncs `aria-current` in the marker group.
Designed for the [`scrollsnapchanging`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollsnapchanging_event) event.

```js
contentElement.addEventListener('scrollsnapchanging', (event) => {
    setSnappedAttribute(contentElement, event.snapTargetInline ?? event.snapTargetBlock, markerGroupElement)
})
```

### `scrollToMarker`

* **Type:** `(element: HTMLElement, target: HTMLElement, markerGroupElement: HTMLElement, scrollIntoViewOptions?: ScrollIntoViewOptions) => void`
* **Kind:** `sync`

Scrolls the carousel to the item referenced by a marker (an anchor with `href="#slide-id"`) and updates the marker state.

```js
markerElements.forEach((marker) => {
    marker.addEventListener('click', (event) => {
        event.preventDefault()

        scrollToMarker(contentElement, event.target, markerGroupElement)
    })
})
```
