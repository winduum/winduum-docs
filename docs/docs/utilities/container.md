# Container
Provides a new approach to classic [Container](https://tailwindcss.com/docs/container) with a new utility class<br> `grid-cols-container` which utilizes `grid` and is inspired by [Kevin Powell](https://youtu.be/c13gpBrnGEw?si=FGoMS9FnWEOYohPi).


<<< @/../node_modules/winduum/src/base/tailwind/container.css

## Examples
Easy layout with `grid`
```html
<body class="grid-cols-container gap-4">
  <header class="col-[container-full] grid-cols-container bg-slate-300">Header Full Width</header>
  <main>Content</main>
  <footer class="col-[container-lg]">Footer Breakout</footer>
</body>
```

In same cases classic approach is still handy, you can achieve that easily with `max-w`
```html
<div class="max-w-[--container] mx-auto">
    Content
</div>
```
