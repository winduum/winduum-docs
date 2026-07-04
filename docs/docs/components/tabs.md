# Tabs
Accessible tabs to switch between panels of content.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/tabs/default.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/tabs" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/tabs" />
* <LinkGh name="winduum-elements" url="https://github.com/winduum/winduum-elements/tree/main/components/tabs" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/tree/main/components/tabs" />

## Styles

### Variants
* <LinkGh name="list" path="components/tabs" />

## Examples

### Default

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/tabs/default.html"></iframe>

::: code-group
<<< @/public/examples/components/tabs/default.html#body{} [winduum]
```html [winduum-elements]

```
```html [winduum-stimulus]

```
:::

### Custom

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/tabs/custom.html"></iframe>

::: code-group
<<< @/public/examples/components/tabs/custom.html#body{} [winduum]
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
