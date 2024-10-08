# Install

You can use Winduum with or without [TailwindCSS](https://tailwindcss.com/).
Check out the [About](/docs/about) page to learn more about Winduum and its philosophy.

Winduum `2.x` is using compatible naming for CSS custom properties that work with both current and future versions of TailwindCSS,
specifically `v3` and `v4`.

However, the `v4` is still in development, so things can still change!

## Get started

You can install Winduum via **npm** and use it in your **Node.js** project.<br>
Or copy and paste the components from source and make it your own.<br>

You can also mix both approaches, everything is possible!

See [Trying Winduum Online](#trying-winduum-online) section below to see all possible examples of use.

### npm

```shell
npm i winduum
```

The components are written in plain CSS, so sources can be also loaded in browsers without a build step or used in any other build tool such as **PostCSS** or **LightningCSS**.

```css
@import "winduum/src/theme/index.css";
@import "winduum/src/base/index.css";
@import "winduum/src/components/index.css" layer(components);
@import "winduum/src/utilities/index.css" layer(components);
```

Or you can include components separately, follow usage steps with each component.

```css
@import "winduum/src/theme/index.css";
@import "winduum/src/base/index.css";
@import "winduum/src/components/button/index.css" layer(components);
@import "winduum/src/utilities/index.css" layer(components);
```

Or paste the source code to your project and make it your own!

```css
@import "@/styles/theme/index.css";
@import "@/styles/base/index.css";
@import "@/styles/components/button/index.css" layer(components);
@import "@/styles/utilities/index.css" layer(components);
```



With `layer(components)` you can use TailwindCSS variant classes, for example `class="x-button lg:square"` to make button square only from `lg` breakpoint.

### TailwindCSS

It's optional but recommended to leverage the full functionality of the library!

#### v3

To use TailwindCSS `v3`, make sure to add TailwindCSS imports at the end of your `css` file.

```css
@import "winduum/tailwindcss/base/defaults.css";
@import "tailwindcss/base.css";
@import "tailwindcss/components.css";
@import "tailwindcss/utilities.css";
@import "tailwindcss/variants.css";
```

Follow the installation steps in [TailwindCSS](https://tailwindcss.com/docs/installation) docs
and include Winduum as a plugin,
see [Config](/docs/base/config#tailwind-css-v3) for more info.

#### v4

To use TailwindCSS `v4`, you will have to import TailwindCSS and Winduum imports individually.
Check out the example project on [GitHub](https://github.com/lubomirblazekcz/tailwind-v4-winduum) or learn more via official [blog post](https://tailwindcss.com/blog/tailwindcss-v4-alpha).

::: warning
TailwindCSS v4 is still in alpha! The estimated release is end of 2024 or further.
:::

```css
@layer theme, base, components, utilities;

@import "tailwindcss/theme.css" layer(theme);
@import "winduum/tailwindcss/theme/config/index.css" layer(theme);
@import "winduum/tailwindcss/theme/default.css" layer(theme);
@import "winduum/src/base/reset.css" layer(base);
@import "winduum/src/base/defaults.css" layer(base);

/* single imports for your components and utilities, or you can include them separately */
@import "winduum/src/components/index.css" layer(components);
@import "winduum/src/utilities/index.css" layer(utilities);

@import "tailwindcss/utilities" layer(utilities);
@import "winduum/src/base/breakpoints.css";
@import "winduum/src/base/keyframes.css";
@import "winduum/src/base/transitions.css";
```

TailwindCSS `v4` can be used in any project with Vite and works out of the box.
No `tailwind.config.js` needed!
All configuration is done in CSS!

```javascript
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [tailwindcss()],
})
```

Most of the APIs are not documented yet, so you can follow [Adam Wathan](https://x.com/adamwathan) to learn more.

## PostCSS or LightingCSS
For TailwindCSS `v3` following PostCSS plugins are required.
If you are using `v4` the [LightingCSS](https://lightningcss.dev/) is used out of the box.

* [`autoprefixer`](https://www.npmjs.com/package/autoprefixer)
* [`tailwindcss`](https://www.npmjs.com/package/tailwindcss)
* [`postcss-nesting`](https://www.npmjs.com/package/postcss-nesting)
* [`postcss-import`](https://www.npmjs.com/package/postcss-import)
* [`postcss-custom-media`](https://www.npmjs.com/package/postcss-custom-media)
  
If you are not using TailwindCSS, you can use whatever you want, even no build step!

## Stylelint

It's also recommended
to use [Stylelint](https://stylelint.io/) with [stylelint-stylistic](https://github.com/stylelint-stylistic/stylelint-stylistic)
to help add conventions to your styles.
You can check
and use basic `.stylelintrc` for Winduum [here](https://github.com/winduum/winduum/blob/main/.stylelintrc).

```shell
npm i stylelint stylelint-config-standard @stylistic/stylelint-config --save-dev
```

## CSS Pre-processors

If you want to use pre-processors like `sass` or `less` you can.
But if you want to use [TailwindCSS](#tailwindcss) be sure
to follow a guide how to use it with [Preprocessors](https://tailwindcss.com/docs/using-with-preprocessors)

## CDN

This is meant only for basic usage. Only basic styles are included for TailwindCSS, such as colors and font variants. 

To leverage the full functionality of the framework, [TailwindCSS](#tailwindcss) and build step is recommended.

```html
<link href="https://cdn.jsdelivr.net/npm/winduum/dist/main.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/winduum/dist/tailwind.css" rel="stylesheet">
<!--or-->
<link href="https://cdn.jsdelivr.net/npm/winduum/src/base/index.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/winduum/src/components/button/index.css" rel="stylesheet">

```

## Trying Winduum Online

On [StackBlitz](https://stackblitz.com/) or [GitHub](https://github.com/winduum/winduum/tree/main/examples) with basic examples how to use it in [Vite](https://vitejs.dev/) and other frameworks.

<style>
    #trying-winduum-online a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    #trying-winduum-online a svg {
        width: 0.875rem;
        height: 0.875rem;
    }

    .dark #trying-winduum-online a svg {
        fill: #fff;
    }

    @media all and (max-width: 720px) {
        #trying-winduum-online {
            display: block !important;
            gap: 3rem !important;
        }
    }
</style>

<div id="trying-winduum-online" style="display: flex; gap: 6rem; font-size: 1.125rem;">
<div>

* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/vite" target="_blank" rel="noreferrer">vite <svg><use href="#icon-sb" /></svg></a>
* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/vite-vue" target="_blank" rel="noreferrer">vite + vue <svg><use href="#icon-sb" /></svg></a>
* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/vite-react" target="_blank" rel="noreferrer">vite + react <svg><use href="#icon-sb" /></svg></a>
* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/vite-svelte" target="_blank" rel="noreferrer">vite + svelte <svg><use href="#icon-sb" /></svg></a>
* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/vite-solid" target="_blank" rel="noreferrer">vite + solid <svg><use href="#icon-sb" /></svg></a>
* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/vite-qwik" target="_blank" rel="noreferrer">vite + qwik <svg><use href="#icon-sb" /></svg></a>
* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/vite-lit" target="_blank" rel="noreferrer">vite + lit <svg><use href="#icon-sb" /></svg></a>

</div>

<div>

* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/astro" target="_blank" rel="noreferrer">astro <svg><use href="#icon-sb" /></svg></a>
* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/nuxt" target="_blank" rel="noreferrer">nuxt <svg><use href="#icon-sb" /></svg></a>
* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/next" target="_blank" rel="noreferrer">next <svg><use href="#icon-sb" /></svg></a>
* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/htmx" target="_blank" rel="noreferrer">htmx <svg><use href="#icon-sb" /></svg></a>
* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/vite-sass" target="_blank" rel="noreferrer">vite + sass <svg><use href="#icon-sb" /></svg></a>
* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/vite-less" target="_blank" rel="noreferrer">vite + less <svg><use href="#icon-sb" /></svg></a>

</div>
</div>

Winduum is **framework-agnostic**, learn more on the [About](/docs/about#framework-agnostic) page.

Do you need ready to use components? Here are components ready to copy & paste. For now there are only a few, more might come in the future!

* <LinkGh url="https://github.com/winduum/winduum-vue" name="winduum/winduum-vue"></LinkGh>
* <LinkGh url="https://github.com/winduum/winduum-react" name="winduum/winduum-react"></LinkGh>

Each component in docs includes example usage in `html` and also in `vue` and `jsx`.
