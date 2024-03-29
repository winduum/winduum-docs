# Text
Typographic defaults for common wysiwyg content. It's an alternative to [prose](https://tailwindcss.com/docs/typography-plugin).

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/ui/text" />

### Usage

```css
@import "winduum/ui/text.css" layer(components);
```

### Variants
* <LinkGh name="default" path="ui/text" />

### Props
* <LinkGh name="default-props" path="ui/text" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/ui/text" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/ui/text" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/ui/text" />

## Examples

### Text

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/text/text.html"></iframe>

::: code-group
<<< @/public/examples/ui/text/text.html#body{} [html]
```vue
<script setup lang="ts">
    import { UiText } from '@/components/ui/text'
</script>

<template>
    <UiText class="ui-text">
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
import { UiText } from '@/components/ui/text'

export function Example() {
    return (
        <UiText class="ui-text">
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

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/text/headings.html"></iframe>

<<< @/public/examples/ui/text/headings.html#body{}

### Lists

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/text/lists.html"></iframe>

<<< @/public/examples/ui/text/lists.html#body{}

### Blockquote

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/text/blockquote.html"></iframe>

<<< @/public/examples/ui/text/blockquote.html#body{}

### Table

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/text/table.html"></iframe>

<<< @/public/examples/ui/text/table.html#body{}

### Figure

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/text/figure.html"></iframe>

<<< @/public/examples/ui/text/figure.html#body{}

### Iframe

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/text/iframe.html"></iframe>

<<< @/public/examples/ui/text/iframe.html#body{}

<style>
    iframe {
        height: 20rem
    }
</style>
