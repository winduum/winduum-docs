# Transitions

This activates the [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) with cross-document animations.<br>
CSS properties can be changed via [Config](https://github.com/winduum/winduum/blob/next/src/theme/config.css).

[`src/base/transitions.css`](https://github.com/winduum/winduum/blob/next/src/base/transitions.css)

```css
@view-transition {
    navigation: auto;
}

::view-transition-group(main) {
    animation-duration: var(--view-transition-main-duration);
}

::view-transition-new(main) {
    animation-delay: var(--view-transition-main-duration);
}

```

Add `view-transition-main` class to any element you want to animate page navigation.

[`src/utilities/view-transition.css`](https://github.com/winduum/winduum/blob/next/src/utilities/view-transition.css)

```css
.view-transition-main {
    view-transition-name: main;
}
```
