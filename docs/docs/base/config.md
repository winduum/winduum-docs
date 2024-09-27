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
Include `-rgb` color variants. Learn more about this in [Compatibility](/docs/theme.html#compatibility) section.

* **Type:** `boolean`
* **Default:** `false`

### settings.colorMix
Use `color-mix` in color variants instead of rgb. Learn more about this in [Compatibility](/docs/theme.html#compatibility) section.

* **Type:** `boolean`
* **Default:** `true`

### colors
* **Type:** `string[]`
* **Default:** `['primary', 'accent', 'current',
  'warning', 'error', 'info', 'success', 'light', 'dark',
  'main', 'main-primary', 'main-secondary', 'main-tertiary',
  'body', 'body-primary', 'body-secondary', 'body-tertiary',
  'primary-foreground', 'accent-foreground', 'current-foreground',
  'warning-foreground', 'error-foreground', 'info-foreground', 'success-foreground', 'light-foreground', 'dark-foreground',
  'main-foreground', 'main-primary-foreground', 'main-secondary-foreground', 'main-tertiary-foreground',
  'body-foreground', 'body-primary-foreground', 'body-secondary-foreground', 'body-tertiary-foreground']`

These are additional color tokens that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`. See [Colors](/docs/colors) for more info.

Example `bg-primary`:
```css
.bg-primary {
    background-color: color-mix(in sRGB, var(--color-primary) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}
```

Example `text-primary`:
```css
.text-primary {
  --color-current: color-mix(in sRGB, var(--color-primary) calc(var(--tw-text-opacity, 1) * 100%), transparent);
  color: color-mix(in sRGB, var(--color-primary) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}
```

### fontFamily
* **Type:** `string[]`
* **Default:** `['primary', 'secondary']`

These are additional font-family tokens that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.

Example `font-primary`:
```css
.font-primary {
    font-family: var(--font-primary);
}
```

### fontWeight
* **Type:** `string[]`
* **Default:** `['light', 'normal', 'medium', 'semibold', 'bold', 'extrabold']`

These are additional font-weight tokens that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.

Example `font-bold`:
```css
.font-bold {
    font-weight: var(--font-bold);
}
```

### ease
* **Type:** `string[]`
* **Default:** `['linear', 'in', 'out', 'in-out']`

These are additional transition easing tokens that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.

Example `ease-linear`:
```css
.ease-linear {
  transition-timing-function: var(--ease-linear);
}
```

### zIndex
* **Type:** `number[]`
* **Default:** `[10, 20, 30, 40, 50, 60]`

These are additional z-index tokens that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.

Example `z-10`:
```css
.z-10 {
    z-index: var(--z-10);
}
```

### fontSize
* **Type:** `string[]`
* **Default:** `['xs', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl', '3xl', '4xl', '5xl', '6xl', '7xl', '7xl', '8xl', '9xl']`

These are additional `font-size` tokens that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.

Example `text-md`:
```css
.text-md {
    font-size: var(--text-md);
    line-height: calc(var(--text-md) + 0.5rem);
}
```

### spacing
* **Type:** `string[]`
* **Default:** `['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl']`

These are additional spacing tokens that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.

Example `gap-md`:
```css
.gap-md {
    gap: var(--spacing-md);
}
```

Example `px-md`:
```css
.px-md {
    padding-left: var(--spacing-md);
    padding-right: var(--spacing-md);
}
```

### borderRadius
* **Type:** `string[]`
* **Default:** `['xs', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', 'full']`

These are additional border-radius tokens that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.

Example `rounded-md`:
```css
.rounded-md {
    border-radius: var(--rounded-md);
}
```

### animations
* **Type:** `string[]`
* **Default:** `['fade-in', 'fade-out', 'fade-in-down', 'fade-out-up', 'ripple', 'spin', 'move-indeterminate']`

These are additional animation tokens that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.

Example `animation-fade-in`:
```css
.animation-fade-in {
    animation-name: fade-in;
}
```

### mask
* **Type:** `string[]`
* **Default:** `['check', 'radio', 'angle-up', 'angle-down']`

These are additional mask tokens that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.

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
