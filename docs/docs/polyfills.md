---
description: "Install the optional polyfill dependencies and add the Webuum and Winduum polyfill entry points to cover unsupported browser features."
---

# Polyfills

Winduum builds on modern web platform features that are not supported in every browser yet. The recommended setup is to add the provided polyfill entry points once to your project.

## Setup

Install Webuum and the optional polyfill dependencies:

```shell
npm install webuum invokers-polyfill interestfor @webreflection/custom-elements-builtin
```

Then add both imports to your application's JavaScript entry point:

```js
import 'webuum/polyfill'
import 'winduum/polyfill'
```

That's all. Webuum and Winduum detect browser support and load only the polyfills that the current browser needs. You do not need to run the support checks yourself.

## Advanced loading

The entry points above are recommended for most projects. Use the individual support checks below only when you need more control over which fallbacks are loaded. See the [Webuum polyfills docs](https://webuum.dev/docs/polyfills.html) for more details about its features.

### Winduum support checks

Winduum exposes support checks from `winduum/supports`. Use them before loading a polyfill.

```js
import { supportsInterestFor, supportsTimelineTrigger } from 'winduum/supports'

if (!supportsInterestFor) {
    await import('interestfor/src/interestfor.js')
}

if (!supportsTimelineTrigger) {
    await import('winduum/src/polyfills/timelineTrigger.js')
}
```

### Invoker Commands

Dialog, Drawer and Popover controls use native Invoker Commands. This includes the `winduum-stimulus` Drawer and Popover controllers. Load the polyfill when the button command API is unavailable:

```js
if (!('command' in HTMLButtonElement.prototype)) {
    const { apply } = await import('invokers-polyfill/fn')
    apply()
}
```

### Interest Invokers

The `interestfor` API lets controls declaratively show interest in another element. Winduum uses `supportsInterestFor` to detect native support and can fall back to the [`interestfor`](https://www.npmjs.com/package/interestfor) polyfill.

### Timeline Trigger

The `timeline-trigger` feature is used by Winduum animation trigger utilities. Winduum includes an experimental `timelineTrigger` polyfill that observes elements with `timeline-trigger-*` classes and toggles `data-enter` based on the configured entry and exit thresholds.

### Other support checks

`winduum/supports` also exposes checks without a bundled polyfill — useful for your own fallbacks:

* `supportsAnchor` — CSS Anchor Positioning
* `supportsAnchoredContainer` — anchored container queries
* `supportsAnimationTimeline` — CSS [`animation-timeline`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline) scroll-driven animations
* `supportsScrollInitialTarget` — CSS [`scroll-initial-target`](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-initial-target), used internally by the [Drawer](/docs/components/drawer) helpers
* `supportsScrollSnapEvents` — CSS Scroll Snap change events

### Winduum Elements

`winduum-elements` builds on top of Webuum. The recommended setup above already covers both libraries. For a fully manual setup, use both sets of support checks:

```js
import { supportsCommand, supportsIs } from 'webuum/supports'
import { supportsInterestFor, supportsTimelineTrigger } from 'winduum/supports'

if (!supportsCommand) {
    const { apply } = await import('invokers-polyfill/fn')
    apply()
}

if (!supportsIs()) {
    await import('@webreflection/custom-elements-builtin')
}

if (!supportsInterestFor) {
    await import('interestfor/src/interestfor.js')
}

if (!supportsTimelineTrigger) {
    await import('winduum/src/polyfills/timelineTrigger.js')
}
```

The Webuum checks cover the Command API and customized built-in elements. The Winduum checks cover Interest Invokers and the timeline trigger polyfill.
