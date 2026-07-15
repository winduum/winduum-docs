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
<<< @/../examples-stimulus/src/pages/components/image/ratio.liquid#body{} [winduum-stimulus]
<<< @/../examples-vue/src/pages/components/image/ratio.vue [winduum-vue]
<<< @/../examples-react/src/pages/components/image/ratio.tsx [winduum-react]
:::

### Picture

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/image/picture.html"></iframe>

::: code-group
<<< @/public/examples/components/image/picture.html#body{} [winduum-elements]
<<< @/../examples-stimulus/src/pages/components/image/picture.liquid#body{} [winduum-stimulus]
<<< @/../examples-vue/src/pages/components/image/picture.vue [winduum-vue]
<<< @/../examples-react/src/pages/components/image/picture.tsx [winduum-react]
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
<<< @/public/examples/components/image/skeleton.html#body{} [winduum-elements]
<<< @/../examples-stimulus/src/pages/components/image/skeleton.liquid#body{} [winduum-stimulus]
<<< @/../examples-vue/src/pages/components/image/skeleton.vue [winduum-vue]
<<< @/../examples-react/src/pages/components/image/skeleton.tsx [winduum-react]
:::

### Iframe

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/image/iframe.html" style="height: 25rem"></iframe>

<<< @/public/examples/components/image/iframe.html#body{}

<style>
    iframe {
        height: 20rem
    }
</style>
