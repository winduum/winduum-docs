---
description: "Provides a broadly compatible scroll carousel built with native CSS scroll snapping."
---

# Carousel
Provides a scroll carousel that uses the native CSS `scroll-snap` property.

The carousel is CSS-first — scrolling, snapping and layout are handled by CSS. The optional JavaScript layer adds navigation, pagination, counters, progress, autoplay and drag helpers.

::: info Experimental version
An [experimental Carousel](/docs/components/carousel-experimental) is also available. It follows emerging native carousel APIs more closely, but browser support is still incomplete and not all required APIs have polyfills. Use this stable version when broad browser compatibility is required.
:::

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/carousel/full.html" style="height: 620px; margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/carousel" />

## Installation
Follow the instructions for your integration:

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/carousel" />
* <LinkGh name="winduum-elements" url="https://github.com/winduum/winduum-elements/tree/main/components/carousel" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/tree/next/components/carousel" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/tree/next/src/components/carousel" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/tree/next/src/components/carousel" />

## Styles

### Variants
* <LinkGh name="default" path="components/carousel" />
* <LinkGh name="content" path="components/carousel" />

## Scripts
The Carousel script keeps counters, progress, pagination and scroll-edge state in sync. Navigation can move by one item or scroll directly to an item by index.

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/carousel/basic.html" style="height: 620px"></iframe>

::: code-group
<<< @/public/examples/components/carousel/basic.html#body{} [winduum-elements]
<<< @/../examples-stimulus/src/pages/components/carousel/basic.liquid#body{} [winduum-stimulus]
<<< @/../examples-vue/src/pages/components/carousel/basic.vue [winduum-vue]
<<< @/../examples-react/src/pages/components/carousel/basic.tsx [winduum-react]
:::

### Full

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/carousel/full.html" style="height: 620px"></iframe>

::: code-group
<<< @/public/examples/components/carousel/full.html#body{} [winduum-elements]
<<< @/../examples-stimulus/src/pages/components/carousel/full.liquid#body{} [winduum-stimulus]
<<< @/../examples-vue/src/pages/components/carousel/full.vue [winduum-vue]
<<< @/../examples-react/src/pages/components/carousel/full.tsx [winduum-react]
:::

## JavaScript API

Low-level helpers used by `winduum-elements`, `winduum-stimulus`, `winduum-vue` and `winduum-react` — you can also use them to build your own integration.

### `scrollTo`

* **Type:** `(element: HTMLElement | Element, index?: number) => void`
* **Kind:** `sync`

Scrolls to a carousel item by its index.

### `scrollNext`

* **Type:** `(element: HTMLElement | Element) => void`
* **Kind:** `sync`

Scrolls to the next item based on the active index set by `observeCarousel`.

### `scrollPrev`

* **Type:** `(element: HTMLElement | Element) => void`
* **Kind:** `sync`

Scrolls to the previous item based on the active index set by `observeCarousel`.

### `getItemCount`

* **Type:** `(element: HTMLElement | Element, scrollWidth?: number, mathFloor?: boolean) => number`
* **Kind:** `sync`

Returns the number of possible carousel positions.

### `observeCarousel`

* **Type:** `(element: HTMLElement | Element, options?: ObserveCarouselOptions) => IntersectionObserver`
* **Kind:** `sync`

Observes carousel items, toggles a visibility attribute and stores `_observer` and `_activeIndex` on the content element.

#### `ObserveCarouselOptions`

##### `visibleAttribute`

* **Type:** `string`
* **Default:** `data-visible`

Attribute added to carousel items while they intersect the carousel viewport.

##### `observerOptions`

* **Type:** `IntersectionObserverInit`
* **Default:** `{ threshold: 0.75 }`

Additional configuration for the underlying `IntersectionObserver`.

### `dragCarousel`

* **Type:** `(element: HTMLElement | Element, options?: DragCarouselOptions) => void`
* **Kind:** `sync`

Adds mouse dragging on devices with a fine pointer.

#### `DragCarouselOptions`

##### `activeAttribute`

* **Type:** `string`
* **Default:** `data-grabbing`

### `paginationCarousel`

* **Type:** `(element: HTMLElement | Element, options?: PaginationCarouselOptions) => void`
* **Kind:** `sync`

Creates pagination items and wires them to the carousel.

#### `PaginationCarouselOptions`

##### `element`

* **Type:** `HTMLElement | Element`
* **Default:** `undefined`

##### `itemContent`

* **Type:** `string`
* **Default:** `<div aria-hidden="true"></div>`

##### `activeAttribute`

* **Type:** `string`
* **Default:** `data-active`

### `autoplayCarousel`

* **Type:** `(element: HTMLElement | Element, options?: AutoplayCarouselOptions) => void`
* **Kind:** `sync`

Automatically advances the carousel and restarts from the beginning after the final item.

#### `AutoplayCarouselOptions`

##### `delay`

* **Type:** `number`
* **Default:** `4000`

Delay in milliseconds.

##### `pauseElements`

* **Type:** `(HTMLElement | Element)[]`
* **Default:** `[]`

Elements that pause autoplay while hovered.

### `scrollCarousel`

* **Type:** `(element: HTMLElement | Element, options?: ScrollCarouselOptions) => void`
* **Kind:** `sync`

Updates pagination, progress and counter state after scrolling.

#### `ScrollCarouselOptions`

##### `pagination`

* **Type:** `PaginationCarouselOptions`
* **Default:** `{ activeAttribute: 'data-active' }`

##### `progressElement`

* **Type:** `HTMLProgressElement | Element`
* **Default:** `undefined`

##### `counterMinElement`

* **Type:** `HTMLElement | Element`
* **Default:** `undefined`

##### `counterMaxElement`

* **Type:** `HTMLElement | Element`
* **Default:** `undefined`
