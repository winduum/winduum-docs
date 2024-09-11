# Notice
<br>
<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/notice" />

### Usage

```css
@import "winduum/src/components/notice/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="components/notice" />

### Props
* <LinkGh name="default-props" path="components/notice" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/notice" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/notice" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/notice" />

## Examples

### Success

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/notice/success.html"></iframe>

::: code-group
<<< @/public/examples/components/notice/success.html#body{} [html]
```vue
<script setup lang="ts">
    import { UiNotice } from '@/components/notice'
</script>

<template>
    <UiNotice class="accent-success">
        Success notice
    </UiNotice>
</template>
```
```jsx
import { UiNotice } from '@/components/notice'

export function Example() {
    return (
        <UiNotice className="accent-success">
            Success notice
        </UiNotice>
    )
}
```
:::

### Error

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/notice/error.html"></iframe>

<<< @/public/examples/components/notice/error.html#body{}

### Warning

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/notice/warning.html"></iframe>

<<< @/public/examples/components/notice/warning.html#body{}

### Info

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/notice/info.html"></iframe>

<<< @/public/examples/components/notice/info.html#body{}

### Text

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/notice/text.html" style="height: 25rem"></iframe>

<<< @/public/examples/components/notice/text.html#body{}

### Background

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/notice/background.html"></iframe>

<<< @/public/examples/components/notice/background.html#body{}
