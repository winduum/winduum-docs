# Label
<br>
<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/label" />

### Usage

```css
@import "winduum/src/components/label/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="components/label" />

### Props
* <LinkGh name="default-props" path="components/label" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/label" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/label" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/label" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/input/label.html"></iframe>

::: code-group
<<< @/public/examples/components/input/label.html#body{} [html]
```vue
<script setup lang="ts">
    import { UiLabel } from '@/components/label'
</script>

<template>
    <UiLabel for="input">Label</UiLabel>
</template>
```
```jsx
import { UiLabel } from '@/components/label'

export function Example() {
    return (
        <UiLabel for="input">Label</UiLabel>
    )
}
```
:::