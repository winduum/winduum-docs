# Details

An accessible accordion or toggle component for `details` and `summary` elements.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/details" />

### Usage
::: code-group
```css
@import "winduum/src/components/details/index.css" layer(utilities);
```
```html
<details class="x-details group bg-body-secondary rounded">
    <summary class="flex-center text-primary p-4">
        <span class="x-title">Show more</span>
        <svg class="size-4 group-open:-scale-y-100 transition-transform" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
    </summary>
    <div class="p-4">
        Details content
    </div>
</details>
```
:::

### Variants
* <LinkGh name="default" path="components/details" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/details" />

## Examples

### Default

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/details/default.html"></iframe>

<<< @/public/examples/components/details/default.html#body{}

### Checkbox

You can also control details with a checkbox inside `summary` — only a tiny inline script is needed to sync the checkbox state.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/details/checkbox.html" style="height: 500px;"></iframe>

::: code-group
<<< @/public/examples/components/details/checkbox.html#body{} [html]
<<< @/../examples/src/pages/components/details/checkbox.liquid#js{} [js]
:::

### Accordion

Exclusive accordions use the native `name` attribute — details elements sharing the same `name` close each other automatically.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/details/accordion.html" style="height: 500px;"></iframe>

<<< @/public/examples/components/details/accordion.html#body{}
