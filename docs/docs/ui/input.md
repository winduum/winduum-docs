# Input

### CSS Properties

Input shares properties with [Select](/docs/ui/select) component.

```css
:where(.ui-input, .ui-input-group, .ui-input-mask, .ui-select) {
    --ui-input-height: 3rem;
    --ui-input-height-textarea: 8rem;
    --ui-input-pt-floating: 1.25rem;
    --ui-input-pb-floating: 0.4375rem;
    --ui-input-py: 0.875rem;
    --ui-input-px: 1rem;
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
    --ui-input-gap: 0.5rem;
    --ui-input-icon-font-size: 1.25rem;
    --ui-input-icon-count-l: 1;
    --ui-input-icon-count-r: 1;
    --ui-input-icon-gap: 0.375rem;
    --ui-input-icon-inset-x: calc(var(--ui-input-px) - 0.25rem);
    --ui-input-icon-inset-x-gap: 0.125rem;
    --ui-input-icon-offset-l: calc(var(--ui-input-icon-inset-x) + var(--ui-input-icon-inset-x-gap) + (var(--ui-input-icon-font-size) + var(--ui-input-icon-gap)) * var(--ui-input-icon-count-l));
    --ui-input-icon-offset-r: calc(var(--ui-input-icon-inset-x) + var(--ui-input-icon-inset-x-gap) + (var(--ui-input-icon-font-size) + var(--ui-input-icon-gap)) * var(--ui-input-icon-count-r));
    --ui-input-validity-size: 0.875rem;
    --ui-input-validity-offset: 0.375rem;
    --ui-input-label-font-size: 0.875rem;
    --ui-input-label-font-weight: var(--font-medium);
    --ui-input-label-focus-transform: translateY(-0.75rem) scale(0.8);
    --ui-input-label-focus-opacity: 0.5;
}
```

### Variants

* `is-floating` - Outline variant
* `is-invalid` - Muted variant

## Basic

<iframe src="/examples/ui/input/basic.html"></iframe>

<<< @/public/examples/ui/input/basic.html#body{}

## Textarea

<iframe src="/examples/ui/input/textarea.html" style="height: 15rem"></iframe>

<<< @/public/examples/ui/input/textarea.html#body{}

## Placeholder

<iframe src="/examples/ui/input/placeholder.html"></iframe>

<<< @/public/examples/ui/input/placeholder.html#body{}

## Label

<iframe src="/examples/ui/input/label.html"></iframe>

<<< @/public/examples/ui/input/label.html#body{}

## Floating Label

<iframe src="/examples/ui/input/floating.html"></iframe>

<<< @/public/examples/ui/input/floating.html#body{}

## Icon

<iframe src="/examples/ui/input/icon.html"></iframe>

<<< @/public/examples/ui/input/icon.html#body{}

## Required

<iframe src="/examples/ui/input/required.html"></iframe>

<<< @/public/examples/ui/input/required.html#body{}

## Validation

<iframe src="/examples/ui/input/validation.html"></iframe>

<<< @/public/examples/ui/input/validation.html#body{}

## Disabled

<iframe src="/examples/ui/input/disabled.html"></iframe>

<<< @/public/examples/ui/input/disabled.html#body{}

<br>

# Input Group

You can group inputs into groups and combine them with other components like [Button](/docs/ui/button)

<iframe src="/examples/ui/input/group.html"></iframe>

<<< @/public/examples/ui/input/group.html#body{}

<br>

# Input Mask

You can wrap other components in input mask, which matches the height of the input and allows usage of label for other form components like checkbox, radio and switch.

<iframe src="/examples/ui/input/mask.html"></iframe>

<<< @/public/examples/ui/input/mask.html#body{}
