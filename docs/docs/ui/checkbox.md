# Checkbox

### CSS Properties

Checkbox shares styles and properties with [Radio](/docs/ui/radio) component.

```css
:where(.ui-checkbox, .ui-radio) {
    --ui-checkbox-width: 1.375rem;
    --ui-checkbox-font-size: 0.875rem;
    --ui-checkbox-gap: 0.625rem;
    --ui-checkbox-bg-raw: var(--color-background);
    --ui-checkbox-bg-opacity: 0.1;
    --ui-checkbox-border-color-raw: var(--color-current);
    --ui-checkbox-border-color-opacity: 0.2;
    --ui-checkbox-checked-bg-raw: var(--color-accent);
    --ui-checkbox-radius: 0.5rem;
    --ui-checkbox-icon: var(--icon-check);
    --ui-checkbox-icon-font-size: 1.125rem;
    --ui-checkbox-validity-font-size: 0.875rem;
    --ui-checkbox-validity-offset: 0.375rem;
    --ui-checkbox-box-shadow: none;
}
```

### Variants

* `is-invalid` - Invalid variant

## Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/checkbox/basic.html"></iframe>

<<< @/public/examples/ui/checkbox/basic.html#body{}

## Label

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/checkbox/label.html"></iframe>

<<< @/public/examples/ui/checkbox/label.html#body{}

## Required

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/checkbox/required.html"></iframe>

<<< @/public/examples/ui/checkbox/required.html#body{}

## Disabled

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/checkbox/disabled.html"></iframe>

<<< @/public/examples/ui/checkbox/disabled.html#body{}

## Indeterminate

## Validation

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/checkbox/validation.html"></iframe>

<<< @/public/examples/ui/checkbox/validation.html#body{}
