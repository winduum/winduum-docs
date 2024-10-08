# Badge
<br>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/badge" />

### Usage

```css
@import "winduum/src/components/badge/index.css" layer(components);
```

### Variants

* <LinkGh name="default" path="components/badge" />

### Props
* <LinkGh name="default" path="components/badge/props" />

### Tokens
* `bordered` <a href="https://github.com/winduum/winduum/blob/main/src/components/badge/bordered.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `muted` <a href="https://github.com/winduum/winduum/blob/main/src/components/badge/muted.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `sm` <a href="https://github.com/winduum/winduum/blob/main/src/components/badge/sm.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `lg` <a href="https://github.com/winduum/winduum/blob/main/src/components/badge/lg.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `square` <a href="https://github.com/winduum/winduum/blob/main/src/components/badge/square.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `circle` <a href="https://github.com/winduum/winduum/blob/main/src/components/badge/circle.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/badge" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/badge" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/badge" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/badge/basic.html"></iframe>

::: code-group
<<< @/public/examples/components/badge/basic.html#body{} [html]
```vue
<script setup lang="ts">
    import { Badge } from '@/components/badge'
</script>

<template>
  <Badge>Badge</Badge>
  <Badge class="rounded-full">Badge</Badge>
</template>
```
```jsx
import { Badge } from "@/components/badge"

export function Example() {
    return (
        <>
            <Badge>Badge</Badge>
            <Badge className="rounded-full">Badge</Badge>
        </>
    )
}
```
:::

### Flat

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/badge/flat.html"></iframe>

<<< @/public/examples/components/badge/flat.html#body{}

### Bordered

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/badge/outline.html"></iframe>

<<< @/public/examples/components/badge/outline.html#body{}

### Muted

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/badge/muted.html"></iframe>

<<< @/public/examples/components/badge/muted.html#body{}

### Small

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/badge/small.html"></iframe>

<<< @/public/examples/components/badge/small.html#body{}

### Large

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/badge/large.html"></iframe>

<<< @/public/examples/components/badge/large.html#body{}

### Square

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/badge/square.html"></iframe>

<<< @/public/examples/components/badge/square.html#body{}

### Circle

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/badge/circle.html"></iframe>

<<< @/public/examples/components/badge/circle.html#body{}

### Icon

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/badge/icon.html"></iframe>

<<< @/public/examples/components/badge/icon.html#body{}

### Custom

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/badge/custom.html"></iframe>

<<< @/public/examples/components/badge/custom.html#body{}
<<< @/public/examples/components/badge/custom.html#style{css}

You can also extend the badge with any TailwindCSS class to customize it

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/badge/tailwind.html"></iframe>

<<< @/public/examples/components/badge/tailwind.html#body{}

<br>

### Group

You can group badges into groups via `x-group` component.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/badge/group.html"></iframe>

<<< @/public/examples/components/badge/group.html#body{}
