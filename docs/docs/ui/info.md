# Info
Small informative component.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/ui/info" />

### Usage

```css
@import "winduum/src/ui/info/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="ui/info" />

### Props
* <LinkGh name="default-props" path="ui/info" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/ui/info" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/ui/info" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/ui/info" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/info/basic.html"></iframe>

::: code-group
<<< @/public/examples/ui/info/basic.html#body{} [html]
```vue
<script setup lang="ts">
    import { UiInfo } from '@/components/ui/info'
</script>

<template>
    <UiInfo>Info text</UiInfo>
</template>
```
```jsx
import { UiInfo } from '@/components/ui/info'

export function Example() {
    return (
        <UiInfo>Info text</UiInfo>
    )
}
```
:::
