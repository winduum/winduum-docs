# Tailwind CSS

To add `winduum` to TailwindCSS, add folowing plugin to `tailwind.config.cjs` configuration file.

```js
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,html}'
  ],
  plugins: [
    require('winduum')({
        // config options
    })
  ],
}
```

You can customize config with options listed bellow.

This plugin disables by default following TailwindCSS corePlugins

* **preflight** - custom modern css reset is used, see [Reset](layout/reset)
* **container** - custom container css is used, see [Container](layout/container)

Winduum also exports useful helper functions you can use in your `tailwind.config.cjs`, see [`utils/tailwind.js`](https://github.com/winduum/winduum/blob/main/utils/tailwind.js) for more info.

## settings.rgb
Include `-rgb` color variants. Learn more about this in [Compatibility](/docs/themes.html#compatibility) section.

* **Type:** `boolean`
* **Default:** `true`

## settings.colorMix
Use `color-mix` in color variants instead of rgb. Learn more about this in [Compatibility](/docs/themes.html#compatibility) section.

* **Type:** `boolean`
* **Default:** `true`

## colors
* **Type:** `string[]`
* **Default:** `['light', 'dark', 'primary', 'secondary', 'warning', 'error', 'info', 'success', 'accent', 'current', 'base', 'body', 'body-primary', 'body-secondary', 'body-tertiary']`

These are additional color tokens that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`. See [Colors](colors) for more info.

Example `bg-primary`:
```css
.bg-primary {
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-primary-rgb) / var(--tw-bg-opacity));
}
```

Example `text-primary`:
```css
.text-primary {
    --tw-text-opacity: 1;
    --color-current: var(--color-primary);
    --color-current-rgb: var(--color-primary-rgb);
    color: rgb(var(--color-primary-rgb) / var(--tw-text-opacity));
}
```

## fontFamily
* **Type:** `string[]`
* **Default:** `['primary', 'secondary']`

These are additional font-family tokens that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.

Example `font-primary`:
```css
.font-primary {
    font-family: var(--font-primary);
}
```

## fontWeight
* **Type:** `string[]`
* **Default:** `['light', 'normal', 'medium', 'semibold', 'bold', 'extrabold']`

These are additional font-weight tokens that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.

Example `font-bold`:
```css
.font-bold {
    font-weight: var(--font-bold);
}
```

## zIndex
* **Type:** `number[]`
* **Default:** `[10, 20, 30, 40, 50, 60]`

These are additional z-index tokens that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.

Example `z-10`:
```css
.z-10 {
    z-index: var(--z-10);
}
```

## spacing
* **Type:** `string[]`
* **Default:** `['xs', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl', 'section']`

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

## borderRadius
* **Type:** `string[]`
* **Default:** `['xs', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl', 'section']`

These are additional border-radius tokens that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.

Example `rounded-md`:
```css
.rounded-md {
    border-radius: var(--rounded-md);
}
```

## animations
* **Type:** `string[]`
* **Default:** `['fade-in', 'fade-out', 'fade-in-down', 'fade-out-up', 'ripple', 'spin', 'move-indeterminate']`

These are additional animation tokens that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.

Example `animation-fade-in`:
```css
.animation-fade-in {
    animation-name: fade-in;
}
```

## screens
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

These are new media queries tokens that can be used with TailwindCSS, see more in [Breakpoints](layout/breakpoints)

<br>

# CSS properties

Each property is defined in CSS in following path - [`src/base/config.css`](https://github.com/winduum/winduum/blob/main/src/base/config.css)

<<< @/../node_modules/winduum/src/base/config.css
