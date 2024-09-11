# Info
Small informative component.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/info" />

### Usage

```css
@import "winduum/src/components/info/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="components/info" />

### Props
* <LinkGh name="default-props" path="components/info" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/info" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/info" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/info" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/info/basic.html"></iframe>

::: code-group
<<< @/public/examples/components/info/basic.html#body{} [html]
```vue
<script setup lang="ts">
    import { UiInfo } from '@/components/info'
</script>

<template>
    <UiInfo>Info text</UiInfo>
</template>
```
```jsx
import { UiInfo } from '@/components/info'

export function Example() {
    return (
        <UiInfo>Info text</UiInfo>
    )
}
```
:::
