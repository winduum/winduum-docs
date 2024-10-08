# Form
Provides a basic way to validate your form and show feedback to your users with native HTML5 form validation. Use attributes such as [pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern) to add other validation rules.

`novalidate` must be present on `form` to handle validation with JavaScript.

::: info
Compatible with any reactive framework, but updates will not propagate to the virtual DOM.<br>
For advance form of validation use [VeeValidate](https://vee-validate.logaretm.com/v4/), [React Hook Form](https://react-hook-form.com/) or others.
:::

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/form" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/form" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/blob/main/components/form" />

### Usage
::: code-group
<<< @/public/examples/form.html#body{} [html]
<<< @/../examples/src/pages/form.liquid#js{} [js]
:::

## Examples

### Form

<iframe onload="this.style.visibility = 'visible';" src="/examples/form.html"></iframe>

::: code-group
<<< @/public/examples/form.html#body{} [html]
<<< @/../examples/src/pages/form.liquid#js{} [js]
:::


### Field

<iframe onload="this.style.visibility = 'visible';" src="/examples/form-field.html"></iframe>

::: code-group
<<< @/public/examples/form-field.html#body{} [html]
<<< @/../examples/src/pages/form-field.liquid#js{} [js]
:::


## Javascript API

### `validateForm`

* **Type:** `(event: Event | SubmitEvent, options?: ValidateFormOptions) => void`
* **Kind:** `sync`

Validates a form with [checkValidity](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/checkValidity) and [validateField](/docs/components/form#validatefield) events.

#### ValidateFormOptions

---

##### validateSelectors

* **Type:** `string`
* **Default:** `.x-control, .x-check, .x-switch, .x-rating, .x-color`

Selectors which will be validated.

---

##### validateOptions

* **Type:** `ValidateFieldOptions`
* **Default:** `{}`

Additional options for `validateField`

---

##### submitterLoadingAttribute

* **Type:** `string`
* **Default:** `data-loading`

Loading class that will be added to a submitter element, e.g., A button.

---

##### scrollOptions

* **Type:** `ScrollIntoViewOptions`
* **Default:** `{ behavior: 'smooth', block: 'center' }`

Scroll options when scrolling to an invalid element.

<br>

### `validateField`

* **Type:** `(selector:  HTMLElement, options?: ValidateFieldOptions) => void`
* **Kind:** `sync`

Validates a field. This can be element such as `.x-control`, `x-check` and others that can be validated. It adds validation info message inside `c-field` and validation icon inside `x-control`.
It also adds a `valid`, `invalid` or `active` class to the element.


#### ValidateFieldOptions

---

##### validate
* **Type:** `boolean`
* **Default:** `true`

Only `active` class is added if the element value is not empty. No other validation is done.

---

##### selector
* **Type:** `string`
* **Default:** `input:not([type="hidden"]), textarea, select`

---

##### ignoreMatch
* **Type:** `RegExp`
* **Default:** `/(data-novalidate|readonly)/`

Ignores a validation if any of these strings are present in the HTML.

---

##### validitySelector
* **Type:** `string`
* **Default:** `.validity`

Selector for dynamically added content in the DOM such us info message or icon.

---

##### infoParentSelector
* **Type:** `string`
* **Default:** `.x-field`

---

##### infoSelector
* **Type:** `string`
* **Default:** `.x-info`

---

##### infoContent
* **Type:** `string`
* **Default:** `<div class="x-info text-error validity"></div>`

---

##### endParentSelector
* **Type:** `string`
* **Default:** `.x-control`

---

##### endSelector
* **Type:** `string`
* **Default:** `.ms-auto`

---

##### endContent
* **Type:** `string`
* **Default:** `<div class="ms-auto"></div>`

---

##### validAttribute
* **Type:** `string`
* **Default:** `data-valid`

---

##### validIcon
* **Type:** `string | null`
* **Default:** `null`

---

##### invalidAttribute
* **Type:** `string`
* **Default:** `data-invalid`

---

##### invalidIcon
* **Type:** `string`
* **Default:** `<svg class="text-error validity" aria-hidden="true"><use href="#icon-exclamation-circle"></use></svg>`

---

##### activeAttribute
* **Type:** `string`
* **Default:** `data-active`

