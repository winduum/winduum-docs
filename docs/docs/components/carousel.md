# Carousel
Provides a scroll carousel that uses native CSS `scroll-snap` property.

The carousel is CSS-first — scrolling, snapping and layout are handled by CSS alone.

A small JavaScript layer adds a 1:1 compatible API to
[CSS Native Carousels](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Overflow/Carousels) —
with these APIs you can build a 1:1 implementation of carousels like [chrome.dev/carousel](https://chrome.dev/carousel/)
without using `::scroll-button()`, `::scroll-marker-group` and `::scroll-marker`, with support in all browsers.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/carousel" />

## Styles

### Variants
* <LinkGh name="default" path="components/carousel" />
* <LinkGh name="content" path="components/carousel" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/carousel" />
* <LinkGh name="winduum-elements" url="https://github.com/winduum/winduum-elements/tree/main/components/carousel" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/tree/main/components/carousel" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/tree/main/components/carousel" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/tree/main/components/carousel" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/carousel/basic.html" style="height: 620px"></iframe>

::: code-group
<<< @/public/examples/components/carousel/basic.html#body{} [winduum-elements]
<<< @/public/examples/components/carousel/basic.html#body{} [winduum-stimulus]
```vue [winduum-vue]
```
```vue [winduum-react]
```
:::

### Full

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/carousel/full.html" style="height: 620px"></iframe>

::: code-group
<<< @/public/examples/components/carousel/full.html#body{} [winduum-elements]
<<< @/public/examples/components/carousel/full.html#body{} [winduum-stimulus]
```vue [winduum-vue]
```
```jsx [winduum-react]
```
:::


## Javascript API

Low-level helpers used by `winduum-elements` and `winduum-stimulus` — you can use them to build your own integration.

### `scrollBy`

* **Type:** `(element: HTMLElement, options: { direction?: number, vertical?: boolean, ratio?: number }) => void`
* **Kind:** `sync`

Scrolls the carousel content by a portion of its visible size.
`direction` is `1` (next) or `-1` (prev), `ratio` determines how much of the visible size is scrolled (default `0.85`).

```js
import { scrollBy } from 'winduum/src/components/carousel'

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
