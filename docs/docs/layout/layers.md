# Layers

All component styles are written with low specificity in mind. This ensures that any utility classes have higher specificity. 

You can also leverage [CSS Layers](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers) to have even better control of your specificity. This can be also combined with [TailwindCSS layers](https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer).

If you want to write CSS [per-component](https://tailwindcss.com/docs/adding-custom-styles#layers-and-per-component-css), be aware that here you cannot use TailwindCSS layers. Well you could, but it would have some unfortunate side effects of utility classes leaking into components.  

## Example
```css
@layer winduum-base, winduum-components, winduum-utilities, winduum-variants;

@import "winduum/src/base/index.css" layer(base);
@import "winduum/src/ui/index.css" layer(components);
@import "winduum/src/components/index.css" layer(components);
@import "winduum/src/utilities/index.css" layer(utilities);

@layer winduum-base {
  @tailwind base;
}

@layer winduum-components {
  @tailwind components;
}

@layer winduum-utilities {
  @tailwind utilities;
}

@layer winduum-variants {
  @tailwind variants;
}
```
