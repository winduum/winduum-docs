# Colors

Colors are defined in raw *RGB* values for better compatibility. 
This allows to use them in CSS properties and combine them with alpha channel like this `rgb(var(--color-primary-rgb) / 0.5)`.
Every color is then used in `color-mix` function to make more variants.

Each color can be used together with any TailwindCSS rule that uses colors.

There are few types of colors with various areas of use. Colors are defined in [Themes](themes).

## Common

<div style="display:flex; gap: 1rem; flex-direction: column">
    <div style="display: flex; align-items: center; gap: 1.75rem;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;" class="bg-primary"></div>
        <code>--color-primary</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;border: 1px solid rgb(0 0 0 / 0.1)" class="bg-light"></div>
        <code>--color-light</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;border: 1px solid rgb(255 255 255 / 0.1)" class="bg-dark"></div>
        <code>--color-dark</code>
    </div>
</div>

## Base

<div style="display:flex; gap: 1rem; flex-direction: column">
    <div style="display: flex; align-items: center; gap: 1.75rem;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;" class="bg-main"></div>
        <code>--color-main</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;background-color: var(--color-main-primary)" class="bg-main-primary"></div>
        <code>--color-main-primary</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;background-color: var(--color-main-secondary)" class="bg-main-secondary"></div>
        <code>--color-main-secondary</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;background-color: var(--color-main-tertiary)" class="bg-main-tertiary"></div>
        <code>--color-main-tertiary</code>
    </div>
</div>

## Body

<div style="display:flex; gap: 1rem; flex-direction: column">
    <div style="display: flex; align-items: center; gap: 1.75rem;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;border: 1px solid rgb(255 255 255 / 0.1)" class="bg-body"></div>
        <code>--color-body</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;border: 1px solid rgb(255 255 255 / 0.1);background-color: var(--color-body-primary)" class="bg-body-primary"></div>
        <code>--color-body-primary</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;border: 1px solid rgb(255 255 255 / 0.1);background-color: var(--color-body-secondary)" class="bg-body-secondary"></div>
        <code>--color-body-secondary</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;border: 1px solid rgb(255 255 255 / 0.1);background-color: var(--color-body-tertiary)" class="bg-body-tertiary"></div>
        <code>--color-body-tertiary</code>
    </div>
</div>

## State

<div style="display:flex; gap: 1rem; flex-direction: column">
    <div style="display: flex; align-items: center; gap: 1.75rem;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;" class="bg-success"></div>
        <code>--color-success</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;" class="bg-error"></div>
        <code>--color-error</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;" class="bg-warning"></div>
        <code>--color-warning</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;" class="bg-info"></div>
        <code>--color-info</code>
    </div>
</div>

## Accent

You can easily change accent color of any UI component. Because components in Winduum use `--color-accent` property as their color, rather than `--color-primary`. 

So you still use primary color when needed and change accent only for elements you want.

Accent color consist of two css properties:

* <code>--color-accent</code> - color of the accent
* <code>--color-accent-fg</code> - foreground color of the accent

<iframe onload="this.style.visibility = 'visible';" src="/examples/accent/btn.html"></iframe>

<<< @/public/examples/accent/btn.html#body{}


## Current

Each text color variant has also `--color-current` defined. This is for similar usage as `currentColor`, but with this custom property the alpha channel can be also used in `rgb` or `color-mix`

::: code-group
```html
<div class="text-primary">
    <div class="a"></div>
</div>
```
```postcss
.text-primary {
  --color-current: color-mix(in sRGB, var(--color-primary) calc(var(--tw-text-opacity, 1) * 100%), transparent);
  color: var(--color-primary);
}
}

.a {
    color: color-mix(in sRGB, var(--color-current) 40%, transparent);
}
```
:::
