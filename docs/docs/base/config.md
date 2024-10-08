# CSS config

Each CSS property is defined in CSS in following path - [`src/theme/config/index.css`](https://github.com/winduum/winduum/blob/next/src/theme/config/index.css). 

We are using naming conventions from TailwindCSS `v4`, 
so you can use these properties in both current and future versions of TailwindCSS or without TailwindCSS.

<<< @/../node_modules/winduum/src/theme/config/index.css

## Tailwind CSS v4
In the future version of TailwindCSS the configuration is done via CSS, so no plugin is necessary.
Most of the config CSS properties are also part of the new version.

```css
@import "tailwindcss/theme.css" layer(theme);
@import "winduum/tailwindcss/theme/config/index.css" layer(theme);
@import "winduum/tailwindcss/theme/default.css" layer(theme);
```

## Tailwind CSS v3

To add `winduum` to TailwindCSS v3, add folowing plugin to `tailwind.config.js` configuration file.

```js
import winduum from 'winduum'

export default {
  darkMode: 'class',
  content: [
    './node_modules/winduum/src/**/*.js',
    './src/**/*.{js,html}'
  ],
  plugins: [
    winduum({
        // config options
    })
  ],
}
```

You can customize config with options listed bellow.

This plugin disables by default following TailwindCSS corePlugins

* **preflight** - custom modern css reset is used, see [Reset](/docs/base/reset)

Winduum also exports useful helper functions you can use in your `tailwind.config.js`, see [`utils/tailwind.js`](https://github.com/winduum/winduum/blob/next/utils/tailwind.js) for more info.

### settings.rgb
Include `-rgb` color variants. Learn more about this in [Compatibility](/docs/base/theme.html#compatibility) section.

* **Type:** `boolean`
* **Default:** `false`

### settings.colorMix
Use `color-mix` in color variants instead of rgb. Learn more about this in [Compatibility](/docs/base/theme.html#compatibility) section.

* **Type:** `boolean`
* **Default:** `true`

### colors
* **Type:** `string[] | string`
* **Default:** `undefined`

These are additional color tokens that can be used with TailwindCSS as CSS custom properties, which can be then defined in `.css`. See [Colors](/docs/colors) for more info.
Or you can add a path to `.css` file containing the CSS custom properties, and it will be parsed automatically.

Example `bg-primary`:
```css
.bg-primary {
    background-color: color-mix(in sRGB, var(--color-primary) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}
```

### fontFamily
* **Type:** `string[] | string`
* **Default:** `undefined`

These are additional font-family tokens that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.
Or you can add a path to `.css` file containing the CSS custom properties, and it will be parsed automatically.

Example `font-primary`:
```css
.font-primary {
    font-family: var(--font-primary);
}
```

### fontWeight
* **Type:** `string[] | string`
* **Default:** `undefined`

These are additional font-weight tokens that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.
Or you can add a path to `.css` file containing the CSS custom properties, and it will be parsed automatically.

Example `font-bold`:
```css
.font-bold {
    font-weight: var(--font-bold);
}
```

### ease
* **Type:** `string[] | string`
* **Default:** `undefined`

These are additional transition easing tokens that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.
Or you can add a path to `.css` file containing the CSS custom properties, and it will be parsed automatically.

Example `ease-linear`:
```css
.ease-linear {
  transition-timing-function: var(--ease-linear);
}
```

### zIndex
* **Type:** `string[] | string`
* **Default:** `undefined`

These are additional z-index tokens that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.
Or you can add a path to `.css` file containing the CSS custom properties, and it will be parsed automatically.

Example `z-10`:
```css
.z-10 {
    z-index: var(--z-10);
}
```

### fontSize
* **Type:** `string[] | string`
* **Default:** `undefined`

These are additional `font-size` tokens that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.
Or you can add a path to `.css` file containing the CSS custom properties, and it will be parsed automatically.

Example `text-md`:
```css
.text-md {
    font-size: var(--font-size-md);
    line-height: calc(var(--font-size-md) + 0.5rem);
}
```

### spacing
* **Type:** `string[] | string`
* **Default:** `undefined`

These are additional spacing tokens that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.
Or you can add a path to `.css` file containing the CSS custom properties, and it will be parsed automatically.

Example `gap-4`:
```css
.gap-4 {
    gap: var(--spacing-4);
}
```

Example `px-4`:
```css
.px-4 {
    padding-left: var(--spacing-4);
    padding-right: var(--spacing-4);
}
```

### borderRadius
* **Type:** `string[] | string`
* **Default:** `undefined`

These are additional border-radius tokens that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.
Or you can add a path to `.css` file containing the CSS custom properties, and it will be parsed automatically.

Example `rounded-md`:
```css
.rounded-md {
    border-radius: var(--radius-md);
}
```

### animations
* **Type:** `string[]`
* **Default:** `['fade-in', 'fade-out', 'ripple', 'spin', 'move-indeterminate']`

These are additional animation tokens that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.
Or you can add a path to `.css` file containing the CSS custom properties, and it will be parsed automatically.

Example `animation-fade-in`:
```css
.animation-fade-in {
    animation-name: fade-in;
}
```

### mask
* **Type:** `string[] | string`
* **Default:** `undefined`

These are additional mask tokens that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.
Or you can add a path to `.css` file containing the CSS custom properties, and it will be parsed automatically.

Example `animation-fade-in`:
```css
.mask-check {
    mask: var(--mask-check)
}
```

### screens
* **Type:** `object`
* **Default:** 
```js
{
  'xs': '22.5em',
  'sm': '26em',
  'md': '48em',
  'lg': '60em',
  'xl': '76em',
  '2xl': '82em',
  '3xl': '88em',
  '4xl': '100em',
  'xxl': '126em',
  '2xxl': '158em'
}
```

These are new media queries tokens that can be used with TailwindCSS, see more in [Breakpoints](/docs/base/breakpoints)
