---
description: "Winduum is a small, modern CSS component framework built on the newest web standards, using as little JavaScript as possible."
---

# About
Winduum is a mix of words **Tailwind** _(Popular CSS utility framework)_ and **Tuum** _(Estonian word for "core")_.

It's a small, modern CSS component framework that leans on the **newest web platform standards** and uses **as little JavaScript as possible**. Because we ❤️ CSS.

Its approach to **TailwindCSS** is a little different.
It encourages writing components in CSS or other
(pre/post)-processors and to use utility classes to enhance the components.

As a CSS library, it provides beautifully styled accessible components, which you can extend with your own. TailwindCSS is recommended for the full experience, but it's optional — everything works without it too.

It is very modular and split into `base`, `components` and `utilities` layers.

You can choose what you want to use and make your own complex UX/UI project written in whatever you want.

## Why?
The question inevitably arises: Why introduce yet another UI component library into the mix? Simply because Winduum is different in a few areas than the others.

1. It focuses on web standards, accessibility and minimum simple code
2. It's progressive — it embraces the latest CSS and HTML features instead of reimplementing them in JavaScript
3. It ships as little JavaScript as possible — many components need none at all
4. It's framework-agnostic, so it can be used in any scenario
5. Its source code is plain CSS and JS, so it can be also used without a build step

## Framework-agnostic
Winduum is **framework-agnostic**, so you are able to create your own components using your preferred framework. The JavaScript primitives can be adapted in any framework too.

Pre-built components are available for the most common setups — [`winduum-elements`](https://github.com/winduum/winduum-elements) (Web Components), [`winduum-stimulus`](https://github.com/winduum/winduum-stimulus), [`winduum-vue`](https://github.com/winduum/winduum-vue) and [`winduum-react`](https://github.com/winduum/winduum-react) — and most components include usage and installation examples for them in the docs.

Want to help? We're open for pull requests!

## Modern web standards
Staying ahead of the curve, Winduum leverages the latest web platform features so behavior that used to require JavaScript is handled natively by the browser. Where support is still rolling out, features degrade gracefully or can be covered with opt-in [polyfills](/docs/polyfills).

Interaction and layout, largely without JavaScript:

- **[Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)** and **[Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API)** — popovers, dialogs, drawers and toasts
- **[CSS Anchor Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning)** — popover and tooltip placement
- **[Interest Invokers](/docs/variants/interest)** (`interestfor`) — hover/focus cards and tooltips
- **[Scroll Snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap)** — carousel and drawer
- **[Scroll-driven animations](/docs/utilities/animation#animation-timeline)** and **[scroll-state queries](/docs/variants/scroll-state)**
- **`@starting-style`** and **`allow-discrete`** transitions — enter/exit animations
- Native **`<dialog>`**, **`<details>`** and form elements for built-in accessibility

Modern styling foundations:

- **CSS custom properties** and **logical properties**
- **CSS nesting** and **`color-mix()`**
- **Modern pseudo-selectors** such as `:where`, `:is` and `:has`
- **Modern CSS reset** with **low specificity** and **cascade layers**

**Winduum** is all about accessibility and web standards that can be used in any framework.

## Naming
In your projects it's recommended to prefix component classes for better clarity. Some of these are already used for various components.

* **Component** - `x-name` (with prefix, every component is prefixed)
* **Utilities** - `name` (without prefix, utility classes for common styles)

## CSS Properties

Each CSS property follows the same naming, for example `--x-name-font-size`

## Directory structure

To help navigate your project easily,
it's recommended to follow the same naming principles for your directory structure, for example, like this:

* 📁 **base**
* 📁 **components**
* 📁 **theme**
* 📁 **utilities** or **utils**

## Examples

### Using the components

You can use any of the components easily in HTML without the need to write complex TailwindCSS classes.

Each component is written with low specificity in mind, so any property can be easily enhanced with TailwindCSS utility classes.

::: code-group
```html
<button class="x-button accent-main">This is a Button</button>
```
```css
.x-button {
    --x-button-font-size: 0.875rem;
    
    /* CSS styles */
}
```
:::

### Writing the components

You can write your own components using the same approach

::: code-group
```html
<div class="x-hello-world bg-dark rounded-md">Hello world</div>
```
```css
.x-hello-world {
    --x-hello-world-font-size: 2rem;
    
    /* CSS styles */
}
```
:::

It's recommended to use TailwindCSS utility classes for most cases. If you want to style some elements in CSS inside the component, consider creating a new component.

If you don't want to create a new component, don't use complex conventions like BEM.
It's recommended
to use something like [part](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part) attribute.
For example `data-part="body"`

```css
.x-hello-world {
  :where([data-part~"body"]) {
    /* CSS styles */
  }
}
```

This way you can tell that it's an element related to the parent component. 

In rare cases you want to prevent possible class conflicts you can add name of the component inside the class like this `x-hello-world:body`.
