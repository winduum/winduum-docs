---
description: "Accessible label for form controls such as inputs, selects or textareas."
---

# Label
Accessible label for form controls such as inputs, selects or textareas.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/input/label.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/label" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/label" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/label" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/label" />

## Styles

### Variants
* <LinkGh name="default" path="components/label" />

### Props
* <LinkGh name="default" path="components/label/props" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/input/label.html"></iframe>

::: code-group
<<< @/public/examples/components/input/label.html#body{} [winduum]
```vue [winduum-vue]
<script setup lang="ts">
    import { Label } from '@/components/label'
</script>

<template>
    <Label for="input">Label</Label>
</template>
```
```jsx [winduum-react]
import { Label } from '@/components/label'

export function Example() {
    return (
        <Label for="input">Label</Label>
    )
}
```
:::
