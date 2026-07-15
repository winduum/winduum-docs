---
description: "Typographic defaults for plain text and rich content."
---

# Text
Text provides typographic defaults for plain text. Add the `content` variant for rich text or WYSIWYG content as an alternative to [prose](https://tailwindcss.com/docs/typography-plugin).

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/text/basic.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/text" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/text" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/text" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/text" />

## Styles

### Variants
* <LinkGh name="default" path="components/text" />
* <LinkGh name="content" path="components/text" />

### Props
* <LinkGh name="default" path="components/text/props" />
* <LinkGh name="content" path="components/text/props" />

## Examples

### Basic

Use `x-text` for typographic defaults on a plain text element.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/text/basic.html"></iframe>

::: code-group
<<< @/public/examples/components/text/basic.html#body{} [winduum]
```vue [winduum-vue]
<script setup lang="ts">
    import { Text } from '@/components/text'
</script>

<template>
    <Text as="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget efficitur metus. In bibendum nisi et dui
        sagittis efficitur.
    </Text>
</template>
```
```jsx [winduum-react]
import { Text } from '@/components/text'

export function Example() {
    return (
        <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget efficitur metus. In bibendum nisi et dui
            sagittis efficitur.
        </Text>
    )
}
```
:::

### Content

Add the `content` variant when `x-text` wraps rich content made of nested semantic elements, such as CMS or WYSIWYG output.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/text/content.html"></iframe>

::: code-group
<<< @/public/examples/components/text/content.html#body{} [winduum]
```vue [winduum-vue]
<script setup lang="ts">
    import { Text } from '@/components/text'
</script>

<template>
    <Text class="content">
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
    </Text>
</template>
```
```jsx [winduum-react]
import { Text } from '@/components/text'

export function Example() {
    return (
        <Text className="content">
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
        </Text>
    )
}
```
:::

### Rich

A complete rich-content example combining headings, paragraphs, lists, code blocks, blockquotes, tables, and MathML.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/text/rich.html"></iframe>

<<< @/public/examples/components/text/rich.html#body{}

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
