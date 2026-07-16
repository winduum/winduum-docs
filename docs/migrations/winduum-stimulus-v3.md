---
description: "Migration guide for upgrading winduum-stimulus projects from v2 to v3."
---

# Migrate to winduum-stimulus v3

Complete the [Winduum v3 migration](/migrations/winduum-v3) first, then update the Stimulus controllers and data attributes below.

## 1. Update and register controllers explicitly

```shell
npm install winduum@next winduum-stimulus@next
```

Keep only controllers used by the project. Standard Dialog and Details behavior is native in Winduum 3, so those elements no longer need Stimulus controllers. Register the current Details controller only when using the optional checkbox synchronization pattern.

## 2. Migrate Carousel targets and actions

Update Carousel code to the v3 scrolling API: `scrollBy`, `toggleScrollState`, `setSnappedAttribute` and `scrollToMarker`. Replace the old pagination, counter and progress wiring with marker-group and marker elements, and use the vertical value for vertical carousels.

Start from the [Carousel examples](/docs/components/carousel#examples) so controller targets and the core v3 markup stay aligned.

## 3. Migrate Drawer values

Replace the previous Drawer dialog value with the boolean `modal` value. Update markup to use the v3 dialog, scroller and content structure, and pass placement through the current placement value.

Use the [Drawer examples](/docs/components/drawer#examples) to update the target names and Invoker Command markup together.

## 4. Migrate Popover values

Popover now wraps the native Popover API. Use `placement` for the Position utility and `autoUpdate` only when the Floating UI fallback needs to track the anchor. Opening and closing should use native commands rather than Stimulus actions.

See [Popover examples](/docs/components/popover#examples) for the v3 data attributes and markup.

## 5. Split Form and Field validation

The Form controller now validates on submit. Register the new Field controller for per-field change validation.

```js
import { Form } from 'winduum-stimulus/components/form/index.js'
import { Field } from 'winduum-stimulus/components/field/index.js'

application.register('x-form', Form)
application.register('x-field', Field)
```

## 6. Check the smaller controller changes

- Control toggles `data-active` on change.
- Button starts its ripple automatically on click.
- Toaster uses `toasterObserver`.
- Range no longer calls `setTrackProperty`; `setValue` handles it internally.

After the migration, test Dialog, Drawer and Popover with keyboard input, then test the fallback bundle in the oldest browser version supported by the project.
