---
description: "Default constrains for media elements such as img, video, iframe, object or svg"
---

# Image
Default constrains for media elements such as `img`, `video`, `iframe`, `object` or `svg`

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/image/ratio.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/image" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/image" />
* <LinkGh name="winduum-elements" url="https://github.com/winduum/winduum-elements/tree/main/components/image" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/tree/main/components/image" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/image" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/image" />

## Styles

### Variants
* <LinkGh name="default" path="components/image" />

### Tokens
* <LinkGh name="avatar" path="components/image" />

## Examples

### Ratio

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/image/ratio.html"></iframe>

::: code-group
<<< @/public/examples/components/image/ratio.html#body{} [winduum]
```vue [winduum-vue]
<script setup lang="ts">
    import { Image } from '@/components/image'
</script>

<template>
    <Image>
        <img class="aspect-[3/2]" src="https://img.logoipsum.com/250.svg" loading="lazy" alt="">
    </Image>
</template>
```
```jsx [winduum-react]
import { Image } from '@/components/image'

export function Example() {
    return (
        <Image>
            <img className="aspect-[3/2]" src="https://img.logoipsum.com/250.svg" loading="lazy" alt="" />
        </Image>
    )
}
```
:::

### Rounded

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/image/rounded.html"></iframe>

<<< @/public/examples/components/image/rounded.html#body{}

### Avatar

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/image/avatar.html"></iframe>

<<< @/public/examples/components/image/avatar.html#body{}

### Skeleton

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/image/transparent.html"></iframe>

<<< @/public/examples/components/image/transparent.html#body{}

### Iframe

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/image/iframe.html" style="height: 25rem"></iframe>

<<< @/public/examples/components/image/iframe.html#body{}

<style>
    iframe {
        height: 20rem
    }
</style>
