# Themes

Theming in Winduum is really easy, all it takes is few CSS properties. There are two themes by default (light and dark) and to create a new one, you can just extend the default theme.

## Default

[`src/styles/base/theme/default.css`](https://github.com/winduum/winduum/blob/main/src/styles/base/theme/default.css)

```css
:root {
  --color-accent: var(--color-primary);
  --color-current: var(--color-default);
  --color-default: 17 19 21;
  --color-primary: 3 138 255;
  --color-secondary: 69 71 72;
  --color-light: 255 255 255;
  --color-dark: 17 19 21;
  --color-success: 33 154 67;
  --color-error: 254 50 75;
  --color-warning: 254 179 53;
  --color-info: 45 168 234;
  --color-background: 255 255 255;
  --color-background-100: 249 250 252;
  --color-background-200: 235 235 235;
  --color-background-300: 225 225 225;
}
```

## Dark

[`src/styles/base/theme/dark.css`](https://github.com/winduum/winduum/blob/main/src/styles/base/theme/dark.css)

```css
:root.dark {
    --color-default: 201 209 217;
    --color-invert: 14 17 22;
    --color-secondary: 39 41 46;
    --color-background: 25 26 27;
    --color-background-100: 14 15 16;
    --color-background-200: 26 32 38;
    --color-background-300: 30 36 46;
}
```
