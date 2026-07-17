---
description: "Migration guide for upgrading winduum-stimulus projects from v2 to v3."
---

# Migrate to winduum-stimulus v3

winduum-stimulus 3 aligns its controllers with Winduum 3's native-first markup. Dialog no longer needs a controller, Details only needs one for its optional checkbox pattern, and Drawer and Popover now enhance native dialog and popover elements. Form validation is split between Form and the new Field controller.

This guide compares `winduum-stimulus` `2.0.15` with the v3 prerelease. Complete the [core Winduum v3 migration](/migrations/winduum-v3) first so the new controllers, markup and styles are migrated together.

## Controller overview

| Controller | Migration |
| --- | --- |
| Dialog | Removed; use native Invoker Commands and `HTMLDialogElement` |
| Details | Remove for standard details and accordions; keep only for checkbox synchronization |
| Drawer | Rebuild markup around `.x-drawer-scroller`; replace actions with native commands and update values |
| Popover | Move the controller to the popover element; replace actions and targets with native commands |
| Form | Keeps submit validation; remove per-field actions |
| Field | New controller for validation on change |
| Button | Ripple action is now connected automatically |
| Control | `data-active` is now synchronized automatically |
| Toaster | Automatically observes inserted and removed toasts |

## 1. Update dependencies and controller registration

Update Winduum and its Stimulus integration together:

```shell
npm install winduum@next winduum-stimulus@next
```

Remove the Dialog controller import and registration. Add the new Field controller when the project uses per-field validation:

::: code-group
```js [Winduum 2]
import { Dialog } from 'winduum-stimulus/components/dialog/index.js'
import { Form } from 'winduum-stimulus/components/form/index.js'

application.register('x-dialog', Dialog)
application.register('x-form', Form)
```

```js [Winduum 3]
import { Field } from 'winduum-stimulus/components/field/index.js'
import { Form } from 'winduum-stimulus/components/form/index.js'

application.register('x-field', Field)
application.register('x-form', Form)
```
:::

Keep only controllers used by the project. Register `Details` only when using the checkbox-inside-summary pattern, and register `Popover` only on popovers that need the Winduum positioning fallback.

The package-level `initActions`, `initControllers`, `initStimulus` and `useController` utilities are unchanged.

## 2. Remove the Dialog controller

The `Dialog` controller and its `show`, `close` and `params` APIs are removed. Replace the old Invoke delegation with native Invoker Commands. The dialog itself no longer has `data-controller="x-dialog"`.

::: code-group
```html [Winduum 2]
<div data-controller="invoke">
    <button
        data-action="click->invoke#action"
        data-invoke-action="x-dialog#show"
        data-invoke-target="#dialogExample"
    >
        Show dialog
    </button>

    <dialog
        class="x-dialog"
        id="dialogExample"
        data-controller="x-dialog"
        data-x-dialog-params-value='{"closable":true}'
    >
        <div class="x-dialog-content">
            <button data-action="click->x-dialog#close">Close</button>
        </div>
    </dialog>
</div>
```

```html [Winduum 3]
<button command="show-modal" commandfor="dialogExample">Show dialog</button>

<dialog class="x-dialog" id="dialogExample" closedby="any">
    <form class="x-dialog-content" method="dialog">
        <button>Close</button>
    </form>
</dialog>
```
:::

Include the Winduum Dialog side-effect script once in the application entry point. It supplies the `closedby` fallback and scrollbar-width handling:

```js
import 'winduum/src/components/dialog/index.js'
```

