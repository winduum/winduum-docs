---
description: "An accessible accordion or toggle component for details and summary elements."
---

# Details

An accessible accordion or toggle component for `details` and `summary` elements.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/details/default.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/details" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/details" />
* <LinkGh name="winduum-elements" url="https://github.com/winduum/winduum-elements/tree/main/components/details" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/tree/main/components/details" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/details" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/details" />

## Styles

### Variants
* <LinkGh name="default" path="components/details" />

## Scripts
The Details script keeps a checkbox inside `summary` in sync with the native
`details[open]` state.

## Examples

### Default

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/details/default.html"></iframe>

::: code-group
<<< @/public/examples/components/details/default.html#body{} [winduum]
```vue [winduum-vue]
<script setup lang="ts">
    import { Details } from '@/components/details'
</script>

<template>
    <Details class="group bg-body-secondary rounded-md">
        <summary class="flex items-center gap-2 text-primary p-4">
            <span class="x-title">Show more</span>
            <svg class="size-4 group-open:-scale-y-100 transition-transform" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </summary>
        <div class="p-4">
            Details content
        </div>
    </Details>
</template>
```
```jsx [winduum-react]
import { Details } from '@/components/details'

export function Example() {
    return (
        <Details className="group bg-body-secondary rounded-md">
            <summary className="flex items-center gap-2 text-primary p-4">
                <span className="x-title">Show more</span>
                <svg className="size-4 group-open:-scale-y-100 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </summary>
            <div className="p-4">
                Details content
            </div>
        </Details>
    )
}
```
:::

### Checkbox

You can also control details with a checkbox inside `summary` — only a tiny script is needed to sync the checkbox state.
It's provided by the [`toggleDetails`](#toggledetails) helper and wired up by the `winduum-elements`, `winduum-stimulus`,
`winduum-vue` and `winduum-react` integrations below.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/details/checkbox.html" style="height: 500px;"></iframe>

::: code-group
<<< @/public/examples/components/details/checkbox.html#body{} [winduum-elements]
<<< @/../examples-stimulus/src/pages/components/details/checkbox.liquid#body{} [winduum-stimulus]
<<< @/../examples-vue/src/pages/components/details/checkbox.vue [winduum-vue]
<<< @/../examples-react/src/pages/components/details/checkbox.tsx [winduum-react]
:::

### Accordion

Exclusive accordions use the native `name` attribute — details elements sharing the same `name` close each other automatically.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/details/accordion.html" style="height: 500px;"></iframe>

<<< @/public/examples/components/details/accordion.html#body{}

## JavaScript API

Low-level helper used by `winduum-elements`, `winduum-stimulus`, `winduum-vue` and `winduum-react` —
you can use it to wire the checkbox sync manually or build your own integration.

```js
import { toggleDetails } from 'winduum/src/components/details'

document.querySelectorAll('.x-details summary input[type="checkbox"]').forEach((inputElement) => {
    inputElement.addEventListener('change', (event) => toggleDetails(event.target))
})
```

### `toggleDetails`

* **Type:** `(element: HTMLInputElement, options?: ToggleDetailsOptions) => void`
* **Kind:** `sync`

Toggles the `open` attribute of the closest `details` element to match the checkbox `checked` state.
Call it on the `change` event of a checkbox inside `summary`.

#### ToggleDetailsOptions

---

##### selector

* **Type:** `string`
* **Default:** `details`
