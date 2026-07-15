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
```html [winduum-stimulus]
<div class="x-carousel flex gap-4 items-center w-full" data-controller="x-carousel">
    <button
        class="x-button circle muted"
        data-x-carousel-target="prev"
        data-action="x-carousel#scrollPrev"
        aria-label="Prev"
        disabled
    >
        Prev
    </button>
    <div
        class="x-carousel-content gap-2 w-full"
        data-x-carousel-target="content"
        data-action="scroll->x-carousel#scroll"
        tabindex="-1"
    >
        <div class="x-image w-full rounded-md aspect-square">
            <img src="https://placehold.co/512" alt="" loading="lazy">
        </div>
        <div class="x-image w-full rounded-md aspect-square">
            <img src="https://placehold.co/512" alt="" loading="lazy">
        </div>
    </div>
    <button
        class="x-button circle muted"
        data-x-carousel-target="next"
        data-action="x-carousel#scrollNext"
        aria-label="Next"
    >
        Next
    </button>
</div>
```
```vue [winduum-vue]
<script setup lang="ts">
    import { ref } from 'vue'
    import { Carousel } from '@/components/carousel'

    const contentElement = ref<HTMLElement>()
    const prevElement = ref<HTMLButtonElement>()
    const nextElement = ref<HTMLButtonElement>()
</script>

<template>
    <Carousel
        v-slot="{ scrollPrev, scrollNext }"
        :refs="{ contentElement, prevElement, nextElement }"
        class="flex gap-4 items-center w-full"
    >
        <button ref="prevElement" class="x-button circle muted" aria-label="Prev" disabled @click="scrollPrev">
            Prev
        </button>
        <div ref="contentElement" class="x-carousel-content gap-2 w-full" tabindex="-1">
            <div class="x-image w-full rounded-md aspect-square">
                <img src="https://placehold.co/512" alt="" loading="lazy">
            </div>
            <div class="x-image w-full rounded-md aspect-square">
                <img src="https://placehold.co/512" alt="" loading="lazy">
            </div>
        </div>
        <button ref="nextElement" class="x-button circle muted" aria-label="Next" @click="scrollNext">
            Next
        </button>
    </Carousel>
</template>
```
```jsx [winduum-react]
import { useRef } from 'react'
import { Carousel } from '@/components/carousel'

export function Example() {
    const contentElement = useRef<HTMLDivElement>(null)
    const prevElement = useRef<HTMLButtonElement>(null)
    const nextElement = useRef<HTMLButtonElement>(null)

    return (
        <Carousel
            className="flex gap-4 items-center w-full"
            refs={{ contentElement, prevElement, nextElement }}
        >
            {({ scrollPrev, scrollNext }) => (
                <>
                    <button ref={prevElement} className="x-button circle muted" aria-label="Prev" disabled onClick={scrollPrev}>
                        Prev
                    </button>
                    <div ref={contentElement} className="x-carousel-content gap-2 w-full" tabIndex={-1}>
                        <div className="x-image w-full rounded-md aspect-square">
                            <img src="https://placehold.co/512" alt="" loading="lazy" />
                        </div>
                        <div className="x-image w-full rounded-md aspect-square">
                            <img src="https://placehold.co/512" alt="" loading="lazy" />
                        </div>
                    </div>
                    <button ref={nextElement} className="x-button circle muted" aria-label="Next" onClick={scrollNext}>
                        Next
                    </button>
                </>
            )}
        </Carousel>
    )
}
```
:::

### Full

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/carousel/full.html" style="height: 620px"></iframe>

