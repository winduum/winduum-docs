# Compare
Side-by-side comparison slider component.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/compare" />

### Usage

```css
@import "winduum/src/components/compare/index.css" layer(components);
```
### Variants
* <LinkGh name="default" path="components/compare" />

## Examples

### Default

<iframe onload="this.style.visibility = 'visible';" src="/examples/component/compare/default.html" style="height: 420px"></iframe>

::: code-group
<<< @/public/examples/component/compare/default.html#body{} [html]
<<< @/../examples/src/pages/component/compare/default.liquid#js{} [js]
:::

### Text

<iframe onload="this.style.visibility = 'visible';" src="/examples/component/compare/text.html"></iframe>

::: code-group
<<< @/public/examples/component/compare/text.html#body{} [html]
<<< @/../examples/src/pages/component/compare/text.liquid#js{} [js]
:::

## Javascript API

### setPosition

* **Type:** `(Event<HTMLInputElement>, options: PositionOptions) => void`
* **Kind:** `sync`

#### PositionOptions

---

##### selector

* **Type:** `string`
* **Default:** `.c-compare`

---

##### positionProperty

* **Type:** `string`
* **Default:** `--c-compare-position`

---

### setKeyboardStep

* **Type:** `(KeyboardEvent<HTMLInputElement>, step: number) => void`
* **Kind:** `sync`


### setMouseStep

* **Type:** `(MouseEvent<HTMLInputElement>, step: number) => void`
* **Kind:** `sync`

