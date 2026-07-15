---
description: "Component used to group a form components."
---

# Field

Component used to group a form components.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/field/basic.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/field" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/field" />
* <LinkGh name="winduum-elements" url="https://github.com/winduum/winduum-elements/tree/main/components/field" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/tree/main/components/field" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/field" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/field" />

## Styles

### Variants
* <LinkGh name="default" path="components/field" />

## Scripts
The Field script validates the field on change and renders the validation message and
icon when the control is invalid.

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/field/basic.html"></iframe>

::: code-group
<<< @/public/examples/components/field/basic.html#body{} [winduum-elements]
<<< @/../examples-stimulus/src/pages/components/field/basic.liquid#body{} [winduum-stimulus]
<<< @/../examples-vue/src/pages/components/field/basic.vue [winduum-vue]
<<< @/../examples-react/src/pages/components/field/basic.tsx [winduum-react]
:::
