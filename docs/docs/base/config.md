# CSS config

Each CSS property is defined in CSS in following path - [`src/theme/config/index.css`](https://github.com/winduum/winduum/blob/main/src/theme/config/index.css). 

We are using naming conventions from TailwindCSS `v4`, 
so you can use these properties in both current and future versions of TailwindCSS or without TailwindCSS.

<<< @/../node_modules/winduum/src/theme/config/index.css

## Tailwind CSS
In the new version of TailwindCSS the configuration is done via CSS, so no plugin is necessary.
Most of the config CSS properties are also part of the new version.

```css
@import "tailwindcss/theme.css" layer(theme);
@import "winduum/tailwindcss/theme/config/index.css" layer(theme);
@import "winduum/tailwindcss/theme/default.css" layer(theme);
```