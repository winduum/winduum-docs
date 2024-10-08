# Text
Typographic defaults for common wysiwyg content. It's an alternative to [prose](https://tailwindcss.com/docs/typography-plugin).

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/text" />

### Usage

```css
@import "winduum/src/components/text/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="components/text" />

### Props
* <LinkGh name="default" path="components/text/props" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/text" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/text" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/text" />

## Examples

### Text

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/text/text.html"></iframe>

::: code-group
<<< @/public/examples/components/text/text.html#body{} [html]
```vue
<script setup lang="ts">
    import { UiText } from '@/components/text'
</script>

<template>
    <UiText class="x-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget efficitur
            metus. In bibendum nisi et dui <a href="#">sagittis efficitur</a>. Proin porttitor diam at quam
            finibus, quis porttitor turpis ullamcorper. Quisque iaculis imperdiet nunc in
            hendrerit. Nulla facilisi. Sed at sodales ex. Vivamus ornare auctor ligula et
            lobortis. Nunc metus augue, tristique vitae sagittis ac, interdum eu nisl.
            Curabitur aliquet, lectus ut interdum commodo, ipsum elit gravida libero, in
            laoreet lectus nisl a erat. Sed consequat justo pulvinar turpis pharetra mattis.
            Phasellus non pretium libero.</p>
        <p></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </UiText>
</template>
```
```jsx
import { UiText } from '@/components/text'

export function Example() {
    return (
        <UiText class="x-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget efficitur
                metus. In bibendum nisi et dui <a href="#">sagittis efficitur</a>. Proin porttitor diam at quam
                finibus, quis porttitor turpis ullamcorper. Quisque iaculis imperdiet nunc in
                hendrerit. Nulla facilisi. Sed at sodales ex. Vivamus ornare auctor ligula et
                lobortis. Nunc metus augue, tristique vitae sagittis ac, interdum eu nisl.
                Curabitur aliquet, lectus ut interdum commodo, ipsum elit gravida libero, in
                laoreet lectus nisl a erat. Sed consequat justo pulvinar turpis pharetra mattis.
                Phasellus non pretium libero.</p>
            <p></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </UiText>
    )
}
```
:::

### Headings

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/text/headings.html"></iframe>

<<< @/public/examples/components/text/headings.html#body{}

### Lists

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/text/lists.html"></iframe>

<<< @/public/examples/components/text/lists.html#body{}

### Blockquote

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/text/blockquote.html"></iframe>

<<< @/public/examples/components/text/blockquote.html#body{}

### Table

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/text/table.html"></iframe>

<<< @/public/examples/components/text/table.html#body{}

### Figure

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/text/figure.html"></iframe>

<<< @/public/examples/components/text/figure.html#body{}

### Iframe

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/text/iframe.html"></iframe>

<<< @/public/examples/components/text/iframe.html#body{}

<style>
    iframe {
        height: 20rem
    }
</style>
