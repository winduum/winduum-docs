# Switch
Toggle switch built with a `checkbox` **input** type.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/switch/basic.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/switch" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/switch" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/switch" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/switch" />

## Styles

### Variants
* <LinkGh name="default" path="components/switch" />
* <LinkGh name="interactive" path="components/switch" />
* <LinkGh name="invalid" path="components/switch" />

### Props
* <LinkGh name="default" path="components/switch/props" />
* <LinkGh name="interactive" path="components/switch/props" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/switch/basic.html"></iframe>

::: code-group
<<< @/public/examples/components/switch/basic.html#body{} [winduum]
```vue [winduum-vue]
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
```jsx [winduum-react]
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
