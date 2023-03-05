# Install

You can install Winduum via **npm** and use it in your **Node.js** or **Deno** project.

See [Trying Winduum online](#trying-winduum-online) section below to see all possible examples of configuration.

## npm

```shell
npm i winduum
```

You can include compiled Winduum as CSS or JS import into your project.

::: code-group
```css
@import "winduum/main.css";
```
```js
import 'winduum/main.css';
```
:::
This will add the CSS components, but to leverage the full functionality of the framework, use of [TailwindCSS](#tailwindcss) is recommended.

### CSS Pre-processors

You can use any CSS pre-processor you want. Just be sure to add [TailwindCSS](#tailwindcss) to your configuration, either via CLI or PostCSS.

### PostCSS

The recommended setup is to use PostCSS and load source files directly.

::: code-group
```css
@import "winduum/src/main.css";
@import "winduum/src/tailwind.css";
```
```js
import 'winduum/src/main.css';
import 'winduum/src/tailwind.css';
```
:::
Following PostCSS plugins are required. `css-has-pseudo` is recommended because not all browsers support `:has` yet.
* [`autoprefixer`](https://www.npmjs.com/package/autoprefixer)
* [`tailwindcss`](https://www.npmjs.com/package/tailwindcss)
* [`postcss-nesting`](https://www.npmjs.com/package/postcss-nesting)
* [`postcss-import`](https://www.npmjs.com/package/postcss-import)
* [`postcss-custom-media`](https://www.npmjs.com/package/postcss-custom-media)
* [`css-has-pseudo`](https://www.npmjs.com/package/css-has-pseudo)

### TailwindCSS

Follow the installation steps in [TailwindCSS](https://tailwindcss.com/docs/installation) docs and include Winduum as plugin, see [Config](config) for more info.

### Stylelint

It's also recommended to use [Stylelint](https://stylelint.io/) to help add conventions to your styles. You can check and use basic `.stylelintrc` for Winduum [here](https://github.com/winduum/winduum/blob/main/.stylelintrc).

## CDN

This is meant only for basic usage, only basic styles are included for TailwindCSS, such as colors and font variants. To leverage the full functionality of the framework, use of full [TailwindCSS](#tailwindcss) is recommended.

```html
<link href="https://cdn.jsdelivr.net/npm/winduum/dist/main.css" rel="stylesheet" type="text/css" />
<link href="https://cdn.jsdelivr.net/npm/winduum/dist/tailwind.css" rel="stylesheet" type="text/css" />
```

## Trying Winduum online

You can also try Winduum online on [StackBlitz](https://stackblitz.com/) with basic examples how to use it in [Vite](https://vitejs.dev/) and other frameworks.

<style>
    @media all and (max-width: 720px) {
        #trying-winduum-online {
            display: block !important;
            gap: 3rem !important;
        }
    }
</style>

<div id="trying-winduum-online" style="display: flex; gap: 6rem; font-size: 1.125rem;">
<div>

* [vite](https://stackblitz.com/github/winduum/winduum/tree/main/examples/vite)
* [vite + vue](https://stackblitz.com/github/winduum/winduum/tree/main/examples/vite-vue)
* [vite + react](https://stackblitz.com/github/winduum/winduum/tree/main/examples/vite-react)
* [vite + svelte](https://stackblitz.com/github/winduum/winduum/tree/main/examples/vite-svelte)
* [vite + qwik](https://stackblitz.com/github/winduum/winduum/tree/main/examples/vite-qwik)

</div>

<div>

* [astro](https://stackblitz.com/github/winduum/winduum/tree/main/examples/astro)
* [nuxt](https://stackblitz.com/github/winduum/winduum/tree/main/examples/nuxt)
* [next](https://stackblitz.com/github/winduum/winduum/tree/main/examples/next)
* [sass](https://stackblitz.com/github/winduum/winduum/tree/main/examples/sass)
* [less](https://stackblitz.com/github/winduum/winduum/tree/main/examples/less)

</div>

<div>

* [deno + vite](https://github.com/winduum/winduum/tree/main/examples/deno-vite)
* [deno + lume](https://github.com/winduum/winduum/tree/main/examples/deno-lume)

</div>
</div>
