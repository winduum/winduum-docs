---
description: "Provides a link utility class that adds a smooth color transition on hover and focus to interactive elements. It only applies to elements that are actually…"
---

# Link
Provides a `link` utility class that adds a smooth color transition on hover and focus to interactive elements. It only applies to elements that are actually interactive — links, enabled buttons and elements with `role="button"` — so it's safe to use on a wrapper class.

The hover color can be customized via the `--link-hover-color` variable and defaults to the current [accent](/docs/utilities/accent) color.

You can combine it with the [Underline](/docs/utilities/underline) utility for underline animations.

### Dependencies
* [tailwindcss](https://tailwindcss.com/) (TailwindCSS @utility)

## TailwindCSS
Include CSS file with the `@utility` at-rule.

<ViewSourceGh path="tailwindcss/utilities/link.css" />

```css
@import "winduum/tailwindcss/utilities/link.css";
```

```css
.link {
  &:where(:any-link, button:enabled, [role="button"]) {
    transition: all var(--default-transition-duration) var(--ease-in-out);

    &:is(:hover, :focus-visible) {
      color: var(--link-hover-color, var(--color-accent));
    }
  }
}
```

### Example
```html
<a href="#" class="link">Link</a>
```

or with a custom hover color

```html
<a href="#" class="link [--link-hover-color:var(--color-red-500)]">Link</a>
```
