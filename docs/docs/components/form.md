---
description: "Provides a basic way to validate your form and show feedback to your users with native HTML5 form validation. Use attributes such as pattern to add other…"
---

# Form
Provides a basic way to validate your form and show feedback to your users with native HTML5 form validation. Use attributes such as [pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern) to add other validation rules.

`novalidate` must be present on `form` to handle validation with JavaScript.

::: info
Compatible with any reactive framework, but updates will not propagate to the virtual DOM.<br>
For advance form of validation use [VeeValidate](https://vee-validate.logaretm.com/v4/), [React Hook Form](https://react-hook-form.com/) or others.
:::

<iframe onload="this.style.visibility = 'visible';" src="/examples/form.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/form" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/form" />
* <LinkGh name="winduum-elements" url="https://github.com/winduum/winduum-elements/tree/main/components/form" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/tree/main/components/form" />

## Examples

### Form

<iframe onload="this.style.visibility = 'visible';" src="/examples/form.html"></iframe>

::: code-group
<<< @/public/examples/form.html#body{} [winduum]
```html [winduum-elements]

```
```html [winduum-stimulus]

```
:::

### Field

<iframe onload="this.style.visibility = 'visible';" src="/examples/form-field.html"></iframe>

::: code-group
<<< @/public/examples/form-field.html#body{} [winduum]
:::

## JavaScript API

### `validateForm`

* **Type:** `(event: Event | SubmitEvent, options?: ValidateFormOptions) => void`
* **Kind:** `sync`

Validates a form with [checkValidity](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/checkValidity)
and runs [validateField](/docs/components/form#validatefield) on every field.
On invalid submit it scrolls to and focuses the first invalid element, on valid submit it marks the submitter
with a loading attribute.

#### ValidateFormOptions

---

##### validateSelector

* **Type:** `string`
* **Default:** `.x-field`

Selector of field wrappers which will be validated.

---

##### validateOptions

* **Type:** `ValidateFieldOptions`
* **Default:** `{}`

Additional options for `validateField`

---

##### validateField

* **Type:** `typeof validateField`
* **Default:** `validateField`

Override the field validation function.

---

##### submitterLoadingAttribute

* **Type:** `string`
* **Default:** `data-loading`

Loading attribute that will be added to the submitter element (e.g. a button) on valid submit.

---

##### scrollOptions

* **Type:** `ScrollIntoViewOptions`
* **Default:** `{ behavior: 'smooth', block: 'center' }`

Scroll options when scrolling to an invalid element.

<br>

### `validateField`

* **Type:** `(element: HTMLElement, options?: ValidateFieldOptions) => void`
* **Kind:** `sync`

Validates a single field wrapper (typically `.x-field`). It appends a validation info message
(with `data-validity`) to the field and a validation icon inside `.x-control`.
The message text is resolved from `options.validationMessage`, the `data-validation-message` attribute
on the invalid element, or the native
[`validationMessage`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validationMessage).

#### ValidateFieldOptions

---

##### validationMessage
* **Type:** `string`
* **Default:** `undefined`

Overrides the displayed validation message.

---

##### selector
* **Type:** `string`
* **Default:** `:is(input:not([type="hidden"]), textarea, select):not([readonly], [data-novalidate])`

Selector of elements inside the field that are validated. Add `data-novalidate` or `readonly` to skip validation.

---

##### validitySelector
* **Type:** `string`
* **Default:** `[data-validity]`

Selector for dynamically added content in the DOM, such as the info message or icon — it is removed on re-validation.

---

##### infoContent
* **Type:** `string`
* **Default:** `<div class="x-info text-error" data-validity></div>`

Element appended to the field with the validation message.

---

##### iconParentSelector
* **Type:** `string`
* **Default:** `.x-control`

Element the validation icon is appended into.

---

##### iconSelector
* **Type:** `string`
* **Default:** `.ms-auto`

---

##### iconContent
* **Type:** `string`
* **Default:** `<div class="ms-auto"></div>`

Wrapper element for the validation icon, created inside `iconParentSelector` when missing.

---

##### validIcon
* **Type:** `string | null`
* **Default:** `null`

---

##### invalidIcon
* **Type:** `string`
* **Default:** `<svg class="text-error" data-validity aria-hidden="true"><use href="#heroicons-outline/exclamation-circle"></use></svg>`
