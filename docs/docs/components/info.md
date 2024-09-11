# Info
Small informative component.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/info" />

### Usage

```css
@import "winduum/src/components/info/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="components/info" />

### Props
* <LinkGh name="default" path="components/info/props" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/info" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/info" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/info" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/info/basic.html"></iframe>

::: code-group
<<< @/public/examples/components/info/basic.html#body{} [html]
```vue
<script setup lang="ts">
    import { Info } from '@/components/info'
</script>

<template>
    <Info>Info text</Info>
</template>
```
```jsx
import { Info } from '@/components/info'

export function Example() {
    return (
        <Info>Info text</Info>
    )
}
```
:::
