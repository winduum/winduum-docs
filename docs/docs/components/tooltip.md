---
description: "Tooltip can be used for a little info hint on hover or focus."
---

# Tooltip
Tooltip can be used for a little info hint on hover or focus.

It's a pure CSS solution — the tooltip text comes from the `aria-label` attribute and is rendered via the `::before` pseudo-element, so it stays accessible and needs no JavaScript. Placement is controlled with the `tooltip-*` tokens and appearance can be customized via the `--x-tooltip-*` props.

For complete accessibility, prefer the [Popover tooltip variant](/docs/components/popover#interest-popover) using the [`interestfor`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/interestfor) attribute.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/tooltip/basic.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/tooltip" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/tooltip" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/tooltip" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/tooltip" />

## Styles

### Variants
* <LinkGh name="default" path="components/tooltip" />

### Props
* <LinkGh name="default" path="components/tooltip/props" />

### Tokens
* `tooltip-top`
* `tooltip-bottom`
* `tooltip-left`
* `tooltip-right`

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/tooltip/basic.html"></iframe>

::: code-group
<<< @/public/examples/components/tooltip/basic.html#body{} [winduum]
```vue [winduum-vue]
<script setup>
    import { Tooltip } from '@/components/tooltip'
    import { Button } from '@/components/button'
</script>

<template>
    <Tooltip aria-label="I am a tooltip!">
        <Button>Tooltip</Button>
    </Tooltip>
</template>
```
```jsx [winduum-react]

```
:::