Use `dialogElement.showModal()`, `show()` and `close()` when programmatic control is required. If the Invoke controller was only used for Dialog, remove it from that part of the page as well. See the [core Dialog migration](/migrations/winduum-v3#_2-replace-dialog-helpers-with-the-native-api) and [Dialog documentation](/docs/components/dialog).

## 3. Use native Details by default

The v2 controller actions `show`, `close`, `toggle` and `closeSiblings` are removed. Standard details elements need no controller or Stimulus action in v3:

::: code-group
```html [Winduum 2]
<details class="x-details" data-controller="x-details" name="faq">
    <summary data-action="click->x-details#toggle:prevent">Question</summary>
    <div>Answer</div>
</details>
```

```html [Winduum 3]
<details class="x-details" name="faq">
    <summary>Question</summary>
    <div>Answer</div>
</details>
```
:::

Keep the native `name` attribute on every item in an exclusive accordion. Unlike v2, the controller no longer removes `name` and emulates sibling closing.

Register and attach the v3 Details controller only when a checkbox inside `<summary>` controls the open state. Rename the old `toggle` action to `toggleDetails` and attach it to the checkbox change event:

```html
<details class="x-details" data-controller="x-details">
    <summary>
        <label class="x-check">
            <input
                type="checkbox"
                autocomplete="off"
                data-action="change->x-details#toggleDetails"
            >
            Fill more
        </label>
    </summary>
    <div>Additional fields</div>
</details>
```

The new action is synchronous at the Winduum layer and accepts only the core `toggleDetails` options. See the [Details documentation](/docs/components/details).

## 4. Rebuild Drawer markup and use native commands

The Drawer controller no longer exposes `show`, `close` or `toggle`. Open and close the native dialog with Invoker Commands, as with Popover. Add `.x-drawer-scroller` between the dialog and its content, keep `data-x-drawer-target="content"` on the visible panel, and remove the old `inert` state and scroll/dismiss actions.

::: code-group
```html [Winduum 2]
<div data-controller="invoke">
    <button
        data-action="click->invoke#action"
        data-invoke-action="x-drawer#show"
        data-invoke-target="#drawerExample"
    >
        Show drawer
    </button>

    <dialog
        class="x-drawer"
        id="drawerExample"
        inert
        data-controller="x-drawer"
        data-action="scroll->x-drawer#scroll click->x-drawer#dismiss"
        data-x-drawer-dialog-value="modal"
    >
        <nav class="x-drawer-content" data-x-drawer-target="content">
            <button data-action="click->x-drawer#close">Close</button>
        </nav>
    </dialog>
</div>
```

```html [Winduum 3]
<button command="show-modal" commandfor="drawerExample">
    Show drawer
</button>

<dialog
    class="x-drawer"
    id="drawerExample"
    closedby="any"
    data-controller="x-drawer"
>
    <div class="x-drawer-scroller snap-x snap-mandatory">
        <nav class="x-drawer-content" data-x-drawer-target="content">
            <button command="request-close" commandfor="drawerExample">Close</button>
        </nav>
    </div>
</dialog>
```
:::

Update Drawer values as follows:

| Winduum 2 | Winduum 3 |
| --- | --- |
| `data-x-drawer-dialog-value="modal"` | Omit the value; modal is the default |
| `data-x-drawer-dialog-value="non-modal"` | `data-x-drawer-modal-value="false"` |
| `data-x-drawer-placement-value` | Unchanged: `left`, `right`, `top` or `bottom` |

The `dialog` string value is replaced by the boolean `modal` value. The default placement remains `left`.

Remove these v2 actions from application markup:

- `x-drawer#show`, `x-drawer#close` and `x-drawer#toggle`: use `show-modal`, `request-close` / `close` and `commandfor`.
- `x-drawer#scroll`: scroll state is handled by Winduum's scroller and observer.
- `x-drawer#dismiss`: Escape and outside clicks are connected internally when the content target appears.

The controller handles the `show-modal` command by recording its source, setting the invoking button's `aria-expanded` state, opening the dialog according to its `modal` value and initializing the scroller. Its enhanced `close()` method resets `aria-expanded`. Use `request-close` when the Drawer should animate closed; use `close` only when the dialog should close immediately. The Invoke controller is no longer needed for Drawer.

Right and bottom drawers reverse the scroller order and animation direction; top and bottom drawers use `snap-y`. Copy the complete markup for each placement from the [Drawer examples](/docs/components/drawer#examples) rather than changing the placement value alone.

## 5. Move Popover to native commands

In v2, the controller lived on an `.x-popover` wrapper, discovered an `action` target and added Stimulus actions for toggle, Escape and outside dismiss. In v3, the controller lives on the actual element with the `popover` attribute. Native commands own open, close, Escape and light-dismiss behavior.

::: code-group
```html [Winduum 2]
<div
    class="x-popover"
    data-controller="x-popover"
    data-x-popover-params-value='{"placement":"bottom"}'
>
    <button
        popovertarget="menu"
        popovertargetaction="toggle"
        data-x-popover-target="action"
    >
        Menu
    </button>

    <div class="x-popover-content bottom" id="menu" popover="manual">
        Content
    </div>
</div>
```

```html [Winduum 3]
<button command="toggle-popover" commandfor="menu">Menu</button>

<div
    class="x-popover bottom"
    id="menu"
    popover
    data-controller="x-popover"
    data-x-popover-placement-value="bottom"
>
    <div class="x-popover-content">Content</div>
</div>
```
:::

Remove the `action` target, the `params` value and calls to the removed `toggle`, `hide` and `dismiss` controller actions. Replace them with:

| Winduum 2 | Winduum 3 |
| --- | --- |
| `data-x-popover-params-value='{"placement":"bottom"}'` | `data-x-popover-placement-value="bottom"` |
| Floating UI `autoUpdate` in params | `data-x-popover-auto-update-value="true"` |
| `popovertargetaction="toggle"` | `command="toggle-popover"` and `commandfor` |
| `data-open` checks | Native `:popover-open` or `toggle` event |

The `placement` value should match the Position utility on `.x-popover`. Set `autoUpdate` only when the Floating UI fallback must keep tracking the source on scroll and resize. `@floating-ui/dom` was already required by the v2 Popover controller; keep that existing dependency when the project continues to use the fallback. It can be removed when every Popover uses native CSS Anchor Positioning.

The controller is optional in browsers where native Popover and CSS Anchor Positioning provide everything the project needs. Omit `data-controller="x-popover"` for a fully native popover.

Interest-triggered popovers and tooltips use `interestfor` instead of v2's `trigger-hover` and `trigger-focus` wrapper patterns:

```html
<button interestfor="tooltip" style="interest-delay: 0s">Help</button>

<div
    class="x-popover tooltip bottom"
    id="tooltip"
    popover="hint"
    data-controller="x-popover"
    data-x-popover-placement-value="bottom"
>
    <div class="x-popover-content">Tooltip content</div>
</div>
```

See the [Popover documentation](/docs/components/popover) for the native and fallback variants.

## 6. Add required browser fallbacks

winduum-stimulus does not turn native commands or `interestfor` into Stimulus actions. Add the browser fallbacks required by the project's support matrix.

For Invoker Commands used by Dialog, Drawer and Popover:

```shell
npm install invokers-polyfill
```

```js
if (!('command' in HTMLButtonElement.prototype)) {
    const { apply } = await import('invokers-polyfill/fn')
    apply()
}
```

For `interestfor` tooltips and hover popovers:

```shell
npm install interestfor
```

```js
if (!Object.prototype.hasOwnProperty.call(
    HTMLButtonElement.prototype,
    'interestForElement',
)) {
    await import('interestfor')
}
```

These fallbacks are independent of Stimulus controller registration. See the [Polyfills documentation](/docs/polyfills) for the core Winduum entry point and support checks.

## 7. Split Form and Field validation

The Form controller now validates only on submit. Its v2 `validateField` action is removed. Register the new Field controller and attach it to every `.x-field` that should validate on change.

::: code-group
```html [Winduum 2]
<form data-controller="x-form">
    <div class="x-field">
        <label class="x-label" for="email">Email</label>
        <div
            class="x-control"
            data-action="change->x-form#validateField"
        >
            <input id="email" type="email" required>
        </div>
    </div>
</form>
```

```html [Winduum 3]
<form data-controller="x-form">
    <div class="x-field" data-controller="x-field">
        <label class="x-label" for="email">Email</label>
        <div class="x-control" data-controller="x-control">
            <input id="email" type="email" required>
        </div>
    </div>
</form>
```
:::

The Field controller adds `change->x-field#validateField` automatically, so no explicit action is required. Action parameters are forwarded to Winduum's core `validateField` helper.

The Form controller still sets `novalidate` and adds its submit action automatically. Winduum 3 changes the core default validation selector to `.x-field` and renames several validation options; follow the [core Form migration](/migrations/winduum-v3#_7-split-form-and-field-validation) when custom parameters are used. See [Form](/docs/components/form) and [Field](/docs/components/field).

## 8. Remove redundant Button and Control actions

The Button controller now adds `click->x-button#ripple` when it connects. Keep `data-controller="x-button"`, but remove an explicit ripple action if the project added one only for Winduum:

::: code-group
```html [Winduum 2]
<button
    class="x-button"
    data-controller="x-button"
    data-action="click->x-button#ripple"
>
    Save
</button>
```

```html [Winduum 3]
<button class="x-button" data-controller="x-button">Save</button>
```
:::

Loading observation and the `data-loading` API are unchanged.

The Control controller now synchronizes `data-active` on connect and whenever its input, textarea or select changes. Remove application code that only maintained this attribute. For a control with `[autocomplete="tel-country-code"]`, the selected value is also written to the control's next sibling.

The existing `stepUp`, `stepDown` and `showPicker` actions are unchanged.

## 9. Move the popover state to Toaster

The Toast controller keeps the same `show`, `close` and `params` APIs. The Toaster controller now creates a `MutationObserver` on connect and opens or closes the toaster as children are inserted or removed.

Add `popover="manual"` to the Toaster and remove `popover` from individual toasts:

```html
<template id="toastTemplate">
    <li
        class="x-toast"
        data-controller="x-toast"
        data-action="x-toast:connect->x-toast#show"
        role="status"
        aria-live="assertive"
        aria-atomic="true"
    >
        <div class="x-toast-content">
            Toast content
            <button data-action="click->x-toast#close">Close</button>
        </div>
    </li>
</template>

<ol
    class="x-toaster"
    popover="manual"
    data-controller="x-toaster"
></ol>
```

The `x-toaster#close` action remains available for closing all toasts. The core Toast defaults changed: toasts auto-hide after 7.5 seconds and are removed after closing. Use `autoHide: null` in the Toast params to keep a toast open. Use `remove: false` for a manual `close` action, or `close: { remove: false }` when an auto-hidden toast should remain in the DOM. See the [core Toast migration](/migrations/winduum-v3#_8-opt-out-of-the-new-toast-defaults-when-necessary).

## 10. Search for v2 wiring and test the migration

Search the application for the following identifiers:

```text
winduum-stimulus/components/dialog
application.register('x-dialog'
data-controller="x-dialog"
x-dialog#show, x-dialog#close
x-details#show, x-details#close, x-details#toggle
x-details#closeSiblings
x-drawer#show, x-drawer#close, x-drawer#toggle
x-drawer#scroll, x-drawer#dismiss
data-x-drawer-dialog-value
data-x-popover-target="action"
data-x-popover-params-value
x-popover#toggle, x-popover#hide, x-popover#dismiss
x-form#validateField
click->x-button#ripple
```

After replacing them, test:

- Dialog open, close, light dismiss, Escape and focus return without a controller.
- Native Details and accordion behavior plus the optional checkbox controller.
- Every Drawer placement and its `show-modal`, `request-close` and `close` commands, external trigger state, outside click, Escape and swipe dismissal.
- Popover commands, `interestfor`, light dismiss and Floating UI fallback positioning.
- Form submit validation and Field change validation.
- Button ripple and Control `data-active` behavior without duplicate actions.
- Toast auto-hide, removal, Toaster top-layer behavior and `x-toaster#close`.

Compare, Image, Tabs, Invoke, Ripple and Swap do not require v3-specific markup changes. Finish by checking the current Stimulus examples linked from each component's documentation.
