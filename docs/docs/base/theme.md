---
description: "Theming in Winduum is really easy. All it takes is a few CSS properties. There are two themes by default (light and dark) and to create a new one, you can…"
---

# Theme

Theming in Winduum is really easy. All it takes is a few CSS properties. There are two themes by default (light and dark) and to create a new one, you can just extend the default theme.

## Default

Each `color-mix` function also contains `--default-color-space` property, which you can change from `sRGB` to mix colors in different color spaces. You can use colors in any format you want.

### TailwindCSS

Instead of `:root, :host` the `@theme` at-rule is used.

[`tailwindcss/theme/default.css`](https://github.com/winduum/winduum/blob/next/tailwindcss/theme/default.css)

<<< @/../node_modules/winduum/tailwindcss/theme/default.css


### Without TailwindCSS

[`src/theme/default.css`](https://github.com/winduum/winduum/blob/next/src/theme/default.css)

## Default P3

[`src/theme/default-p3.css`](https://github.com/winduum/winduum/blob/next/src/theme/default-p3.css)

Better high range colors for P3 capable displays.

<<< @/../node_modules/winduum/src/theme/default-p3.css

## Dark

[`src/theme/dark.css`](https://github.com/winduum/winduum/blob/next/src/theme/dark.css)

<<< @/../node_modules/winduum/src/theme/dark.css
