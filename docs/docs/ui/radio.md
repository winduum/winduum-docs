# Radio

Radio shares properties with [Checkbox](/docs/ui/checkbox) component.

```css
:where(.ui-radio) {
    --ui-checkbox-icon: var(--icon-radio);
    --ui-checkbox-radius: 50%;
}
```

### Variants

* `is-invalid` - Invalid variant

## Basic

<iframe src="/examples/ui/radio/basic.html"></iframe>

<<< @/public/examples/ui/radio/basic.html#body{}

## Label

<iframe src="/examples/ui/radio/label.html"></iframe>

<<< @/public/examples/ui/radio/label.html#body{}

## Required

<iframe src="/examples/ui/radio/required.html"></iframe>

<<< @/public/examples/ui/radio/required.html#body{}

## Disabled

<iframe src="/examples/ui/radio/disabled.html"></iframe>

<<< @/public/examples/ui/radio/disabled.html#body{}

## Validation

Validation messages can be added into `<em>` tag and are visible if `is-validated` is present as parent class.

<iframe src="/examples/ui/radio/validation.html"></iframe>

<<< @/public/examples/ui/radio/validation.html#body{}
