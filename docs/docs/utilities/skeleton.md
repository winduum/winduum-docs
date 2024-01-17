# Skeleton
Introduces a utility class for loading state of page or component.

### Source

* [`winduum/src/utilities/skeleton.css`](https://github.com/winduum/winduum/blob/main/src/utilities/skeleton.css)

```css
.skeleton {
  background:
  linear-gradient(
      270deg,
      color-mix(in sRGB, var(--color-body) 50%, var(--color-main)),
      color-mix(in sRGB, var(--color-body) 80%, var(--color-main)),
      color-mix(in sRGB, var(--color-body) 80%, var(--color-main)),
      color-mix(in sRGB, var(--color-body) 50%, var(--color-main))
  );
  background-size: 400% 100%;
  animation: skeleton-wave 1.5s linear infinite;
  opacity: 0.3;
  transition: opacity 0.3s ease-out;
}
```

## Example

<iframe onload="this.style.visibility = 'visible';" src="/examples/skeleton.html"></iframe>

<<< @/public/examples/skeleton.html#body{}
