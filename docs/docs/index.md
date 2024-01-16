# Install

You can install Winduum via **npm** and use it in your **Node.js** project.

See [Trying Winduum Online](#trying-winduum-online) section below to see all possible examples of use.

::: warning
Winduum is in early preview. Can be used for production, but some features may change over time.
:::

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

The components are written in plain CSS, so sources can be also loaded in browsers without a build step or used in any other build tool such as **PostCSS** or **LightningCSS**. 

For now, the recommended setup is to use PostCSS and load all source files directly for best support.

::: code-group
```css
@import "winduum/src/main.css" layer(components);
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
@import "winduum/src/ui/btn/index.css" layer(components);
```
```js
import 'winduum/src/base/index.css';
import 'winduum/src/tailwind.css';
import 'winduum/src/ui/btn/index.css';
```
:::

With `layer(components)` you can use TailwindCSS also on components, for example `class="ui-btn lg:square"` to make button square only from `lg` breakpoint.

Following PostCSS plugins are required. 
* [`autoprefixer`](https://www.npmjs.com/package/autoprefixer)
* [`tailwindcss`](https://www.npmjs.com/package/tailwindcss)
* [`postcss-nesting`](https://www.npmjs.com/package/postcss-nesting)
* [`postcss-import`](https://www.npmjs.com/package/postcss-import)
* [`postcss-custom-media`](https://www.npmjs.com/package/postcss-custom-media)

And `css-has-pseudo` is recommended for better `:has` compatibility in older browsers.
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
* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/vite-lit" target="_blank" rel="noreferrer">vite + lit <svg><use href="#icon-sb" /></svg></a>

</div>

<div>

* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/astro" target="_blank" rel="noreferrer">astro <svg><use href="#icon-sb" /></svg></a>
* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/nuxt" target="_blank" rel="noreferrer">nuxt <svg><use href="#icon-sb" /></svg></a>
* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/next" target="_blank" rel="noreferrer">next <svg><use href="#icon-sb" /></svg></a>
* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/vite-sass" target="_blank" rel="noreferrer">vite + sass <svg><use href="#icon-sb" /></svg></a>
* <a href="https://stackblitz.com/github/winduum/winduum/tree/main/examples/vite-less" target="_blank" rel="noreferrer">vite + less <svg><use href="#icon-sb" /></svg></a>

</div>
</div>

Winduum doesn't have full component integration in any of the frameworks, but if there is interest projects like `winduum-vue` or `winduum-react` might arise.
