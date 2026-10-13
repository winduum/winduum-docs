---
description: "Provides variants for scroll-state container queries — style elements based on the scroll state of their container: whether it can be scrolled, has been…"
---

# Scroll State
Provides variants for [scroll-state container queries](https://developer.chrome.com/blog/css-scroll-state-queries) — style elements based on the scroll state of their container: whether it can be scrolled, has been scrolled, an item is snapped, or a sticky element is stuck.

To use these variants, the queried element must be inside a container with `container-type: scroll-state`. The variants then apply to its descendants.

Available variant groups:

* `scrollable-*` — whether the container can be scrolled in the given direction: `none`, `top`, `right`, `bottom`, `left`, `x`, `y`, `block`, `inline`, `block-start`, `block-end`, `inline-start`, `inline-end`
* `scrolled-*` — whether the container has been scrolled in the given direction (same values as `scrollable-*`)
* `snapped-*` — whether the element is a scroll-snap target: `none`, `x`, `y`, `block`, `inline`, `both`
* `stuck-*` — whether a `position: sticky` container is currently stuck to the given edge: `none`, `top`, `right`, `bottom`, `left`, `block-start`, `block-end`, `inline-start`, `inline-end`

### Dependencies
* [tailwindcss](https://tailwindcss.com/) (TailwindCSS @variant)

::: info Browser support
Scroll-state container queries are a recent addition to the platform — browsers without support simply ignore the queried styles, so use these variants as progressive enhancement.
:::

## TailwindCSS
Include CSS file with the `@variant` at-rule.

<ViewSourceGh path="tailwindcss/variants/scroll-state.css" />

```css
@import "winduum/tailwindcss/variants/scroll-state.css";
```

### Example
Add a shadow to a sticky header once it sticks to the top of the viewport:

```html
<header class="sticky top-0 [container-type:scroll-state]">
    <nav class="stuck-top:shadow-md">
        Navigation
    </nav>
</header>
```
```css
.stuck-top\:shadow-md {
  @container scroll-state(stuck: top) {
    box-shadow: var(--shadow-md);
  }
}
```

or highlight the currently snapped item in a carousel

```html
<ul class="flex overflow-x-auto snap-x snap-mandatory">
    <li class="snap-center [container-type:scroll-state]">
        <img class="snapped-x:scale-100 scale-75 transition-transform" src="image.jpg" alt="">
    </li>
</ul>
```
```css
.snapped-x\:scale-100 {
  @container scroll-state(snapped: x) {
    scale: 100%;
  }
}
```
