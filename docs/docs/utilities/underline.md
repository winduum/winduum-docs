# Underline

Adds a few default values to [`underline`](https://tailwindcss.com/docs/text-decoration) utility class for easy link animations.

```css
  .underline {
    text-underline-position: under;
    text-decoration-thickness: max(1px, 0.0625em);
    text-underline-offset: -0.125rem;
    transition: all var(--duration) var(--ease-in-out);

    &:where([href], button, .interactive) {
      &:hover {
        @media (hover: hover) and (pointer: fine) {
          text-decoration-color: var(--color-current);
          text-underline-offset: 0;
        }
      }

      &:focus {
        text-decoration-color: var(--color-current);
        text-underline-offset: 0;
      }
    }
  }
```

## Examples

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/link/underline.html"></iframe>

<<< @/public/examples/ui/link/underline.html#body{}
