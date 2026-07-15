---
description: "Accessible range slider that allows easy selection of a value by sliding a handle."
---

# Range
Accessible range slider that allows easy selection of a value by sliding a handle.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/range/default.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/range" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/range" />
* <LinkGh name="winduum-elements" url="https://github.com/winduum/winduum-elements/tree/main/components/range" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/tree/main/components/range" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/range" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/range" />

## Styles

### Variants
* `default` <a href="https://github.com/winduum/winduum/blob/next/src/components/range/default.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `multi` <a href="https://github.com/winduum/winduum/blob/next/src/components/range/multi.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>

### Props
* <LinkGh name="default" path="components/range/props" />

### Tokens
* `vertical` <a href="https://github.com/winduum/winduum/blob/next/src/components/range/vertical.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>

## Scripts
The Range script updates track CSS variables and linked output values as the slider
changes.

## Examples

### Default

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/range/default.html"></iframe>

::: code-group
<<< @/public/examples/components/range/default.html#body{} [winduum-elements]
<<< @/../examples-stimulus/src/pages/components/range/default.liquid#body{} [winduum-stimulus]
<<< @/../examples-vue/src/pages/components/range/default.vue [winduum-vue]
<<< @/../examples-react/src/pages/components/range/default.tsx [winduum-react]
:::

### Multi

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/range/multi.html"></iframe>

::: code-group
<<< @/public/examples/components/range/multi.html#body{} [winduum-elements]
<<< @/../examples-stimulus/src/pages/components/range/multi.liquid#body{} [winduum-stimulus]
<<< @/../examples-vue/src/pages/components/range/multi.vue [winduum-vue]
<<< @/../examples-react/src/pages/components/range/multi.tsx [winduum-react]
:::

### Vertical

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/range/vertical.html"></iframe>

::: code-group
<<< @/public/examples/components/range/vertical.html#body{} [winduum-elements]
<<< @/../examples-stimulus/src/pages/components/range/vertical.liquid#body{} [winduum-stimulus]
<<< @/../examples-vue/src/pages/components/range/vertical.vue [winduum-vue]
<<< @/../examples-react/src/pages/components/range/vertical.tsx [winduum-react]
:::

## JavaScript API

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
