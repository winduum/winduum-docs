# Use

Winduum is a mix of words **Tailwind** _(Popular CSS utility framework)_ and **Tuum** _(Estonian word for "core")_.

Its approach to **TailwindCSS** is little different. It encourages to write components in CSS or other (pre/post)-processors.
And to use utility classes to enhance the components. It also leverages the use of **CSS properties** as much possible.

## Naming

In your projects it's recommended to follow naming semantics of Winduum with following classes, some of these are already used for various components.

* **UI** - `ui-name` (smallest components)
* **Component** - `c-name` (regular components)
* **Section** - `s-name` (wraps previous two)
* **Module** - `m-name` (wraps sections)
* **Layout** - `l-name` (wraps everything else)
* **Utilities** - `u-name` (helper classes for common styles)
* **Libraries** - `lib-name` (used for js enhanced based styles)

The main approach of Winduum is 

## CSS Properties

Each CSS property follows the same naming, for example `--ui-name-font-size`

## Directory structure

To help navigating your project easily it's recommended to follow the same naming structure for your directory structure, for example like this

* 📁 **components**
    * 📁 **ui**
        * 📄 btn.vue
        * 📄 input.vue
    * 📁 **component**
        * 📄 form.html
        * 📄 form.css
        * 📄 form.js


You could also have your `.css` and `.js` files in separate directories like `styles` or `scripts`, but that's up to you and your JS framework that you use, you might use SFC too.

## Examples

### Using the components

### Writing the components

### Customizing the components
