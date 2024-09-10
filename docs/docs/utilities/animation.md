# Animation
Provides a new TailwindCSS utility class `animation-` for `animation-name` property. 

You should use this together with [Keyframes](/docs/layout/keyframes) and `animation` utility class
to run the animation or use your own animation styles.

<ViewSourceGh path="src/utilities/animation.css" />

### Dependencies
* [tailwindcss](https://tailwindcss.com/)
* [winduum](http://localhost:5174/docs/config.html#tailwind-css) (TailwindCSS v3 plugin)

## TailwindCSS v3
You can add more via the `tailwind.config.js`, see [Config](/docs/config#animations) for more info.

## TailwindCSS v4
You can add more via the `@theme` at-rule, see [Config](/docs/config#tailwind4) for more info.

## Example
```html
<div class="animation">
    Content
</div>
```
```css
.animation {
    animation-duration: var(--default-animation-duration, var(--default-transition-duration));
    animation-fill-mode: both;
}
```
