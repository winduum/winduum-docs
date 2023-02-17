# Button


### CSS Properties

```css
:where(.ui-btn) {
    --color-current: var(--color-light);
    --ui-btn-width: max-content;
    --ui-btn-height: 2.25rem;
    --ui-btn-py: 0.375rem;
    --ui-btn-px: 0.75rem;
    --ui-btn-border-radius: var(--rounded);
    --ui-btn-font-size: 0.875rem;
    --ui-btn-font-weight: var(--font-medium);
    --ui-btn-bg: rgb(var(--color-accent) / var(--ui-btn-bg-opacity));
    --ui-btn-bg-opacity: var(--tw-bg-opacity, 1);
    --ui-btn-color: rgb(var(--color-current) / var(--ui-btn-color-opacity));
    --ui-btn-color-opacity: var(--tw-text-opacity, 1);
    --ui-btn-hover-filter: invert(1);
    --ui-btn-hover-opacity: 0.2;
    --ui-btn-focus-opacity: 0.3;
    --ui-btn-disabled-opacity: 0.7;
    --ui-btn-outline-width: 2px;
    --ui-btn-outline-opacity: 0.5;
    --ui-btn-icon-font-size: 1.25rem;
    --ui-btn-gap: 0.375rem;
    --ui-btn-loading-width: 1rem;
    --ui-btn-loading-border-width: 2px;
}
```

### Variants

  * `is-outline` - Outline variant
  * `is-muted` - Muted variant
  * `is-raised` - Raised variant
  * `is-text` - Raised variant
  * `is-sm` - Small size
  * `is-lg` - Large size
  * `is-wide` - Wide variant
  * `is-square` - Square variant
  * `is-circle` - Circle variant
  * `is-loading` - Loading state
  * `is-active` - Active state
  * `is-outline-gradient` - Outline with gradient support
  * `is-hover-fill` - Fill the button on hover

## Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/basic.html"></iframe>

```html
<button class="ui-btn">Button</button>
<button class="ui-btn rounded-full">Button</button>
```

## Flat

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/flat.html"></iframe>

```html
<button class="ui-btn accent-primary">Primary</button>
<button class="ui-btn accent-secondary">Secondary</button>
<button class="ui-btn accent-success">Success</button>
<button class="ui-btn accent-error">Error</button>
<button class="ui-btn accent-warning">Warning</button>
<button class="ui-btn accent-info">Info</button>
<button class="ui-btn accent-dark">Dark</button>
<button class="ui-btn accent-light text-dark">Light</button>
```

## Outline

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/outline.html"></iframe>

```html
<button class="ui-btn is-outline accent-primary">Primary</button>
<button class="ui-btn is-outline accent-secondary">Secondary</button>
<button class="ui-btn is-outline accent-success">Success</button>
<button class="ui-btn is-outline accent-error">Error</button>
<button class="ui-btn is-outline accent-warning">Warning</button>
<button class="ui-btn is-outline accent-info">Info</button>
<button class="ui-btn is-outline accent-dark">Dark</button>
<button class="ui-btn is-outline accent-light text-dark">Light</button>
```

`is-outline` uses `outline` property, in some cases you might prefer `border` property. In that case you can use following code to modify the button.

```css
.ui-btn:where(.is-border) {
    --ui-btn-focus-opacity: 0.15;
    
    border: var(--ui-btn-outline-width) solid rgb(var(--color-accent) / var(--ui-btn-outline-opacity));
    padding-left: calc(var(--ui-btn-px) - var(--ui-btn-outline-width));
    padding-right: calc(var(--ui-btn-px) - var(--ui-btn-outline-width));
}
```

## Muted

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/muted.html"></iframe>

```html
<button class="ui-btn is-muted accent-primary">Primary</button>
<button class="ui-btn is-muted accent-secondary">Secondary</button>
<button class="ui-btn is-muted accent-success">Success</button>
<button class="ui-btn is-muted accent-error">Error</button>
<button class="ui-btn is-muted accent-warning">Warning</button>
<button class="ui-btn is-muted accent-info">Info</button>
<button class="ui-btn is-muted accent-dark">Dark</button>
<button class="ui-btn is-muted accent-light text-dark">Light</button>
```

## Raised

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/raised.html"></iframe>

```html
<button class="ui-btn is-raised accent-primary">Primary</button>
<button class="ui-btn is-raised accent-secondary">Secondary</button>
<button class="ui-btn is-raised accent-success">Success</button>
<button class="ui-btn is-raised accent-error">Error</button>
<button class="ui-btn is-raised accent-warning">Warning</button>
<button class="ui-btn is-raised accent-info">Info</button>
<button class="ui-btn is-raised accent-dark">Dark</button>
<button class="ui-btn is-raised accent-light text-dark">Light</button>
```

