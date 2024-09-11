# Switch
<br>
<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/switch" />

### Usage

```css
@import "winduum/src/components/switch/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="components/switch" />
* <LinkGh name="interactive" path="components/switch" />

### Props
* <LinkGh name="default-props" path="components/switch" />
* <LinkGh name="interactive-props" path="components/switch" />

### Tokens
* <LinkGh name="invalid" path="components/switch" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/switch" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/switch" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/switch" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/switch/basic.html"></iframe>

::: code-group
<<< @/public/examples/components/switch/basic.html#body{} [html]
```vue
<script setup lang="ts">
    import { UiSwitch } from '@/components/switch'
</script>

<template>
    <UiSwitch class="x-switch">
        <input type="checkbox">
        Switch
    </UiSwitch>
</template>
```
```jsx
import { UiSwitch } from '@/components/switch'

export function Example() {
    return (
        <UiSwitch class="x-switch">
            <input type="checkbox" />
            Switch
        </UiSwitch>
    )
}
```
:::

### Small

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/switch/small.html"></iframe>

<<< @/public/examples/components/switch/small.html#body{}

### Large

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/switch/large.html"></iframe>

<<< @/public/examples/components/switch/large.html#body{}

### Disabled

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/switch/disabled.html"></iframe>

<<< @/public/examples/components/switch/disabled.html#body{}
