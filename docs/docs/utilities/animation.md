# Animation
Provides a new utility class `animation` and TailwindCSS utility class `animation-*` for `animation-name` property. 

You should use this together with [Keyframes](/docs/base/keyframes) or use your own animation keyframes.

<ViewSourceGh path="src/utilities/animation.css" />

### Dependencies
* [tailwindcss](https://tailwindcss.com/) (TailwindCSS v4 @utility)
* [winduum](/docs/base/config.html#tailwind-css-v3) (TailwindCSS v3 plugin)

## TailwindCSS v4
You can add more via the `@theme` at-rule, see [Config](/docs/base/config#tailwind-css-v4) for more info.<br>
Include CSS file with the `@utility` at-rule.

<ViewSourceGh path="tailwindcss/utilities/animation.css" />

```css
@import "winduum/tailwindcss/utilities/animation.css";
```

### Example
```css
@theme {
    --animation-fade-in: fade-in;
}
```

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
  animation-name: var(--animation-fade-in);
}
```

or use arbitrary value

```html
<div class="animation animation-[fade-in]">
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

## TailwindCSS v3
You can add more via the `tailwind.config.js`, see [Config](/docs/base/config#tailwind-css-v3) for more info.

### Example
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
