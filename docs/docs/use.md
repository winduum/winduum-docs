# Use

Winduum is a mix of words **Tailwind** _(Popular CSS utility framework)_ and **Tuum** _(Estonian word for "core")_.

It essentially provides ways to leverage use of **CSS properties** as much possible and do more in CSS. Because we ❤️ CSS and this is a small modest CSS framework.

Its approach to **TailwindCSS** is a little different. It encourages to write components in CSS or other (pre/post)-processors and to use utility classes to enhance the components.

As a CSS framework it provides only basic UI components. You can extend them with your own components or only use [TailwindCSS plugin](/docs/config) with its benefits and make your own complex UX/UI project written mostly in CSS/SASS/LESS.

## Naming

In your projects it's recommended to follow naming semantics of Winduum with the following classes. Some of these are already used for various components.

* **UI** - `ui-name` (smallest components)
* **Component** - `c-name` (regular components)
* **Section** - `s-name` (wraps the previous two)
* **Module** - `m-name` (wraps sections)
* **Layout** - `l-name` (wraps everything else)
* **Libraries** - `lib-name` (used for functionality enhanced styles)
* **Utilities** - `name` (without prefix, utility classes for common styles)

## CSS Properties

Each CSS property follows the same naming, for example `--ui-name-font-size`

## Directory structure

To help navigating your project easily, it's recommended to follow the same naming principles for your directory structure, for example like this:

* 📁 **components**
    * 📁 **ui**
        * 📄 btn.vue
        * 📄 input.vue
    * 📁 **component**
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
<button class="ui-btn accent-secondary">This is a Button</button>
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

It's recommended to use TailwindCSS utility  classes. But if you want to style some elements in CSS inside the component you don't need to use complex conventions like BEM, just use helper classes such as `.c_item`, `.c_head`, `.c_body`, `.c_foot` etc. This way you can tell that it's a element related to the parent component. 

In rare case you want to prevent possible class conflicts you can add name of the component inside the class like this `.c_hello_world_item`.
