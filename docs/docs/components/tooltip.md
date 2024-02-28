# Tooltip
Tooltip can be used for a little info hint on hover or focus.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/tooltip" />

## Usage

::: code-group
```css
@import "winduum/src/components/tooltip.css" layer(components);
```
<<< @/public/examples/component/tooltip/basic.html#body{} [html]
```vue
<script setup>
    import { Tooltip } from '@/components/tooltip'
    import { UiBtn } from '@/components/ui/btn'
</script>

<template>
    <Tooltip aria-label="I am a tooltip!">
        <UiBtn>Tooltip</UiBtn>
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

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/tooltip" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/tooltip" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/component/tooltip/basic.html"></iframe>

<<< @/public/examples/component/tooltip/basic.html#body{}

