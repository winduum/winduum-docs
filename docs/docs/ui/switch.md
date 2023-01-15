# Switch

### CSS Properties

```css
:where(.ui-switch) {
    --ui-switch-width: 3rem;
    --ui-switch-height: 1.5rem;
    --ui-switch-padding: 0.375rem;
    --ui-switch-bg-raw: var(--color-dark);
    --ui-switch-radius: 999px;
    --ui-switch-validity-font-size: 0.875rem;
    --ui-switch-validity-offset: 0.375rem;
    --ui-switch-box-shadow: none;
}
```

### Variants

* `is-sm` - Small size
* `is-lg` - Large size

## Basic

<iframe src="/examples/ui/switch/basic.html"></iframe>

<<< @/public/examples/ui/switch/basic.html#body{}

## Small

<iframe src="/examples/ui/switch/small.html"></iframe>

<<< @/public/examples/ui/switch/small.html#body{}

## Large

<iframe src="/examples/ui/switch/large.html"></iframe>

<<< @/public/examples/ui/switch/large.html#body{}

## Disabled

<iframe src="/examples/ui/switch/disabled.html"></iframe>

<<< @/public/examples/ui/switch/disabled.html#body{}

## Validation

Validation messages can be added into `<em>` tag and are visible if `is-validated` is present as parent class.

<iframe src="/examples/ui/switch/validation.html"></iframe>

<<< @/public/examples/ui/switch/validation.html#body{}
