---
description: "Migration guide for upgrading Winduum and winduum-stimulus projects from v2 to v3."
---

# Migrate to Winduum v3

This guide upgrades the usual Winduum 2 stack—`winduum` and `winduum-stimulus`—to v3. Apply the core and Stimulus changes together so that the styles, markup and controllers stay in sync.

The guide compares the latest v2 releases with v3. If the project uses an older v2 release, also review the [Winduum changelog](https://github.com/winduum/winduum/blob/next/CHANGELOG.md).

::: tip Migrating to winduum-elements?
First complete this guide and verify that the project works with Winduum and `winduum-stimulus` v3. Then follow [Migrate from winduum-stimulus v3 to winduum-elements](/migrations/winduum-elements-v3).
:::

## Controller overview

| Controller | Migration |
| --- | --- |
| Dialog | Remove it; use native Invoker Commands and `HTMLDialogElement` |
| Details | Remove it for standard details and accordions; keep it only for checkbox synchronization |
| Drawer | Rebuild the markup, replace actions with native commands and update values |
| Popover | Move the controller to the popover element and replace actions with native commands |
| Form | Keep submit validation and remove per-field actions |
| Field | Register the new controller for validation on change |
| Button | Remove the explicit ripple action |
| Toaster | Let it observe inserted and removed toasts automatically |

## 1. Update dependencies

Update both packages together:

```shell
npm install winduum@next winduum-stimulus@next
```

Tailwind CSS excludes dependencies from automatic source detection. Verify that both packages are included in the stylesheet sources:

```css
@source "../../node_modules/winduum/src";
@source "../../node_modules/winduum-stimulus";
```

## 2. Replace Dialog with native APIs

The Dialog controller and the core `showDialog`, `closeDialog` and `defaultOptions` exports are removed. Delete the Dialog controller import and `application.register('x-dialog', Dialog)`, replace Invoke delegation with native Invoker Commands and remove `data-controller="x-dialog"`.

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

For programmatic control, use `dialogElement.showModal()`, `show()` and `close()`.

| Winduum 2 | Winduum 3 |
| --- | --- |
| `modal: true` | `showModal()` or `command="show-modal"` |
| `modal: false` | `show()` |
| `closable: true` | `closedby="any"` |
| `closable: false` | `closedby="none"` |
| `remove: true` | Remove the element in a native `close` event handler |
| `data-open` | `[open]` |
| `data-closed` | `:not([open])` |

The custom `x-dialog:show` and `x-dialog:close` events are no longer dispatched. Run open-side effects where the dialog is opened and use the native `close` and `cancel` events for closing.

Include the Dialog side-effect script once. It provides the `closedby` fallback and maintains `--default-scrollbar-width`:

```js
import 'winduum/src/components/dialog/index.js'
```

If Invoke was used only for Dialog, remove it from that markup. See [Dialog](/docs/components/dialog).

## 3. Use native Details by default

The core `showDetails`, `closeDetails`, `defaultOptions` and asynchronous toggle flow are removed. The v3 `toggleDetails` helper is synchronous and only supports the checkbox pattern. If the project used `slide-element` only for Details, remove that dependency.

The Stimulus `show`, `close`, `toggle` and `closeSiblings` actions are removed as well. Standard details and accordions need no JavaScript:

When component styles are imported individually, add the new Details stylesheet:

```css
@import "winduum/src/components/details/index.css" layer(utilities);
```

::: code-group
```html [Winduum 2]
<details class="x-details" data-controller="x-details" name="faq">
    <summary data-action="click->x-details#toggle:prevent">Question</summary>
    <div style="display: none">Answer</div>
</details>
```

```html [Winduum 3]
<details class="x-details" name="faq">
    <summary>Question</summary>
    <div>Answer</div>
</details>
```
:::

Remove inline `display: none` styles and handlers that prevent the default summary click. For an exclusive accordion, give every item the same native `name`:

```html
<details class="x-details" name="faq" open>...</details>
<details class="x-details" name="faq">...</details>
<details class="x-details" name="faq">...</details>
```

Keep the Details controller only when a checkbox inside `<summary>` controls the open state. Rename the old `toggle` action to `toggleDetails` and attach it to the checkbox change event:

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

See [Details](/docs/components/details).

## 4. Rebuild Drawer around the scroller

Drawer now separates the native dialog, the scrollable area and the visible panel: `.x-drawer`, `.x-drawer-scroller` and `.x-drawer-content`. Its controller no longer exposes `show`, `close` or `toggle`; use native commands instead.

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
<button command="show-modal" commandfor="drawerExample">Show drawer</button>

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

Update the values:

| Winduum 2 | Winduum 3 |
| --- | --- |
| `data-x-drawer-dialog-value="modal"` | Omit it; modal is the default |
| `data-x-drawer-dialog-value="non-modal"` | `data-x-drawer-modal-value="false"` |
| `data-x-drawer-placement-value` | Unchanged: `left`, `right`, `top` or `bottom` |

Remove the old `show`, `close`, `toggle`, `scroll` and `dismiss` actions. Use `show-modal` to open, `request-close` for an animated close and `close` only for an immediate close. The controller now handles trigger state, the scroller and dismissal internally, so Invoke is no longer needed for Drawer.

Remove direct use of `scrollInitDrawer`, `showDrawer`, `closeDrawer`, `scrollDrawer`, `toggleDrawerAttributes` and `scrollDrawerState`. The integration owns that lifecycle.

The custom `x-drawer:open` and `x-drawer:close` events are no longer dispatched. Remove application writes to `--background-color-opacity`; the new scroll timeline manages the Drawer backdrop through `--x-drawer-backdrop-opacity`.

The default `.x-drawer-content` size changes from `100% × 100%` to `50dvw × 100dvh`. To preserve the v2 size, define the old values after the Winduum imports:

```css
:root {
    --x-drawer-content-inline-size: 100%;
    --x-drawer-content-block-size: 100%;
}
```

Right and bottom drawers reverse the scroller order and animation direction; top and bottom drawers use `snap-y`. Copy the complete markup for the selected placement from [Drawer](/docs/components/drawer#examples).

## 5. Move Popover to native commands

In v3, the element with `popover` is also `.x-popover`; `.x-popover-content` is only its visual content. Move the controller from the old wrapper to the popover element and replace controller actions with native commands.

When utilities are imported individually, add the Position utilities used for placement:

```css
@import "winduum/tailwindcss/utilities/position.css";
```

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

Update the wiring:

| Winduum 2 | Winduum 3 |
| --- | --- |
| `data-x-popover-params-value='{"placement":"bottom"}'` | `data-x-popover-placement-value="bottom"` |
| Floating UI `autoUpdate` in params | `data-x-popover-auto-update-value="true"` |
| `popovertargetaction="toggle"` | `command="toggle-popover"` and `commandfor` |
| `data-open` | `:popover-open` or the native `toggle` event |
| `--x-popover-content-scale-x`, `--x-popover-content-scale-y` | `--x-popover-content-starting-scale` |
| `--x-popover-content-z-index` | Remove it; the native top layer owns stacking |
| `inline-center`, `block-center` | Remove them; `top`, `right`, `bottom` and `left` center by default |

Remove the `action` target and calls to the removed `toggle`, `hide` and `dismiss` controller actions. Also remove core `showPopover`, `hidePopover`, `togglePopover` and `computePopover` imports. For programmatic control, use the native `showPopover()`, `hidePopover()` and `togglePopover()` methods.

The placement value must match the Position utility on `.x-popover`. Keep `@floating-ui/dom` while the controller provides positioning fallback; set `autoUpdate` only when it must track the trigger on scroll or resize. The controller can be omitted when all supported browsers provide the required Popover and CSS Anchor Positioning behavior.

Replace v2 `trigger-focus` with the standard Popover trigger shown above using `command="toggle-popover"` and `commandfor`.

Replace `trigger-hover` and Tooltip patterns with `interestfor` and the Popover `tooltip` variant:

```html
<button interestfor="helpTooltip" style="interest-delay: 0s">Help</button>

<div
    class="x-popover tooltip bottom"
    id="helpTooltip"
    popover="hint"
    data-controller="x-popover"
    data-x-popover-placement-value="bottom"
>
    <div class="x-popover-content">Tooltip content</div>
</div>
```

`x-tooltip` is deprecated. If it must be kept temporarily, rename `top`, `bottom`, `left` and `right` to `tooltip-top`, `tooltip-bottom`, `tooltip-left` and `tooltip-right`. See [Popover](/docs/components/popover).

## 6. Split Form and Field validation

Form now handles submit validation only. Its `validateField` action is removed; the new Field controller validates on change. Keep the existing Form registration and register Field:

```js
import { Field } from 'winduum-stimulus/components/field/index.js'

application.register('x-field', Field)
```

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

The Field controller adds its change action automatically. Form still sets `novalidate` and adds its submit action. Make sure every group that should receive a message and validation icon has an `.x-field` wrapper. Unlike v2, Field validates every matching control inside that wrapper.

For direct helper imports, `validateField` moves from `winduum/src/components/form` to `winduum/src/components/field`. `validateForm` stays in Form, and `validateSelectors` is renamed to `validateSelector`.

Update custom validation options:

| Winduum 2 | Winduum 3 |
| --- | --- |
| `endParentSelector` | `iconParentSelector` |
| `endSelector` | `iconSelector` |
| `endContent` | `iconContent` |
| Default `validitySelector: '.validity'` | `[data-validity]` |
| Default icon `#icon-exclamation-circle` | `#heroicons-outline/exclamation-circle` |
| `ignoreMatch` | Exclude controls in `selector`; `readonly` and `[data-novalidate]` are ignored by default |
| `validate` | Removed; Form and Field determine when validation runs |
| `infoParentSelector`, `infoSelector` | Removed; messages are appended to the field wrapper |
| `validAttribute`, `invalidAttribute`, `activeAttribute` | Removed |

Validation no longer writes `data-valid`, `data-invalid` or `data-active`; use native `:valid`, `:invalid` and `:user-invalid` states. See [Form](/docs/components/form) and [Field](/docs/components/field).

## 7. Remove the redundant Button action

Button now adds its ripple action when it connects:

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

Loading observation and `data-loading` are unchanged.

## 8. Let Toaster manage its popover state

The Toaster controller now observes inserted and removed toasts and opens or closes itself. Add `popover="manual"` to Toaster:

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

The Toast controller keeps its `show`, `close` and `params` APIs. Core `showToast` now auto-hides after `7500` ms by default, and `closeToast` removes the element by default. Use `autoHide: null` to keep a toast open. Pass `remove: false` to a manual close action, or `close: { remove: false }` in the show params when an auto-hidden toast should remain in the DOM. The `x-toaster#close` action still closes all toasts.

Winduum 3 hides buttons inside `.x-toast` while a dialog is open. Verify actionable toasts in that state and override the rule only when the action must remain available.

Do not add an application `MutationObserver`; Toaster owns it. See [Toast](/docs/components/toast) and [Toaster](/docs/components/toaster).

## 9. Add the Text content variant

The Text index now imports the new Content styles alongside the base styles:

```css
@import "winduum/src/components/text/index.css" layer(components);
```

Projects that import Text styles individually must add both Content files:

```css
@import "winduum/src/components/text/props/content.css" layer(components);
@import "winduum/src/components/text/content.css" layer(components);
```

Add the `content` variant to `x-text` wrappers that contain CMS, WYSIWYG or other nested rich HTML:

::: code-group
```html [Winduum 2]
<article class="x-text">
    <h2>Heading</h2>
    <p>Rich text with a <a href="/">link</a>.</p>
</article>
```

```html [Winduum 3]
<article class="x-text content">
    <h2>Heading</h2>
    <p>Rich text with a <a href="/">link</a>.</p>
</article>
```
:::

Keep only `x-text` on plain text without descendant styles. Its base line height changes from `calc(1em + 0.75rem)` to `calc(1em + 0.5rem)`. To preserve the v2 spacing, define the old value after the Winduum imports:

```css
:root {
    --x-text-line-height: calc(1em + 0.75rem);
}
```

The Content variant also changes heading sizes and spacing, table borders, list and media margins, blockquotes and figcaptions. When CMS output must keep its v2 appearance, restore the relevant v2 Text variables or component overrides after the Winduum imports and review the rendered content.

See [Text](/docs/components/text).

## 10. Preserve or adopt the changed visual defaults

Winduum 3 changes the defaults below. Existing project values defined after the Winduum imports continue to take precedence. If a value is not explicitly defined, define it with the v2 value after the Winduum imports to avoid an unintended visual change. Adopt the new v3 default deliberately.

| Property | Winduum 2 | Winduum 3 |
| --- | --- | --- |
| `.x-heading.sm` → `--x-heading-font-size` | `var(--text-lg)` | `var(--text-3xl)` |
| `--x-heading-font-size` | `var(--text-xl)` | `var(--text-4xl)` |
| `.x-heading.lg` → `--x-heading-font-size` | `var(--text-3xl)` | `var(--text-5xl)` |
| `--x-label-font-size` | `var(--text-sm)` | `var(--text-2xs)` |
| `--x-label-line-height` | `calc(1em + 0.25rem)` | `calc(1em + 0.125rem)` |
| `--x-label-font-weight` | `inherit` | `var(--font-weight-medium)` |
| `--x-check-line-height` | `calc(1em + 0.25rem)` | `1.25rem` |
| `--container-width` | `80rem` | `82rem` |
| `--container-padding` | `5vw` | `clamp(1.25rem, 7.5cqw - 1.5rem, 4rem)` |
| `--container-padding-calc` | `max(calc(50vw - (var(--container-width) / 2)), var(--container-padding))` | `max(calc(50cqw - (var(--container-width) / 2)), var(--container-padding))` |
| `--x-control-select-icon-size` | `1.25rem` | `1rem` |
| `--x-control-select-icon-mask` | Filled caret | Outline chevron |
| `--x-control-select-picker-padding-block` | `0.375rem` | `calc(var(--spacing) * 1)` |
| `--x-control-select-picker-padding-inline` | `0.375rem` | `calc(var(--spacing) * 1)` |
| `--x-control-select-option-padding-block` | `0.75rem` | `calc(var(--spacing) * 2.5)` |
| `--x-control-select-option-padding-inline` | `0.75rem` | `calc(var(--spacing) * 3)` |

The root now uses `container-type: scroll-state` and `--scroll-padding-top`; `body` establishes an inline-size container. Check custom container queries.

When upgrading from earlier than `2.2.23`, replace the deprecated `--radius` token. Use an explicit named radius when the old large radius was intentional.

## 11. Add only the required fallbacks

Choose fallbacks from the browser versions supported by the project. For Invoker Commands used by Dialog, Drawer and Popover:

```shell
npm install invokers-polyfill
```

```js
if (!('command' in HTMLButtonElement.prototype)) {
    const { apply } = await import('invokers-polyfill/fn')
    apply()
}
```

For `interestfor` and Winduum's timeline fallback:

```shell
npm install interestfor
```

```js
import 'winduum/polyfill'
```

Keep `@floating-ui/dom` while the Popover controller supplies the positioning fallback. See [Polyfills](/docs/polyfills) for the feature checks and browser requirements.

## 12. Remove v2 wiring and test

Search the application for these v2 identifiers:

```text
showDialog, closeDialog, x-dialog:show, x-dialog:close
winduum-stimulus/components/dialog, data-controller="x-dialog"
x-dialog#show, x-dialog#close
showDetails, closeDetails, slide-element
x-details#show, x-details#close
x-details#toggle, x-details#closeSiblings
showDrawer, closeDrawer, scrollDrawer, scrollInitDrawer
toggleDrawerAttributes, scrollDrawerState
x-drawer#show, x-drawer#close, x-drawer#toggle
x-drawer#scroll, x-drawer#dismiss, data-x-drawer-dialog-value
x-drawer:open, x-drawer:close, --background-color-opacity
showPopover, hidePopover, togglePopover, computePopover
data-x-popover-target="action", data-x-popover-params-value
x-popover#toggle, x-popover#hide, x-popover#dismiss
--x-popover-content-scale-x, --x-popover-content-scale-y
--x-popover-content-z-index, inline-center, block-center
validateSelectors, x-form#validateField
.validity, #icon-exclamation-circle
click->x-button#ripple
x-tooltip
data-valid, data-invalid
```

Also remove application-level wiring around `computePositionPopover`, `autoUpdatePopover`, `drawerEvents`, `drawerObserver`, `validateForm`, `validateField`, `showToast`, `closeToast` and `toasterObserver` when the integration owns that behavior.

Test Dialog focus and dismissal, native Details and accordions, every used Drawer placement, Popover commands and fallback positioning, Form and Field validation, Toast defaults, typography and the oldest supported browser. Compare, Control, Image, Tabs, Invoke, Ripple and Swap need no v3-specific markup changes.

## Continue to another integration

The project is now migrated when it works with `winduum` and `winduum-stimulus` v3. To remove Stimulus from Winduum components, continue with the [winduum-elements migration guide](/migrations/winduum-elements-v3). Projects moving to Vue or React should use the current v3 installation examples in [winduum-vue](https://github.com/winduum/winduum-vue/tree/next/src/components) or [winduum-react](https://github.com/winduum/winduum-react/tree/next/src/components).
