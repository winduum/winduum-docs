# About
Winduum is a mix of words **Tailwind** _(Popular CSS utility framework)_ and **Tuum** _(Estonian word for "core")_.

It essentially provides ways to leverage use of **CSS properties** as much possible and do more in CSS. Because we ❤️ CSS and this is a small modest CSS component framework.

Its approach to **TailwindCSS** is a little different. It encourages to write components in CSS or other (pre/post)-processors and to use utility classes to enhance the components.

As a CSS framework it provides beautifully styled accessible components. Which you can extend with your own components. 

Or you could only use [TailwindCSS plugin](/docs/config) with its benefits and make your own complex UX/UI project written mostly in CSS/SASS/LESS.

## Why?
The question inevitably arises: Why introduce yet another UI component library into the mix? Simply because Winduum is different in a few areas than the others.

1. It focuses on web standards, accessibility and minimum javascript
2. It's progressive, uses modern features and standards
3. It's framework-agnostic, so it can be used in any scenario
4. It's source code is plain CSS and JS, so it can be also used without a build step

## Framework-agnostic
Winduum is **framework-agnostic**, so you are able to create your own components using your preferred framework. Javascript primitives can be also adapted in any framework.

If there is interest, pre-built components may be developed for popular frameworks. Currently, only [`winduum-vue`](https://www.github.com/winduum/winduum-vue) and [`winduum-react`](https://www.github.com/winduum/winduum-react) are in the process of development and most of the components have usage and installation examples in the docs.

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

* **UI** - `ui-name` (ui components)
* **Component** - `c-name` (regular components)
* **Section** - `s-name` (wraps the previous two)
* **Module** - `m-name` (wraps sections)
* **Layout** - `l-name` (layout components - header, footer etc.)
* **Utilities** - `name` (without prefix, utility classes for common styles)

## CSS Properties

Each CSS property follows the same naming, for example `--ui-name-font-size`

## Directory structure

To help navigating your project easily, it's recommended to follow the same naming principles for your directory structure, for example like this:

* 📁 **components**
    * 📁 **ui**
        * 📄 btn.vue
        * 📄 input.vue
    * 📄 form.html
    * 📄 form.css
    * 📄 form.js


You could also have your `.css` and `.js` files in separate directories like `styles` or `scripts`, but that's up to you and your framework that you use. You might use SFC too.

## Examples

### Using the components

You can use any of the components easily in html without the need to write complex TailwindCSS classes.

Each component is written with low specificity in mind, so any property can be easily enhanced with TailwindCSS utility classes.

::: code-group
```html
<button class="x-btn accent-secondary">This is a Button</button>
```
```css
.ui-btn:where(.bordered) {
    --ui-btn-font-size: 0.875rem;
    
    /* CSS styles */
}
```
:::

### Writing the components

You can write your own components using the same approach

::: code-group
```html
<div class="c-hello-world bg-dark rounded-md">Hello world</div>
```
```css
.c-hello-world {
    --c-hello-world-font-size: 2rem;
    
    /* CSS styles */
}
```
:::

It's recommended to use TailwindCSS utility classes for most cases. If you want to style some elements in CSS inside the component, consider creating a new component.

If you don't want to create a new component, don't use complex conventions like BEM. Just use helper classes such as `.c_item`, `.c_head`, `.c_body`, `.c_foot` etc. 

This way you can tell that it's a element related to the parent component. 

In rare cases you want to prevent possible class conflicts you can add name of the component inside the class like this `.c_hello_world_item`.
