# Button

<a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/default.css" target="_blank" rel="noreferrer" class="winduum-gh-link">View Source <svg><use href="#icon-gh" /></svg></a>

### Variants

  * `bordered` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/bordered.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `muted` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/muted.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `raised` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/raised.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `ghosted` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/ghosted.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `gradient` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/gradient.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `gradient-bordered` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/gradient-bordered.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `sm` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/sm.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `lg` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/lg.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `wide` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/wide.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `square` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/square.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `circle` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/circle.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `loading` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/loading.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `active` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/muted.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `hover-fill` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/hover-fill.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>

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

## Bordered

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/outline.html"></iframe>

```html
<button class="ui-btn bordered accent-primary">Primary</button>
<button class="ui-btn bordered accent-secondary">Secondary</button>
<button class="ui-btn bordered accent-success">Success</button>
<button class="ui-btn bordered accent-error">Error</button>
<button class="ui-btn bordered accent-warning">Warning</button>
<button class="ui-btn bordered accent-info">Info</button>
<button class="ui-btn bordered accent-dark">Dark</button>
<button class="ui-btn bordered accent-light text-dark">Light</button>
```

## Muted

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/muted.html"></iframe>

```html
<button class="ui-btn muted accent-primary">Primary</button>
<button class="ui-btn muted accent-secondary">Secondary</button>
<button class="ui-btn muted accent-success">Success</button>
<button class="ui-btn muted accent-error">Error</button>
<button class="ui-btn muted accent-warning">Warning</button>
<button class="ui-btn muted accent-info">Info</button>
<button class="ui-btn muted accent-dark">Dark</button>
<button class="ui-btn muted accent-light text-dark">Light</button>
```

## Raised

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/raised.html"></iframe>

```html
<button class="ui-btn raised accent-primary">Primary</button>
<button class="ui-btn raised accent-secondary">Secondary</button>
<button class="ui-btn raised accent-success">Success</button>
<button class="ui-btn raised accent-error">Error</button>
<button class="ui-btn raised accent-warning">Warning</button>
<button class="ui-btn raised accent-info">Info</button>
<button class="ui-btn raised accent-dark">Dark</button>
<button class="ui-btn raised accent-light text-dark">Light</button>
```

## Ghosted

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/text.html"></iframe>

```html
<button class="ui-btn ghosted accent-primary">Primary</button>
<button class="ui-btn ghosted accent-secondary">Secondary</button>
<button class="ui-btn ghosted accent-success">Success</button>
<button class="ui-btn ghosted accent-error">Error</button>
<button class="ui-btn ghosted accent-warning">Warning</button>
<button class="ui-btn ghosted accent-info">Info</button>
<button class="ui-btn ghosted accent-dark">Dark</button>
<button class="ui-btn ghosted accent-light">Light</button>
```

## Gradient

You can create gradient buttons with [TailwindCSS](https://tailwindcss.com/docs/gradient-color-stops) gradient classes

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/gradient.html"></iframe>

```html
<button class="ui-btn bg-gradient-to-br from-purple-600 to-blue-500">Button</button>
<button class="ui-btn outline-gradient hover-fill bg-gradient-to-br from-purple-600 to-blue-500">Button</button>
```

## Small

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/small.html"></iframe>

```html
<button class="ui-btn sm">Button</button>
```

## Large

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/large.html"></iframe>

```html
<button class="ui-btn lg">Button</button>
```

## Wide

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/wide.html"></iframe>

```html
<button class="ui-btn wide">Button</button>
<button class="ui-btn wide lg w-full">Button</button>
```

## Square

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/square.html"></iframe>

```html
<button class="ui-btn square">1</button>
<button class="ui-btn square outline">2</button>
<button class="ui-btn square muted">
    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
    </svg>
</button>
```

## Circle

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/circle.html"></iframe>

```html
<button class="ui-btn circle">1</button>
<button class="ui-btn circle outline">2</button>
<button class="ui-btn circle muted">
    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
    </svg>
</button>
```

## Icon

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/icon.html"></iframe>

```html
<button class="ui-btn muted">
    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
    </svg>
    Button
</button>
<button class="ui-btn outline">
    Button
    <svg>
        <use href="#icon-adjustments-vertical"></use>
    </svg>
</button>
<button class="ui-btn square">
    <svg>
        <use href="#icon-adjustments-vertical"></use>
    </svg>
</button>
```

## Loading

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/loading.html"></iframe>

```html
<button class="ui-btn loading">
    Button
</button>
<button class="ui-btn muted loading">
    Button
</button>
<button class="ui-btn outline loading">
    Button
</button>
```

## Active

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/active.html"></iframe>

```html
<button class="ui-btn active">
    Button
</button>
<button class="ui-btn muted active">
    Button
</button>
<button class="ui-btn outline active">
    Button
</button>
```

## Disabled

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/disabled.html"></iframe>

```html
<button class="ui-btn" disabled>
    Button
</button>
<button class="ui-btn muted" disabled>
    Button
</button>
<button class="ui-btn outline" disabled>
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
    <button class="ui-btn outline">Button</button>
    <button class="ui-btn outline">Button</button>
    <button class="ui-btn outline">Button</button>
</div>
<div class="ui-btn-group">
    <button class="ui-btn muted">Button</button>
    <button class="ui-btn muted">Button</button>
    <button class="ui-btn muted">Button</button>
</div>
```
