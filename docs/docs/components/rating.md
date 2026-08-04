---
description: "Accessible star rating built with radio input types."
---

# Rating
Accessible star rating built with `radio` **input** types.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/rating.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/rating" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/rating" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/rating" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/rating" />

## Styles

### Variants
* <LinkGh name="default" path="components/rating" />
* <LinkGh name="invalid" path="components/rating" />

### Props
* <LinkGh name="default" path="components/rating/props" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/rating.html"></iframe>

::: code-group
<<< @/public/examples/components/rating.html#body{} [winduum]
```vue [winduum-vue]
<script setup lang="ts">
    import { Rating } from '@/components/rating'
</script>

<template>
    <Rating class="accent-warning">
        <input type="radio" name="rating" value="1" aria-label="Rate 1/5">
        <input type="radio" name="rating" value="2" aria-label="Rate 2/5">
        <input type="radio" name="rating" value="3" aria-label="Rate 3/5">
        <input type="radio" name="rating" value="4" aria-label="Rate 4/5">
        <input type="radio" name="rating" value="5" aria-label="Rate 5/5">
    </Rating>
</template>
```
```jsx [winduum-react]
import { Rating } from '@/components/rating'

export function Example() {
    return (
        <Rating class="accent-warning">
            <input type="radio" name="rating" value="1" aria-label="Rate 1/5" />
            <input type="radio" name="rating" value="2" aria-label="Rate 2/5" />
            <input type="radio" name="rating" value="3" aria-label="Rate 3/5" />
            <input type="radio" name="rating" value="4" aria-label="Rate 4/5" />
            <input type="radio" name="rating" value="5" aria-label="Rate 5/5" />
        </Rating>
    )
}
```
:::

## Accessibility

Rating is a native radio group — each star is an `input type="radio"` sharing the same `name`, so keyboard users can move between values with arrow keys and the selection is announced by screen readers. Give every input a descriptive `aria-label` (e.g. `Rate 3/5`) as shown in the example.
