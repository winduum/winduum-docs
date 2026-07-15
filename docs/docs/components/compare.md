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

## Scripts
The Compare script updates the comparison position and adjusts the range step for
keyboard and pointer interaction.

## Examples

### Default

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/compare/default.html" style="height: 420px"></iframe>

::: code-group
<<< @/public/examples/components/compare/default.html#body{} [winduum-elements]
<<< @/../examples-stimulus/src/pages/components/compare/default.liquid#body{} [winduum-stimulus]
<<< @/../examples-vue/src/pages/components/compare/default.vue [winduum-vue]
<<< @/../examples-react/src/pages/components/compare/default.tsx [winduum-react]
:::

### Text

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/compare/text.html"></iframe>

::: code-group
<<< @/public/examples/components/compare/text.html#body{} [winduum-elements]
<<< @/../examples-stimulus/src/pages/components/compare/text.liquid#body{} [winduum-stimulus]
<<< @/../examples-vue/src/pages/components/compare/text.vue [winduum-vue]
<<< @/../examples-react/src/pages/components/compare/text.tsx [winduum-react]
:::

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
