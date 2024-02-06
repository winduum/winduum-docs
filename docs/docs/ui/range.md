# Range
Accessible range slider that allows easy selection of a value by sliding a handle.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/ui/range" />

### Usage

::: code-group
```css
@import "winduum/src/ui/range/index.css" layer(components);
```
```js
import { setValue } from 'winduum/src/ui/range'

const rangeSlider = document.querySelector('#rangeSlider')

setValue(rangeSlider)
rangeSlider.addEventListener('input', ({ currentTarget }) => setValue(currentTarget))
```
:::

### Variants
* `default` <a href="https://github.com/winduum/winduum/blob/main/src/ui/range/default.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `multi` <a href="https://github.com/winduum/winduum/blob/main/src/ui/range/multi.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>

### Props
* <LinkGh name="default-props" path="ui/range" />

### Tokens
* `vertical` <a href="https://github.com/winduum/winduum/blob/main/src/ui/range/vertical.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>

## Examples

### Default

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/range/default.html"></iframe>

::: code-group
<<< @/public/examples/ui/range/default.html#body{} [html]
<<< @/../examples/src/pages/ui/range/default.liquid#js{} [js]
:::

### Multi

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/range/multi.html"></iframe>

::: code-group
<<< @/public/examples/ui/range/multi.html#body{} [html]
<<< @/../examples/src/pages/ui/range/multi.liquid#js{} [js]
:::


### Vertical

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/range/vertical.html"></iframe>

::: code-group
<<< @/public/examples/ui/range/vertical.html#body{} [html]
<<< @/../examples/src/pages/ui/range/vertical.liquid#js{} [js]
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
* **Default:** `.ui-range`

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
