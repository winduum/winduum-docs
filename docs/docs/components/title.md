# Title
For common title styles that you can manage from one component across project.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/title" />

### Usage

```css
@import "winduum/src/components/title/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="components/title" />

### Props
* <LinkGh name="default" path="components/title/props" />

### Tokens
* `sm` <a href="https://github.com/winduum/winduum/blob/next/src/components/title/sm.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `lg` <a href="https://github.com/winduum/winduum/blob/next/src/components/title/lg.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/title" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/title" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/title" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/title/basic.html"></iframe>

::: code-group
<<< @/public/examples/components/title/basic.html#body{} [html]
```vue
<script setup lang="ts">
    import { Title } from '@/components/title'
</script>

<template>
    <Title>Title</Title>
</template>
```
```jsx
import { Title } from '@/components/title'

export function Example() {
    return (
        <Title>Title</Title>
    )
}
```
:::

### Small

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/title/small.html"></iframe>

<<< @/public/examples/components/title/small.html#body{}

### Large

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/title/large.html"></iframe>

<<< @/public/examples/components/title/large.html#body{}

### Weight

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/title/weight.html"></iframe>

<<< @/public/examples/components/title/weight.html#body{}

### Uppercase

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/title/uppercase.html"></iframe>

<<< @/public/examples/components/title/uppercase.html#body{}

### Color

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/title/color.html"></iframe>

<<< @/public/examples/components/title/color.html#body{}
