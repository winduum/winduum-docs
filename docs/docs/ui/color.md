# Color
Color supports `checkbox` and `radio` **input** types for displaying selected color.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/ui/color" />

### Usage

```css
@import "winduum/src/ui/color/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="ui/color" />
* <LinkGh name="interactive" path="ui/color" />

### Props
* <LinkGh name="default-props" path="ui/color" />
* <LinkGh name="interactive-props" path="ui/color" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/ui/color" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/ui/color" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/ui/color" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/color/basic.html"></iframe>

::: code-group
<<< @/public/examples/ui/color/basic.html#body{} [html]
```vue
<script setup lang="ts">
    import { UiColor } from '@/components/ui/color'
</script>

<template>
    <UiColor style="color: red">
        <input type="checkbox" aria-label="Red">
    </UiColor>
    <UiColor style="color: blue">
        <input type="checkbox" aria-label="Blue">
    </UiColor>
    <UiColor style="color: red; --ui-color-secondary: blue;">
        <input type="checkbox" aria-label="Red & Blue">
    </UiColor>
</template>
```
```jsx
import { UiColor } from "@/components/ui/color"

export function Example() {
    return (
        <>
            <UiColor style="color: red">
                <input type="checkbox" aria-label="Red" />
            </UiColor>
            <UiColor style="color: blue">
                <input type="checkbox" aria-label="Blue" />
            </UiColor>
            <UiColor style="color: red; --ui-color-secondary: blue;">
                <input type="checkbox" aria-label="Red & Blue" />
            </UiColor>
        </>
    )
}
```
:::

### Disabled

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/color/disabled.html"></iframe>

<<< @/public/examples/ui/color/disabled.html#body{}

