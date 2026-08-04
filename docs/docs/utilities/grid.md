---
description: "Utilities that extend TailwindCSS grid with two additions:"
---

# Grid
Utilities that extend TailwindCSS [grid](https://tailwindcss.com/docs/grid-template-columns) with two additions:

* [`grid-cols-container`](#grid-cols-container) — a container layout built with grid, replacing the classic container class
* [`grid-area-*`](#grid-area) — utilities for the `grid-area` property

### Dependencies
* [tailwindcss](https://tailwindcss.com/) (TailwindCSS @utility)

## Grid Cols Container
A modern approach to the classic [Container](https://tailwindcss.com/docs/max-width#container-scale) — instead of wrapping content in a fixed-width element, the parent becomes a grid with named column lines and children are placed into the center column automatically. Inspired by [Kevin Powell](https://youtu.be/c13gpBrnGEw?si=FGoMS9FnWEOYohPi).

Available column lines:

* `container` — content width, children are placed here by default
* `container-breakout` — slightly wider than the content width, for elements that should stand out
* `container-full` — full viewport width

The container is configured via CSS variables — `--container-width` (default `80rem`), `--container-breakout-width` (default `--container-width + 10rem`) and `--container-padding` (default `5vw`).

<ViewSourceGh path="tailwindcss/utilities/grid-cols-container.css" />

```css
@import "winduum/tailwindcss/utilities/grid-cols-container.css";
```

### Example
```html
<body class="grid grid-cols-container gap-4">
  <header class="col-[container-full] grid grid-cols-container">Header Full Width</header>
  <main>Content in container</main>
  <footer class="col-[container-breakout]">Footer Breakout</footer>
</body>
```

In some cases the classic approach is still handy, you can achieve that easily with `w-[--container]`

```html
<div class="w-[--container] mx-auto">
    Content
</div>
```

## Grid Area
Utilities for the `grid-area` property — place elements into named or numbered grid areas.

* `grid-area-full` — `grid-area: 1/-1`, useful for stacking elements on top of each other
* `grid-area-*` — a row number or an arbitrary value, e.g. `grid-area-[banner]`

<ViewSourceGh path="tailwindcss/utilities/grid-area.css" />

```css
@import "winduum/tailwindcss/utilities/grid-area.css";
```

### Example
Stack elements on top of each other without absolute positioning:

```html
<div class="grid">
    <img class="grid-area-full" src="image.jpg" alt="">
    <div class="grid-area-full self-end">Caption</div>
</div>
```
```css
.grid-area-full {
  grid-area: 1/-1;
}
```

or place elements into a named area

```html
<div class="grid grid-template-areas-[banner]">
    <div class="grid-area-[banner]">Banner</div>
</div>
```
```css
.grid-area-\[banner\] {
  grid-area: banner;
}
```
