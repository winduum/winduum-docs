# Compare

Side-by-side accordion comparison slider component.

<a href="https://github.com/winduum/winduum/blob/main/src/components/field.css" target="_blank" rel="noreferrer" class="winduum-gh-link">View Source <svg><use href="#icon-gh" /></svg></a>

### Single Import

```css
@import "winduum/ui/components/compare.css" layer(components);
```

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

