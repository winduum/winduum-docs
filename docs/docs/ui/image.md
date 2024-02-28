# Image
Default constrains for media elements such as `img`, `video`, `iframe`, `object` or `svg`

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/ui/image" />

### Usage

```css
@import "winduum/src/ui/image/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="ui/image" />
* <LinkGh name="avatar" path="ui/image" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/ui/image" />

## Examples

### Ratio

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/image/ratio.html"></iframe>

::: code-group
<<< @/public/examples/ui/image/ratio.html#body{} [html]
```vue
<script setup lang="ts">
    import { UiImage } from '@/components/ui/image'
</script>

<template>
    <UiImage>
        <img class="aspect-[3/2]" src="https://img.logoipsum.com/250.svg" loading="lazy" alt="">
    </UiImage>
</template>
```
```jsx
import { UiImage } from '@/components/ui/image'

export function Example() {
    return (
        <UiImage>
            <img className="aspect-[3/2]" src="https://img.logoipsum.com/250.svg" loading="lazy" alt="" />
        </UiImage>
    )
}
```
:::

### Rounded

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/image/rounded.html"></iframe>

<<< @/public/examples/ui/image/rounded.html#body{}

### Avatar

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/image/avatar.html"></iframe>

<<< @/public/examples/ui/image/avatar.html#body{}

### Skeleton

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/image/transparent.html"></iframe>

<<< @/public/examples/ui/image/transparent.html#body{}

### Iframe

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/image/iframe.html" style="height: 25rem"></iframe>

<<< @/public/examples/ui/image/iframe.html#body{}

<style>
    iframe {
        height: 20rem
    }
</style>
