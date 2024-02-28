# Check
Check supports `checkbox` and `radio` **input** types

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/ui/check" />

### Usage

```css
@import "winduum/src/ui/check/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="ui/check" />
* <LinkGh name="interactive" path="ui/check" />

### Tokens
* <LinkGh name="invalid" path="ui/check" />

### Props
* <LinkGh name="default-props" path="ui/check" />
* <LinkGh name="interactive-props" path="ui/check" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/ui/check" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/checkbox/basic.html"></iframe>

::: code-group
<<< @/public/examples/ui/checkbox/basic.html#body{} [html]
```vue
<script setup lang="ts">
    import { UiCheck } from '@/components/ui/check'
</script>

<template>
    <UiCheck>
        <input type="checkbox">
        Checkbox
    </UiCheck>
    <UiCheck>
        <input type="checkbox">
    </UiCheck>
</template>
```
```jsx
import { UiCheck } from "@/components/ui/check"

export function Example() {
    return (
        <>
            <UiCheck>
                <input type="checkbox" />
                Checkbox
            </UiCheck>
            <UiCheck>
                <input type="checkbox" />
            </UiCheck>
        </>
    )
}
```
:::

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/radio/basic.html"></iframe>

::: code-group
<<< @/public/examples/ui/radio/basic.html#body{} [html]
```vue
<script setup lang="ts">
    import { UiCheck } from '@/components/ui/check'
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
import { UiCheck } from "@/components/ui/check"

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

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/checkbox/label.html"></iframe>

<<< @/public/examples/ui/checkbox/label.html#body{}

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/radio/label.html"></iframe>

<<< @/public/examples/ui/radio/label.html#body{}

### Required

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/checkbox/required.html"></iframe>

<<< @/public/examples/ui/checkbox/required.html#body{}

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/radio/required.html"></iframe>

<<< @/public/examples/ui/radio/required.html#body{}

### Disabled

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/checkbox/disabled.html"></iframe>

<<< @/public/examples/ui/checkbox/disabled.html#body{}

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/radio/disabled.html"></iframe>

<<< @/public/examples/ui/radio/disabled.html#body{}

### Validation

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/checkbox/validation.html"></iframe>

<<< @/public/examples/ui/checkbox/validation.html#body{}

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/radio/validation.html"></iframe>

<<< @/public/examples/ui/radio/validation.html#body{}
