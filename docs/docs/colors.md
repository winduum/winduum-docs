# Colors

Colors are defined in raw *RGB* values, this allows to use them in CSS properties and combine them with alpha channel like this `rgb(var(--color-primary) / 0.5)`

Each color can be used together with any TailwindCSS rule that uses colors.

There are few types of colors with various areas of use. Colors are defined in [Themes](themes).

## Basic

<div style="display:flex; gap: 1rem; flex-direction: column">
    <div style="display: flex; align-items: center; gap: 1.75rem;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;" class="bg-default"></div>
        <code>--color-default</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;" class="bg-primary"></div>
        <code>--color-primary</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;" class="bg-secondary"></div>
        <code>--color-secondary</code>
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

## Background

<div style="display:flex; gap: 1rem; flex-direction: column">
    <div style="display: flex; align-items: center; gap: 1.75rem;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;border: 1px solid rgb(255 255 255 / 0.1)" class="bg-background"></div>
        <code>--color-background</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;border: 1px solid rgb(255 255 255 / 0.1)" class="bg-background-100"></div>
        <code>--color-background-100</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;border: 1px solid rgb(255 255 255 / 0.1)" class="bg-background-200"></div>
        <code>--color-background-200</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;border: 1px solid rgb(255 255 255 / 0.1)" class="bg-background-300"></div>
        <code>--color-background-300</code>
    </div>
</div>

## Accent

You can easily change accent color of any UI component. Because components in Winduum use `--color-accent` property as their color, rather than `--color-primary`.

<iframe src="/examples/accent/btn.html"></iframe>

<<< @/public/examples/accent/btn.html#body{}


## Current

Each text color variant has also `--color-current` defined. This is for similar usage as `currentColor`, but with this custom property the alpha channel can be also used in `rgb`

::: code-group
```html
<div class="text-primary">
    <div class="a"></div>
</div>
```
```postcss
[class*="text-primary"] {
    --color-current: var(--color-primary);
}

.text-primary {
    --tw-text-opacity: 1;
    color: rgb(var(--color-primary) / var(--tw-text-opacity));
}

.a {
    color: rgb(var(--color-current) / 0.2)
}
```
:::
