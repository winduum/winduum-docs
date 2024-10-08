# Color
Color supports `checkbox` and `radio` **input** types for displaying selected color.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/color" />

### Usage

```css
@import "winduum/src/components/color/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="components/color" />
* <LinkGh name="interactive" path="components/color" />

### Props
* <LinkGh name="default" path="components/color/props" />
* <LinkGh name="interactive" path="components/color/props" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/color" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/color" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/color" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/color/basic.html"></iframe>

::: code-group
<<< @/public/examples/components/color/basic.html#body{} [html]
```vue
<script setup lang="ts">
    import { Color } from '@/components/color'
</script>

<template>
    <Color style="color: red">
        <input type="checkbox" aria-label="Red">
    </Color>
    <Color style="color: blue">
        <input type="checkbox" aria-label="Blue">
    </Color>
    <Color style="color: red; --x-color-secondary: blue;">
        <input type="checkbox" aria-label="Red & Blue">
    </Color>
</template>
```
```jsx
import { Color } from "@/components/color"

export function Example() {
    return (
        <>
            <Color style="color: red">
                <input type="checkbox" aria-label="Red" />
            </Color>
            <Color style="color: blue">
                <input type="checkbox" aria-label="Blue" />
            </Color>
            <Color style="color: red; --x-color-secondary: blue;">
                <input type="checkbox" aria-label="Red & Blue" />
            </Color>
        </>
    )
}
```
:::

### Disabled

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/color/disabled.html"></iframe>

<<< @/public/examples/components/color/disabled.html#body{}

