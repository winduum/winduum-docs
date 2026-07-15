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
```html [winduum-stimulus]
<div class="x-carousel-experimental flex gap-4 items-center w-full" data-controller="x-carousel-experimental">
    <button class="x-button circle muted" data-x-carousel-experimental-target="prev" data-action="x-carousel-experimental#scrollPrev" aria-label="Prev" disabled>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
    </button>
    <div class="x-carousel-experimental-content gap-2 w-full" tabindex="-1" data-x-carousel-experimental-target="content">
        <div class="x-image w-full rounded-md aspect-square">
            <img src="https://placehold.co/512" alt="" loading="lazy">
        </div>
        <div class="x-image w-full rounded-md aspect-square">
            <img src="https://placehold.co/512" alt="" loading="lazy">
        </div>
    </div>
    <button class="x-button circle muted" data-x-carousel-experimental-target="next" data-action="x-carousel-experimental#scrollNext" aria-label="Next">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
    </button>
</div>
```
```vue [winduum-vue]
<script setup lang="ts">
    import { ref } from 'vue'
    import { Carousel } from '@/components/carousel-experimental'

    const contentElement = ref<HTMLElement>()
    const prevElement = ref<HTMLButtonElement>()
    const nextElement = ref<HTMLButtonElement>()
</script>

<template>
    <Carousel
        v-slot="{ scrollPrev, scrollNext, toggleScrollState }"
        :refs="{ contentElement, prevElement, nextElement }"
        class="flex gap-4 items-center w-full"
    >
        <button ref="prevElement" class="x-button circle muted" aria-label="Prev" disabled @click="scrollPrev">
            Prev
        </button>
        <div ref="contentElement" class="x-carousel-experimental-content gap-2 w-full" tabindex="-1" @scroll="toggleScrollState">
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
import { Carousel } from '@/components/carousel-experimental'

export function Example() {
    const contentElement = useRef<HTMLDivElement>(null)
    const prevElement = useRef<HTMLButtonElement>(null)
    const nextElement = useRef<HTMLButtonElement>(null)

    return (
        <Carousel className="flex gap-4 items-center w-full" refs={{ contentElement, prevElement, nextElement }}>
            {({ scrollPrev, scrollNext, toggleScrollState }) => (
                <>
                    <button ref={prevElement} className="x-button circle muted" aria-label="Prev" disabled onClick={scrollPrev}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                    <div ref={contentElement} className="x-carousel-experimental-content gap-2 w-full" tabIndex={-1} onScroll={toggleScrollState}>
                        <div className="x-image w-full rounded-md aspect-square">
                            <img src="https://placehold.co/512" alt="" loading="lazy" />
                        </div>
                        <div className="x-image w-full rounded-md aspect-square">
                            <img src="https://placehold.co/512" alt="" loading="lazy" />
                        </div>
                    </div>
                    <button ref={nextElement} className="x-button circle muted" aria-label="Next" onClick={scrollNext}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </>
            )}
        </Carousel>
    )
}
```
:::

### Full

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/carousel-experimental/full.html" style="height: 620px"></iframe>

