# Container

Container is very basic component that sets `max-width`, auto `margin` and `padding` of the element. It uses CSS properties that are defined in [base/config.css](/docs/config.html#css-properties).

It's a TailwindCSS component, so you can use [Breakpoints](breakpoints) classes to define the component only on preferred resolutions.

```postcss
  :where(.container) {
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--container-padding);
    padding-right: var(--container-padding);
    max-width: var(--container-width);

    &:where(.is-sm) {
      --container-width: var(--container-width-sm);
    }
  }
```
