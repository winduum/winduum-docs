# Details

An accessible accordion or toggle component for `details` and `summary` elements.<br>
Uses small external library `slide-element` for smooth toggle animations.

It is unstyled by default so you can apply your own styles.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/details" />

### Dependencies

* [slide-element](https://www.npmjs.com/package/slide-element)

### Usage
::: code-group
```shell
npm i slide-element
```
```html
<details class="c-details group bg-body-secondary rounded">
    <summary class="flex-center text-primary p-4" data-action="toggleDetails">
        <span class="ui-title">Show more</span>
        <svg class="size-4 group-open:-scale-y-100 transition-transform" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
    </summary>
    <div style="display: none">
        <div class="p-4">
            Details content
        </div>
    </div>
</details>
```
```js
import { toggleDetails } from 'winduum/src/components/details'

document.querySelectorAll('[data-action="toggleDetails"]').forEach(summary => {
    summary.addEventListener('click', event => {
        if (event.currentTarget.tagName !== 'INPUT') event.preventDefault()

        toggleDetails(summary)
    })
})
```
:::

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/details" />

## Examples

### Default

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


## Javascript API

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
