# Image
Default constrains for media elements such as `img`, `video`, `iframe`, `object` or `svg`

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/image" />

### Usage

```css
@import "winduum/src/components/image/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="components/image" />
* <LinkGh name="avatar" path="components/image" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/image" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/image" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/image" />

## Examples

### Ratio

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/image/ratio.html"></iframe>

::: code-group
<<< @/public/examples/ui/image/ratio.html#body{} [html]
```vue
<script setup lang="ts">
    import { UiImage } from '@/components/image'
</script>

<template>
    <UiImage>
        <img class="aspect-[3/2]" src="https://img.logoipsum.com/250.svg" loading="lazy" alt="">
    </UiImage>
</template>
```
```jsx
import { UiImage } from '@/components/image'

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
