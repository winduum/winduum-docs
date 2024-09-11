# Tooltip
Tooltip can be used for a little info hint on hover or focus.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/tooltip" />

## Usage

::: code-group
```css
@import "winduum/src/components/tooltip/index.css" layer(components);
```
<<< @/public/examples/components/tooltip/basic.html#body{} [html]
```vue
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
:::

### Variants
* <LinkGh name="default" path="components/tooltip" />

### Tokens
* `top`
* `bottom`
* `left`
* `right`

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/tooltip" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/tooltip" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/tooltip" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/tooltip/basic.html"></iframe>

<<< @/public/examples/components/tooltip/basic.html#body{}

