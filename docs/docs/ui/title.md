# Title
For common title styles that you can manage from one component across project.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/ui/title" />

### Usage

```css
@import "winduum/src/ui/title/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="ui/title" />

### Props
* <LinkGh name="default-props" path="ui/title" />

### Tokens
* `sm` <a href="https://github.com/winduum/winduum/blob/main/src/ui/title/sm.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `lg` <a href="https://github.com/winduum/winduum/blob/main/src/ui/title/lg.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/ui/title" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/ui/title" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/ui/title" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/title/basic.html"></iframe>

::: code-group
<<< @/public/examples/ui/title/basic.html#body{} [html]
```vue
<script setup lang="ts">
    import { UiTitle } from '@/components/ui/title'
</script>

<template>
    <UiTitle>Title</UiTitle>
</template>
```
```jsx
import { UiTitle } from '@/components/ui/title'

export function Example() {
    return (
        <UiTitle>Title</UiTitle>
    )
}
```
:::

### Small

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/title/small.html"></iframe>

<<< @/public/examples/ui/title/small.html#body{}

### Large

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/title/large.html"></iframe>

<<< @/public/examples/ui/title/large.html#body{}

### Weight

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/title/weight.html"></iframe>

<<< @/public/examples/ui/title/weight.html#body{}

### Uppercase

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/title/uppercase.html"></iframe>

<<< @/public/examples/ui/title/uppercase.html#body{}

### Color

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/title/color.html"></iframe>

<<< @/public/examples/ui/title/color.html#body{}
