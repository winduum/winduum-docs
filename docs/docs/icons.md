# Icons

It's recommended to use icons as svg, such as [Heroicons](https://heroicons.com/)

Winduum uses some of them internally via CSS custom properties.

```css
:root {
    --x-check-icon-mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>');
    --x-check-radio-icon-mask: url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 160c-53.019 0-96 42.981-96 96v0c0 53.019 42.981 96 96 96v0c53.019 0 96-42.981 96-96v0c0-53.019-42.981-96-96-96z"></path></svg>');
}

/* Example */
.icon-check {
    background-color: currentColor;
    mask: var(--x-check-icon-mask);
    width: 1rem;
    height: 1rem;
}
```
<br>

You can also use your svg icons via `<use href="#">` method.<br>
Define a global `<svg hidden>` with various icons as `<symbol>`

```html
<svg class="hidden">
    <symbol id="icon-academic-cap" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </symbol>
</svg>

<!-- elsewhere in component use following !-->
<svg class="size-6">
    <use href="#icon-academic-cap"></use>
</svg>
```

<br>

You can also use [Vue](https://github.com/tailwindlabs/heroicons#vue) and [React](https://github.com/tailwindlabs/heroicons#react) libraries for **Heroicons**
