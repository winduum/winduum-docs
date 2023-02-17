# Badge

### CSS Properties

```css
:where(.ui-badge) {
    --color-current: var(--color-light);
    --ui-badge-width: max-content;
    --ui-badge-height: 1.5rem;
    --ui-badge-py: 0;
    --ui-badge-px: 0.5rem;
    --ui-badge-border-radius: var(--rounded-xs);
    --ui-badge-font-size: 0.75rem;
    --ui-badge-font-weight: var(--font-normal);
    --ui-badge-bg: rgb(var(--color-accent) / var(--ui-badge-bg-opacity));
    --ui-badge-bg-opacity: var(--tw-bg-opacity, 1);
    --ui-badge-color: rgb(var(--color-current) / var(--ui-badge-color-opacity));
    --ui-badge-color-opacity: var(--tw-text-opacity, 1);
    --ui-badge-outline-width: 1px;
    --ui-badge-outline-opacity: 0.75;
    --ui-badge-icon-font-size: 0.875rem;
    --ui-badge-gap: 0.25rem;
    --ui-badge-focus-opacity: 0.3;
    --ui-badge-hover-opacity: 0.8;
}
```

### Variants

* `is-outline` - Outline variant
* `is-muted` - Muted variant
* `is-sm` - Small size
* `is-lg` - Large size
* `is-square` - Square variant
* `is-circle` - Circle variant

## Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/badge/basic.html"></iframe>

<<< @/public/examples/ui/badge/basic.html#body{}

## Flat

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/badge/flat.html"></iframe>

<<< @/public/examples/ui/badge/flat.html#body{}

## Outline

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/badge/outline.html"></iframe>

<<< @/public/examples/ui/badge/outline.html#body{}

## Muted

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/badge/muted.html"></iframe>

<<< @/public/examples/ui/badge/muted.html#body{}

## Small

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/badge/small.html"></iframe>

<<< @/public/examples/ui/badge/small.html#body{}

## Large

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/badge/large.html"></iframe>

<<< @/public/examples/ui/badge/large.html#body{}

## Square

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/badge/square.html"></iframe>

<<< @/public/examples/ui/badge/square.html#body{}

## Circle

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/badge/circle.html"></iframe>

<<< @/public/examples/ui/badge/circle.html#body{}

## Icon

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/badge/icon.html"></iframe>

<<< @/public/examples/ui/badge/icon.html#body{}

## Custom

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/badge/custom.html"></iframe>

<<< @/public/examples/ui/badge/custom.html#body{}
<<< @/public/examples/ui/badge/custom.html#style{css}

You can also extend the badge with any TailwindCSS class to customize it

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/badge/tailwind.html"></iframe>

<<< @/public/examples/ui/badge/tailwind.html#body{}

<br>

# Badge Group

You can group badges into groups

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/badge/group.html"></iframe>

<<< @/public/examples/ui/badge/group.html#body{}
