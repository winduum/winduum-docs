---
description: "Marquee creates an infinite horizontal loop for logos, partners or other repeated items. It is CSS-only and positions each child on the same motion path…"
---

# Marquee

Marquee creates an infinite horizontal loop for logos, partners or other repeated items. It is CSS-only and positions each child on the same motion path using sibling count and sibling index variables.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/marquee/default.html" style="height: 8rem; margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/marquee" />

## Installation
Follow instructions for individual framework usage below.

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/marquee" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/tree/main/src/components/marquee" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/tree/main/src/components/marquee" />

::: info Browser support
Item positioning uses [`sibling-index()`](https://developer.mozilla.org/en-US/docs/Web/CSS/sibling-index) — in browsers without support,
set the `--x-marquee-sibling-index` prop on each item as a fallback (see [Props](#props)).
:::

## Styles

### Variants
* <LinkGh name="default" path="components/marquee" />

### Props
* `--x-marquee-sibling-count` - total number of marquee items
* `--x-marquee-visible-count` - number of visible items used for spacing along the path
* `--x-marquee-inline-size` - inline size of each marquee item
* `--x-marquee-gap` - gap between marquee items
* `--x-marquee-animation-duration` - animation duration, defaults to `30s`
* `--x-marquee-animation-timing-function` - animation timing function, defaults to `linear`
* `--x-marquee-sibling-index` - item index, required as a fallback for browsers without `sibling-index()`

## Examples

### Default

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/marquee/default.html" style="height: 8rem"></iframe>

::: code-group
<<< @/public/examples/components/marquee/default.html#body{} [winduum]
```vue [winduum-vue]
<script setup lang="ts">
    import { Marquee } from '@/components/marquee'

    const partners = [
        '777777',
        '777777',
        '888888',
        '333333',
        '333333',
        '111111',
        '444444',
        '444444',
        '888888',
        '222222'
    ]
</script>

<template>
    <Marquee
        class="flex gap-(--x-marquee-gap) overflow-clip group *:group-has-focus-within:[animation-play-state:paused]"
        :style="{
            '--x-marquee-sibling-count': partners.length,
            '--x-marquee-visible-count': 9,
            '--x-marquee-inline-size': 'calc(var(--spacing) * 50)',
            '--x-marquee-gap': 'calc(var(--spacing) * 6)'
        }"
    >
        <a
            v-for="(color, index) in partners"
            href="#"
            class="w-(--x-marquee-inline-size) h-14 shrink-0 outline-2 outline-transparent outline-dashed rounded-lg focus-visible:outline-accent"
            :aria-hidden="index > 3 ? 'true' : undefined"
            :tabindex="index > 3 ? -1 : undefined"
            :style="{ '--x-marquee-sibling-index': index + 1 }"
        >
            <img class="size-full object-contain" :src="`https://placehold.co/200x56/${color}/webp`" :alt="`Partner ${index + 1}`" width="200" height="56" loading="lazy">
        </a>
    </Marquee>
</template>
```
```jsx [winduum-react]
import type { CSSProperties } from 'react'
import { Marquee } from '@/components/marquee'

const partners = [
    '777777',
    '777777',
    '888888',
    '333333',
    '333333',
    '111111',
    '444444',
    '444444',
    '888888',
    '222222'
]

const marqueeStyle = {
    '--x-marquee-sibling-count': partners.length,
    '--x-marquee-visible-count': 9,
    '--x-marquee-inline-size': 'calc(var(--spacing) * 50)',
    '--x-marquee-gap': 'calc(var(--spacing) * 6)'
} as CSSProperties

export function Example() {
    return (
        <Marquee className="flex gap-(--x-marquee-gap) overflow-clip group *:group-has-focus-within:[animation-play-state:paused]" style={marqueeStyle}>
            {partners.map((color, index) => (
                <a
                    key={index}
                    href="#"
                    className="w-(--x-marquee-inline-size) h-14 shrink-0 outline-2 outline-transparent outline-dashed rounded-lg focus-visible:outline-accent"
                    aria-hidden={index > 3 ? true : undefined}
                    tabIndex={index > 3 ? -1 : undefined}
                    style={{ '--x-marquee-sibling-index': index + 1 } as CSSProperties}
                >
                    <img className="size-full object-contain" src={`https://placehold.co/200x56/${color}/webp`} alt={`Partner ${index + 1}`} width="200" height="56" loading="lazy" />
                </a>
            ))}
        </Marquee>
    )
}
```
:::

### Reverse

Use TailwindCSS arbitrary child variant `*:[animation-direction:reverse]` to move the loop in the opposite direction.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/marquee/reverse.html" style="height: 8rem"></iframe>

<<< @/public/examples/components/marquee/reverse.html#body{} [winduum]

## Accessibility

Keep only the real set of links focusable. If extra duplicated items are present only to make the loop feel continuous, add `aria-hidden="true"` and `tabindex="-1"` to those duplicates.

Pause the animation when focus moves inside the marquee so keyboard users can interact with links without the focused item moving away. The examples use `*:group-has-focus-within:[animation-play-state:paused]` on the marquee wrapper.
