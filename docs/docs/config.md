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

Winduum also exports useful helper classes you can use in your `tailwind.config.cjs`, see [`utils/tailwind.js`](https://github.com/winduum/winduum/blob/main/utils/tailwind.js) for more info.

## colors
* **Type:** `string[]`
* **Default:** `['background', 'default', 'light', 'dark', 'primary', 'secondary', warning', 'error', 'info', 'success', 'accent', 'current']`

These are additional colors that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`. See [Colors](colors) for more info.

Example `bg-primary`:
```css
.bg-primary {
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-primary) / var(--tw-bg-opacity));
}
```

Example `text-primary`:
```css
.text-primary {
    --tw-text-opacity: 1;
    --color-current: var(--color-primary);
    color: rgb(var(--color-primary) / var(--tw-text-opacity));
}
```

## fontFamily
* **Type:** `string[]`
* **Default:** `['primary', 'secondary']`

These are additional font families that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.

Example `font-primary`:
```css
.font-primary {
    font-family: var(--font-primary);
}
```

## fontWeight
* **Type:** `string[]`
* **Default:** `['light', 'normal', 'medium', 'semibold', 'bold', 'extrabold']`

These are additional font weights that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.

Example `font-boldy`:
```css
.font-bold {
    font-weight: var(--font-bold);
}
```

## zIndex
* **Type:** `number[]`
* **Default:** `[10, 20, 30, 40, 50, 60]`

These are additional z-index values that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.

Example `z-10`:
```css
.z-10 {
    z-index: var(--z-10);
}
```

## spacing
* **Type:** `string[]`
* **Default:** `['xs', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl', 'section']`

These are additional spacing values that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.

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

These are additional border radius values that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.

Example `rounded-md`:
```css
.rounded-md {
    border-radius: var(--rounded-md);
}
```

## animations
* **Type:** `string[]`
* **Default:** `['fade-in', 'fade-out']`

These are additional animation name values that can be used with TailwindCSS as CSS properties, which can be then defined in `.css`.

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

These are new media queries values that can be used with TailwindCSS, see more in [Breakpoints](layout/breakpoints)

<br>

# CSS properties

Each property is defined in CSS in following path - [`src/styles/base/config.css`](https://github.com/winduum/winduum/blob/main/src/styles/base/config.css)

```postcss
:root {
  --font-primary: "Poppins", sans-serif;
  --font-secondary: "Poppins", sans-serif;
}

:root {
  --color-google: 49 45 45;
  --color-linkedin: 40 103 178;
  --color-youtube: 255 0 0;
  --color-instagram: 193 53 132;
  --color-twitter: 29 161 242;
  --color-facebook: 24 119 242;
  --color-apple: 0 0 0;
}

:root {
  --container-width: 80rem;
  --container-width-sm: 50rem;
  --container-padding: 5vw;
  --container-padding-calc: max(calc(50vw - (var(--container-width) / 2) + var(--container-padding)), var(--container-padding));
}

:root {
  --font-bold: 700;
  --font-semibold: 600;
  --font-medium: 500;
  --font-normal: 400;
  --font-light: 300;
  --font-thin: 200;
}

:root {
  --z-10: 10;
  --z-20: 20;
  --z-30: 30;
  --z-40: 40;
  --z-50: 50;
}

:root {
  --rounded: 0.75rem;
  --rounded-xs: 0.5rem;
  --rounded-sm: 0.875rem;
  --rounded-base: 1rem;
  --rounded-md: 1.125rem;
  --rounded-lg: 1.5rem;
  --rounded-xl: 3rem;
  --rounded-2xl: 6rem;
  --rounded-3xl: 8rem;
  --rounded-full: 9999px;
}

:root {
  --spacing-xs: 0.5rem;
  --spacing-sm: 0.875rem;
  --spacing-base: 1rem;
  --spacing-md: 1.125rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 6rem;
  --spacing-3xl: 8rem;
}

:root {
  --transition-duration: 0.15s;
  --transition-color: color var(--transition-duration) ease;
  --transition-background: background var(--transition-duration) ease;
  --transition-opacity: opacity var(--transition-duration) ease;
  --transition-transform: transform var(--transition-duration) ease;
  --transition-border: border-color var(--transition-duration) ease;
  --transition-shadow: box-shadow var(--transition-duration) ease;

  @media (prefers-reduced-motion) {
    --transition-duration: 0;
  }
}

@custom-media --media-xs (min-width: 22.5em);
@custom-media --media-sm (min-width: 26em);
@custom-media --media-md (min-width: 48em);
@custom-media --media-lg (min-width: 60em);
@custom-media --media-xl (min-width: 76em);
@custom-media --media-2xl (min-width: 82em);
@custom-media --media-3xl (min-width: 88em);
@custom-media --media-4xl (min-width: 100em);
@custom-media --media-xxl (min-width: 126em);
@custom-media --media-2xxl (min-width: 158em);
```
