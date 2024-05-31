# Ripple

A material ripple effect that is visible on clicking, you can use it with or without JS by adding `animation-ripple` class.
Use with [Button](/docs/ui/button) or any other component.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/utilities/ripple" />

## Usage

::: code-group
```css
@import "winduum/utilities/ripple.css" layer(components);
```
```js
import { showRipple } from 'winduum/src/utilities/ripple'

document.querySelector('#showRipple').addEventListener('click', (e) => {
    showRipple(e)
})
```
```vue
<script setup>
    import { ref } from 'vue'
    import { showRipple } from 'winduum/src/utilities/ripple'
    import { UiBtn } from '@/components/ui/btn'
</script>

<template>
    <UiBtn @click="showRipple">Show ripple</UiBtn>
</template>
```
:::

## Example

<div class="iframe">
    <button class="ui-btn" id="showRipple">Show ripple</button>
</div>

::: code-group
```html
<button class="ui-btn" id="showRipple">Show ripple</button>
```
```js
import { showRipple } from 'winduum/src/utilities/ripple'

document.querySelector('#showRipple').addEventListener('click', event => {
    showRipple(event)
})
```
:::

## Javascript API

### showRipple

* **Type:** `(event) => <void>`
* **Kind:** `sync`

Shows an animated ripple effect on a element
