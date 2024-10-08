# Check
Check supports `checkbox` and `radio` **input** types

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/check" />

### Usage

```css
@import "winduum/src/components/check/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="components/check" />
* <LinkGh name="interactive" path="components/check" />
* <LinkGh name="invalid" path="components/check" />

### Props
* <LinkGh name="default" path="components/check/props" />
* <LinkGh name="interactive" path="components/check/props" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/check" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/check" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/check" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/checkbox/basic.html"></iframe>

::: code-group
<<< @/public/examples/components/checkbox/basic.html#body{} [html]
```vue
<script setup lang="ts">
    import { Check } from '@/components/check'
</script>

<template>
    <Check>
        <input type="checkbox">
        Checkbox
    </Check>
    <Check>
        <input type="checkbox">
    </Check>
</template>
```
```jsx
import { Check } from "@/components/check"

export function Example() {
    return (
        <>
            <Check>
                <input type="checkbox" />
                Checkbox
            </Check>
            <Check>
                <input type="checkbox" />
            </Check>
        </>
    )
}
```
:::

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/radio/basic.html"></iframe>

::: code-group
<<< @/public/examples/components/radio/basic.html#body{} [html]
```vue
<script setup lang="ts">
    import { UiCheck } from '@/components/check'
</script>

<template>
    <UiCheck>
        <input type="radio">
        Radio
    </UiCheck>
    <UiCheck>
        <input type="radio">
    </UiCheck>
</template>
```
```jsx
import { UiCheck } from "@/components/check"

export function Example() {
    return (
        <>
            <UiCheck>
                <input type="radio" />
                Radio
            </UiCheck>
            <UiCheck>
                <input type="radio" />
            </UiCheck>
        </>
    )
}
```
:::


### Label

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/checkbox/label.html"></iframe>

<<< @/public/examples/components/checkbox/label.html#body{}

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/radio/label.html"></iframe>

<<< @/public/examples/components/radio/label.html#body{}

### Required

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/checkbox/required.html"></iframe>

<<< @/public/examples/components/checkbox/required.html#body{}

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/radio/required.html"></iframe>

<<< @/public/examples/components/radio/required.html#body{}

### Disabled

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/checkbox/disabled.html"></iframe>

<<< @/public/examples/components/checkbox/disabled.html#body{}

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/radio/disabled.html"></iframe>

<<< @/public/examples/components/radio/disabled.html#body{}

### Validation

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/checkbox/validation.html"></iframe>

<<< @/public/examples/components/checkbox/validation.html#body{}

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/radio/validation.html"></iframe>

<<< @/public/examples/components/radio/validation.html#body{}
