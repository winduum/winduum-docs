# Heading
For common heading styles that you can manage from one component across project.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/ui/heading" />

### Usage

```css
@import "winduum/ui/heading/index.css" layer(components);
```

### Tokens

* `sm` <a href="https://github.com/winduum/winduum/blob/main/src/ui/heading/sm.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `lg` <a href="https://github.com/winduum/winduum/blob/main/src/ui/heading/lg.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/ui/heading" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/ui/heading" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/ui/heading" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/heading/basic.html"></iframe>

::: code-group
<<< @/public/examples/ui/heading/basic.html#body{} [html]
```vue
<script setup lang="ts">
    import { UiHeading } from '@/components/ui/heading'
</script>

<template>
    <UiHeading>Heading</UiHeading>
</template>
```
```jsx
import { UiHeading } from '@/components/ui/heading'

export function Example() {
    return (
        <UiHeading>Heading</UiHeading>
    )
}
```
:::

### Small

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/heading/small.html"></iframe>

<<< @/public/examples/ui/heading/small.html#body{}

### Large

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/heading/large.html"></iframe>

<<< @/public/examples/ui/heading/large.html#body{}

### Weight

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/heading/weight.html"></iframe>

<<< @/public/examples/ui/heading/weight.html#body{}
