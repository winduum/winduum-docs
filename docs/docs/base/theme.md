# Theme

Theming in Winduum is really easy. All it takes is a few CSS properties. There are two themes by default (light and dark) and to create a new one, you can just extend the default theme.

## Default

Each `color-mix` function also contains `--default-color-space` property, which you can change from `sRGB` to mix colors in different color spaces. You can use colors in any format you want.

### TailwindCSS v4

Instead of `:root, :host` the `v4` `@theme` at-rule is used.

[`tailwindcss/base/theme/default.css`](https://github.com/winduum/winduum/blob/next/tailwindcss/base/theme/default.css)

### TailwindCSS v3

[`src/base/theme/default.css`](https://github.com/winduum/winduum/blob/next/src/base/theme/default.css)

<<< @/../node_modules/winduum/src/base/theme/default.css

## Default P3

[`src/base/theme/default-p3.css`](https://github.com/winduum/winduum/blob/next/src/base/theme/default-p3.css)

Better high range colors for P3 capable displays.

<<< @/../node_modules/winduum/src/base/theme/default-p3.css

## Dark

[`src/base/theme/dark.css`](https://github.com/winduum/winduum/blob/next/src/base/theme/dark.css)

<<< @/../node_modules/winduum/src/base/theme/dark.css



## Compatibility

Support for `color-mix` is almost `90%` global usage.
But if you want better compatibility you can still use `rgb`
which can be enabled it in the [Config](/docs/base/config.html#settings-rgb) (only for TailwindCSS v3). 
In that case, you have to use rgb variants for theming in your own components.

* [`src/base/theme/default-rgb.css`](https://github.com/winduum/winduum/blob/next/src/base/theme/default-rgb.css)
* [`src/base/theme/dark-rgb.css`](https://github.com/winduum/winduum/blob/next/src/base/theme/dark-rgb.css)
