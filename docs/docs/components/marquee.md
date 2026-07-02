# Marquee

Marquee creates an infinite horizontal loop for logos, partners or other repeated items. It is CSS-only and positions each child on the same motion path using sibling count and sibling index variables.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/marquee" />

### Usage

```css
@import "winduum/src/components/marquee/index.css" layer(utilities);
```

Or import the pieces separately if you want to customize the props or keyframes.

```css
@import "winduum/src/components/marquee/keyframes/default.css" layer(utilities);
@import "winduum/src/components/marquee/default.css" layer(utilities);
```

### Variants
* <LinkGh name="default" path="components/marquee" />

### Props
* `--x-marquee-sibling-count` - total number of marquee items
* `--x-marquee-visible-count` - number of visible items used for spacing along the path
* `--x-marquee-inline-size` - inline size of each marquee item
* `--x-marquee-gap` - gap between marquee items
* `--x-marquee-animation-duration` - animation duration, defaults to `30s`
* `--x-marquee-animation-timing-function` - animation timing function, defaults to `linear`
* `--x-marquee-sibling-index` - item index, required as a fallback for browsers without `sibling-index()`

### Installation
Follow instructions for individual framework usage below.

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/marquee" />

## Examples

### Default

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/marquee/default.html" style="height: 8rem"></iframe>

<<< @/public/examples/components/marquee/default.html#body{}

### Reverse

Use TailwindCSS arbitrary child variant `*:[animation-direction:reverse]` to move the loop in the opposite direction.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/marquee/reverse.html" style="height: 8rem"></iframe>

::: code-group
<<< @/public/examples/components/marquee/reverse.html#body{} [html]
:::

## Accessibility

Keep only the real set of links focusable. If extra duplicated items are present only to make the loop feel continuous, add `aria-hidden="true"` and `tabindex="-1"` to those duplicates.

Pause the animation when focus moves inside the marquee so keyboard users can interact with links without the focused item moving away. The examples use `*:group-has-focus-within:[animation-play-state:paused]` on the marquee wrapper.
