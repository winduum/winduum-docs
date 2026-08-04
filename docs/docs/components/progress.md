---
description: "Displays progress with native HTML5 tags progress or meter"
---

# Progress
Displays progress with native HTML5 tags `progress` or `meter`

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/progress/colors.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/progress" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/progress" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/progress" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/progress" />

## Styles

### Variants
* <LinkGh name="default" path="components/progress" />
* <LinkGh name="meter" path="components/progress" />

### Props
* <LinkGh name="default" path="components/progress/props" />

### Tokens
* `sm` <a href="https://github.com/winduum/winduum/blob/next/src/components/progress/sm.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
* `lg` <a href="https://github.com/winduum/winduum/blob/next/src/components/progress/lg.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>

## Examples

### Colors

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/progress/colors.html"></iframe>

::: code-group
<<< @/public/examples/components/progress/colors.html#body{} [winduum]
```vue [winduum-vue]
<script setup lang="ts">
    import { Progress } from '@/components/progress'
</script>

<template>
    <Progress class="accent-primary" value="25" max="100"></Progress>
    <Progress class="accent-success" value="50" max="100"></Progress>
    <Progress class="accent-error" value="75" max="100"></Progress>
    <Progress class="accent-info" value="15" max="100"></Progress>
    <Progress class="accent-warning" value="85" max="100"></Progress>
</template>
```
```jsx [winduum-react]
import { Progress } from '@/components/progress'

export function Example() {
    return (
        <>
            <Progress className="accent-primary" value="25" max="100"></Progress>
            <Progress className="accent-success" value="50" max="100"></Progress>
            <Progress className="accent-error" value="75" max="100"></Progress>
            <Progress className="accent-info" value="15" max="100"></Progress>
            <Progress className="accent-warning" value="85" max="100"></Progress>
        </>
    )
}
```
:::

### Small

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/progress/small.html"></iframe>

<<< @/public/examples/components/progress/small.html#body{}

### Large

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/progress/large.html"></iframe>

<<< @/public/examples/components/progress/large.html#body{}

### Indeterminate

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/progress/indeterminate.html"></iframe>

<<< @/public/examples/components/progress/indeterminate.html#body{}

### Meter

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/progress/meter.html"></iframe>

<<< @/public/examples/components/progress/meter.html#body{}
