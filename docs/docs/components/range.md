# Range
Accessible range slider that allows easy selection of a value by sliding a handle.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/range" />

### Usage

::: code-group
```css
@import "winduum/src/components/range/index.css" layer(components);
```
```js
import { setValue } from 'winduum/src/components/range'

const rangeSlider = document.querySelector('#rangeSlider')

setValue(rangeSlider)
rangeSlider.addEventListener('input', ({ currentTarget }) => setValue(currentTarget))
```
:::

### Variants
* `default` <a href="https://github.com/winduum/winduum/blob/main/src/components/range/default.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `multi` <a href="https://github.com/winduum/winduum/blob/main/src/components/range/multi.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>

### Props
* <LinkGh name="default-props" path="components/range" />

### Tokens
* `vertical` <a href="https://github.com/winduum/winduum/blob/main/src/components/range/vertical.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/range" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/range" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/range" />

## Examples

### Default

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/range/default.html"></iframe>

::: code-group
<<< @/public/examples/components/range/default.html#body{} [html]
<<< @/../examples/src/pages/componentss/range/default.liquid#js{} [js]
```vue
<script setup lang="ts">
    import { UiRange } from '@/components/progress'
</script>

<template>
    <UiRange>
        <input type="range" value="0" step="10" max="100" min="0" aria-labelledby="single" id="range-single">
    </UiRange>
</template>
```
```jsx
import { UiProgress } from '@/components/progress'

export function Example() {
    return (
        <UiRange>
            <input type="range" value="0" step="10" max="100" min="0" aria-labelledby="single" id="range-single">
        </UiRange>
    )
}
```
:::

### Multi

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/range/multi.html"></iframe>

::: code-group
<<< @/public/examples/components/range/multi.html#body{} [html]
<<< @/../examples/src/pages/componentss/range/multi.liquid#js{} [js]
:::


### Vertical

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/range/vertical.html"></iframe>

::: code-group
<<< @/public/examples/components/range/vertical.html#body{} [html]
<<< @/../examples/src/pages/componentss/range/vertical.liquid#js{} [js]
:::

## Javascript API

### setTrackProperty

* **Type:** `(options: TrackOptions, track: 'start' | 'end') => void`
* **Kind:** `sync`

#### TrackOptions

---

##### element

* **Type:** `HTMLElement | Element`
* **Default:** `undefined`

---

##### value

* **Type:** `string`
* **Default:** `undefined`

---

##### max

* **Type:** `number`
* **Default:** `undefined`

---

<br>

### setValue

* **Type:** `(target: HTMLInputElement, options: DefaultOptions) => void`
* **Kind:** `sync`

#### DefaultOptions

---

##### selector

* **Type:** `string`
* **Default:** `.x-range`

---

##### track

* **Type:** `string`
* **Default:** `'start' | 'end'`

---

<br>

### setOutputValue

* **Type:** `(target: HTMLInputElement, options: OutputOptions) => void`
* **Kind:** `sync`

#### OutputOptions

---

##### element

* **Type:** `HTMLOutputElement`
* **Default:** `null`

---

##### lang

* **Type:** `string`
* **Default:** `document.documentElement.lang`

---

##### formatOptions

* **Type:** `Intl.NumberFormatOptions`
* **Default:** `{ style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 }`
