# About
Winduum is a mix of words **Tailwind** _(Popular CSS utility framework)_ and **Tuum** _(Estonian word for "core")_.

It essentially provides ways to leverage use of **modern and accessible standards** as much possible. Because we ❤️ CSS and this is a small modest CSS component framework.

Its approach to **TailwindCSS** is a little different.
It encourages writing components in CSS or other
(pre/post)-processors and to use utility classes to enhance the components.

As a CSS library, it provides beautifully styled accessible components. Which you can extend with your own components. 

It is very modular and split to `base`, `components` and `utilities` layers.

You can choose what you want to use and make your own complex UX/UI project written in whatever you want.

## Why?
The question inevitably arises: Why introduce yet another UI component library into the mix? Simply because Winduum is different in a few areas than the others.

1. It focuses on web standards, accessibility and minimum simple code
2. It's progressive, uses modern features and standards
3. It's framework-agnostic, so it can be used in any scenario
4. Its source code is plain CSS and JS, so it can be also used without a build step

## Framework-agnostic
Winduum is **framework-agnostic**, so you are able to create your own components using your preferred framework. Javascript primitives can be also adapted in any framework.

If there is interest, pre-built components may be developed for popular frameworks.
Currently,
only [`winduum-vue`](https://www.github.com/winduum/winduum-vue) and [`winduum-react`](https://www.github.com/winduum/winduum-react) are available
and most of the components have usage and installation examples in the docs.

Want to help? We're open for pull requests!

## Modern CSS Features
Staying ahead of the curve, Winduum leverages modern CSS features, allowing you to harness the power of the latest specifications and improve overall styling capabilities. All of these are supported in current browsers.

- **CSS Properties**
- **CSS Logical Properties**
- **CSS Nesting**
- **Modern pseudo selectors** such as `:where`, `:is` and `:has`
- **Modern CSS reset**
- **Low specifity or layers**
- **CSS color-mix**

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
    * 📄 button.vue
    * 📄 button.css
    * 📄 control.vue
    * 📄 control.css
    * 📄 form.html
    * 📄 form.css
    * 📄 form.js
* 📁 **utils**

You could also have your `.css` and `.js` files in separate directories like `styles` or `scripts`, but that's up to you and your framework that you use. You might use SFC too.

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
