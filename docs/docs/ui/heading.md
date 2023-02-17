# Heading

### CSS Properties

```css
:where(.ui-heading) {
    --ui-heading-font-family: var(--font-primary);
    --ui-heading-font-weight: var(--font-semibold);
    --ui-heading-font-size: 1.25rem;
    --ui-heading-line-height: calc(var(--ui-heading-font-size) + var(--ui-heading-line-height-ratio));
    --ui-heading-line-height-ratio: 0.375rem;
}
```

### Variants

* `is-sm` - Small
* `is-lg` - Large

## Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/heading/basic.html"></iframe>

<<< @/public/examples/ui/heading/basic.html#body{}

## Small

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/heading/small.html"></iframe>

<<< @/public/examples/ui/heading/small.html#body{}

## Large

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/heading/large.html"></iframe>

<<< @/public/examples/ui/heading/large.html#body{}

## Weight

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/heading/weight.html"></iframe>

<<< @/public/examples/ui/heading/weight.html#body{}
