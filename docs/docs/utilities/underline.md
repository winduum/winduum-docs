# Underline

Adds a few default values to [`underline`](https://tailwindcss.com/docs/text-decoration) utility class for easy link animations.

```css
.underline {
  text-underline-offset: var(--tw-underline-offset, 0.125em);
}

.decoration-transparent {
  &:where([href], button, .interactive) {
    transition: all var(--duration) var(--ease-in-out);

    &:not(:hover, :focus) {
      text-underline-offset: var(--tw-underline-offset-transparent, -0.25em);
    }

    &:is(:hover, :focus) {
      text-decoration-color: var(--color-current);
    }
  }
}
```

## Examples

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/link/underline.html"></iframe>

<<< @/public/examples/ui/link/underline.html#body{}
