# Tokens

Every component has class tokens which you can use for component customization. These tokens can be used with TailwindCSS variants. 

For example `x-heading max-md:sm` changes the size on the `md` breakpoint. This was possible automatically with TailwindCSS `v3`, since `v4` this is not working anymore (see [#16000](https://github.com/tailwindlabs/tailwindcss/issues/16000)). 

To replicate the same functionality, you have to use the new `@utility` at-rule manually. None of the components use this by default.

**Example of a custom component with default import:**
(variants will not work)
```css
@import "winduum/src/components/heading/index.css" layer(utilities);
/* this file includes following imports
@import "winduum/src/components/heading/props/default.css";
@import "winduum/src/components/heading/default.css";
@import "winduum/src/components/heading/sm.css";
@import "winduum/src/components/heading/lg.css";
 */
```

**Example of a custom component with custom import:**<br>
(you will have to include all tokens manually and variants will work)
```css
@import "winduum/src/components/heading/props/default.css" layer(theme);
@import "winduum/src/components/heading/default.css" layer(utilities);

@theme {
    --x-heading-font-weight: var(--font-bold);
    /* any custom properties */
}

@layer utilities {
    .x-heading {
        /* any custom styles */
    }
}

@utility sm {
  .x-heading:is(&) {
    --x-heading-font-size: var(--text-lg);
  }
}

@utility lg {
  .x-heading:is(&) {
    --x-heading-font-size: var(--text-3xl);
  }
}
```