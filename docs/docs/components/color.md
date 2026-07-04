# Color
Color supports `checkbox` and `radio` **input** types for displaying selected color.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/color/basic.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/color" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/color" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/color" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/color" />

## Styles

### Variants
* <LinkGh name="default" path="components/color" />
* <LinkGh name="interactive" path="components/color" />

### Props
* <LinkGh name="default" path="components/color/props" />
* <LinkGh name="interactive" path="components/color/props" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/color/basic.html"></iframe>

::: code-group
<<< @/public/examples/components/color/basic.html#body{} [winduum]
```vue [winduum-vue]
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
```jsx [winduum-react]
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
