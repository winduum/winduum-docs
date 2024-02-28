# Switch
<br>
<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/ui/switch" />

### Usage

```css
@import "winduum/src/ui/switch/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="ui/switch" />
* <LinkGh name="interactive" path="ui/switch" />

### Props
* <LinkGh name="default-props" path="ui/switch" />
* <LinkGh name="interactive-props" path="ui/switch" />

### Tokens
* <LinkGh name="invalid" path="ui/switch" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/ui/switch" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/switch/basic.html"></iframe>

::: code-group
<<< @/public/examples/ui/switch/basic.html#body{} [html]
```vue
<script setup lang="ts">
    import { UiSwitch } from '@/components/ui/switch'
</script>

<template>
    <UiSwitch class="ui-switch">
        <input type="checkbox">
        Switch
    </UiSwitch>
</template>
```
```jsx
import { UiSwitch } from '@/components/ui/switch'

export function Example() {
    return (
        <UiSwitch class="ui-switch">
            <input type="checkbox" />
            Switch
        </UiSwitch>
    )
}
```
:::

### Small

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/switch/small.html"></iframe>

<<< @/public/examples/ui/switch/small.html#body{}

### Large

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/switch/large.html"></iframe>

<<< @/public/examples/ui/switch/large.html#body{}

### Disabled

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/switch/disabled.html"></iframe>

<<< @/public/examples/ui/switch/disabled.html#body{}
