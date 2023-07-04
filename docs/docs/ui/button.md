# Button

<a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/default.css" target="_blank" rel="noreferrer" class="winduum-gh-link">View Source <svg><use href="#icon-gh" /></svg></a>

### Single Import

```css
@import "winduum/ui/btn/index.css" layer(components);
```

### Variants

  * `bordered` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/bordered.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `muted` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/muted.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `raised` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/raised.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `ghosted` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/default.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `gradient` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/gradient.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `gradient-bordered` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/gradient-bordered.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `sm` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/sm.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `lg` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/lg.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `wide` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/wide.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `square` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/square.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `circle` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/circle.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `loading` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/loading.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `active` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/muted.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
  * `hover-fill` <a href="https://github.com/winduum/winduum/blob/main/src/ui/btn/hover-fill.css" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>

## Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/basic.html"></iframe>

<<< @/public/examples/ui/btn/basic.html#body{}

## Flat

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/flat.html"></iframe>

<<< @/public/examples/ui/btn/flat.html#body{}

## Bordered

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/outline.html"></iframe>

<<< @/public/examples/ui/btn/outline.html#body{}

## Muted

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/muted.html"></iframe>

<<< @/public/examples/ui/btn/muted.html#body{}

## Raised

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/raised.html"></iframe>

<<< @/public/examples/ui/btn/raised.html#body{}

## Ghosted

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/text.html"></iframe>

<<< @/public/examples/ui/btn/text.html#body{}

## Gradient

You can create gradient buttons with [TailwindCSS](https://tailwindcss.com/docs/gradient-color-stops) gradient classes

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/gradient.html"></iframe>

<<< @/public/examples/ui/btn/gradient.html#body{}

## Small

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/small.html"></iframe>

<<< @/public/examples/ui/btn/small.html#body{}

## Large

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/large.html"></iframe>

<<< @/public/examples/ui/btn/large.html#body{}

## Wide

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/wide.html"></iframe>

<<< @/public/examples/ui/btn/wide.html#body{}

## Square

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/square.html"></iframe>

<<< @/public/examples/ui/btn/square.html#body{}

## Circle

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/circle.html"></iframe>

<<< @/public/examples/ui/btn/circle.html#body{}

## Icon

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/icon.html"></iframe>

<<< @/public/examples/ui/btn/icon.html#body{}

## Loading

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/loading.html"></iframe>

<<< @/public/examples/ui/btn/loading.html#body{}

## Active

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/active.html"></iframe>

<<< @/public/examples/ui/btn/active.html#body{}

## Disabled

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/disabled.html"></iframe>

<<< @/public/examples/ui/btn/disabled.html#body{}

## Custom

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/custom.html"></iframe>

```html
<button class="ui-btn">Button</button>
```
```css
.ui-btn {
    --ui-btn-height: 4rem;
    --ui-btn-py: 1rem;
    --ui-btn-px: 1rem;
    --ui-btn-border-radius: 0;
    --ui-btn-font-size: 1.15rem;
    --ui-btn-font-weight: 700;
    --ui-btn-bg: yellow;
    --ui-btn-color: #333;
    --ui-btn-hover-opacity: 0.4;
    --ui-btn-focus-opacity: 0.8;
}
```

You can also extend the button with any TailwindCSS class to customize it

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/tailwind.html"></iframe>

<<< @/public/examples/ui/btn/tailwind.html#body{}

<br>

# Button Group

You can group buttons into groups

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/group.html"></iframe>

<<< @/public/examples/ui/btn/group.html#body{}
