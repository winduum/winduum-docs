# Themes

Theming in Winduum is really easy. All it takes is a few CSS properties. There are two themes by default (light and dark) and to create a new one, you can just extend the default theme.

## Default

[`src/base/theme/default-rgb.css`](https://github.com/winduum/winduum/blob/main/src/base/theme/default-rgb.css)

```css
:root {
  --color-primary-rgb: 3 138 255;
  --color-secondary-rgb: 69 71 72;
  --color-base-rgb: 17 19 21;
  --color-body-rgb: 255 255 255;
  --color-success-rgb: 33 154 67;
  --color-error-rgb: 254 50 75;
  --color-warning-rgb: 254 179 53;
  --color-info-rgb: 45 168 234;
  --color-light-rgb: 255 255 255;
  --color-dark-rgb: 17 19 21;
  --color-accent-rgb: var(--color-primary-rgb);
  --color-current-rgb: var(--color-base-rgb);
}
```

## Dark

[`src/base/theme/dark-rgb.css`](https://github.com/winduum/winduum/blob/main/src/base/theme/dark-rgb.css)

```css
:root.dark {
  --color-secondary-rgb: 39 41 46;
  --color-base-rgb: 201 209 217;
  --color-body-rgb: 25 26 27;
}
```

## Compatibility

Values are defined in raw *RGB* values for better compatibility, and used for `color-mix` variables.
Since support for `color-mix`is not that great, `rgb` is still used for Tailwind colors. And both types of variables are ready to use in your project `.css` files.

* [`src/base/theme/default.css`](https://github.com/winduum/winduum/blob/main/src/base/theme/default.css)
* [`src/base/theme/dark.css`](https://github.com/winduum/winduum/blob/main/src/base/theme/dark.css)


