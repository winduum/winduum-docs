# Animation
Provides a new utility class `animation` and TailwindCSS utility class `animation-*` for `animation-name` property. 

You should use this together with [Keyframes](/docs/base/keyframes) or use your own animation keyframes.

<ViewSourceGh path="src/utilities/animation.css" />

### Dependencies
* [tailwindcss](https://tailwindcss.com/)
* [winduum](/docs/base/config.html#tailwind-css-v3) (TailwindCSS v3 plugin)

## TailwindCSS v3
You can add more via the `tailwind.config.js`, see [Config](/docs/base/config#tailwind-css-v3) for more info.

## TailwindCSS v4
You can add more via the `@theme` at-rule, see [Config](/docs/base/config#tailwind-css-v4) for more info.

::: danger
Not yet supported.
:::

## Example
```html
<div class="animation animation-fade-in">
    Content
</div>
```
```css
.animation {
    animation-duration: var(--default-animation-duration, var(--default-transition-duration));
    animation-fill-mode: both;
}

.animation-fade-in {
  animation-name: fade-in;
}
```
