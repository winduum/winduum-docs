# Dark
Overrides the default TailwindCSS [dark mode](https://tailwindcss.com/docs/dark-mode) variant to be class-based instead of media query based. The `dark:` variant applies to elements with the `.dark` class and all their descendants, so dark mode can be toggled manually — typically by adding the class to the `<html>` element.

See [Theme](/docs/base/theme) for the dark color theme itself.

### Dependencies
* [tailwindcss](https://tailwindcss.com/) (TailwindCSS @variant)

## TailwindCSS
Include CSS file with the `@variant` at-rule.

<ViewSourceGh path="tailwindcss/variants/dark.css" />

```css
@import "winduum/tailwindcss/variants/dark.css";
```

```css
@variant dark (&:where(.dark, .dark *));
```

### Example
```html
<html class="dark">
    <body>
        <div class="bg-white dark:bg-black">
            Content
        </div>
    </body>
</html>
```
```css
.dark\:bg-black {
  &:where(.dark, .dark *) {
    background-color: var(--color-black);
  }
}
```
