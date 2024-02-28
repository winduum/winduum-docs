# Form
Provides a basic way to validate your form and show feedback to your users with native HTML5 form validation. Use attributes such as [pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern) to add other validation rules.

`novalidate` must be present on `form` to handle validation with javascript.

::: info
Compatible with any reactive framework, but updates will not propagate to the virtual DOM.<br>
For advance form of validation use [VeeValidate](https://vee-validate.logaretm.com/v4/), [React Hook Form](https://react-hook-form.com/) or others.
:::

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/form" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/form" />

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
* **Default:** `.ui-control, .ui-check, .ui-switch, .ui-rating, .ui-color`

Selectors which will be validated.

---

##### validateOptions

* **Type:** `ValidateFieldOptions`
* **Default:** `{}`

Additional options for `validateField`

---

##### submitterLoadingClass

* **Type:** `string`
* **Default:** `loading`

Loading class that will be added to submitter element, eg. a button.

<br>

### `validateField`

* **Type:** `(selector:  HTMLElement, options?: ValidateFieldOptions) => void`
* **Kind:** `sync`

Validates a field. This can be element such as `.ui-control`, `ui-check` and others that can be validated. It adds validation info message inside `c-field` and validation icon inside `ui-control`.
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
* **Default:** `.c-field`

---

##### infoSelector
* **Type:** `string`
* **Default:** `.ui-info`

---

##### infoContent
* **Type:** `string`
* **Default:** `<div class="ui-info text-error validity"></div>`

---

##### endParentSelector
* **Type:** `string`
* **Default:** `.ui-control`

---

##### endSelector
* **Type:** `string`
* **Default:** `.ms-auto`

---

##### endContent
* **Type:** `string`
* **Default:** `<div class="ms-auto"></div>`

---

##### validClass
* **Type:** `string`
* **Default:** `valid`

---

##### validIcon
* **Type:** `string | null`
* **Default:** `null`

---

##### invalidClass
* **Type:** `string`
* **Default:** `invalid`

---

##### invalidIcon
* **Type:** `string`
* **Default:** `<svg class="text-error validity" aria-hidden="true"><use href="#icon-exclamation-circle"></use></svg>`

---

##### activeClass
* **Type:** `string`
* **Default:** `active`

