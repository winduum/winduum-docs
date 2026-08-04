---
description: "Provides a utility class for the View Transition API — view-transition-main sets view-transition-name: main, so the element transitions independently from…"
---

# View Transition
Provides a utility class for the [View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API) — `view-transition-main` sets `view-transition-name: main`, so the element transitions independently from the rest of the page.

### Dependencies
* [tailwindcss](https://tailwindcss.com/) (TailwindCSS @utility)

::: info Browser support
View transitions are progressive enhancement — browsers without support navigate without the animation, nothing breaks.
:::

## TailwindCSS
Include CSS file with the `@utility` at-rule.

<ViewSourceGh path="tailwindcss/utilities/view-transition.css" />

```css
@import "winduum/tailwindcss/utilities/view-transition.css";
```

```css
.view-transition-main {
  view-transition-name: main;
}
```

### Example
Enable cross-document view transitions and mark the main content, so only the content transitions between pages while the rest of the layout (header, footer) stays static:

```css
@view-transition {
    navigation: auto;
}
```

```html
<body>
    <header>Header</header>
    <main class="view-transition-main">
        Content
    </main>
    <footer>Footer</footer>
</body>
```

The transition animation can be customized via the `::view-transition-group(main)`, `::view-transition-old(main)` and `::view-transition-new(main)` pseudo-elements together with [Keyframes](/docs/base/keyframes):

```css
::view-transition-old(main) {
    animation-name: fade-out;
}

::view-transition-new(main) {
    animation-name: fade-in;
}
```
