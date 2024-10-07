# Compare
Side-by-side comparison slider component.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/compare" />

### Usage

```css
@import "winduum/src/components/compare/index.css" layer(components);
```
### Variants
* <LinkGh name="default" path="components/compare" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/compare" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/blob/main/components/compare" />

## Examples

### Default

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/compare/default.html" style="height: 420px"></iframe>

::: code-group
<<< @/public/examples/components/compare/default.html#body{} [html]
<<< @/../examples/src/pages/components/compare/default.liquid#js{} [js]
:::

### Text

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/compare/text.html"></iframe>

::: code-group
<<< @/public/examples/components/compare/text.html#body{} [html]
<<< @/../examples/src/pages/components/compare/text.liquid#js{} [js]
:::

## Javascript API

### setPosition

* **Type:** `(element: HTMLInputElement, options?: SetPositionOptions) => void`
* **Kind:** `sync`

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

### setKeyboardStep

* **Type:** `(element: HTMLInputElement, key: string, step?: number) => void`
* **Kind:** `sync`


### setMouseStep

* **Type:** `(element: HTMLInputElement, step?: number) => void`
* **Kind:** `sync`

