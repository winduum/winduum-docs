---
description: "Provides a new utility class swap to toggle between elements."
---

# Swap
Provides a new utility class `swap` to toggle between elements.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/utilities/swap" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/swap.html"></iframe>

<<< @/public/examples/swap.html#body{}

### Aria

<iframe onload="this.style.visibility = 'visible';" src="/examples/swap-aria.html"></iframe>

::: code-group
<<< @/public/examples/swap-aria.html#body{} [html]
<<< @/../examples/src/pages/swap-aria.liquid#js{} [js]
:::

## JavaScript API

There is also a `Swap` controller available in [winduum-stimulus](https://github.com/winduum/winduum-stimulus/tree/main/utilities/swap).

### toggleSwap

* **Type:** `(element: HTMLElement) => void`
* **Kind:** `sync`

Swaps the `aria-hidden` state between the two child elements of the swap.

```js
import { toggleSwap } from 'winduum/src/utilities/swap'

document.querySelector('#swapExample').addEventListener('click', ({ currentTarget }) => {
    toggleSwap(currentTarget)
})
```
