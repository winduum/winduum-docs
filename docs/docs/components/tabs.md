# Tabs
<br>
<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/tabs" />

### Usage

```css
@import "winduum/src/components/tabs/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="components/tabs" />

## Examples

### Default

<iframe onload="this.style.visibility = 'visible';" src="/examples/component/tabs/default.html"></iframe>

::: code-group
<<< @/public/examples/component/tabs/default.html#body{} [html]
<<< @/../examples/src/pages/component/tabs/default.liquid#js{} [js]
:::

### Custom

<iframe onload="this.style.visibility = 'visible';" src="/examples/component/tabs/custom.html"></iframe>

::: code-group
<<< @/public/examples/component/tabs/custom.html#body{} [html]
<<< @/../examples/src/pages/component/tabs/custom.liquid#js{} [js]
:::

## Javascript API

### `toggleTab`

* **Type:** `(element: HTMLElement | Element, options?: ToggleTabOptions) => void`
* **Kind:** `sync`

Toggles tab and tab panel aria attributes.

#### ToggleTabOptions

---

##### tabElements

* **Type:** `NodeListOf<Element>`
* **Default:** `undefined`

Elements representing tabs.

##### tabPanelElements

* **Type:** `NodeListOf<Element>`
* **Default:** `undefined`

Elements representing tab panels.
