# Polyfills

Winduum builds on modern web platform features. Some of them are still experimental or not supported in every browser, so polyfills are opt-in and can be lazy-loaded only when feature detection says they are needed.

## Install

Install only the polyfills you actually need for your project.

```shell
npm install interestfor
```

If you use `winduum-elements`, also add the Webuum polyfills used by those elements:

```shell
npm install invokers-polyfill @webreflection/custom-elements-builtin
```

See the [Webuum polyfills docs](https://webuum.dev/docs/polyfills.html) for more details about these Webuum features.

## Winduum

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

### Interest Invokers

The `interestfor` API lets controls declaratively show interest in another element. Winduum uses `supportsInterestFor` to detect native support and can fall back to the [`interestfor`](https://www.npmjs.com/package/interestfor) polyfill.

### Timeline Trigger

The `timeline-trigger` feature is used by Winduum animation trigger utilities. Winduum includes an experimental `timelineTrigger` polyfill that observes elements with `timeline-trigger-*` classes and toggles `data-enter` based on the configured entry and exit thresholds.

### Other support checks

`winduum/supports` also exposes checks without a bundled polyfill — useful for your own fallbacks:

* `supportsAnimationTimeline` — CSS [`animation-timeline`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline) scroll-driven animations
* `supportsScrollInitialTarget` — CSS [`scroll-initial-target`](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-initial-target), used internally by the [Drawer](/docs/components/drawer) helpers

## Winduum Elements

`winduum-elements` builds on top of Webuum, so projects using it need to include Webuum polyfills too when targeting browsers without support for those APIs.

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
