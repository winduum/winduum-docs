# Animation
A set of utilities for working with CSS animations. Instead of predefined animation classes, Winduum lets you compose animations from small building blocks:

* [`animation`](#base-class) — base class that sets a default `animation-duration` and `animation-fill-mode`
* [`animation-*`](#tailwindcss) — sets `animation-name` from your theme or an arbitrary value
* [`from-*` / `to-*`](#from-to-utilities) — customize the start and end state of the `enter` and `exit` keyframes
* [Animation Timeline](#animation-timeline) — scroll-driven animations with `animation-timeline`
* [Animation Trigger](#animation-trigger) — play animations when an element enters the viewport

Animations themselves are defined as keyframes — use the ones provided in [Keyframes](/docs/base/keyframes) or define your own.

### Dependencies
* [tailwindcss](https://tailwindcss.com/) (TailwindCSS @utility)

## Base class
The `animation` utility class only sets sensible defaults — a default duration and `animation-fill-mode: both` — so the element stays in the final state of its keyframes. It doesn't animate anything on its own, you combine it with an `animation-name` set by the `animation-*` utility below.

<ViewSourceGh path="src/utilities/animation.css" />

```css
.animation {
  animation-duration: var(--default-animation-duration, var(--default-transition-duration, 150ms));
  animation-fill-mode: both;
}
```

## TailwindCSS
The `animation-*` utility sets the `animation-name` property. It accepts animation names defined in your theme via the `@theme` at-rule (see [Config](/docs/base/config#tailwind-css-v4)) or any arbitrary keyframes name.<br>
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

### From / To utilities
Utilities `from-*` and `to-*` set CSS variables that are consumed by the `enter` and `exit` [Keyframes](/docs/base/keyframes). This allows you to customize the starting and ending state of an animation directly in HTML.

Available utilities:

* `from-translate-y-*` / `to-translate-y-*` (also negative `-from-translate-y-*` / `-to-translate-y-*`)
* `from-translate-x-*` / `to-translate-x-*` (also negative `-from-translate-x-*` / `-to-translate-x-*`)
* `from-opacity-*` / `to-opacity-*`
* `from-scale-*` / `to-scale-*`
* `from-rotate-*` / `to-rotate-*`

```html
<div class="animation animation-[enter] from-translate-y-4 from-opacity-0">
    Content
</div>
```
```css
.from-translate-y-4 {
  --tw-animation-from-translate-y: calc(var(--spacing) * 4);
}

.from-opacity-0 {
  --tw-animation-from-opacity: 0%;
}
```

## Animation Timeline
Utilities for [scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations) — `animation-timeline`, `animation-range`, `scroll-timeline`, `view-timeline` and `timeline-scope` properties.

<ViewSourceGh path="tailwindcss/utilities/animation-timeline.css" />

```css
@import "winduum/tailwindcss/utilities/animation-timeline.css";
```

Available utilities:

* `animation-timeline-scroll` / `animation-timeline-scroll-y` / `animation-timeline-scroll-x` — `animation-timeline: scroll()`
* `animation-timeline-view` — `animation-timeline: view()`
* `animation-timeline-*` — arbitrary `animation-timeline` value (`auto`, `none` or custom timeline name)
* `animation-range-*` — arbitrary `animation-range` value
* `scroll-timeline-y-*` / `scroll-timeline-x-*` / `scroll-timeline-block` — named `scroll-timeline`
* `view-timeline-y-*` / `view-timeline-x-*` / `view-timeline-block` — named `view-timeline`
* `timeline-scope-*` — `timeline-scope`

### Example
```html
<div class="animation animation-fade-in animation-timeline-view animation-range-[entry_0%_cover_40%]">
    Content
</div>
```
```css
.animation-timeline-view {
  animation-timeline: view();
}

.animation-range-\[entry_0\%_cover_40\%\] {
  animation-range: entry 0% cover 40%;
}
```

or with a named timeline

```html
<div class="scroll-timeline-y-[--my-timeline] overflow-y-auto">
    <div class="animation animation-fade-in animation-timeline-[--my-timeline]">
        Content
    </div>
</div>
```

## Animation Trigger
Utilities for [`animation-trigger`](https://developer.chrome.com/blog/animation-trigger) and `timeline-trigger` properties, allowing you to play animations when an element enters the viewport.

<ViewSourceGh path="tailwindcss/utilities/animation-trigger.css" />

```css
@import "winduum/tailwindcss/utilities/animation-trigger.css";
```

Available utilities:

* `animation-trigger-enter` — plays the `enter` keyframes once via the `--enter` trigger
* `animation-trigger-*` — arbitrary `animation-name` triggered via a named trigger passed as a modifier, e.g. `animation-trigger-[fade-in]/[--reveal]`
* `timeline-trigger-enter` — defines the `--enter` view timeline trigger on the element
* `timeline-trigger-*` — defines an arbitrary named `timeline-trigger`

Behavior can be customized via CSS variables:

* `--tw-animation-duration` — animation duration (default `1.75s`)
* `--tw-animation-timing-function` — easing (default `var(--ease-emphasized)`)
* `--tw-animation-fill-mode` — fill mode (default `both`)
* `--tw-animation-trigger-action` — trigger action (default `play-once`)
* `--tw-timeline-trigger-entry` / `--tw-timeline-trigger-exit` — entry/exit range of the view timeline (default `20%` / `0%`)

Animations are automatically disabled with `prefers-reduced-motion`.

### Example
Combine with `from-*` utilities to define the starting state of the `enter` animation:

```html
<h2 class="animation-trigger-enter from-translate-y-4 timeline-trigger-enter">Our key partners</h2>
```
```css
.animation-trigger-enter {
  animation-duration: var(--tw-animation-duration, 1.75s);
  animation-timing-function: var(--tw-animation-timing-function, var(--ease-emphasized));
  animation-fill-mode: var(--tw-animation-fill-mode, both);
  animation-trigger: --enter var(--tw-animation-trigger-action, play-once);
  animation-name: enter;

  @media (prefers-reduced-motion) {
    animation: none;
  }
}

.from-translate-y-4 {
  --tw-animation-from-translate-y: calc(var(--spacing) * 4);
}

.timeline-trigger-enter {
  timeline-trigger: --enter view() entry var(--tw-timeline-trigger-entry, 20%) exit var(--tw-timeline-trigger-exit, 0%);
  trigger-scope: --enter;
}
```

or with a custom named trigger and animation

```html
<h2 class="animation-trigger-[fade-in]/[--reveal] timeline-trigger-[--reveal]">Our key partners</h2>
```
```css
.animation-trigger-\[fade-in\]\/\[--reveal\] {
  animation-duration: var(--tw-animation-duration, 1.75s);
  animation-timing-function: var(--tw-animation-timing-function, var(--ease-emphasized));
  animation-fill-mode: var(--tw-animation-fill-mode, both);
  animation-trigger: --reveal var(--tw-animation-trigger-action, play-once);
  animation-name: fade-in;

  @media (prefers-reduced-motion) {
    animation: none;
  }
}

.timeline-trigger-\[--reveal\] {
  timeline-trigger: --reveal view() entry var(--tw-timeline-trigger-entry, 20%) exit var(--tw-timeline-trigger-exit, 0%);
  trigger-scope: --reveal;
}
```
