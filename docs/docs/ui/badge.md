# Badge
<br>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/ui/badge" />

### Usage

```css
@import "winduum/src/ui/badge/index.css" layer(components);
```

### Variants

* <LinkGh name="default" path="ui/badge" />

### Tokens
* `bordered` <a href="https://github.com/winduum/winduum/blob/main/src/ui/badge/bordered.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `muted` <a href="https://github.com/winduum/winduum/blob/main/src/ui/badge/muted.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `sm` <a href="https://github.com/winduum/winduum/blob/main/src/ui/badge/sm.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `lg` <a href="https://github.com/winduum/winduum/blob/main/src/ui/badge/lg.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `square` <a href="https://github.com/winduum/winduum/blob/main/src/ui/badge/square.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `circle` <a href="https://github.com/winduum/winduum/blob/main/src/ui/badge/circle.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>

### Props
* <LinkGh name="default-props" path="ui/badge" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/ui/badge" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/ui/badge" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/ui/badge" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/badge/basic.html"></iframe>

::: code-group
<<< @/public/examples/ui/badge/basic.html#body{} [html]
```vue
<script setup lang="ts">
    import { UiBadge } from '@/components/ui/badge'
</script>

<template>
  <UiBadge>Badge</UiBadge>
  <UiBadge class="rounded-full">Badge</UiBadge>
</template>
```
```jsx
import { UiBadge } from "@/components/ui/badge"

export function Example() {
    return (
        <>
            <UiBadge>Badge</UiBadge>
            <UiBadge className="rounded-full">Badge</UiBadge>
        </>
    )
}
```
:::

### Flat

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/badge/flat.html"></iframe>

<<< @/public/examples/ui/badge/flat.html#body{}

### Bordered

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/badge/outline.html"></iframe>

<<< @/public/examples/ui/badge/outline.html#body{}

### Muted

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/badge/muted.html"></iframe>

<<< @/public/examples/ui/badge/muted.html#body{}

### Small

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/badge/small.html"></iframe>

<<< @/public/examples/ui/badge/small.html#body{}

### Large

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/badge/large.html"></iframe>

<<< @/public/examples/ui/badge/large.html#body{}

### Square

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/badge/square.html"></iframe>

<<< @/public/examples/ui/badge/square.html#body{}

### Circle

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/badge/circle.html"></iframe>

<<< @/public/examples/ui/badge/circle.html#body{}

### Icon

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/badge/icon.html"></iframe>

<<< @/public/examples/ui/badge/icon.html#body{}

### Custom

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/badge/custom.html"></iframe>

<<< @/public/examples/ui/badge/custom.html#body{}
<<< @/public/examples/ui/badge/custom.html#style{css}

You can also extend the badge with any TailwindCSS class to customize it

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/badge/tailwind.html"></iframe>

<<< @/public/examples/ui/badge/tailwind.html#body{}

<br>

### Group

You can group badges into groups via `ui-group` component.

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/badge/group.html"></iframe>

<<< @/public/examples/ui/badge/group.html#body{}
