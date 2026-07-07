---
description: "Theme configuration via CSS custom properties — works with the TailwindCSS @theme at-rule or as plain CSS properties without TailwindCSS."
---

# CSS config
Theme configuration via CSS custom properties — works with the TailwindCSS `@theme` at-rule or as plain CSS properties without TailwindCSS.

## Tailwind CSS
The configuration is done via [@theme](https://github.com/winduum/winduum/tree/next/tailwindcss/theme/config) config.

```css
@import "winduum/tailwindcss/theme/config/index.css" layer(theme);
```

### Individual properties
#### breakpoint
<<< @/../node_modules/winduum/tailwindcss/theme/config/breakpoint.css
#### easing
<<< @/../node_modules/winduum/tailwindcss/theme/config/easing.css
#### font
<<< @/../node_modules/winduum/tailwindcss/theme/config/font.css
#### radius
<<< @/../node_modules/winduum/tailwindcss/theme/config/radius.css
#### transition
<<< @/../node_modules/winduum/tailwindcss/theme/config/transition.css
#### z-index
<<< @/../node_modules/winduum/tailwindcss/theme/config/z.css

### Without Tailwind CSS
Each CSS property is defined in CSS in following path - [`src/theme/config/index.css`](https://github.com/winduum/winduum/blob/next/src/theme/config/index.css).

We are using naming conventions as Tailwind CSS, so you can use these properties with or without TailwindCSS.

<<< @/../node_modules/winduum/src/theme/config/index.css