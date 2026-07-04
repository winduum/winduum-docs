---
description: "Provides a hocus: variant — a shortcut that applies styles on both hover and focus-visible, so you don't have to repeat every interactive style twice."
---

# Hocus
Provides a `hocus:` variant — a shortcut that applies styles on both `hover` and `focus-visible`, so you don't have to repeat every interactive style twice.

Unlike a plain `hover:` + `focus:` combination it's also smarter:

* hover styles only apply on devices that actually support hover (`@media (hover: hover)`), so they don't get stuck on touch screens
* focus styles use `:focus-visible` instead of `:focus`, so they only show for keyboard navigation

### Dependencies
* [tailwindcss](https://tailwindcss.com/) (TailwindCSS @variant)

## TailwindCSS
Include CSS file with the `@variant` at-rule.

<ViewSourceGh path="tailwindcss/variants/hocus.css" />

```css
@import "winduum/tailwindcss/variants/hocus.css";
```

```css
@variant hocus {
  @media (hover: hover) {
    &:hover {
      @slot;
    }
  }

  &:focus-visible {
    @slot;
  }
}
```

### Example
```html
<a href="#" class="hocus:text-accent">Link</a>
```
```css
.hocus\:text-accent {
  @media (hover: hover) {
    &:hover {
      color: var(--color-accent);
    }
  }

  &:focus-visible {
    color: var(--color-accent);
  }
}
```
