# Progress
Displays progress with native HTML5 tags `progress` or `meter`

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/progress" />

### Usage

```css
@import "winduum/src/components/progress/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="components/progress" />
* <LinkGh name="meter" path="components/progress" />

### Props
* <LinkGh name="default-props" path="components/progress" />

### Tokens
* `sm` <a href="https://github.com/winduum/winduum/blob/main/src/components/progress/sm.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `lg` <a href="https://github.com/winduum/winduum/blob/main/src/components/progress/lg.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/progress" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/progress" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/progress" />

## Examples

### Colors

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/progress/colors.html"></iframe>

::: code-group
<<< @/public/examples/ui/progress/colors.html#body{} [html]
```vue
<script setup lang="ts">
    import { UiProgress } from '@/components/progress'
</script>

<template>
    <UiProgress class="accent-primary" value="25" max="100"></UiProgress>
    <UiProgress class="accent-success" value="50" max="100"></UiProgress>
    <UiProgress class="accent-error" value="75" max="100"></UiProgress>
    <UiProgress class="accent-info" value="15" max="100"></UiProgress>
    <UiProgress class="accent-warning" value="85" max="100"></UiProgress>
</template>
```
```jsx
import { UiProgress } from '@/components/progress'

export function Example() {
    return (
        <>
            <UiProgress className="accent-primary" value="25" max="100"></UiProgress>
            <UiProgress className="accent-success" value="50" max="100"></UiProgress>
            <UiProgress className="accent-error" value="75" max="100"></UiProgress>
            <UiProgress className="accent-info" value="15" max="100"></UiProgress>
            <UiProgress className="accent-warning" value="85" max="100"></UiProgress>
        </>
    )
}
```
:::

### Small

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/progress/small.html"></iframe>

<<< @/public/examples/ui/progress/small.html#body{}

### Large

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/progress/large.html"></iframe>

<<< @/public/examples/ui/progress/large.html#body{}

### Indeterminate

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/progress/indeterminate.html"></iframe>

<<< @/public/examples/ui/progress/indeterminate.html#body{}

### Meter

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/progress/meter.html"></iframe>

<<< @/public/examples/ui/progress/meter.html#body{}
