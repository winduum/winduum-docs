# Reset

Winduum uses [The New CSS Reset](https://github.com/elad2412/the-new-css-reset) that uses new modern CSS features.
That means that [Preflight](https://tailwindcss.com/docs/preflight#border-styles-are-reset-globally) from **TailwindCSS** is disabled by default.

## Defaults

Other CSS default resets are following

```css
::selection {
    color: rgb(var(--color-light));
    background-color: rgb(var(--color-accent));
}

:where(*) {
    outline: none;
    -webkit-tap-highlight-color: rgb(255 255 255 / 0);
}

:where([hidden]) {
    display: none;
}

:where(svg) {
    stroke-width: 1.5;
}

:where(hr) {
    display: block;
    border-top: 2px solid rgb(var(--color-current) / var(--tw-border-opacity, 1));
    border-radius: var(--rounded);
}
```
