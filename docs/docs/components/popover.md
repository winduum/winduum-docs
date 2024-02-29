# Popover
Popover can be used for dropdowns and other popovers when element is clicked and focused.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/popover" />

## Usage

::: code-group
```css
@import "winduum/src/components/popover/index.css" layer(components);
```
<<< @/public/examples/component/popover/basic.html#body{} [html]
```vue
<script setup>
    import { ref } from 'vue'
    import { Popover, PopoverContent } from '@/components/popover'
    import { UiBtn } from '@/components/ui/btn'
</script>

<template>
    <Popover>
        <UiBtn>Open Popover</UiBtn>
        <PopoverContent>
            Popover content
        </PopoverContent>
    </Popover>
</template>
```
:::

### Variants
* <LinkGh name="default" path="components/popover" />
* <LinkGh name="content" path="components/popover" />
  
### Tokens
Applicable to `c-popover-content`
* `end`
* `block-end`
* `center`
* `block-center`
* `top`
* `right`
* `left`

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/popover" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/popover" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/popover" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/component/popover/basic.html"></iframe>

<<< @/public/examples/component/popover/basic.html#body{}

### Hover

<iframe onload="this.style.visibility = 'visible';" src="/examples/component/popover/hover.html"></iframe>

<<< @/public/examples/component/popover/hover.html#body{}

