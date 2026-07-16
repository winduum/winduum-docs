---
description: "Migration guide for upgrading Winduum projects from v2 to v3."
---

# Migrate to Winduum v3

Winduum 3 replaces several custom JavaScript APIs with native browser functionality and updates the integration packages to use the same markup. Follow this core guide first, then continue with the guide for your integration.

### 1. Update the packages

Install the v3 prerelease of the core package and update the integration used by your project.

```shell
npm install winduum@next
```

```shell
# Install only the integration your project uses
npm install winduum-elements@next
npm install winduum-stimulus@next
npm install winduum-vue@next
npm install winduum-react@next
```

If Tailwind CSS scans component markup from a package, keep the package in your stylesheet sources:

```css
@source "../../node_modules/winduum/src";
@source "../../node_modules/winduum-elements";
```

Replace `winduum-elements` with `winduum-stimulus`, `winduum-vue` or `winduum-react` when appropriate.

### 2. Replace Dialog helpers with the native API

Remove imports and calls to `showDialog`, `closeDialog` and `defaultOptions`. Use Invoker Commands in HTML and native `HTMLDialogElement` methods in JavaScript.

```html
<button command="show-modal" commandfor="dialogExample">Show dialog</button>

<dialog id="dialogExample" closedby="any">
    <form method="dialog">
        <button>Close dialog</button>
    </form>
</dialog>
```

```js
dialogElement.showModal()
dialogElement.close()
```

Include the Dialog side-effect script when you need the `closedby` fallback or Winduum's scrollbar-width property. See the [Dialog docs](/docs/components/dialog#javascript).

### 3. Move Details animations to CSS

Remove `showDetails`, `closeDetails`, `defaultOptions` and their asynchronous animation flow. Standard details and exclusive accordions now use native HTML and CSS transitions.

```html
<details class="x-details" name="faq">
    <summary>First question</summary>
    <div>First answer</div>
</details>

<details class="x-details" name="faq">
    <summary>Second question</summary>
    <div>Second answer</div>
</details>
```

Use the synchronous `toggleDetails` helper only for the optional checkbox-inside-summary pattern. See the [Details docs](/docs/components/details).

### 4. Adopt the native Popover API

Replace Winduum's `showPopover`, `hidePopover` and `togglePopover` helpers with the native methods or Invoker Commands. Replace `computePopover` with `computePositionPopover` or `autoUpdatePopover` only when a CSS Anchor Positioning fallback is required.

```html
<button command="toggle-popover" commandfor="menu">Menu</button>

<div id="menu" class="x-popover bottom" popover>
    <div class="x-popover-content">Content</div>
</div>
```

The `top`, `bottom`, `left` and `right` classes now come from [Position utilities](/docs/utilities/position). See the [Popover docs](/docs/components/popover) for click, interest and fallback examples.

### 5. Replace Tooltip with the Popover variant

`x-tooltip` is deprecated. Use `x-popover tooltip` and rename directional Tooltip variants:

| Winduum 2 | Winduum 3 |
| --- | --- |
| `x-tooltip top` | `x-popover tooltip tooltip-top` |
| `x-tooltip bottom` | `x-popover tooltip tooltip-bottom` |
| `x-tooltip left` | `x-popover tooltip tooltip-left` |
| `x-tooltip right` | `x-popover tooltip tooltip-right` |

See the [Popover tooltip example](/docs/components/popover#tooltip-popover).

### 6. Update Drawer markup and helpers

Drawer now uses placement-based helpers and native `<dialog>`, scroll snap and scroll-driven timelines. Replace the previous options-based calls with `showDrawer`, `closeDrawer`, `drawerEvents` and `drawerObserver`, passing a placement of `left`, `right`, `top` or `bottom`.

Review the markup for the scroller and content parts, then choose the appropriate variant:

- Default for the scroll-snap and swipe behavior.
- `noscript` for a drawer that stays animated without JavaScript.
- `nosnap` for the CSS-only non-snap behavior.
- `dialog` for the responsive drawer-to-dialog pattern.

Use the complete examples in the [Drawer docs](/docs/components/drawer) as the source of truth when replacing v2 markup.

### 7. Update Text, Form and Toast APIs

- Add the `content` variant to `x-text` wrappers that contain rich nested HTML. Plain text keeps the base `x-text` class.
- Import `validateField` from `winduum/src/components/field`, change the default field wrapper to `.x-field` and rename `validateSelectors` to `validateSelector`.
- Pass field-specific validation options through `validateOptions` when calling `validateForm`.
- Set `autoHide: null` if a toast should not use the new 7.5 second default timeout.
- Set `remove: false` if `closeToast` should preserve the closed element in the DOM.
- Use `toasterObserver` when the toaster should open and close automatically as toasts are inserted and removed.

See [Text](/docs/components/text), [Form](/docs/components/form), [Toast](/docs/components/toast) and [Toaster](/docs/components/toaster) for the updated APIs.

### 8. Review style defaults and tokens

Winduum 3 updates default typography, heading and label sizes, select styles, container width, responsive padding and root scroll/container behavior. Check pages where those defaults were overridden locally.

The deprecated `--radius` value changed from `--radius-xl` to the base `xs` radius (`0.125rem`). Replace it with an explicit named radius variable when the old large radius was intentional.

### 9. Load only the fallbacks you need

Winduum now provides the `winduum/polyfill` entry point and checks from `winduum/supports`. Projects using Winduum Elements can combine them with checks from `webuum/supports`.

```js
import 'winduum/polyfill'

import { supportsCommand, supportsIs } from 'webuum/supports'

if (!supportsCommand) {
    const { apply } = await import('invokers-polyfill/fn')
    apply()
}

if (!supportsIs()) {
    await import('@webreflection/custom-elements-builtin')
}
```

See [Polyfills](/docs/polyfills) before adding global compatibility code.
