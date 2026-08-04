---
description: "Migration guide for replacing winduum-stimulus v3 with winduum-elements in a Winduum 3 project."
---

# Migrate from winduum-stimulus v3 to winduum-elements

`winduum-elements` is the frameworkless integration for Winduum 3. It replaces Winduum's Stimulus controllers with Custom Elements built on [Webuum](https://webuum.dev/), while keeping the same Winduum 3 styles and core JavaScript helpers.

This is an integration migration, not another core Winduum upgrade. Custom application controllers can temporarily continue to use Stimulus alongside `winduum-elements`, but migrating them too is recommended so the project can remove Stimulus completely. This guide covers Winduum's controllers; follow the general [Stimulus to Webuum migration guide](https://webuum.dev/docs/migrations/stimulus) for application-specific controllers.

::: warning Complete the prerequisite migration first
Do not apply this guide directly to a Winduum 2 project.

1. Complete the combined [Winduum and winduum-stimulus v3 migration](/migrations/winduum-v3).
2. Verify that the project works with Winduum 3 and `winduum-stimulus` v3.
3. Only then follow this guide to replace Winduum's Stimulus controllers with `winduum-elements`.

Although this guide removes the migrated controllers again, completing the v3 migration first keeps the Winduum 2 to 3 markup changes separate from the integration change.
:::

## Migration overview

| winduum-stimulus v3 | winduum-elements |
| --- | --- |
| Register controllers on a Stimulus `Application` | Define components with `customElements.define()` |
| Attach behavior with `data-controller` | Use an autonomous element such as `<x-tabs>` or a customized built-in such as `<dialog is="x-drawer">` |
| Locate descendants with Stimulus targets | Locate descendants with Webuum parts |
| Invoke methods with `data-action` or the Invoke controller | Use internal element listeners or native `command` / `commandfor` attributes |
| Read Stimulus values and action params | Read short `data-*` properties or fixed JavaScript options configured in the element definition |

Migrate one component at a time. Keep `winduum-stimulus` installed until every Winduum controller has been removed from the application's registration and templates.

## 1. Install winduum-elements alongside Stimulus

The project should already use `winduum@next` and `winduum-stimulus@next` after the prerequisite migration. Add Elements without removing Stimulus yet:

```shell
npm install winduum-elements@next
```

When using Tailwind CSS, keep both integration packages in the stylesheet source list while templates are being migrated:

```css
@source "../../node_modules/winduum/src";
@source "../../node_modules/winduum-stimulus";
@source "../../node_modules/winduum-elements";
```

Remove the old `@source` for `winduum-stimulus` after its last controller has been migrated. Tailwind CSS already excluded dependencies from automatic source detection in Winduum 2; the additional source is needed because templates and class strings temporarily come from both integration packages.

## 2. Replace controller registration with element definitions

Import and define only the elements used by the project. Unlike Stimulus, `winduum-elements` does not have an application-wide controller registry.

