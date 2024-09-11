# Button
<br>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/button" />

### Usage

```css
@import "winduum/src/components/button/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="components/btn" />
* <LinkGh name="interactive" path="components/btn" />

### Props
* <LinkGh name="default" path="components/button/props" />
* <LinkGh name="interactive" path="components/button/props" />

### Tokens
* `bordered` <a href="https://github.com/winduum/winduum/blob/next/src/components/button/bordered.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `muted` <a href="https://github.com/winduum/winduum/blob/next/src/components/button/muted.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `raised` <a href="https://github.com/winduum/winduum/blob/next/src/components/button/raised.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `ghosted` <a href="https://github.com/winduum/winduum/blob/next/src/components/button/default.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `sm` <a href="https://github.com/winduum/winduum/blob/next/src/components/button/sm.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `lg` <a href="https://github.com/winduum/winduum/blob/next/src/components/button/lg.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `square` <a href="https://github.com/winduum/winduum/blob/next/src/components/button/square.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `circle` <a href="https://github.com/winduum/winduum/blob/next/src/components/button/circle.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `fill` <a href="https://github.com/winduum/winduum/blob/next/src/components/button/hover-fill.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>


### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/button" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/button" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/button" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/btn/basic.html"></iframe>

::: code-group
<<< @/public/examples/components/btn/basic.html#body{} [html]
```vue
<script setup lang="ts">
    import { Button } from '@/components/button'
</script>

<template>
  <Button>Button</Button>
  <Button class="rounded-full">Button</Button>
</template>
```
```jsx
import { Button } from "@/components/button"

export function Example() {
    return (
        <>
            <Button>Button</Button>
            <Button className="rounded-full">Button</Button>
        </>
    )
}
```
:::

### Flat

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/btn/flat.html"></iframe>

<<< @/public/examples/components/btn/flat.html#body{}

### Bordered

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/btn/outline.html"></iframe>

<<< @/public/examples/components/btn/outline.html#body{}

### Muted

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/btn/muted.html"></iframe>

<<< @/public/examples/components/btn/muted.html#body{}

### Raised

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/btn/raised.html"></iframe>

<<< @/public/examples/components/btn/raised.html#body{}

### Ghosted

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/btn/text.html"></iframe>

<<< @/public/examples/components/btn/text.html#body{}

### Small

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/btn/small.html"></iframe>

<<< @/public/examples/components/btn/small.html#body{}

### Large

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/btn/large.html"></iframe>

<<< @/public/examples/components/btn/large.html#body{}

### Square

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/btn/square.html"></iframe>

<<< @/public/examples/components/btn/square.html#body{}

### Circle

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/btn/circle.html"></iframe>

<<< @/public/examples/components/btn/circle.html#body{}

### Icon

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/btn/icon.html"></iframe>

<<< @/public/examples/components/btn/icon.html#body{}

### Loading

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/btn/loading.html"></iframe>

<<< @/public/examples/components/btn/loading.html#body{}

### Active

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/btn/active.html"></iframe>

<<< @/public/examples/components/btn/active.html#body{}

### Disabled

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/btn/disabled.html"></iframe>

<<< @/public/examples/components/btn/disabled.html#body{}

### Custom

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/btn/custom.html"></iframe>

```html
<button class="x-custom">Button</button>
```
```css
.x-custom {
  --color-accent: yellow;
  --color-accent-foreground: #333;
  --x-button-block-size: 4rem;
  --x-button-padding-block: 1rem;
  --x-button-padding-inline: 1rem;
  --x-button-border-radius: 0;
  --x-button-font-size: 1.15rem;
  --x-button-font-weight: 700;
  --x-button-hover-opacity: 40%;
  --x-button-focus-opacity: 80%;
}
```

You can also extend the button with any TailwindCSS class to customize it

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/btn/tailwind.html"></iframe>

<<< @/public/examples/components/btn/tailwind.html#body{}

<br>

### Group

You can group buttons into groups via `x-group` component.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/btn/group.html"></iframe>

<<< @/public/examples/components/btn/group.html#body{}
