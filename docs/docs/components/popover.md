# Popover
Popover can be used for dropdowns and other popovers when element is clicked and focused.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/popover" />

## Usage

::: code-group
```css
@import "winduum/src/components/popover.css" layer(components);
```
```vue
<script setup>
    import { ref } from 'vue'
    import { Popover, PopoverContent } from 'winduum-vue/components/popover'
    import { UiBtn } from 'winduum-vue/components/ui/btn'
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

::: info
<UsageInfo />
:::

### Variants
* <LinkGh name="default" path="components/popover" />
* <LinkGh name="content" path="components/popover" />
  
### Style tokens
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
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/popover" /> <small>(soon)</small>

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/component/popover/basic.html"></iframe>

<<< @/public/examples/component/popover/basic.html#body{}

### Hover

<iframe onload="this.style.visibility = 'visible';" src="/examples/component/popover/hover.html"></iframe>

<<< @/public/examples/component/popover/hover.html#body{}

