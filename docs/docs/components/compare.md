# Compare
Side-by-side comparison slider component.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/compare" />

## Styles

### Variants
* <LinkGh name="default" path="components/compare" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/compare" />
* <LinkGh name="winduum-elements" url="https://github.com/winduum/winduum-elements/tree/main/components/compare" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/tree/main/components/compare" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/tree/main/components/compare" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/tree/main/components/compare" />

## Examples

### Default

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/compare/default.html" style="height: 420px"></iframe>

::: code-group
<<< @/public/examples/components/compare/default.html#body{} [winduum]
```vue [winduum-stimulus]
```
```vue [winduum-vue]
```
```jsx [winduum-react]
```
:::

### Text

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/compare/text.html"></iframe>

::: code-group
<<< @/public/examples/components/compare/text.html#body{} [winduum]
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

* **Type:** `(element: HTMLInputElement, key: string, step?: string) => void`
* **Kind:** `sync`
* **Default step:** `'10'`


### setMouseStep

* **Type:** `(element: HTMLInputElement, step?: string) => void`
* **Kind:** `sync`
* **Default step:** `'0.1'`

