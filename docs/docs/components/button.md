# Button
<br>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/button" />

### Usage

```css
@import "winduum/src/components/btn/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="components/btn" />
* <LinkGh name="interactive" path="components/btn" />

### Tokens
* `bordered` <a href="https://github.com/winduum/winduum/blob/main/src/components/btn/bordered.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `muted` <a href="https://github.com/winduum/winduum/blob/main/src/components/btn/muted.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `raised` <a href="https://github.com/winduum/winduum/blob/main/src/components/btn/raised.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `ghosted` <a href="https://github.com/winduum/winduum/blob/main/src/components/btn/default.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `gradient` <a href="https://github.com/winduum/winduum/blob/main/src/components/btn/gradient.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `gradient-bordered` <a href="https://github.com/winduum/winduum/blob/main/src/components/btn/gradient-bordered.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `sm` <a href="https://github.com/winduum/winduum/blob/main/src/components/btn/sm.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `lg` <a href="https://github.com/winduum/winduum/blob/main/src/components/btn/lg.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `wide` <a href="https://github.com/winduum/winduum/blob/main/src/components/btn/wide.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `square` <a href="https://github.com/winduum/winduum/blob/main/src/components/btn/square.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `circle` <a href="https://github.com/winduum/winduum/blob/main/src/components/btn/circle.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `loading` <a href="https://github.com/winduum/winduum/blob/main/src/components/btn/loading.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `hover-fill` <a href="https://github.com/winduum/winduum/blob/main/src/components/btn/hover-fill.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>

### Props
* <LinkGh name="default-props" path="components/button" />
* <LinkGh name="interactive-props" path="components/button" />
* <LinkGh name="loading-props" path="components/button" />


### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/btn" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/btn" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/btn" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/btn/basic.html"></iframe>

::: code-group
<<< @/public/examples/components/btn/basic.html#body{} [html]
```vue
<script setup lang="ts">
    import { UiBtn } from '@/components/btn'
</script>

<template>
  <UiBtn>Button</UiBtn>
  <UiBtn class="rounded-full">Button</UiBtn>
</template>
```
```jsx
import { UiBtn } from "@/components/btn"

export function Example() {
    return (
        <>
            <UiBtn>Button</UiBtn>
            <UiBtn className="rounded-full">Button</UiBtn>
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

### Gradient

You can create gradient buttons with [TailwindCSS](https://tailwindcss.com/docs/gradient-color-stops) gradient classes

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/btn/gradient.html"></iframe>

<<< @/public/examples/components/btn/gradient.html#body{}

### Small

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/btn/small.html"></iframe>

<<< @/public/examples/components/btn/small.html#body{}

### Large

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/btn/large.html"></iframe>

<<< @/public/examples/components/btn/large.html#body{}

### Wide

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/btn/wide.html"></iframe>

<<< @/public/examples/components/btn/wide.html#body{}

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
<button class="x-btn">Button</button>
```
```css
.x-btn {
    --x-btn-height: 4rem;
    --x-btn-py: 1rem;
    --x-btn-px: 1rem;
    --x-btn-border-radius: 0;
    --x-btn-font-size: 1.15rem;
    --x-btn-font-weight: 700;
    --x-btn-bg: yellow;
    --x-btn-color: #333;
    --x-btn-hover-opacity: 0.4;
    --x-btn-focus-opacity: 0.8;
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