When the browser matrix needs the customized built-in fallback, load it as described in [step 11](#_11-add-the-customized-built-in-fallback) before running these definitions.

::: code-group
```js [winduum-stimulus v3]
import { Application } from '@hotwired/stimulus'
import { Button } from 'winduum-stimulus/components/button/index.js'
import { Drawer } from 'winduum-stimulus/components/drawer/index.js'
import { Field } from 'winduum-stimulus/components/field/index.js'
import { Form } from 'winduum-stimulus/components/form/index.js'
import { Tabs } from 'winduum-stimulus/components/tabs/index.js'

const application = Application.start()

application.register('x-button', Button)
application.register('x-drawer', Drawer)
application.register('x-field', Field)
application.register('x-form', Form)
application.register('x-tabs', Tabs)
```

```js [winduum-elements]
import { Button } from 'winduum-elements/components/button/index.js'
import { Drawer } from 'winduum-elements/components/drawer/index.js'
import { Field } from 'winduum-elements/components/field/index.js'
import { Form } from 'winduum-elements/components/form/index.js'
import { Tabs } from 'winduum-elements/components/tabs/index.js'

customElements.define('x-button', Button(HTMLButtonElement), {
    extends: 'button',
})
customElements.define('x-button-a', Button(HTMLAnchorElement), {
    extends: 'a',
})
customElements.define('x-drawer', Drawer, { extends: 'dialog' })
customElements.define('x-field', Field)
customElements.define('x-form', Form, { extends: 'form' })
customElements.define('x-tabs', Tabs)
```
:::

Each custom-element name can be defined only once. Keep definitions in one application entry point even when the corresponding markup is rendered in several templates.

### Autonomous and customized built-in elements

The root element depends on the component:

| Component | Element markup |
| --- | --- |
| Button | `<button is="x-button">`; register the `Button()` factory separately for buttons, links or another native base class |
| Carousel | `<x-carousel>` |
| Compare | `<x-compare>` |
| Control | `<x-control>` |
| Details | `<details is="x-details">`; only needed for the checkbox-inside-summary variant |
| Drawer | `<dialog is="x-drawer">` |
| Field | `<x-field>` |
| Form | `<form is="x-form">` |
| Image | `<x-image>` with `Image(HTMLElement)`, or a customized native element such as `<picture is="x-image">` with `Image(HTMLPictureElement)` |
| Popover | `<x-popover>`; only needed for the Winduum positioning fallback |
| Range | `<x-range>` |
| Tabs | `<x-tabs>` |
| Toast and Toaster | `<x-toast>` and `<x-toaster>` |

Customized built-ins preserve the semantics and native API of their base element. They require both the `is` attribute in HTML and the matching `{ extends: '...' }` registration option.

Dialog has neither a Stimulus v3 controller nor a `winduum-elements` component. Keep the native Dialog markup completed in the prerequisite migration.

## 3. Translate the Stimulus markup vocabulary

Use these rules as a starting point, then check the component-specific sections below:

| Stimulus wiring | Elements wiring |
| --- | --- |
| `data-controller="x-component"` | Replace the root with `<x-component>`, or add `is="x-component"` to its native element |
| `data-x-component-target="name"` | `data-x-component-part="name"` |
| Internal `data-action` such as `input->x-range#setValue` | Remove it; the Custom Element connects its own listener |
| External controller action | Use `command` and `commandfor` |
| `data-x-component-name-value` | Use the component's short `data-name` property when one exists |
| Stimulus action params | Use a component-specific `data-*` property, or configure a fixed options property in the element definition as described in [step 9](#_9-configure-fixed-options-in-element-definitions) |

The supported short properties are:

| Stimulus value | Element property |
| --- | --- |
| `data-x-drawer-placement-value` | `data-placement` |
| `data-x-drawer-modal-value` | `data-modal` |
| `data-x-popover-placement-value` | `data-placement` |
| `data-x-popover-auto-update-value` | `data-auto-update` |

Do not shorten arbitrary Stimulus values automatically. Only properties exposed by the selected element are read from these attributes.

## 4. Convert components with internal listeners

Button, Compare, Control, Details, Field, Form, Image and Range connect their own event listeners. Remove the corresponding `data-action` attributes when converting their root elements.

Form validation demonstrates the common root-element conversion:

::: code-group
```html [winduum-stimulus v3]
<form class="x-form" data-controller="x-form">
    <div class="x-field" data-controller="x-field">
        <label class="x-label" for="email">Email</label>
        <div class="x-control" data-controller="x-control">
            <input id="email" type="email" required>
        </div>
    </div>

    <button class="x-button" data-controller="x-button">Submit</button>
</form>
```

```html [winduum-elements]
<form class="x-form" is="x-form">
    <x-field class="x-field">
        <label class="x-label" for="email">Email</label>
        <x-control class="x-control">
            <input id="email" type="email" required>
        </x-control>
    </x-field>

    <button class="x-button" is="x-button">Submit</button>
</form>
```
:::

The behavior stays the same: Form validates on submit, Field validates on change, Control synchronizes `data-active`, and Button creates its ripple listener and observes `data-loading` automatically.

The Button loading state remains `data-loading`. Remove the Stimulus-only `data-x-button-loading-value`; Elements enables loading-state observation by default.

For the Details checkbox variant, replace the controller with the customized built-in and remove the explicit action:

::: code-group
```html [winduum-stimulus v3]
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

```html [winduum-elements]
<details class="x-details" is="x-details">
    <summary>
        <label class="x-check">
            <input type="checkbox" autocomplete="off">
            Fill more
        </label>
    </summary>
    <div>Additional fields</div>
</details>
```
:::

Leave standard Details and exclusive accordions as native `<details>` elements without either integration.

## 5. Convert the Drawer integration

The v3 Drawer structure and native commands do not change again in this migration. Replace only its Stimulus integration wiring: the controller root becomes a customized dialog, the content target becomes a part, and values use short attributes.

::: code-group
```html [winduum-stimulus v3]
<button
    command="show-modal"
    commandfor="drawerExample"
>
    Show drawer
</button>

<dialog
    class="x-drawer"
    id="drawerExample"
    closedby="any"
    data-controller="x-drawer"
    data-x-drawer-placement-value="right"
>
    <div class="x-drawer-scroller after:order-first snap-x snap-mandatory">
        <nav class="x-drawer-content" data-x-drawer-target="content">
            Drawer content
            <button command="request-close" commandfor="drawerExample">Close</button>
        </nav>
    </div>
</dialog>
```

```html [winduum-elements]
<button
    command="show-modal"
    commandfor="drawerExample"
>
    Show drawer
</button>

<dialog
    class="x-drawer"
    is="x-drawer"
    id="drawerExample"
    closedby="any"
    data-placement="right"
>
    <div class="x-drawer-scroller after:order-first snap-x snap-mandatory">
        <nav class="x-drawer-content" data-x-drawer-part="content">
            Drawer content
            <button command="request-close" commandfor="drawerExample">Close</button>
        </nav>
    </div>
</dialog>
```
:::

Use `data-modal="false"` for a non-modal Drawer. The default is modal and the default placement is `left`. Keep the placement-specific v3 classes and scroller order from the completed v3 migration.

## 6. Convert targets, actions and internal listeners

Range, Tabs and Carousel keep their Winduum 3 component markup, but their integration attributes change.

### Range

::: code-group
```html [winduum-stimulus v3]
<div class="x-range" data-controller="x-range">
    <input
        type="range"
        min="0"
        max="100"
        data-x-range-target="start"
        data-action="input->x-range#setValue"
    >
    <input
        type="range"
        min="0"
        max="100"
        data-x-range-target="end"
        data-action="input->x-range#setValue"
        data-x-range-track-param="end"
    >
</div>
```

```html [winduum-elements]
<x-range class="x-range">
    <input
        type="range"
        min="0"
        max="100"
        data-x-range-part="start"
    >
    <input
        type="range"
        min="0"
        max="100"
        data-x-range-part="end"
        data-track="end"
    >
</x-range>
```
:::

Remove `input->x-range#setValue`. Replace `data-x-range-track-param="end"` with `data-track="end"` on the end input.

### Tabs

Each tab command targets the Tabs root by ID:

::: code-group
```html [winduum-stimulus v3]
<div id="accountTabs" data-controller="x-tabs">
    <div class="x-tabs-list" role="tablist">
        <button
            role="tab"
            id="profileTab"
            aria-controls="profilePanel"
            aria-selected="true"
            data-action="click->x-tabs#toggle"
            data-x-tabs-target="tab"
        >
            Profile
        </button>
    </div>

    <div
        role="tabpanel"
        id="profilePanel"
        aria-labelledby="profileTab"
        aria-hidden="false"
        data-x-tabs-target="tabpanel"
    >
        Profile settings
    </div>
</div>
```

```html [winduum-elements]
<x-tabs id="accountTabs">
    <div class="x-tabs-list" role="tablist">
        <button
            role="tab"
            id="profileTab"
            aria-controls="profilePanel"
            aria-selected="true"
            command="--toggle"
            commandfor="accountTabs"
            data-x-tabs-part="tab"
        >
            Profile
        </button>
    </div>

    <div
        role="tabpanel"
        id="profilePanel"
        aria-labelledby="profileTab"
        aria-hidden="false"
        data-x-tabs-part="tabpanel"
    >
        Profile settings
    </div>
</x-tabs>
```
:::

Replace every `data-x-tabs-target` with `data-x-tabs-part`, and replace `click->x-tabs#toggle` with `command="--toggle"` and `commandfor`.

### Carousel

Replace the root with `<x-carousel>`, change all targets to parts, remove the content scroll action and replace the previous and next actions with commands:

::: code-group
```html [winduum-stimulus v3]
<div class="x-carousel" id="gallery" data-controller="x-carousel">
    <button
        data-x-carousel-target="prev"
        data-action="x-carousel#scrollPrev"
        aria-controls="galleryContent"
    >
        Previous
    </button>

    <div
        class="x-carousel-content"
        id="galleryContent"
        data-x-carousel-target="content"
        data-action="scroll->x-carousel#scroll"
    >
        <div>Slide 1</div>
        <div>Slide 2</div>
    </div>

    <button
        data-x-carousel-target="next"
        data-action="x-carousel#scrollNext"
        aria-controls="galleryContent"
    >
        Next
    </button>
</div>
```

```html [winduum-elements]
<x-carousel class="x-carousel" id="gallery">
    <button
        data-x-carousel-part="prev"
        command="--scrollPrev"
        commandfor="gallery"
        aria-controls="galleryContent"
    >
        Previous
    </button>

    <div
        class="x-carousel-content"
        id="galleryContent"
        data-x-carousel-part="content"
    >
        <div>Slide 1</div>
        <div>Slide 2</div>
    </div>

    <button
        data-x-carousel-part="next"
        command="--scrollNext"
        commandfor="gallery"
        aria-controls="galleryContent"
    >
        Next
    </button>
</x-carousel>
```
:::

The Carousel structure and Winduum 3 CSS do not otherwise change as part of this integration migration.

### Compare

Compare connects its input, keyboard and mouse listeners internally. Replace the root and remove all three Stimulus actions:

::: code-group
```html [winduum-stimulus v3]
<div class="x-compare" data-controller="x-compare">
    <input
        type="range"
        step="0.1"
        aria-hidden="true"
        data-action="input->x-compare#setPosition keydown->x-compare#setKeyboardStep mousedown->x-compare#setMouseStep"
    >
    <div class="x-button circle" aria-hidden="true"></div>
    <div class="x-image">
        <img src="before.jpg" alt="Before">
        <img src="after.jpg" alt="After">
    </div>
</div>
```

```html [winduum-elements]
<x-compare class="x-compare">
    <input type="range" step="0.1" aria-hidden="true">
    <div class="x-button circle" aria-hidden="true"></div>
    <div class="x-image">
        <img src="before.jpg" alt="Before">
        <img src="after.jpg" alt="After">
    </div>
</x-compare>
```
:::

### Public action reference

When an existing control invokes a component method, replace its Stimulus action with the corresponding command. Give the target element an ID and point `commandfor` to it.

| Stimulus action | Elements command |
| --- | --- |
| `x-control#stepUp` | `command="--stepUp"` |
| `x-control#stepDown` | `command="--stepDown"` |
| `x-control#showPicker` | `command="--showPicker"` |
| `x-carousel#scrollPrev` | `command="--scrollPrev"` |
| `x-carousel#scrollNext` | `command="--scrollNext"` |
| `x-carousel#scrollTo` | `command="--scrollTo"` |
| `x-tabs#toggle` | `command="--toggle"` |
| `x-toast#close` | `command="--close"` targeting the Toast |
| `x-toaster#close` | `command="--close"` targeting the Toaster |

Drawer and Popover use the native `show-modal`, `close`, `request-close`, `show-popover`, `hide-popover` and `toggle-popover` commands instead of custom `--` commands. The Elements Drawer has no separate `toggle` method; choose an explicit open or close command, or use the native dialog API from application code when a conditional toggle is required.

## 7. Convert Popover only where the fallback is used

The prerequisite v3 migration already moved Popover to native `popover`, `command` and `commandfor` attributes. Those native controls stay unchanged. Replace only the optional positioning controller and its values:

::: code-group
```html [winduum-stimulus v3]
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

```html [winduum-elements]
<button command="toggle-popover" commandfor="menu">Menu</button>

<x-popover
    class="x-popover bottom"
    id="menu"
    popover
    data-placement="bottom"
>
    <div class="x-popover-content">Content</div>
</x-popover>
```
:::

Use `data-auto-update="true"` when the Floating UI fallback should keep tracking its source. `@floating-ui/dom` was already used by the v2 and v3 Stimulus Popover controllers; keep it when the project continues to use this fallback. A fully native Popover without the positioning fallback remains an ordinary element and does not need `<x-popover>`.

## 8. Convert Toast and Toaster

Toasts continue to be rendered by the backend and inserted into the Toaster by the project's existing AJAX flow. No client-side insertion or cloning code needs to be added or migrated. Update the server-rendered toast fragment and the persistent Toaster markup:

::: code-group
```html [winduum-stimulus v3]
<!-- Fragment returned by the backend and inserted via AJAX -->
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

<!-- Persistent layout target -->
<ol
    class="x-toaster"
    id="notifications"
    popover="manual"
    data-controller="x-toaster"
></ol>
```

```html [winduum-elements]
<!-- Fragment returned by the backend and inserted via AJAX -->
<x-toast
    class="x-toast"
    id="notification-42"
    role="status"
    aria-live="assertive"
    aria-atomic="true"
>
    <div class="x-toast-content">
        Toast content
        <button command="--close" commandfor="notification-42">Close</button>
    </div>
</x-toast>

<!-- Persistent layout target -->
<x-toaster
    class="x-toaster"
    id="notifications"
    popover="manual"
></x-toaster>
```
:::

Generate a unique Toast ID in the backend response and use the same value in its close button's `commandfor`. The inserted `<x-toast>` upgrades automatically and shows itself when it connects; `<x-toaster>` continues to observe inserted and removed children.

Convert an existing close-all control from Invoke to a command targeting the Toaster:

::: code-group
```html [winduum-stimulus v3]
<div data-controller="invoke">
    <button
        data-action="click->invoke#action"
        data-invoke-action="x-toaster#close"
        data-invoke-target="#notifications"
    >
        Close all
    </button>
</div>
```

```html [winduum-elements]
<button command="--close" commandfor="notifications">Close all</button>
```
:::

## 9. Configure fixed options in element definitions

There are two different kinds of component configuration:

- Properties declared in a component's `static props` map use the short `data-*` attributes documented in [step 3](#_3-translate-the-stimulus-markup-vocabulary).
- Fixed option properties such as `$showOptions` are configured on the class used in `customElements.define()`. Do not query rendered instances and assign these options afterward.

The fixed option properties are:

| Component | Element options |
| --- | --- |
| Compare | `$positionOptions`, `$keyboardStep`, `$mouseStep` |
| Details | `$toggleOptions` |
| Field | `$validateFieldOptions` |
| Form | `$validateFormOptions` |
| Toast | `$showOptions`, `$closeOptions` |
| Toaster | `$closeOptions` |

For example, replace a Stimulus Toast's shared `params` value with separate fixed options for its show and close operations:

::: code-group
```html [winduum-stimulus v3]
<li
    class="x-toast"
    data-controller="x-toast"
    data-action="x-toast:connect->x-toast#show"
    data-x-toast-params-value='{"autoHide":null,"remove":false}'
>
    <!-- Toast content -->
</li>
```

```js [winduum-elements]
import { Toast } from 'winduum-elements/components/toast/index.js'

class ProjectToast extends Toast {
    $showOptions = {
        autoHide: null,
    }

    $closeOptions = {
        remove: false,
    }
}

customElements.define('x-toast', ProjectToast)
```
:::

Use the same subclass pattern for the other fixed option properties in the table. Preserve the component's normal registration form, including `{ extends: 'form' }` or another native base element for customized built-ins. Split shared Stimulus params between the operation-specific Elements properties according to which Winduum core function consumes each option, and follow the current component documentation for the supported options.

## 10. Replace Winduum Stimulus utilities deliberately

`winduum-elements` does not export replacements for the Stimulus `Invoke`, `Ripple` and `Swap` utility controllers.

- Replace Invoke usages with `command` and `commandfor` when they call an element method. Native commands such as `show-modal`, `request-close` and `toggle-popover` do not start with `--`; custom element methods such as `--toggle` and `--close` do.
- Button includes its own ripple listener. For a standalone ripple outside Button, call `showRipple` from `winduum/src/utilities/ripple/index.js`; existing application-specific Stimulus wiring can remain only during the transition.
- For Swap, call `toggleSwap` from `winduum/src/utilities/swap/index.js` from application code, or keep the existing Stimulus controller temporarily.
- `InvokeFetch` has no Elements equivalent. Migrate its fetch logic to application code before removing the controller.

Stimulus and Custom Elements can coexist on the same page during an incremental rollout. To finish removing Stimulus, migrate application-specific controllers with the [Stimulus to Webuum migration guide](https://webuum.dev/docs/migrations/stimulus).

## 11. Add the customized built-in fallback

The Invoker Commands fallback should already be configured after the `winduum-stimulus` v3 migration. Elements additionally uses customized built-ins for Button, Details, Drawer, Form and some Image variants.

Install the opt-in fallbacks required by the project's browser support matrix:

```shell
npm install invokers-polyfill @webreflection/custom-elements-builtin
```

Load them before defining the elements:

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

Keep the existing `interestfor` fallback when the project uses hover Popovers or tooltips. See the [Polyfills documentation](/docs/polyfills) for the complete setup.

## 12. Remove the migrated controllers and dependencies

Search for remaining Winduum Stimulus wiring:

```text
winduum-stimulus/
application.register('x-
data-controller="x-
data-x-*-target
data-x-*-*-value
->x-
data-controller="invoke"
data-invoke-action
data-invoke-target
```

Do not remove unrelated `data-controller` or `data-action` attributes owned by application controllers while migrating the Winduum integration. Migrate those separately rather than deleting their wiring mechanically.

After every Winduum component is migrated and tested, remove the old integration:

```shell
npm uninstall winduum-stimulus
```

If application-specific Stimulus controllers remain, follow the [Stimulus to Webuum migration guide](https://webuum.dev/docs/migrations/stimulus). Once the application has no remaining controllers or integrations that require Stimulus, remove its runtime dependency:

```shell
npm uninstall @hotwired/stimulus
```

Finally test:

- Customized Button, Details, Drawer and Form behavior in every supported browser.
- Drawer commands, placement, modal and non-modal modes, light dismiss and swipe dismissal.
- Popover commands, `interestfor` and Floating UI fallback positioning.
- Form submit validation, Field change validation and Control state.
- Range, Tabs, Compare and Carousel without duplicate event handling.
- Toast auto-hide, close, removal and Toaster open/close behavior.
- Pages inserted dynamically after the initial load; registered Custom Elements upgrade automatically.

Finish by comparing each migrated template with the current `winduum-elements` example linked from its component documentation.
