# Toaster
Bake your [Toast](/docs/components/toast) and let it fly! You should insert in into your `<body>`

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/toaster" />

## Usage

```css
@import "winduum/src/components/toaster/index.css" layer(components);
```

### Variants
* <LinkGh name="default" url="https://github.com/winduum/winduum/blob/main/src/components/toaster/default.css" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/toaster" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/blob/main/components/toaster" />

## Example

```html
<ol class="x-toaster items-end"></ol>
```

### `closeToaster`

* **Type:** `(selector:  HTMLElement, options?: CloseToastOptions) => Promise<void>`
* **Kind:** `async`

All toasts are closed at once.

#### Example

```js
import { showToast } from 'winduum/src/components/toaster'

document.querySelector('#closeToaster').addEventListener('click', async () => {
    await closeToaster(document.querySelector('.c-toaster'))
})
```
