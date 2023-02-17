# Input

### CSS Properties

Input shares styles and properties with [Select](/docs/ui/select) component.

```css
:where(.ui-input, .ui-select) {
    --ui-input-height: 3rem;
    --ui-input-height-textarea: 8rem;
    --ui-input-pt-floating: 1.25rem;
    --ui-input-pb-floating: 0.4375rem;
    --ui-input-py: 0.875rem;
    --ui-input-px: 0.875rem;
    --ui-input-pl: var(--ui-input-px);
    --ui-input-pr: var(--ui-input-px);
    --ui-input-bg: rgb(var(--color-background));
    --ui-input-color: currentColor;
    --ui-input-placeholder-color: currentColor;
    --ui-input-placeholder-opacity: 0.5;
    --ui-input-font-size: 0.875rem;
    --ui-input-font-weight: var(--font-medium);
    --ui-input-border-width: 1px;
    --ui-input-border-color: var(--color-current);
    --ui-input-border-opacity: 0.15;
    --ui-input-border-radius: var(--rounded);
    --ui-input-box-shadow: none;
    --ui-input-icon-font-size: 1.25rem;
    --ui-input-icon-count-l: 1;
    --ui-input-icon-count-r: 1;
    --ui-input-icon-gap: 0.375rem;
    --ui-input-icon-inset-x: calc(var(--ui-input-px) - 0.25rem);
    --ui-input-icon-inset-x-gap: 0.125rem;
    --ui-input-icon-offset-l: calc(var(--ui-input-icon-inset-x) + var(--ui-input-icon-inset-x-gap) + (var(--ui-input-icon-font-size) + var(--ui-input-icon-gap)) * var(--ui-input-icon-count-l));
    --ui-input-icon-offset-r: calc(var(--ui-input-icon-inset-x) + var(--ui-input-icon-inset-x-gap) + (var(--ui-input-icon-font-size) + var(--ui-input-icon-gap)) * var(--ui-input-icon-count-r));
    --ui-input-label-floating-font-size: var(--ui-label-font-size);
    --ui-input-label-floating-font-weight: var(--ui-label-font-weight);
    --ui-input-label-floating-focus-transform: translateY(-0.6875rem) scale(0.8);
    --ui-input-label-floating-focus-opacity: 0.5;
}
```

### Variants

* `is-floating` - Outline variant
* `is-invalid` - Invalid variant

## Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/basic.html"></iframe>

<<< @/public/examples/ui/input/basic.html#body{}

## Textarea

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/textarea.html" style="height: 15rem"></iframe>

<<< @/public/examples/ui/input/textarea.html#body{}

## Placeholder

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/placeholder.html"></iframe>

<<< @/public/examples/ui/input/placeholder.html#body{}

## Label

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/label.html"></iframe>

<<< @/public/examples/ui/input/label.html#body{}

## Floating Label

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/floating.html"></iframe>

<<< @/public/examples/ui/input/floating.html#body{}

## Icon

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/icon.html"></iframe>

<<< @/public/examples/ui/input/icon.html#body{}

## Required

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/required.html"></iframe>

<<< @/public/examples/ui/input/required.html#body{}

## Validation

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/validation.html"></iframe>

<<< @/public/examples/ui/input/validation.html#body{}

## Disabled

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/disabled.html"></iframe>

<<< @/public/examples/ui/input/disabled.html#body{}

<br>

# Input Group

You can group inputs into groups and combine them with other components like [Button](/docs/ui/button)

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/group.html"></iframe>

<<< @/public/examples/ui/input/group.html#body{}
