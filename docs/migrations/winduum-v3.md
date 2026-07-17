---
description: "Migration guide for upgrading Winduum projects from v2 to v3."
---

# Migrate to Winduum v3

Winduum 3 moves component behavior to native HTML and CSS wherever the web platform already provides it. As a result, upgrading is not only a dependency change: several JavaScript helpers are removed, interactive component markup changes and some visual defaults are updated.

This guide compares the latest Winduum 2 release (`2.2.28`) with Winduum 3. If your project uses an older v2 release, review the [Winduum changelog](https://github.com/winduum/winduum/blob/next/CHANGELOG.md) for the changes between your installed version and `2.2.28` as well.

::: tip Recommended migration order
Update the core styles first, then migrate Dialog, Details, Popover and Drawer one at a time. Continue with Text, Form, Toast and the visual defaults before updating your framework integration.
:::

## 1. Update the packages

Install the v3 prerelease of the core package:

```shell
npm install winduum@next
```

If the project already uses `winduum-stimulus`, update it alongside the core package:

```shell
npm install winduum-stimulus@next
```

`winduum-elements`, `winduum-vue` and `winduum-react` are new integration packages in v3, so they are not dependency upgrades for existing Winduum 2 projects. Install one only when adopting that integration. `winduum-elements` is the frameworkless option for progressively enhancing server-rendered HTML.

Existing Stimulus projects should complete this guide and then follow the [winduum-stimulus v3 migration guide](/migrations/winduum-stimulus-v3).

Tailwind CSS excludes dependencies from automatic source detection. This was already relevant in Winduum 2, but was not documented there. As a precaution, verify that both Winduum and any integration package containing template classes are included in your stylesheet sources:

```css
@source "../../node_modules/winduum/src";
@source "../../node_modules/winduum-elements";
```

Replace `winduum-elements` with `winduum-stimulus`, `winduum-vue` or `winduum-react` when appropriate. Keep your existing Winduum CSS imports; importing the component and utility indexes picks up the new v3 styles.

If you import styles individually, add the styles required by the components you migrate. In particular, Details now has its own stylesheet and Popover placement uses the new Position utilities:

```css
@import "winduum/src/components/details/index.css" layer(utilities);
@import "winduum/tailwindcss/utilities/position.css";
```

## 2. Replace Dialog helpers with the native API

Winduum 2 opened and closed dialogs through `showDialog` and `closeDialog`. Winduum 3 removes those helpers and the related `defaultOptions` export. Use Invoker Commands in HTML and the native `HTMLDialogElement` methods in JavaScript.

::: code-group
```js [Winduum 2]
import { closeDialog, showDialog } from 'winduum/src/components/dialog'

openButton.addEventListener('click', () => showDialog(dialogElement))
closeButton.addEventListener('click', () => closeDialog(dialogElement))
```

```html [Winduum 3]
<button command="show-modal" commandfor="dialogExample">Show dialog</button>

<dialog class="x-dialog" id="dialogExample" closedby="any">
    <form class="x-dialog-content" method="dialog">
        <button>Close dialog</button>
    </form>
</dialog>
```
:::

For programmatic control, replace `showDialog(dialogElement)` with `dialogElement.showModal()` or `dialogElement.show()`, and replace `closeDialog(dialogElement)` with `dialogElement.close()`.

The old options and state map to native behavior as follows:

| Winduum 2 | Winduum 3 |
| --- | --- |
| `modal: true` | `dialogElement.showModal()` or `command="show-modal"` |
| `modal: false` | `dialogElement.show()` |
| `closable: true` | `closedby="any"` |
| `closable: false` | `closedby="none"` |
| `remove: true` | Remove the element in your own native `close` event handler |
| `data-open` | `[open]` |
| `data-closed` | `:not([open])` |

The custom `x-dialog:show` and `x-dialog:close` events are no longer dispatched. Move open-side effects into the code that opens the dialog and use the native `close` and `cancel` events for the close lifecycle.

Include the Dialog side-effect script. It supplies the `closedby` light-dismiss fallback and keeps `--default-scrollbar-width` updated:

```js
import 'winduum/src/components/dialog'
```

See the [Dialog documentation](/docs/components/dialog) for the complete markup and accessibility behavior.

## 3. Move Details behavior to native HTML and CSS

Remove `showDetails`, `closeDetails`, `defaultOptions` and the asynchronous `toggleDetails` flow. Standard details elements now open natively and `.x-details` animates `::details-content` in CSS.

::: code-group
```html [Winduum 2]
<details class="x-details">
    <summary data-action="toggle-details">Show more</summary>
    <div style="display: none">Details content</div>
</details>
```

```js [Winduum 2 JavaScript]
import { toggleDetails } from 'winduum/src/components/details'

summary.addEventListener('click', (event) => {
    event.preventDefault()
    toggleDetails(event.currentTarget)
})
```

```html [Winduum 3]
<details class="x-details">
    <summary>Show more</summary>
    <div>Details content</div>
</details>
```
:::

Remove inline `display: none` styles and event handlers that prevent the default summary click. Exclusive accordions no longer need code that finds and closes the previously open item; give every item in the group the same native `name`:

```html
<details class="x-details" name="faq" open>...</details>
<details class="x-details" name="faq">...</details>
<details class="x-details" name="faq">...</details>
```

The v3 `toggleDetails` helper still exists, but it is synchronous and only synchronizes a checkbox inside `<summary>` with the closest details element:

```js
import { toggleDetails } from 'winduum/src/components/details'

checkbox.addEventListener('change', (event) => toggleDetails(event.currentTarget))
```

See the [Details documentation](/docs/components/details) for the standard, checkbox and accordion patterns.

## 4. Adopt the native Popover and Anchor APIs

In v2, `.x-popover` was usually a wrapper and `.x-popover-content` owned the popover state and placement. In v3, the element with the native `popover` attribute is also `.x-popover`; placement classes such as `bottom-start` belong on that element, while `.x-popover-content` is its visual content.

::: code-group
```html [Winduum 2]
<div class="x-popover">
    <button id="menuTrigger" popovertarget="menu">Menu</button>
    <div class="x-popover-content bottom-start" id="menu" popover="manual">
        Content
    </div>
</div>
```

```js [Winduum 2 JavaScript]
import { togglePopover } from 'winduum/src/components/popover'

menuTrigger.addEventListener('click', (event) => {
    event.preventDefault()
    togglePopover(menuTrigger, { placement: 'bottom-start' })
})
```

```html [Winduum 3]
<button command="toggle-popover" commandfor="menu">Menu</button>

<div class="x-popover bottom-start" id="menu" popover>
    <div class="x-popover-content">Content</div>
</div>
```
:::

Remove `showPopover`, `hidePopover` and `togglePopover` imports. For programmatic control, use the native `popoverElement.showPopover()`, `hidePopover()` and `togglePopover()` methods. Native `:popover-open` replaces the old `data-open` state.

`computePopover` is also removed. If you support browsers without CSS Anchor Positioning, replace it with one of the focused Floating UI fallbacks:

```js
import {
    autoUpdatePopover,
    computePositionPopover,
} from 'winduum/src/components/popover'

await computePositionPopover(triggerElement, popoverElement, 'bottom-start')

const cleanup = await autoUpdatePopover(
    triggerElement,
    popoverElement,
    'bottom-start',
)

// Call when the popover closes
cleanup()
```

`computePositionPopover` runs once. `autoUpdatePopover` keeps the fallback position updated on scroll and resize and returns its cleanup function. Install `@floating-ui/dom` when you use either helper.

Replace the old `trigger-hover` and `trigger-focus` wrapper patterns with the native `interestfor` relationship when the popover should open on hover or keyboard focus. See the [Popover documentation](/docs/components/popover) for click, interest and fallback examples.

### Replace Tooltip with a Popover

`x-tooltip` is deprecated. The recommended replacement is the `tooltip` variant of Popover:

```html
<button interestfor="helpTooltip" style="interest-delay: 0s">Help</button>

<div class="x-popover tooltip bottom" id="helpTooltip" popover="hint">
    <div class="x-popover-content">Tooltip content</div>
</div>
```

Here, `tooltip` supplies the visual variant and `bottom` comes from the Position utilities. If you temporarily keep the deprecated `x-tooltip` component, rename only its directional variants:

| Winduum 2 | Winduum 3 compatibility name |
| --- | --- |
| `x-tooltip top` | `x-tooltip tooltip-top` |
| `x-tooltip bottom` | `x-tooltip tooltip-bottom` |
| `x-tooltip left` | `x-tooltip tooltip-left` |
| `x-tooltip right` | `x-tooltip tooltip-right` |

## 5. Rebuild Drawer markup around the scroller

Drawer is a full rewrite. The dialog and the scrollable element are now separate: `.x-drawer` owns the native dialog and backdrop, `.x-drawer-scroller` owns scroll snap and the animation timeline, and `.x-drawer-content` is the visible panel.

Start from the complete example for your integration. A left Drawer using `winduum-elements` has this structure:

```html
<button command="show-modal" commandfor="drawerExample">Show drawer</button>

<dialog
    class="x-drawer"
    id="drawerExample"
    is="x-drawer"
    closedby="any"
>
    <div class="x-drawer-scroller snap-x snap-mandatory">
        <nav class="x-drawer-content" data-x-drawer-part="content">
            Drawer content
            <button command="request-close" commandfor="drawerExample">Close</button>
        </nav>
    </div>
</dialog>
```

For right, top and bottom drawers, set the integration's placement to `right`, `top` or `bottom` and use the corresponding example markup. Vertical drawers use a vertical scroller. The default content size also changes from a full viewport to `50dvw × 100dvh`, so preserve your old width explicitly when needed.

The low-level JavaScript API now uses placement names instead of distance, direction and scroll-state options:

| Removed or changed v2 API | Winduum 3 |
| --- | --- |
| `scrollInitDrawer(element, distance, direction)` | Handled by `showDrawer(scroller, placement)` |
| `showDrawer(element, distance, direction)` | `showDrawer(scroller, placement)` |
| `closeDrawer(element, distance, direction)` | `closeDrawer(scroller, placement)` |
| `scrollDrawer(element, options)` | `scrollDrawer(scroller, placement, reverse?, behavior?)` |
| `toggleDrawerAttributes` | Removed; native dialog and observer state is used |
| `scrollDrawerState` | Removed; native scroll snap and intersection state is used |

Custom integrations should wire `drawerEvents(dialog, content, placement)` and observe the content with the `IntersectionObserver` returned by `drawerObserver(dialog, placement)`. All scrolling helpers operate on `.x-drawer-scroller`, not on the dialog.

Winduum 3 also provides a no-JavaScript pattern, a `.no-snap` CSS-only variant and a responsive drawer-to-dialog pattern. The no-snap stylesheet is not part of the component index, so import it explicitly when you use that variant:

```css
@import "winduum/src/components/drawer/nosnap.css" layer(utilities);
```

See the [Drawer documentation](/docs/components/drawer) for every placement and variant.

## 6. Mark rich Text content explicitly

In v2, `x-text` styled both the wrapper and all nested rich-content elements. In v3, the base class only supplies plain text typography. Add the `content` variant to wrappers containing CMS, WYSIWYG or other nested semantic HTML:

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

Keep only `x-text` on a plain paragraph, label or other element that does not need descendant styles. The base line height and several rich-content margins, heading sizes, table styles and blockquote defaults also changed, so visually review CMS-driven pages. See [Text](/docs/components/text).

## 7. Split Form and Field validation

`validateField` moves from the Form module to its own Field export. Form validation now selects `.x-field` wrappers by default, and `validateSelectors` is renamed to the singular `validateSelector`.

::: code-group
```js [Winduum 2]
import {
    validateField,
    validateForm,
} from 'winduum/src/components/form'

validateForm(event, {
    validateSelectors: '.x-control, .x-check',
})
```

```js [Winduum 3]
import { validateField } from 'winduum/src/components/field'
import { validateForm } from 'winduum/src/components/form'

fieldElement.addEventListener('change', () => validateField(fieldElement))

validateForm(event, {
    validateSelector: '.x-field',
    validateOptions: {
        invalidIcon: '<svg data-validity>...</svg>',
    },
})
```
:::

Make sure each group that should receive a message and validation icon has an `.x-field` wrapper. Field-specific options are passed through `validateOptions`.

Several low-level `validateField` options were removed or renamed:

| Winduum 2 | Winduum 3 |
| --- | --- |
| `endParentSelector` | `iconParentSelector` |
| `endSelector` | `iconSelector` |
| `endContent` | `iconContent` |
| `infoContent` | `infoContent` |
| `validitySelector` | `validitySelector` |
| `ignoreMatch` | Exclude controls in `selector`; `readonly` and `[data-novalidate]` are excluded by default |
| `validate` | Removed; decide whether to call validation in your own code |
| `infoParentSelector`, `infoSelector` | Removed; messages are appended to the supplied field wrapper |
| `validAttribute`, `invalidAttribute`, `activeAttribute` | Removed; the helper no longer writes those states |

Update CSS or application code that relied on `data-valid`, `data-invalid` or `data-active`. Prefer the native `:valid`, `:invalid` and `:user-invalid` states. See the [Form documentation](/docs/components/form) for all current options.

## 8. Opt out of the new Toast defaults when necessary

`showToast` now auto-hides after `7500` ms by default. `closeToast` now removes the closed element from the DOM by default.

Preserve the v2 behavior explicitly if your application keeps toasts open or reuses their elements:

```js
await showToast(toastElement, {
    autoHide: null,
})

await closeToast(toastElement, {
    remove: false,
})
```

Make the Toaster a `popover="manual"` so it can appear in the top layer, including above an open dialog:

```html
<div class="x-toaster" popover="manual"></div>
```

Use `toasterObserver` to show the toaster when its first toast is inserted and hide it after the last one is removed:

```js
import { toasterObserver } from 'winduum/src/components/toaster'

const toasterElement = document.querySelector('.x-toaster')
const observer = toasterObserver()

observer.observe(toasterElement, { childList: true })
```

See [Toast](/docs/components/toast) and [Toaster](/docs/components/toaster).

## 9. Review the changed visual defaults

Winduum 3 intentionally updates several defaults. Remove overrides that were compensating for v2, and add explicit values where the old appearance is still required.

| Area | Winduum 2 | Winduum 3 |
| --- | --- | --- |
| `x-heading sm` | `--text-lg` | `--text-3xl` |
| `x-heading` | `--text-xl` | `--text-4xl` |
| `x-heading lg` | `--text-3xl` | `--text-5xl` |
| `x-label` | `--text-sm`, normal inherited weight | `--text-2xs`, medium weight |
| `x-text` line height | `calc(1em + 0.75rem)` | `calc(1em + 0.5rem)` |
| Container width | `80rem` | `82rem` |
| Container padding | `5vw` | `clamp(1.25rem, 7.5cqw - 1.5rem, 4rem)` |
| Select icon | `1.25rem` filled caret | `1rem` outline chevron |
| Drawer content | `100% × 100%` | `50dvw × 100dvh` |

The root element now has `container-type: scroll-state` and uses `--scroll-padding-top`; `body` now establishes an inline-size container. Check custom container queries and any code that assumed a different query container.

If upgrading from Winduum earlier than `2.2.23`, also replace the deprecated `--radius` token. Since `2.2.23` it resolves to the base `xs` radius (`0.125rem`) instead of `--radius-xl`; use an explicit named radius variable when the old large radius was intentional.

## 10. Add fallbacks intentionally

Winduum 3 uses native Invoker Commands, `interestfor`, CSS Anchor Positioning, scroll timelines and other platform features. Do not load every fallback automatically; choose them from the browser versions your project supports.

The optional `winduum/polyfill` entry point covers Winduum's `interestfor` and experimental timeline-trigger fallbacks:

```shell
npm install interestfor
```

```js
import 'winduum/polyfill'
```

It does not include the Webuum fallbacks used by `winduum-elements`. Load those separately when feature detection requires them:

```shell
npm install invokers-polyfill @webreflection/custom-elements-builtin
```

```js
import { supportsCommand, supportsIs } from 'webuum/supports'

if (!supportsCommand) {
    const { apply } = await import('invokers-polyfill/fn')
    apply()
}

if (!supportsIs()) {
    await import('@webreflection/custom-elements-builtin')
}
```

Use the Popover fallback helpers from step 4 when a project requires anchored positioning in browsers without CSS Anchor Positioning. See [Polyfills](/docs/polyfills) before adding compatibility code.

## 11. Search for removed APIs and verify the result

Search the application for these v2 identifiers before considering the migration complete:

```text
showDialog, closeDialog, x-dialog:show, x-dialog:close
showDetails, closeDetails, defaultOptions
showPopover, hidePopover, togglePopover, computePopover
showDrawer, closeDrawer, scrollDrawer, scrollInitDrawer
toggleDrawerAttributes, scrollDrawerState
validateSelectors, validateField imports from components/form
x-tooltip
data-open, data-closed, data-valid, data-invalid, data-active
```

Finally, test:

- Dialog light dismiss, <kbd>Esc</kbd>, focus movement and focus return.
- Details animation and exclusive accordions with both mouse and keyboard.
- Popover click, interest, light-dismiss and fallback positioning.
- Every Drawer placement, swipe dismissal and responsive variant used by the project.
- Invalid and valid form submissions, validation messages and loading state.
- Toast auto-hide, manual close, DOM removal and toaster behavior above a dialog.
- Typography, containers, selects and custom container queries at each breakpoint.
- Reduced-motion behavior and the oldest browser version officially supported by the project.

After the core migration, update integration-specific markup from the examples in each component's documentation and review the full [Winduum v3 announcement](/blog/) for the new utilities and components available in this release.
