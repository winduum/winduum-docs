# Details

An accessible accordion or toggle component with `details` and `summary` elements.<br>
Uses small external library `slide-element` for smooth toggle animations.

* <a href="https://github.com/winduum/winduum/blob/main/src/components/details.js" target="_blank" rel="noreferrer" class="winduum-gh-link">winduum/src/components/details.js <svg><use href="#icon-gh" /></svg></a>

### Dependencies

* [slide-element](https://www.npmjs.com/package/slide-element)

```shell
npm i slide-element
```


## Preview

<iframe onload="this.style.visibility = 'visible';" src="/examples/component/details/default.html"></iframe>

::: code-group
<<< @/public/examples/component/details/default.html#body{} [html]
<<< @/../examples/src/pages/component/details/default.liquid#js{} [js]
:::

### Checkbox

<iframe onload="this.style.visibility = 'visible';" src="/examples/component/details/checkbox.html" style="height: 500px;"></iframe>

::: code-group
<<< @/public/examples/component/details/checkbox.html#body{} [html]
<<< @/../examples/src/pages/component/details/checkbox.liquid#js{} [js]
:::

### Accordion

<iframe onload="this.style.visibility = 'visible';" src="/examples/component/details/accordion.html" style="height: 500px;"></iframe>

::: code-group
<<< @/public/examples/component/details/accordion.html#body{} [html]
<<< @/../examples/src/pages/component/details/accordion.liquid#js{} [js]
:::


## Methods

### toggleDetails

* **Type:** `(selector:  HTMLInputElement | HTMLElement) => Promise<void>`
* **Kind:** `async`

Toggles a details element, should be added on summary or anywhere inside the details element.

### showDetails

* **Type:** `(selector:  HTMLInputElement | HTMLElement) => Promise<void>`
* **Kind:** `async`

Shows a details element, should be added on `summary` or anywhere inside the `details` element.

### closeDetails

* **Type:** `(selector:  HTMLInputElement | HTMLElement) => Promise<void>`
* **Kind:** `async`

Closes a details element, should be added on `summary` or anywhere inside the `details` element.
