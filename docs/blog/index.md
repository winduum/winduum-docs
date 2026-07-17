---
description: "Winduum 3 moves component behavior closer to the browser with Winduum Elements, native platform APIs, less JavaScript, new Tailwind CSS utilities, and opt-in fallbacks."
---

# Announcing Winduum 3

Winduum 3 is a native-first release focused on one goal: use more of the browser and ship less JavaScript.

The web platform can now handle much of the behavior that component libraries used to recreate themselves. Dialogs can be opened with [Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API), popovers can live in the [top layer](https://developer.mozilla.org/en-US/docs/Glossary/Top_layer) through the [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) and anchor themselves with [CSS Anchor Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning), accordions can be exclusive through the native [`name` attribute on `<details>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details#name), and [CSS Scroll Snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap) can drive carousels and drawers. Winduum 3 adopts those capabilities directly and adds only the small enhancement layer that is still useful.

The result is a leaner core, simpler markup and components that preserve useful behavior even before JavaScript loads — or when it does not load at all.

::: tip Upgrading from Winduum 2?
Start with the [Winduum v3 migration guide](/migrations/winduum-v3). Projects using the Stimulus integration should then follow the [winduum-stimulus v3 migration guide](/migrations/winduum-stimulus-v3). After both migrations work, projects replacing Stimulus with Winduum Elements can continue with the [winduum-elements migration guide](/migrations/winduum-elements-v3).
:::

## Winduum Elements, Built on Webuum

The main addition in this release is [winduum-elements](https://github.com/winduum/winduum-elements): a set of ready-to-use [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements) for Winduum components.

Winduum Elements is built on [Webuum](https://webuum.dev/), a tiny framework for progressively enhancing server-rendered websites with native Custom Elements. Webuum has no virtual DOM, hydration layer, router or application runtime. It keeps component behavior close to the HTML and relies on browser APIs wherever the platform already has an answer.

Read the [Webuum v0.x announcement](https://webuum.dev/blog/webuum-0.x.html) for the ideas behind that foundation.

Install the next release and register only the elements your project needs:

```shell
npm install winduum@next winduum-elements@next
```

```js
import { Drawer } from 'winduum-elements/components/drawer/index.js'
import { Popover } from 'winduum-elements/components/popover/index.js'

customElements.define('x-drawer', Drawer, { extends: 'dialog' })
customElements.define('x-popover', Popover)
```

This gives server-rendered projects a frameworkless default integration while keeping [winduum-stimulus](https://github.com/winduum/winduum-stimulus), [winduum-vue](https://github.com/winduum/winduum-vue) and [winduum-react](https://github.com/winduum/winduum-react) available for projects that already use those stacks.

## The Browser Is the Component Runtime

Winduum 3 replaces custom behavior with native HTML and CSS wherever possible.

| Component | Native foundation | JavaScript in Winduum 3 |
| --- | --- | --- |
| [Dialog](/docs/components/dialog) | [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog), [Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API), [`closedby`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#closedby) | No controller or custom open/close API; only an optional compatibility side effect |
| [Details](/docs/components/details) | [`<details>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details), `<summary>`, [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details#name), CSS transitions | None for standard details and accordions; an optional helper syncs the checkbox variant |
| [Popover](/docs/components/popover) | [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API), [Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API), [CSS Anchor Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning), [`interestfor`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/interestfor) | None in modern browsers; a small positioning fallback is available |
| [Drawer](/docs/components/drawer) | [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog), [scroll snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap), [scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations), observers | Reduced to the enhancement layer for snap state, swipe dismissal and fallbacks |
| [Marquee](/docs/components/marquee) | [CSS motion path](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_motion_path), [`sibling-index()`](https://developer.mozilla.org/en-US/docs/Web/CSS/sibling-index) and animations | None |

### Dialog Without a JavaScript Controller

The [Dialog component](/docs/components/dialog) no longer needs its old `showDialog`, `closeDialog` and `defaultOptions` APIs. A button now opens and closes the native [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) declaratively with [Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) (`command` and `commandfor`), while [`closedby`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#closedby) controls light dismiss.

<iframe title="Native Winduum dialog example" onload="this.style.visibility = 'visible';" src="/examples/components/dialog/basic.html"></iframe>

<<< @/public/examples/components/dialog/basic.html#body{} [html]

For programmatic control, use the native [`HTMLDialogElement.showModal()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal) and [`HTMLDialogElement.close()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/close) methods. The optional side-effect script only fills gaps for browsers without [`closedby`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#closedby) support and keeps the scrollbar-width CSS property up to date. See the complete [Dialog documentation](/docs/components/dialog).

### Details and Accordions in Native HTML

The [Details component](/docs/components/details) no longer uses `showDetails`, `closeDetails` or their JavaScript animation options. Open and close transitions are now handled in CSS, while exclusive accordions use the native [`name` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details#name) on related [`<details>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details) elements.

<iframe title="Native Winduum details example" onload="this.style.visibility = 'visible';" src="/examples/components/details/default.html"></iframe>

<<< @/public/examples/components/details/default.html#body{} [html]

Standard details and accordion patterns need no JavaScript. The synchronous `toggleDetails` helper remains only for the optional pattern that keeps a checkbox inside `<summary>` in sync with the `open` state. See the complete [Details documentation](/docs/components/details).

### Popover and Anchor Positioning

The [Popover component](/docs/components/popover) has been rewritten around the native [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API), [Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) and [CSS Anchor Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning). The browser owns [top-layer](https://developer.mozilla.org/en-US/docs/Glossary/Top_layer) placement, light dismiss, Escape handling and the open state.

<iframe title="Native Winduum popover example" onload="this.style.visibility = 'visible';" src="/examples/components/popover/basic.html"></iframe>

<<< @/public/examples/components/popover/basic.html#body{} [html]

The old `showPopover`, `hidePopover`, `togglePopover` and `computePopover` helpers are no longer part of the Winduum API — [`showPopover()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/showPopover), [`hidePopover()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidePopover) and [`togglePopover()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/togglePopover) now belong to the native platform. `computePositionPopover` and `autoUpdatePopover` remain as focused Floating UI fallbacks for browsers without [CSS Anchor Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning).

The former Tooltip component is deprecated in favor of the [`x-popover tooltip` variant](/docs/components/popover#tooltip-popover). Its directional variants now use the explicit `tooltip-top`, `tooltip-bottom`, `tooltip-left` and `tooltip-right` names. See the complete [Popover documentation](/docs/components/popover).

### A Much Smaller Drawer Layer

The [Drawer component](/docs/components/drawer) still supports touch-driven dismissal, but the browser now does most of the work. The component uses native [CSS Scroll Snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap) for open and closed positions, a [scroll-driven animation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations) for the backdrop and an [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) for settled state. This follows the same platform-first principles described in the Chrome team's [navigation drawer guidance](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/overlays/navigation-drawer.md): the user's finger controls the native scroller instead of a JavaScript `transform` tween.

<iframe title="Winduum drawer without JavaScript example" onload="this.style.visibility = 'visible';" src="/examples/components/drawer/noscript.html" style="height: 420px"></iframe>

::: code-group
<<< @/public/examples/components/drawer/noscript.html#body{} [winduum-elements]
<<< @/../examples-vue/src/pages/components/drawer/noscript.vue [winduum-vue]
<<< @/../examples-react/src/pages/components/drawer/noscript.tsx [winduum-react]
:::

The v3 rewrite adds placement-based helpers, modal and non-modal patterns, a responsive dialog variant and two CSS-first fallbacks:

- `noscript` keeps an animated drawer usable when JavaScript is disabled.
- `nosnap` removes the scroll-snap behavior and works without JavaScript.
- `dialog` changes from a bottom drawer to a centered dialog at a container breakpoint.
- `left`, `right`, `top` and `bottom` placements share the same API.

See the complete [Drawer documentation](/docs/components/drawer), including every placement and the `dialog`, `noscript` and `nosnap` examples.

### CSS-only Marquee

The new [Marquee component](/docs/components/marquee) creates an infinite loop with a [CSS motion path](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_motion_path), [`sibling-count()`](https://developer.mozilla.org/en-US/docs/Web/CSS/sibling-count) and [`sibling-index()`](https://developer.mozilla.org/en-US/docs/Web/CSS/sibling-index). It has no JavaScript runtime and pauses when keyboard focus moves inside the component.

<iframe title="CSS-only Winduum marquee example" onload="this.style.visibility = 'visible';" src="/examples/components/marquee/default.html" style="height: 8rem"></iframe>

The `--x-marquee-sibling-index` and `--x-marquee-sibling-count` properties provide a declarative fallback until `sibling-index()` and `sibling-count()` are available in every target browser. See the [Marquee docs](/docs/components/marquee) for the complete HTML, Vue and React examples.

## Native-first Components Beyond the Headliners

The same direction continues across the rest of the library.

### Experimental Carousel

The goal of [Carousel Experimental](/docs/components/carousel-experimental) was to mirror the [CSS Overflow Module Level 5](https://www.w3.org/TR/css-overflow-5/) carousel API in JavaScript. Scroll buttons, markers and the active snap target would use ordinary elements, making patterns such as Chrome's [Horizontal List](https://chrome.dev/carousel/horizontal/list/) available without relying on the still-unsupported `::scroll-button()` and `::scroll-marker` pseudo-elements.

That compatibility layer is not ready yet because the required Scroll Snap behavior is not consistent across browsers. The [`scrollsnapchange` event](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollsnapchange_event) is still unavailable in Firefox and Safari, while Safari's [`scrollBy()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollBy) can fail in combination with scroll snapping ([WebKit #270064](https://www2.webkit.org/show_bug.cgi?id=270064), [WebKit #316084](https://www2.webkit.org/show_bug.cgi?id=316084)). The component therefore remains experimental; use the stable [Carousel](/docs/components/carousel) when broad browser support is required.

### Integrations and Component APIs

- `winduum-vue` and `winduum-react` have been updated for Winduum 3 and now include the previously missing components, including the interactive components.
- `winduum-stimulus` v3 adopts the same Winduum 3 markup and APIs for projects that want to stay on Stimulus.
- [Text](/docs/components/text) is split into the small base `x-text` component and the `x-text content` variant for rich CMS or WYSIWYG output.
- [Form](/docs/components/form) now imports `validateField` from the standalone Field module. The default selector is `.x-field`, `validateSelectors` is renamed to `validateSelector`, and validation options are smaller.
- [Toast](/docs/components/toast) auto-hides after 7.5 seconds by default and removes its element after the exit transition. The new `toasterObserver` opens and closes a [Toaster](/docs/components/toaster) popover as its contents change.
- `tel-country-code` adds styles for country-code select controls.
- Typography, headings, labels, selects, the container width and responsive container padding have updated defaults.

## Tailwind CSS Utilities That Match the Platform

Several utilities and variants first shipped experimentally between Winduum `2.2.20` and `2.2.28`. Winduum 3 makes them part of the documented workflow. Together they answer the question posed in [Do you still need Framer Motion?](https://motion.dev/magazine/do-you-still-need-framer-motion) in a deliberately pragmatic way: start with CSS when the browser already owns the interaction or timeline, then add JavaScript only when the effect needs runtime physics, gesture data or orchestration.

The documented workflow now includes:

- [Link](/docs/utilities/link) utilities and [Interest](/docs/variants/interest) variants.
- New `ease-anticipate`, `ease-spring` and `ease-emphasized` easing curves.
- [Grid area](/docs/utilities/grid#grid-area) utilities.
- [Animation Timeline and Animation Trigger](/docs/utilities/animation) utilities with composable `enter` / `exit` keyframes and the `animation-trigger-enter` fallback.
- [Scroll State](/docs/variants/scroll-state) variants.
- The experimental [`timelineTrigger` polyfill](/docs/polyfills#timeline-trigger) and `supportsInterestFor` feature check.
- [Position](/docs/utilities/position) utilities.

### Expressive easing without a runtime

Winduum now includes three easing tokens beyond the familiar `ease-in`, `ease-out` and `ease-in-out` curves:

- `ease-anticipate` briefly moves against the expected direction before accelerating forward.
- `ease-spring` uses the CSS [`linear()` easing function](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/linear) to encode a sampled spring-like curve.
- `ease-emphasized` accelerates quickly and settles smoothly. It is also the default timing function for `animation-trigger-enter`.

Tailwind CSS `ease-*` utilities apply the curve directly to `transition-timing-function` and expose it through `--tw-ease`. Keyframe and scroll-driven animations can reuse the same token, but must connect it to `animation-timing-function` explicitly:

::: code-group
```html [Spring]
<button class="transition-transform duration-700 ease-spring hover:scale-110">
    Add to cart
</button>
```

```html [Anticipate]
<div class="transition-transform duration-500 ease-anticipate hover:-translate-y-2">
    Hover me
</div>
```

```html [Emphasized]
<div
    class="animation animation-[enter] from-translate-y-4 ease-emphasized
           [animation-timing-function:var(--tw-ease)]"
>
    Content
</div>
```
:::

`ease-spring` is intentionally a predefined curve, not a physics engine. It cannot inherit the release velocity of a drag gesture, change its duration from spring parameters or preserve velocity when interrupted. Motion still makes sense for those cases; CSS is the smaller option when a consistent spring-like transition is enough.

### Scroll-linked animation with `animation-timeline`

[CSS scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations) replace the usual scroll listener and per-frame progress calculation with a browser-owned timeline. Winduum exposes both kinds through its [Animation Timeline utilities](/docs/utilities/animation#animation-timeline):

- `animation-timeline-scroll`, `-x` and `-y` use `scroll()` so animation progress follows a scroll container.
- `animation-timeline-view` uses `view()` so progress follows an element as it passes through the viewport.
- `animation-range-*` limits the part of that timeline in which the animation runs.
- Named `scroll-timeline-*`, `view-timeline-*` and `timeline-scope-*` utilities connect a timeline to an animation elsewhere in the component.

::: info Approaching Baseline
Scroll-linked animations are close to becoming Baseline across the major browser engines. The current [`scroll-timeline` support table](https://caniuse.com/mdn-css_properties_scroll-timeline) lists Firefox 155 as its first supported release, joining the existing Chromium and Safari implementations.
:::

::: code-group
```html [View progress]
<article
    class="animation animation-[enter] from-translate-y-8
           animation-timeline-view animation-range-[entry_0%_cover_40%]"
>
    Content reveals as it enters the viewport.
</article>
```

```html [Scroller progress]
<div class="scroll-timeline-x-[--gallery] overflow-x-auto">
    <ul class="flex w-max">...</ul>

    <div
        class="animation animation-[enter] from-scale-75 origin-left
               animation-timeline-[--gallery]"
    ></div>
</div>
```
:::

This is **scroll-linked** motion: its progress continuously follows scroll position. For `transform` and `opacity`, the browser can keep the animation on its optimized rendering path, while the markup still exposes the underlying [`animation-timeline`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline) model.

### Scroll-triggered animation with `animation-trigger`

Scroll-triggered motion is different: a normal time-based animation should start once when an element reaches a threshold. Winduum targets the emerging [`animation-trigger` and `timeline-trigger` properties](https://developer.chrome.com/blog/animation-trigger) for that job.

The `animation-trigger-enter` utility selects the composable `enter` keyframes, while `from-*` and `to-*` classes define their opacity, translation, scale and rotation. `timeline-trigger-enter` supplies a view trigger with a default `20%` entry threshold and a `play-once` action:

```html
<h2
    class="animation-trigger-enter from-translate-y-4 timeline-trigger-enter
           [--tw-animation-duration:1s] [--tw-timeline-trigger-entry:30%]"
>
    Our key partners
</h2>
```

The default duration is `1.75s`, the default easing is `ease-emphasized`, and the animation uses `fill-mode: both`. Winduum disables it for `prefers-reduced-motion` and print automatically.

The properties are still experimental, so the native path is progressive enhancement rather than a hard dependency. In a browser without `timeline-trigger`, Winduum's fallback keeps `animation-trigger-enter` paused until a `data-enter` state is present. The opt-in [`timelineTrigger` polyfill](/docs/polyfills#timeline-trigger) supplies that state with `IntersectionObserver`; supported browsers need no observer or trigger JavaScript at all. See the complete [Animation Trigger documentation](/docs/utilities/animation#animation-trigger).

### Scroll state as a CSS variant

[Scroll-state container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) let the browser expose state that previously required scroll listeners, measurements and classes toggled from JavaScript. After setting `container-type: scroll-state`, Winduum's [Scroll State variants](/docs/variants/scroll-state) can react to four groups:

- `scrollable-*` shows whether more content is available in a direction — useful for edge fades and navigation controls.
- `scrolled-*` shows whether the container has moved away from an edge — useful for separators and scroll affordances.
- `snapped-*` identifies the currently snapped item — useful for native carousels and galleries.
- `stuck-*` identifies when a sticky element is actually stuck — useful for changing a header's shadow or size only after it reaches an edge.

::: code-group
```html [Sticky header]
<header class="sticky top-0 [container-type:scroll-state]">
    <nav class="stuck-top:shadow-md">
        Navigation
    </nav>
</header>
```

```html [Scroll affordance]
<div class="relative overflow-x-auto [container-type:scroll-state]">
    <ul class="flex w-max">...</ul>
    <span class="hidden scrollable-right:block">More content →</span>
</div>
```

```html [Snapped item]
<ul class="flex overflow-x-auto snap-x snap-mandatory">
    <li class="snap-center [container-type:scroll-state]">
        <img class="scale-75 transition-transform snapped-x:scale-100" src="image.jpg" alt="">
    </li>
</ul>
```
:::

Unsupported browsers ignore the conditional styles, so the content and native scrolling remain usable. The variants are best used for visual enhancement rather than as the only way to expose essential state.

### Interaction, positioning and layout primitives

The rest of this group follows the same rule: expose what the browser already knows instead of rebuilding it in a component script.

- [Link](/docs/utilities/link) scopes hover and focus transitions to real interactive elements using [`:any-link`](https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link), enabled buttons and button roles.
- [Interest](/docs/variants/interest) turns the declarative `interestfor` relationship into `interest-source:` and `interest-target:` variants for tooltips and hover cards, with an optional fallback selected by `supportsInterestFor`.
- [Position](/docs/utilities/position) composes [CSS Anchor Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning), `position-area` and fallback flipping for popovers instead of recalculating coordinates on every layout change.
- [Grid area](/docs/utilities/grid#grid-area) makes named or overlapping grid areas composable, including `grid-area-full` for stacking content without absolute positioning.

::: code-group
```html [Interest popover]
<button interestfor="tooltip" class="interest-source:text-accent">
    Show tooltip
</button>

<div id="tooltip" popover="hint" class="opacity-0 interest-target:opacity-100">
    Tooltip content
</div>
```

```html [Anchored position]
<button popovertarget="menu" class="[anchor-name:--menu]">Open menu</button>

<div id="menu" popover class="bottom-start [position-anchor:--menu]">
    Menu content
</div>
```

```html [Grid area]
<figure class="grid">
    <img class="grid-area-full" src="image.jpg" alt="">
    <figcaption class="grid-area-full self-end">Caption</figcaption>
</figure>
```
:::

The deprecated `--radius` token now resolves to the base `xs` radius (`0.125rem`) instead of `--radius-xl`. Use the named, calculated radius variables in new code.

## Progressive Enhancement, Including the Fallbacks

Adopting new browser APIs does not mean shipping every polyfill to every browser. Winduum 3 adds a `winduum/polyfill` entry point and individual support checks so fallbacks can be loaded only where they are needed.

```js
import {
    supportsAnimationTimeline,
    supportsInterestFor,
    supportsScrollInitialTarget,
    supportsScrollSnapEvents,
    supportsTimelineTrigger,
} from 'winduum/supports'

if (!supportsInterestFor) {
    await import('interestfor/src/interestfor.js')
}

if (!supportsTimelineTrigger) {
    await import('winduum/src/polyfills/timelineTrigger.js')
}
```

Winduum Elements also exposes Webuum's feature checks for [Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) and [customized built-in elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#customized_built-in_elements):

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

The remaining checks — including animation timelines, scroll initial targets, scroll-snap events, anchor positioning and anchored containers — make it possible to choose a project-specific fallback rather than paying for a global compatibility layer. See the [Polyfills documentation](/docs/polyfills) for the recommended setup.

## Migrating to Winduum 3

Winduum 3 removes and renames JavaScript APIs, changes some component markup and updates several defaults. Existing projects should treat it as a deliberate migration rather than a dependency-only upgrade.

- Follow the [Winduum v3 migration guide](/migrations/winduum-v3) for core styles, component markup, native APIs, Tailwind CSS utilities and renamed options.
- Follow the [winduum-stimulus v3 migration guide](/migrations/winduum-stimulus-v3) when upgrading Stimulus controllers alongside the core package.
- Follow the [winduum-elements migration guide](/migrations/winduum-elements-v3) only after both previous migrations are complete when replacing the migrated Stimulus integration with Custom Elements.
- Review the full [Winduum changelog](https://github.com/winduum/winduum/blob/next/CHANGELOG.md) for the release-by-release details.

Winduum 3 is not a rewrite of what a component library looks like. It is a rewrite of who should own the behavior. Whenever the browser can provide the semantics, focus handling, top layer, scrolling or animation, Winduum now lets the browser do it — and keeps its own JavaScript focused on progressive enhancement.
