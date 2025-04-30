# Ripple

A material ripple effect that is visible on clicking, you can use it with or without JS by adding `animation-ripple` class.
Use with [Button](/docs/components/button) or any other component.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/utilities/ripple" />

## Usage

::: code-group
```css
@import "winduum/utilities/ripple.css" layer(utilities);
```
```js
import { showRipple } from 'winduum/src/utilities/ripple'

document.querySelector('#showRipple').addEventListener('click', (e) => {
    showRipple({
        element: e.currentTarget,
        x: e.offsetX,
        y: e.offsetY
    })
})
```
```vue
<script setup>
    import { ref } from 'vue'
    import { showRipple } from 'winduum/src/utilities/ripple'
    import { Button } from '@/components/button'
</script>

<template>
    <Button @click="(e) => showRipple({ element: e.currentTarget, x: e.offsetX, y: e.offsetY })">Show ripple</Button>
</template>
```
:::

## Example

<div class="iframe">
    <button class="x-button" id="showRipple">Show ripple</button>
</div>

::: code-group
```html
<button class="x-button" id="showRipple">Show ripple</button>
```
```js
import { showRipple } from 'winduum/src/utilities/ripple'

document.querySelector('#showRipple').addEventListener('click', (e) => {
    showRipple({
        element: e.currentTarget,
        x: e.offsetX,
        y: e.offsetY
    })
})
```
:::

## Javascript API

### showRipple

* **Type:** `(event: MouseEvent | ShowRippleEvent, rippleElement?: HTMLElement) => <void>`
* **Kind:** `sync`

```typescript
interface ShowRippleEvent {
    currentTarget?: EventTarget | HTMLElement;
    offsetX: number;
    offsetY: number;
}
```

Shows an animated ripple effect on an element
