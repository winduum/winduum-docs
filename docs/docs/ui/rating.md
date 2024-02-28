# Rating
<br>
<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/ui/rating" />

### Usage

```css
@import "winduum/src/ui/rating/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="ui/rating" />

### Props
* <LinkGh name="default-props" path="ui/rating" />

### Tokens
* <LinkGh name="invalid" path="ui/rating" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/ui/rating" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/rating.html"></iframe>

::: code-group
<<< @/public/examples/ui/rating.html#body{} [html]
```vue
<script setup lang="ts">
    import { UiRating } from '@/components/ui/rating'
</script>

<template>
    <UiRating class="accent-warning">
        <input type="radio" name="rating" value="1" aria-label="Rate 1/5">
        <input type="radio" name="rating" value="2" aria-label="Rate 2/5">
        <input type="radio" name="rating" value="3" aria-label="Rate 3/5">
        <input type="radio" name="rating" value="4" aria-label="Rate 4/5">
        <input type="radio" name="rating" value="5" aria-label="Rate 5/5">
    </UiRating>
</template>
```
```jsx
import { UiRating } from '@/components/ui/rating'

export function Example() {
    return (
        <UiRating class="accent-warning">
            <input type="radio" name="rating" value="1" aria-label="Rate 1/5" />
            <input type="radio" name="rating" value="2" aria-label="Rate 2/5" />
            <input type="radio" name="rating" value="3" aria-label="Rate 3/5" />
            <input type="radio" name="rating" value="4" aria-label="Rate 4/5" />
            <input type="radio" name="rating" value="5" aria-label="Rate 5/5" />
        </UiRating>
    )
}
```
:::
