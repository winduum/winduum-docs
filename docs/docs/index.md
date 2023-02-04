# Install

You can install Winduum via **npm** and use it in your **Node.js** or **Deno** project.


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

The recommended setup is to use PostCSS and load source files directly. Following PostCSS plugins are required. `css-has-pseudo` is recommended because not all browsers support `:has` yet.

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

```json
{
  "autoprefixer": "*",
  "css-has-pseudo": "*",
  "postcss-custom-media": "*",
  "postcss-custom-properties": "*",
  "postcss-custom-selectors": "*",
  "postcss-import": "*",
  "postcss-nesting": "*",
  "tailwindcss": "*"
}
```

### TailwindCSS

Follow the installation steps in [TailwindCSS](https://tailwindcss.com/docs/installation) docs and include Winduum as plugin, see [Config](config) for more info.

### Stylelint

It's also recommended to use [Stylelint](https://stylelint.io/) to help add conventions to your styles.

_

See [Trying Winduum online](#trying-winduum-online) section below to see all possible examples of configuration.

## CDN

This is meant only for basic usage, only basic styles are included for TailwindCSS, such as colors and font variants. To leverage the full functionality of the framework, use of full [TailwindCSS](#tailwindcss) is recommended.

```html
<link href="https://cdn.jsdelivr.net/npm/winduum@0.1.4/dist/main.css" rel="stylesheet" type="text/css" />
<link href="https://cdn.jsdelivr.net/npm/winduum@0.1.4/dist/tailwind.css" rel="stylesheet" type="text/css" />
```

## Trying Winduum online

You can also try Winduum online on [StackBlitz](https://stackblitz.com/) with [Vite](https://vitejs.dev/) or [Vituum](https://vituum.dev/).

<style>
    @media all and (max-width: 720px) {
        #winduum-examples {
            display: block !important;
            gap: 3rem !important;
        }
    }
</style>

<div id="winduum-examples" style="display: flex; gap: 6rem; font-size: 1.125rem;">
<div>

### Vite
* [vite](https://stackblitz.com/github/winduum/winduum/tree/main/examples/vite)
* [vite + vue]()
* [vite + react]()
* [vite + svelte]()
* [vite + qwik]()

</div>
<div>

### Vituum
* [vituum]()
* [vituum + twig]()
* [vituum + liquid]()
* [vituum + liquid]()
* [vituum + pug]()

</div>
<div>

### Other
* [vanilla]()
* [deno]()
* [nuxt]()
* [next]()

</div>
</div>