::: code-group
<<< @/public/examples/components/carousel/full.html#body{} [winduum-elements]
```html [winduum-stimulus]
<div class="x-carousel flex flex-col gap-4" data-controller="x-carousel" role="region" aria-roledescription="carousel" aria-label="Carousel gallery">
    <div class="flex justify-center" aria-live="polite">
        <span data-x-carousel-target="counterMin"></span>/<span data-x-carousel-target="counterMax"></span>
    </div>
    <div class="flex gap-4 items-center">
        <button class="x-button circle muted" data-x-carousel-target="prev" data-action="x-carousel#scrollPrev" aria-label="Prev" disabled>
            Prev
        </button>
        <div class="x-carousel-content gap-4 w-full" data-x-carousel-target="content" data-action="scroll->x-carousel#scroll" tabindex="-1">
            <div class="x-image rounded-md">
                <img src="https://placehold.co/160x240" alt="" loading="lazy" width="160" height="240">
            </div>
            <div class="x-image rounded-md">
                <img src="https://placehold.co/160x240" alt="" loading="lazy" width="160" height="240">
            </div>
            <div class="x-image rounded-md">
                <img src="https://placehold.co/160x240" alt="" loading="lazy" width="160" height="240">
            </div>
        </div>
        <button class="x-button circle muted" data-x-carousel-target="next" data-action="x-carousel#scrollNext" aria-label="Next">
            Next
        </button>
    </div>
    <nav class="justify-center flex gap-1.5 h-4 py-4" data-x-carousel-target="pagination" aria-label="Carousel navigation"></nav>
    <progress class="x-progress sm" value="0" max="100" data-x-carousel-target="progress" aria-label="Carousel progress"></progress>
</div>
```
```vue [winduum-vue]
<script setup lang="ts">
    import { ref } from 'vue'
    import { Carousel } from '@/components/carousel'

    const contentElement = ref<HTMLElement>()
    const counterMinElement = ref<HTMLElement>()
    const counterMaxElement = ref<HTMLElement>()
    const paginationElement = ref<HTMLElement>()
    const progressElement = ref<HTMLProgressElement>()
    const prevElement = ref<HTMLButtonElement>()
    const nextElement = ref<HTMLButtonElement>()

    const slides = [1, 2, 3, 4, 5, 6]
</script>

<template>
    <Carousel
        v-slot="{ scrollPrev, scrollNext }"
        :refs="{ contentElement, counterMinElement, counterMaxElement, paginationElement, progressElement, prevElement, nextElement }"
        class="flex flex-col gap-4"
        role="region"
        aria-roledescription="carousel"
        aria-label="Carousel gallery"
    >
        <div class="flex justify-center" aria-live="polite">
            <span ref="counterMinElement"></span>/<span ref="counterMaxElement"></span>
        </div>
        <div class="flex gap-4 items-center">
            <button ref="prevElement" class="x-button circle muted" aria-label="Prev" disabled @click="scrollPrev">
                Prev
            </button>
            <div ref="contentElement" class="x-carousel-content gap-4 w-full" tabindex="-1">
                <div v-for="slide in slides" :key="slide" class="x-image rounded-md">
                    <img src="https://placehold.co/160x240" alt="" loading="lazy" width="160" height="240">
                </div>
            </div>
            <button ref="nextElement" class="x-button circle muted" aria-label="Next" @click="scrollNext">
                Next
            </button>
        </div>
        <nav ref="paginationElement" class="justify-center flex gap-1.5 h-4 py-4" aria-label="Carousel navigation"></nav>
        <progress ref="progressElement" class="x-progress sm" value="0" max="100" aria-label="Carousel progress"></progress>
    </Carousel>
</template>
```
```jsx [winduum-react]
import { useRef } from 'react'
import { Carousel } from '@/components/carousel'

const slides = [1, 2, 3, 4, 5, 6]

export function Example() {
    const contentElement = useRef<HTMLDivElement>(null)
    const counterMinElement = useRef<HTMLSpanElement>(null)
    const counterMaxElement = useRef<HTMLSpanElement>(null)
    const paginationElement = useRef<HTMLElement>(null)
    const progressElement = useRef<HTMLProgressElement>(null)
    const prevElement = useRef<HTMLButtonElement>(null)
    const nextElement = useRef<HTMLButtonElement>(null)

    const refs = {
        contentElement,
        counterMinElement,
        counterMaxElement,
        paginationElement,
        progressElement,
        prevElement,
        nextElement
    }

    return (
        <Carousel className="flex flex-col gap-4" refs={refs} role="region" aria-roledescription="carousel" aria-label="Carousel gallery">
            {({ scrollPrev, scrollNext }) => (
                <>
                    <div className="flex justify-center" aria-live="polite">
                        <span ref={counterMinElement}></span>/<span ref={counterMaxElement}></span>
                    </div>
                    <div className="flex gap-4 items-center">
                        <button ref={prevElement} className="x-button circle muted" aria-label="Prev" disabled onClick={scrollPrev}>
                            Prev
                        </button>
                        <div ref={contentElement} className="x-carousel-content gap-4 w-full" tabIndex={-1}>
                            {slides.map((slide) => (
                                <div key={slide} className="x-image rounded-md">
                                    <img src="https://placehold.co/160x240" alt="" loading="lazy" width="160" height="240" />
                                </div>
                            ))}
                        </div>
                        <button ref={nextElement} className="x-button circle muted" aria-label="Next" onClick={scrollNext}>
                            Next
                        </button>
                    </div>
                    <nav ref={paginationElement} className="justify-center flex gap-1.5 h-4 py-4" aria-label="Carousel navigation"></nav>
                    <progress ref={progressElement} className="x-progress sm" value="0" max="100" aria-label="Carousel progress"></progress>
                </>
            )}
        </Carousel>
    )
}
```
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