::: code-group
<<< @/public/examples/components/carousel-experimental/full.html#body{} [winduum-elements]
```html [winduum-stimulus]
<div class="x-carousel-experimental flex flex-col gap-4" data-controller="x-carousel-experimental" role="region" aria-roledescription="carousel" aria-label="Carousel gallery">
    <div class="flex gap-4 items-center">
        <button class="x-button circle muted" data-x-carousel-experimental-target="prev" data-action="x-carousel-experimental#scrollPrev" aria-label="Prev" disabled>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
        </button>
        <div class="x-carousel-experimental-content gap-4 w-full" tabindex="-1" data-x-carousel-experimental-target="content">
            <div class="x-image rounded-md" id="slide-1" data-snapped>
                <img src="https://placehold.co/320x240" alt="" loading="lazy" width="320" height="240">
            </div>
            <div class="x-image rounded-md" id="slide-2">
                <img src="https://placehold.co/320x240" alt="" loading="lazy" width="320" height="240">
            </div>
            <div class="x-image rounded-md" id="slide-3">
                <img src="https://placehold.co/320x240" alt="" loading="lazy" width="320" height="240">
            </div>
            <div class="x-image rounded-md" id="slide-4">
                <img src="https://placehold.co/320x240" alt="" loading="lazy" width="320" height="240">
            </div>
            <div class="x-image rounded-md" id="slide-5">
                <img src="https://placehold.co/320x240" alt="" loading="lazy" width="320" height="240">
            </div>
            <div class="x-image rounded-md" id="slide-6">
                <img src="https://placehold.co/320x240" alt="" loading="lazy" width="320" height="240">
            </div>
        </div>
        <button class="x-button circle muted" data-x-carousel-experimental-target="next" data-action="x-carousel-experimental#scrollNext" aria-label="Next">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
        </button>
    </div>
    <nav class="x-carousel-experimental-marker-group justify-center flex gap-1.5 py-4" data-x-carousel-experimental-target="markerGroup" aria-label="Carousel navigation">
        <a href="#slide-1" class="x-carousel-experimental-marker" aria-label="Slide 1" data-x-carousel-experimental-target="marker" aria-current="true"></a>
        <a href="#slide-2" class="x-carousel-experimental-marker" aria-label="Slide 2" data-x-carousel-experimental-target="marker"></a>
        <a href="#slide-3" class="x-carousel-experimental-marker" aria-label="Slide 3" data-x-carousel-experimental-target="marker"></a>
        <a href="#slide-4" class="x-carousel-experimental-marker" aria-label="Slide 4" data-x-carousel-experimental-target="marker"></a>
        <a href="#slide-5" class="x-carousel-experimental-marker" aria-label="Slide 5" data-x-carousel-experimental-target="marker"></a>
        <a href="#slide-6" class="x-carousel-experimental-marker" aria-label="Slide 6" data-x-carousel-experimental-target="marker"></a>
    </nav>
</div>
```
```vue [winduum-vue]
<script setup lang="ts">
    import { ref } from 'vue'
    import { Carousel } from '@/components/carousel-experimental'

    const contentElement = ref<HTMLElement>()
    const markerGroupElement = ref<HTMLElement>()
    const prevElement = ref<HTMLButtonElement>()
    const nextElement = ref<HTMLButtonElement>()

    const slides = [1, 2, 3, 4, 5, 6]
</script>

<template>
    <Carousel
        v-slot="{ scrollPrev, scrollNext, toggleScrollState, scrollToMarker }"
        :refs="{ contentElement, markerGroupElement, prevElement, nextElement }"
        class="flex flex-col gap-4"
        role="region"
        aria-roledescription="carousel"
        aria-label="Carousel gallery"
    >
        <div class="flex gap-4 items-center">
            <button ref="prevElement" class="x-button circle muted" aria-label="Prev" disabled @click="scrollPrev">
                Prev
            </button>
            <div ref="contentElement" class="x-carousel-experimental-content gap-4 w-full" tabindex="-1" @scroll="toggleScrollState">
                <div
                    v-for="slide in slides"
                    :key="slide"
                    class="x-image rounded-md"
                    :id="`slide-${slide}`"
                    :data-snapped="slide === 1 ? '' : undefined"
                >
                    <img src="https://placehold.co/320x240" alt="" loading="lazy" width="320" height="240">
                </div>
            </div>
            <button ref="nextElement" class="x-button circle muted" aria-label="Next" @click="scrollNext">
                Next
            </button>
        </div>
        <nav ref="markerGroupElement" class="x-carousel-experimental-marker-group justify-center flex gap-1.5 py-4" aria-label="Carousel navigation">
            <a
                v-for="slide in slides"
                :key="slide"
                :href="`#slide-${slide}`"
                class="x-carousel-experimental-marker"
                :aria-label="`Slide ${slide}`"
                :aria-current="slide === 1 ? 'true' : undefined"
                @click="scrollToMarker"
            ></a>
        </nav>
    </Carousel>
</template>
```
```jsx [winduum-react]
import { useRef } from 'react'
import { Carousel } from '@/components/carousel-experimental'

const slides = [1, 2, 3, 4, 5, 6]

export function Example() {
    const contentElement = useRef<HTMLDivElement>(null)
    const markerGroupElement = useRef<HTMLElement>(null)
    const prevElement = useRef<HTMLButtonElement>(null)
    const nextElement = useRef<HTMLButtonElement>(null)

    return (
        <Carousel
            className="flex flex-col gap-4"
            refs={{ contentElement, markerGroupElement, prevElement, nextElement }}
            role="region"
            aria-roledescription="carousel"
            aria-label="Carousel gallery"
        >
            {({ scrollPrev, scrollNext, toggleScrollState, scrollToMarker }) => (
                <>
                    <div className="flex gap-4 items-center">
                        <button ref={prevElement} className="x-button circle muted" aria-label="Prev" disabled onClick={scrollPrev}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </button>
                        <div ref={contentElement} className="x-carousel-experimental-content gap-4 w-full" tabIndex={-1} onScroll={toggleScrollState}>
                            {slides.map((slide) => (
                                <div key={slide} className="x-image rounded-md" id={`slide-${slide}`} data-snapped={slide === 1 ? '' : undefined}>
                                    <img src="https://placehold.co/320x240" alt="" loading="lazy" width="320" height="240" />
                                </div>
                            ))}
                        </div>
                        <button ref={nextElement} className="x-button circle muted" aria-label="Next" onClick={scrollNext}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                    <nav ref={markerGroupElement} className="x-carousel-experimental-marker-group justify-center flex gap-1.5 py-4" aria-label="Carousel navigation">
                        {slides.map((slide) => (
                            <a
                                key={slide}
                                href={`#slide-${slide}`}
                                className="x-carousel-experimental-marker"
                                aria-label={`Slide ${slide}`}
                                aria-current={slide === 1 ? 'true' : undefined}
                                onClick={scrollToMarker}
                            ></a>
                        ))}
                    </nav>
                </>
            )}
        </Carousel>
    )
}
```
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
