---
description: "Provides interest-target: and interest-source: variants for Interest Invokers — the interestfor attribute that lets controls declaratively show interest in…"
---

# Interest
Provides `interest-target:` and `interest-source:` variants for [Interest Invokers](https://open-ui.org/components/interest-invokers.explainer/) — the `interestfor` attribute that lets controls declaratively show interest in another element (hover, focus or long-press), typically used for tooltips and hover cards.

* `interest-target:` — applies when the element is the target of interest (`:interest-target`)
* `interest-source:` — applies when the element is the source showing interest (`:interest-source`)

Both variants also match the `.interest-target` / `.interest-source` classes, so they work with the [`interestfor` polyfill](/docs/polyfills#interest-invokers) in browsers without native support.

### Dependencies
* [tailwindcss](https://tailwindcss.com/) (TailwindCSS @custom-variant)

## TailwindCSS
Include CSS file with the `@custom-variant` at-rule.

<ViewSourceGh path="tailwindcss/variants/interest.css" />

```css
@import "winduum/tailwindcss/variants/interest.css";
```

```css
@custom-variant interest-target {
  &:is(:interest-target, .interest-target) {
    @slot;
  }
}

@custom-variant interest-source {
  &:is(:interest-source, .interest-source) {
    @slot;
  }
}
```

### Example
```html
<button interestfor="tooltip" class="interest-source:text-accent">Show tooltip</button>

<div id="tooltip" popover="hint" class="opacity-0 interest-target:opacity-100">
    Tooltip content
</div>
```
```css
.interest-source\:text-accent {
  &:is(:interest-source, .interest-source) {
    color: var(--color-accent);
  }
}

.interest-target\:opacity-100 {
  &:is(:interest-target, .interest-target) {
    opacity: 100%;
  }
}
```
