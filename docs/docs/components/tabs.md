# Tabs
<br>
<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/tabs" />

### Usage

```css
@import "winduum/src/components/tabs/index.css" layer(utilities);
```

### Variants
* <LinkGh name="default" path="components/tabs" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/tabs" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/blob/main/components/tabs" />

## Examples

### Default

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/tabs/default.html"></iframe>

::: code-group
<<< @/public/examples/components/tabs/default.html#body{} [html]
<<< @/../examples/src/pages/components/tabs/default.liquid#js{} [js]
:::

### Custom

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/tabs/custom.html"></iframe>

::: code-group
<<< @/public/examples/components/tabs/custom.html#body{} [html]
<<< @/../examples/src/pages/components/tabs/custom.liquid#js{} [js]
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
