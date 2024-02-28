# Label
<br>
<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/ui/label" />

### Usage

```css
@import "winduum/src/ui/label/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="ui/label" />

### Props
* <LinkGh name="default-props" path="ui/label" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/ui/label" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/label.html"></iframe>

::: code-group
<<< @/public/examples/ui/input/label.html#body{} [html]
```vue
<script setup lang="ts">
    import { UiLabel } from '@/components/ui/label'
</script>

<template>
    <UiLabel for="input">Label</UiLabel>
</template>
```
```jsx
import { UiLabel } from '@/components/ui/label'

export function Example() {
    return (
        <UiLabel for="input">Label</UiLabel>
    )
}
```
:::
