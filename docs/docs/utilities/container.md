# Container
Provides a new approach to classic [Container](https://tailwindcss.com/docs/container) with a new utility class<br> `grid-cols-container` which utilizes `grid` and is inspired by [Kevin Powell](https://youtu.be/c13gpBrnGEw?si=FGoMS9FnWEOYohPi).

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/utilities/container" />

<<< @/../node_modules/winduum/src/utilities/container/default.css

## Example
Easy layout with `grid`
```html
<body class="grid grid-cols-container gap-4">
  <header class="col-[container-full] grid grid-cols-container bg-slate-300">Header Full Width</header>
  <main>Content in container</main>
  <footer class="col-[container-breakout]">Footer Breakout</footer>
</body>
```

In same cases classic approach is still handy, you can achieve that easily with `w`
```html
<div class="w-[--container] mx-auto">
    Content
</div>
```
