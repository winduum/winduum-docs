---
description: "Accessible tabs to switch between panels of content."
---

# Tabs
Accessible tabs to switch between panels of content.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/tabs/default.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/tabs" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/tabs" />
* <LinkGh name="winduum-elements" url="https://github.com/winduum/winduum-elements/tree/main/components/tabs" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/tree/main/components/tabs" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/tabs" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/tabs" />

## Styles

### Variants
* <LinkGh name="list" path="components/tabs" />

## Scripts
The Tabs script switches active panels and keeps tab ARIA state in sync.

## Examples

### Default

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/tabs/default.html"></iframe>

::: code-group
<<< @/public/examples/components/tabs/default.html#body{} [winduum-elements]
<<< @/../examples-stimulus/src/pages/components/tabs/default.liquid#body{} [winduum-stimulus]
<<< @/../examples-vue/src/pages/components/tabs/default.vue [winduum-vue]
<<< @/../examples-react/src/pages/components/tabs/default.tsx [winduum-react]
:::

### Custom

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/tabs/custom.html"></iframe>

::: code-group
<<< @/public/examples/components/tabs/custom.html#body{} [winduum-elements]
<<< @/../examples-stimulus/src/pages/components/tabs/custom.liquid#body{} [winduum-stimulus]
<<< @/../examples-vue/src/pages/components/tabs/custom.vue [winduum-vue]
<<< @/../examples-react/src/pages/components/tabs/custom.tsx [winduum-react]
:::

## Accessibility

Tabs follow the [ARIA tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) — triggers use `role="tab"` with `aria-controls` and `aria-selected` inside a `role="tablist"` wrapper, panels use `role="tabpanel"` with `aria-labelledby`. The [`toggleTab`](#toggletab) helper keeps `aria-selected` and `aria-hidden` in sync when switching tabs.

## JavaScript API

### `toggleTab`

* **Type:** `(element: HTMLElement | Element, options?: ToggleTabOptions) => void`
* **Kind:** `sync`

Toggles tab and tab panel aria attributes.

#### ToggleTabOptions

---

##### tabElements

* **Type:** `NodeListOf<Element> | Element[]`
* **Default:** `undefined`

Elements representing tabs.

##### tabPanelElements

* **Type:** `NodeListOf<Element> | Element[]`
* **Default:** `undefined`

Elements representing tab panels.
