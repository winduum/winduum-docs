# Animation
Provides a new TailwindCSS utility class `animation-` for `animation-name` property. 

You should use this together with [Keyframes](/docs/layout/keyframes) and `animate` utility class to run the animation or use your own animation styles.

You can add more in the `tailwind.config.js`, see [Config](/docs/config#animations) for more info.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/utilities/animation.css" />

## Example
```html
<div class="animate animation-fade-in">
    Content
</div>
```
```css
.animate {
    animation-duration: var(--duration);
    animation-fill-mode: both;
}
```
