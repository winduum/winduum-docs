---
description: "Side-by-side comparison slider component."
---

# Compare
Side-by-side comparison slider component.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/compare/default.html" style="height: 420px; margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/compare" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/compare" />
* <LinkGh name="winduum-elements" url="https://github.com/winduum/winduum-elements/tree/main/components/compare" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/tree/main/components/compare" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/compare" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/compare" />

## Styles

### Variants
* <LinkGh name="default" path="components/compare" />

## Examples

### Default

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/compare/default.html" style="height: 420px"></iframe>

::: code-group
<<< @/public/examples/components/compare/default.html#body{} [winduum-elements]
```html [winduum-stimulus]
<div class="x-compare rounded size-fit accent-light" data-controller="x-compare">
    <input type="range" step="0.1" aria-hidden="true" data-action="input->x-compare#setPosition keydown->x-compare#setKeyboardStep mousedown->x-compare#setMouseStep">
    <div class="x-button circle" aria-hidden="true">
        <svg class="size-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none">
            <path class="-translate-x-1.5 scale-75 origin-center" stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            <path class="translate-x-1.5 scale-75 origin-center" stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    </div>
    <div class="x-image">
        <img src="https://placehold.co/896x504/333/webp" alt="Image 1" loading="lazy" width="896" height="504">
        <img src="https://placehold.co/896x504/888/webp" alt="Image 2" loading="lazy" width="896" height="504">
    </div>
</div>
```
```vue [winduum-vue]
<script setup lang="ts">
    import { Compare } from '@/components/compare'
</script>

<template>
    <Compare class="rounded size-fit accent-light">
        <input type="range" step="0.1" aria-hidden="true">
        <div class="x-button circle" aria-hidden="true">
            <svg class="size-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none">
                <path class="-translate-x-1.5 scale-75 origin-center" stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                <path class="translate-x-1.5 scale-75 origin-center" stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </div>
        <div class="x-image">
            <img src="https://placehold.co/896x504/333/webp" alt="Image 1" loading="lazy" width="896" height="504">
            <img src="https://placehold.co/896x504/888/webp" alt="Image 2" loading="lazy" width="896" height="504">
        </div>
    </Compare>
</template>
```
```jsx [winduum-react]
import { Compare } from '@/components/compare'

export function Example() {
    return (
        <Compare className="rounded size-fit accent-light">
            <input type="range" step="0.1" aria-hidden="true" />
            <div className="x-button circle" aria-hidden="true">
                <svg className="size-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none">
                    <path className="-translate-x-1.5 scale-75 origin-center" strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    <path className="translate-x-1.5 scale-75 origin-center" strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
            <div className="x-image">
                <img src="https://placehold.co/896x504/333/webp" alt="Image 1" loading="lazy" width="896" height="504" />
                <img src="https://placehold.co/896x504/888/webp" alt="Image 2" loading="lazy" width="896" height="504" />
            </div>
        </Compare>
    )
}
```
:::

### Text

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/compare/text.html"></iframe>

<<< @/public/examples/components/compare/text.html#body{}

## JavaScript API

Low-level helpers used by `winduum-elements` and `winduum-stimulus` — you can use them to wire the component manually or build your own integration.

All three helpers work with the `<input type="range">` element inside `.x-compare` — attach them to its events:

```js
import { setPosition, setKeyboardStep, setMouseStep } from 'winduum/src/components/compare'

document.querySelectorAll('.x-compare input[type="range"]').forEach((inputElement) => {
    inputElement.addEventListener('input', (event) => setPosition(event.target))

    inputElement.addEventListener('keydown', (event) => setKeyboardStep(event.target, event.key))

    inputElement.addEventListener('mousedown', (event) => setMouseStep(event.target))
})
```

### `setPosition`

* **Type:** `(element: HTMLInputElement, options?: SetPositionOptions) => void`
* **Kind:** `sync`

Sets the `--x-compare-position` CSS property on the closest `.x-compare` element to the current input value. Call it on the `input` event.

```js
inputElement.addEventListener('input', (event) => setPosition(event.target))
```

#### SetPositionOptions

---

##### selector

* **Type:** `string`
* **Default:** `.x-compare`

---

##### positionProperty

* **Type:** `string`
* **Default:** `--x-compare-position`

---

### `setKeyboardStep`

* **Type:** `(element: HTMLInputElement, key: string, step?: string) => void`
* **Kind:** `sync`
* **Default step:** `'10'`

Sets a larger input `step` when `ArrowLeft` or `ArrowRight` is pressed, so keyboard users move the slider in bigger increments. Call it on the `keydown` event.

```js
inputElement.addEventListener('keydown', (event) => setKeyboardStep(event.target, event.key))
```

### `setMouseStep`

* **Type:** `(element: HTMLInputElement, step?: string) => void`
* **Kind:** `sync`
* **Default step:** `'0.1'`

Restores a fine input `step` for smooth mouse dragging. Call it on the `mousedown` event.

```js
inputElement.addEventListener('mousedown', (event) => setMouseStep(event.target))
```
