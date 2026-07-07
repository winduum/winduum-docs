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

## Scripts
The Image script removes the skeleton placeholder once the wrapped media is ready.

## Examples

### Default

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/image/ratio.html"></iframe>

::: code-group
<<< @/public/examples/components/image/ratio.html#body{} [winduum-elements]
```html [winduum-stimulus]
<div class="x-image before:skeleton" data-controller="x-image">
    <img class="aspect-[3/2]" src="https://placehold.co/600x400/webp" loading="lazy" alt="">
</div>
```
```vue [winduum-vue]
<script setup lang="ts">
    import { Image } from '@/components/image'
</script>

<template>
    <Image class="before:skeleton">
        <img class="aspect-[3/2]" src="https://placehold.co/600x400/webp" loading="lazy" alt="">
    </Image>
</template>
```
```jsx [winduum-react]
import { Image } from '@/components/image'

export function Example() {
    return (
        <Image className="before:skeleton">
            <img className="aspect-[3/2]" src="https://placehold.co/600x400/webp" loading="lazy" alt="" />
        </Image>
    )
}
```
:::

### Picture

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/image/picture.html"></iframe>

::: code-group
<<< @/public/examples/components/image/picture.html#body{} [winduum-elements]
```html [winduum-stimulus]
<picture class="x-image before:skeleton" data-controller="x-image">
    <source srcset="https://placehold.co/250x250/333333/webp" media="(min-width: 40rem)">
    <img class="aspect-[3/2]" src="https://placehold.co/150x150/777777/webp" loading="lazy" alt="">
</picture>
```
```vue [winduum-vue]
<script setup lang="ts">
    import { Image } from '@/components/image'
</script>

<template>
    <Image class="before:skeleton" as="picture">
        <source srcset="https://placehold.co/250x250/333333/webp" media="(min-width: 40rem)">
        <img class="aspect-[3/2]" src="https://placehold.co/150x150/777777/webp" loading="lazy" alt="">
    </Image>
</template>
```
```jsx [winduum-react]
import { Image } from '@/components/image'

export function Example() {
    return (
        <Image className="before:skeleton" as="picture">
            <source srcSet="https://placehold.co/250x250/333333/webp" media="(min-width: 40rem)" />
            <img className="aspect-[3/2]" src="https://placehold.co/150x150/777777/webp" loading="lazy" alt="" />
        </Image>
    )
}
```
:::

### Rounded

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/image/rounded.html"></iframe>

```html
<div class="x-image rounded">
    <img class="aspect-square" src="https://picsum.photos/seed/picsum/200/200" loading="lazy" alt="">
</div>
```

### Avatar

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/image/avatar.html"></iframe>

```html
<div class="x-image avatar size-32">
    <span>LB</span>
</div>
```

### Skeleton

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/image/transparent.html"></iframe>

::: code-group
```html [winduum-elements]
<x-image class="x-image before:skeleton">
    <img class="aspect-[3/2]" src="https://picsum.photos/seed/picsum/300/200" loading="lazy" alt="">
</x-image>
```
```html [winduum-stimulus]
<div class="x-image before:skeleton" data-controller="x-image">
    <img class="aspect-[3/2]" src="https://picsum.photos/seed/picsum/300/200" loading="lazy" alt="">
</div>
```
```vue [winduum-vue]
<script setup lang="ts">
    import { Image } from '@/components/image'
</script>

<template>
    <Image class="before:skeleton">
        <img class="aspect-[3/2]" src="https://picsum.photos/seed/picsum/300/200" loading="lazy" alt="">
    </Image>
</template>
```
```jsx [winduum-react]
import { Image } from '@/components/image'

export function Example() {
    return (
        <Image className="before:skeleton">
            <img className="aspect-[3/2]" src="https://picsum.photos/seed/picsum/300/200" loading="lazy" alt="" />
        </Image>
    )
}
```
:::

### Iframe

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/image/iframe.html" style="height: 25rem"></iframe>

```html
<x-image class="x-image">
    <iframe class="aspect-square" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10243.539317839937!2d14.3677486!3d50.0697185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x66f5877a189baf0d!2sTvorba+webov%C3%BDch+str%C3%A1nek+-+New+Logic+Studio!5e0!3m2!1sen!2scz!4v1547215701439" width="600" height="450" frameborder="0" style="border:0" allowfullscreen=""></iframe>
</x-image>
```

<style>
    iframe {
        height: 20rem
    }
</style>
