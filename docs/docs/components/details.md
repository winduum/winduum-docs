# Details

An accessible accordion or toggle component for `details` and `summary` elements.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/details/default.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/details" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/details" />

## Styles

### Variants
* <LinkGh name="default" path="components/details" />

## Examples

### Default

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/details/default.html"></iframe>

::: code-group
<<< @/public/examples/components/details/default.html#body{} [winduum]
:::

### Checkbox

You can also control details with a checkbox inside `summary` — only a tiny inline script is needed to sync the checkbox state.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/details/checkbox.html" style="height: 500px;"></iframe>

::: code-group
<<< @/public/examples/components/details/checkbox.html#body{} [winduum]
:::

### Accordion

Exclusive accordions use the native `name` attribute — details elements sharing the same `name` close each other automatically.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/details/accordion.html" style="height: 500px;"></iframe>

<<< @/public/examples/components/details/accordion.html#body{}
