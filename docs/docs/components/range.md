# Range
Accessible range slider that allows easy selection of a value by sliding a handle.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/range" />

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
* `default` <a href="https://github.com/winduum/winduum/blob/next/src/components/range/default.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `multi` <a href="https://github.com/winduum/winduum/blob/next/src/components/range/multi.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>

### Props
* <LinkGh name="default" path="components/range/props" />

### Tokens
* `vertical` <a href="https://github.com/winduum/winduum/blob/next/src/components/range/vertical.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/range" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/range" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/range" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/blob/main/components/range" />

## Examples

### Default

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/range/default.html"></iframe>

::: code-group
<<< @/public/examples/components/range/default.html#body{} [html]
<<< @/../examples/src/pages/components/range/default.liquid#js{} [js]
```vue
<script setup lang="ts">
    import { Range } from '@/components/range'
</script>

<template>
    <Range>
        <input type="range" value="0" step="10" max="100" min="0" aria-labelledby="single" id="range-single">
    </Range>
</template>
```
```jsx
import { Range } from '@/components/range'

export function Example() {
    return (
        <Range>
            <input type="range" value="0" step="10" max="100" min="0" aria-labelledby="single" id="range-single" />
        </Range>
    )
}
```
:::

### Multi

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/range/multi.html"></iframe>

::: code-group
<<< @/public/examples/components/range/multi.html#body{} [html]
<<< @/../examples/src/pages/components/range/multi.liquid#js{} [js]
:::


### Vertical

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/range/vertical.html"></iframe>

::: code-group
<<< @/public/examples/components/range/vertical.html#body{} [html]
<<< @/../examples/src/pages/components/range/vertical.liquid#js{} [js]
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

##### min

* **Type:** `number`
* **Default:** `undefined`

---

##### max

* **Type:** `number`
* **Default:** `undefined`

---

<br>

### setValue

* **Type:** `(element: HTMLInputElement, options: SetValueOptions) => void`
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

* **Type:** `(element: HTMLInputElement, options: SetOutputOptions) => void`
* **Kind:** `sync`

#### SetOutputOptions

---

##### lang

* **Type:** `string`
* **Default:** `document.documentElement.lang`

---

##### formatOptions

* **Type:** `Intl.NumberFormatOptions`
* **Default:** `{ style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 }`
