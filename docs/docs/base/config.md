---
description: "Theme configuration via CSS custom properties — works with the TailwindCSS @theme at-rule or as plain CSS properties without TailwindCSS."
---

# CSS config
Theme configuration via CSS custom properties — works with the TailwindCSS `@theme` at-rule or as plain CSS properties without TailwindCSS.

## Tailwind CSS
The configuration is done via [@theme](https://github.com/winduum/winduum/tree/next/tailwindcss/theme/config) config.

```css
@import "tailwindcss/theme.css" layer(theme);
@import "winduum/tailwindcss/theme/config/index.css" layer(theme);
@import "winduum/tailwindcss/theme/default.css" layer(theme);
```

### Without Tailwind CSS
Each CSS property is defined in CSS in following path - [`src/theme/config/index.css`](https://github.com/winduum/winduum/blob/next/src/theme/config/index.css).

We are using naming conventions as Tailwind CSS, so you can use these properties with or without TailwindCSS.

<<< @/../node_modules/winduum/src/theme/config/index.css