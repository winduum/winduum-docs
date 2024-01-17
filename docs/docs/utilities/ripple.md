# Ripple

A material ripple effect that is visible on clicking, you can use it with or without JS by adding `animation-ripple` class.
Use with [Button](/docs/ui/button) or any other component.

### Source

* [`winduum/src/utilities/ripple.css`](https://github.com/winduum/winduum/blob/main/src/utilities/ripple.css)
* [`winduum/src/utilities/ripple.js`](https://github.com/winduum/winduum/blob/main/src/utilities/ripple.js)


### Single Import

```css
@import "winduum/utilities/ripple.css" layer(components);
```

## Example

<button class="ui-btn" id="showRipple">Show ripple</button>

::: code-group
```html
<button class="ui-btn" id="showRipple">Show ripple</button>
```
```js
import { showRipple } from 'winduum/src/libraries/ripple.js'

document.querySelector('#showRipple').addEventListener('click', event => {
    showRipple(event)
})
```
:::

## Methods

### showRipple

* **Type:** `(event) => <void>`
* **Kind:** `sync`

Shows an animated ripple effect on a element
