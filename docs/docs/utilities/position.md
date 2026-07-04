---
description: "Utilities for positioning elements with CSS Anchor Positioning — each utility sets the position-area property together with position-try-fallbacks, so the…"
---

# Position
Utilities for positioning elements with [CSS Anchor Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning) — each utility sets the `position-area` property together with `position-try-fallbacks`, so the element automatically flips to the other side when there is not enough space in the viewport.

These utilities are used for anchored elements such as [Popover](/docs/components/popover). Each utility also sets a matching `transform-origin` on direct children, so scale/enter animations grow from the anchor side.

### Dependencies
* [tailwindcss](https://tailwindcss.com/) (TailwindCSS @utility)

## TailwindCSS
Include CSS file with the `@utility` at-rule.

<ViewSourceGh path="tailwindcss/utilities/position.css" />

```css
@import "winduum/tailwindcss/utilities/position.css";
```

Available utilities:

* `top` / `top-start` / `top-end` — above the anchor, flips to bottom when there is no space
* `bottom` / `bottom-start` / `bottom-end` — below the anchor, flips to top when there is no space
* `left` / `left-start` / `left-end` — before the anchor, flips to right when there is no space
* `right` / `right-start` / `right-end` — after the anchor, flips to left when there is no space

The base name sets the side, the `-start` / `-end` suffix aligns the element along that side.

### Example
```html
<button popovertarget="menu" class="[anchor-name:--menu]">Open menu</button>

<div id="menu" popover class="bottom-start [position-anchor:--menu]">
    Content
</div>
```
```css
.bottom-start {
  position-area: block-end span-inline-end;
  position-try-fallbacks: flip-block;

  > * {
    transform-origin: top left;
  }
}
```