## Text

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/text.html"></iframe>

```html
<button class="ui-btn is-text accent-primary">Primary</button>
<button class="ui-btn is-text accent-secondary">Secondary</button>
<button class="ui-btn is-text accent-success">Success</button>
<button class="ui-btn is-text accent-error">Error</button>
<button class="ui-btn is-text accent-warning">Warning</button>
<button class="ui-btn is-text accent-info">Info</button>
<button class="ui-btn is-text accent-dark">Dark</button>
<button class="ui-btn is-text accent-light">Light</button>
```

## Gradient

You can create gradient buttons with [TailwindCSS](https://tailwindcss.com/docs/gradient-color-stops) gradient classes

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/gradient.html"></iframe>

```html
<button class="ui-btn bg-gradient-to-br from-purple-600 to-blue-500">Button</button>
<button class="ui-btn is-outline-gradient is-hover-fill bg-gradient-to-br from-purple-600 to-blue-500">Button</button>
```

## Small

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/small.html"></iframe>

```html
<button class="ui-btn is-sm">Button</button>
```

## Large

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/large.html"></iframe>

```html
<button class="ui-btn is-lg">Button</button>
```

## Wide

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/wide.html"></iframe>

```html
<button class="ui-btn is-wide">Button</button>
<button class="ui-btn is-wide is-lg w-full">Button</button>
```

## Square

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/square.html"></iframe>

```html
<button class="ui-btn is-square">1</button>
<button class="ui-btn is-square is-outline">2</button>
<button class="ui-btn is-square is-muted">
    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
    </svg>
</button>
```

## Circle

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/circle.html"></iframe>

```html
<button class="ui-btn is-circle">1</button>
<button class="ui-btn is-circle is-outline">2</button>
<button class="ui-btn is-circle is-muted">
    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
    </svg>
</button>
```

## Icon

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/icon.html"></iframe>

```html
<button class="ui-btn is-muted">
    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
    </svg>
    Button
</button>
<button class="ui-btn is-outline">
    Button
    <svg>
        <use href="#icon-adjustments-vertical"></use>
    </svg>
</button>
<button class="ui-btn is-square">
    <svg>
        <use href="#icon-adjustments-vertical"></use>
    </svg>
</button>
```

## Loading

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/loading.html"></iframe>

```html
<button class="ui-btn is-loading">
    Button
</button>
<button class="ui-btn is-muted is-loading">
    Button
</button>
<button class="ui-btn is-outline is-loading">
    Button
</button>
```

## Active

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/active.html"></iframe>

```html
<button class="ui-btn is-active">
    Button
</button>
<button class="ui-btn is-muted is-active">
    Button
</button>
<button class="ui-btn is-outline is-active">
    Button
</button>
```

## Disabled

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/disabled.html"></iframe>

```html
<button class="ui-btn" disabled>
    Button
</button>
<button class="ui-btn is-muted" disabled>
    Button
</button>
<button class="ui-btn is-outline" disabled>
    Button
</button>
```

## Custom

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/custom.html"></iframe>

```html
<button class="ui-btn">Button</button>
```
```css
.ui-btn {
    --ui-btn-height: 4rem;
    --ui-btn-py: 1rem;
    --ui-btn-px: 1rem;
    --ui-btn-border-radius: 0;
    --ui-btn-font-size: 1.15rem;
    --ui-btn-font-weight: 700;
    --ui-btn-bg: yellow;
    --ui-btn-color: #333;
    --ui-btn-hover-opacity: 0.4;
    --ui-btn-focus-opacity: 0.8;
}
```

You can also extend the button with any TailwindCSS class to customize it

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/tailwind.html"></iframe>

```html
<button class="ui-btn bg-gray-200 text-dark">Button</button>
```

<br>

# Button Group

You can group buttons into groups

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/group.html"></iframe>

```html
<div class="ui-btn-group">
    <button class="ui-btn">Button</button>
    <button class="ui-btn">Button</button>
    <button class="ui-btn">Button</button>
</div>
<div class="ui-btn-group">
    <button class="ui-btn is-outline">Button</button>
    <button class="ui-btn is-outline">Button</button>
    <button class="ui-btn is-outline">Button</button>
</div>
<div class="ui-btn-group">
    <button class="ui-btn is-muted">Button</button>
    <button class="ui-btn is-muted">Button</button>
    <button class="ui-btn is-muted">Button</button>
</div>
```
