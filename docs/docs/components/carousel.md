# Carousel
Provides a scroll carousel that uses native CSS `scroll-snap` property.<br>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/carousel" />

### Usage
::: code-group
```css
@import "winduum/src/components/carousel/index.css" layer(components);
```
<<< @/public/examples/component/carousel/basic.html#body{} [html]
<<< @/../examples/src/pages/component/carousel/basic.liquid#js{} [js]
:::

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/component/carousel/basic.html" style="height: 620px"></iframe>

::: code-group
<<< @/public/examples/component/carousel/basic.html#body{} [html]
<<< @/../examples/src/pages/component/carousel/basic.liquid#js{} [js]
:::

### Full

<iframe onload="this.style.visibility = 'visible';" src="/examples/component/carousel/full.html" style="height: 620px"></iframe>

::: code-group
<<< @/public/examples/component/carousel/full.html#body{} [html]
<<< @/../examples/src/pages/component/carousel/full.liquid#js{} [js]
:::


## Javascript API

### `scrollTo`

* **Type:** `(element: HTMLElement | Element, index: number) => void`
* **Kind:** `sync`

Scroll to a snap item by its index.

### `scrollNext`

* **Type:** `(element: HTMLElement | Element) => void`
* **Kind:** `sync`

Scroll to a next snap item.

### `scrollPrev`

* **Type:** `(element: HTMLElement | Element) => void`
* **Kind:** `sync`

Scroll to a previous snap item.

### `getItemCount`

* **Type:** `(element: HTMLElement | Element, scrollWidth: number, mathFloor: boolean) => number`
* **Kind:** `sync`

Get number of possible scrolls inside the carousel.


### `observeCarousel`

* **Type:** `(element: HTMLElement | Element, options?: ObserveCarouselOptions) => void`
* **Kind:** `sync`

Adds an observer for the carousel. Adds properties `_observer` and `_activeIndex` to the DOM of the carousel `element`.

#### ObserveCarouselOptions

---

##### visibleClass

* **Type:** `string`
* **Default:** `visible`

A class that is added to the carousel items once they are visible.

---

##### observerOptions

* **Type:** `IntersectionObserverInit`
* **Default:** `{ threshold: 0.5 }`

Additional [options](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options) confugration for the observer.

---

### `dragCarousel`

* **Type:** `(element: HTMLElement | Element, options?: DragCarouselOptions) => void`
* **Kind:** `sync`

Adds a mouse dragging capability to the carousel.

#### DragCarouselOptions

---

##### activeClass

* **Type:** `string`
* **Default:** `grabbing`

---

### `paginationCarousel`

* **Type:** `(element: HTMLElement | Element, options?: PaginationCarouselOptions) => void`
* **Kind:** `sync`

Inserts pagination indicators for the carousel to the desired element.

#### PaginationCarouselOptions

---

##### element

* **Type:** `HTMLElement | Element`
* **Default:** `undefined`

---

##### itemContent

* **Type:** `string`
* **Default:** `<div aria-hidden="true"></div>`

---

##### activeClass

* **Type:** `string`
* **Default:** `active`

---

### `autoplayCarousel`

* **Type:** `(element: HTMLElement | Element, options?: AutoplayCarouselOptions) => void`
* **Kind:** `sync`

Adds an autoplay for the carousel.

#### AutoplayCarouselOptions

---

##### delay

* **Type:** `number`
* **Default:** `4000`

Delay in ms.

---

##### pauseElements

* **Type:** `HTMLElement[] | Element[]`
* **Default:** `[]`

Which elements should pause the autoplay upon hover.

---

### `scrollCarousel`

* **Type:** `(element: HTMLElement | Element, options?: ScrollCarouselOptions) => void`
* **Kind:** `sync`

A helper function that updates various carousel states upon scroll.

#### ScrollCarouselOptions

---

##### observe

* **Type:** `ObserveCarouselOptions`
* **Default:** `undefined`

---

##### pagination

* **Type:** `PaginationCarouselOptions`
* **Default:** `{ activeClass: 'active' }`

---

##### progressElement

* **Type:** `HTMLProgressElement | Element`
* **Default:** `undefined`

---

##### counterMinElement

* **Type:** `HTMLElement | Element`
* **Default:** `undefined`

---

##### counterMaxElement

* **Type:** `HTMLElement | Element`
* **Default:** `undefined`
