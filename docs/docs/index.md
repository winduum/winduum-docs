# Install

You can install Winduum via **npm** and use it in your **Node.js** or **Deno** project.

See [Trying Winduum Online](#trying-winduum-online) section below to see all possible examples of use.

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

Or you can include components separately

::: code-group
```css
@import "winduum/src/base/index.css";
@import "winduum/src/tailwind.css";
@import "winduum/src/ui/btn.css";
```
```js
import 'winduum/src/base/index.css';
import 'winduum/src/tailwind.css';
import 'winduum/src/ui/btn.css';
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

### CSS Pre-processors

You can use any CSS pre-processor you want. Just be sure to add [TailwindCSS](#tailwindcss) to your configuration, either via CLI or PostCSS.

## CDN

This is meant only for basic usage, only basic styles are included for TailwindCSS, such as colors and font variants. 

To leverage the full functionality of the framework, [TailwindCSS](#tailwindcss) is recommended.

```html
<link href="https://cdn.jsdelivr.net/npm/winduum/dist/main.css" rel="stylesheet" type="text/css" />
<link href="https://cdn.jsdelivr.net/npm/winduum/dist/tailwind.css" rel="stylesheet" type="text/css" />
```

## Trying Winduum Online

On [StackBlitz](https://stackblitz.com/) or [GithHub](https://github.com/winduum/winduum/tree/main/examples) with basic examples how to use it in [Vite](https://vitejs.dev/) and other frameworks.

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
* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/vite-qwik" target="_blank" rel="noreferrer">vite + qwik <svg><use href="#icon-sb" /></svg></a>

</div>

<div>

* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/vite-tokencss" target="_blank" rel="noreferrer">vite + tokencss <svg><use href="#icon-sb" /></svg></a>
* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/vite-sass" target="_blank" rel="noreferrer">vite + sass <svg><use href="#icon-sb" /></svg></a>
* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/vite-less" target="_blank" rel="noreferrer">vite + less <svg><use href="#icon-sb" /></svg></a>
* <a href="https://github.com/winduum/winduum/tree/main/examples/deno-vite" target="_blank" rel="noreferrer">deno + vite <svg><use href="#icon-gh" /></svg></a>
* <a href="https://github.com/winduum/winduum/tree/main/examples/deno-lume" target="_blank" rel="noreferrer">deno + lume <svg><use href="#icon-gh" /></svg></a>

</div>

<div>

* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/astro" target="_blank" rel="noreferrer">astro <svg><use href="#icon-sb" /></svg></a>
* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/nuxt" target="_blank" rel="noreferrer">nuxt <svg><use href="#icon-sb" /></svg></a>
* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/next" target="_blank" rel="noreferrer">next <svg><use href="#icon-sb" /></svg></a>

</div>
</div>

<svg style="display: none">
    <symbol id="icon-gh" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></symbol>
    <symbol id="icon-sb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clip-rule="evenodd" />
    </symbol>
</svg>
