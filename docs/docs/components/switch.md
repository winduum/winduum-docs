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
* <LinkGh name="invalid" path="components/switch" />

### Props
* <LinkGh name="default" path="components/switch/props" />
* <LinkGh name="interactive" path="components/switch/props" />

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
    import { Switch } from '@/components/switch'
</script>

<template>
    <Switch class="x-switch">
        <input type="checkbox">
        Switch
    </Switch>
</template>
```
```jsx
import { Switch } from '@/components/switch'

export function Example() {
    return (
        <Switch class="x-switch">
            <input type="checkbox" />
            Switch
        </Switch>
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
