---
description: "Accessible tabs to switch between panels of content."
---

# Tabs
Accessible tabs to switch between panels of content.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/tabs/default.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/tabs" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/tabs" />
* <LinkGh name="winduum-elements" url="https://github.com/winduum/winduum-elements/tree/main/components/tabs" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/tree/main/components/tabs" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/tabs" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/tabs" />

## Styles

### Variants
* <LinkGh name="list" path="components/tabs" />

## Scripts
The Tabs script switches active panels and keeps tab ARIA state in sync.

## Examples

### Default

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/tabs/default.html"></iframe>

::: code-group
<<< @/public/examples/components/tabs/default.html#body{} [winduum-elements]
```html [winduum-stimulus]
<div data-controller="x-tabs">
    <div class="x-tabs-list accent-main" role="tablist">
        <button class="x-button ghosted aria-selected:[--x-button-background-color-opacity:100%] aria-selected:[--x-button-color:var(--color-accent-foreground)]" role="tab" aria-controls="tab-all" id="all" aria-selected="true" data-x-tabs-target="tab" data-action="click->x-tabs#toggle">
            All
        </button>
        <button class="x-button ghosted aria-selected:[--x-button-background-color-opacity:100%] aria-selected:[--x-button-color:var(--color-accent-foreground)]" role="tab" aria-controls="tab-photos" id="photos" data-x-tabs-target="tab" data-action="click->x-tabs#toggle">
            Photos
        </button>
        <button class="x-button ghosted aria-selected:[--x-button-background-color-opacity:100%] aria-selected:[--x-button-color:var(--color-accent-foreground)]" role="tab" aria-controls="tab-music" id="music" data-x-tabs-target="tab" data-action="click->x-tabs#toggle">
            Music
        </button>
        <button class="x-button ghosted aria-selected:[--x-button-background-color-opacity:100%] aria-selected:[--x-button-color:var(--color-accent-foreground)]" role="tab" aria-controls="tab-documents" id="documents" data-x-tabs-target="tab" data-action="click->x-tabs#toggle">
            Documents
        </button>
    </div>
    <div class="aria-hidden:hidden" role="tabpanel" aria-hidden="false" id="tab-all" aria-labelledby="all" data-x-tabs-target="tabpanel">
        All
    </div>
    <div class="aria-hidden:hidden" role="tabpanel" aria-hidden="true" id="tab-photos" aria-labelledby="photos" data-x-tabs-target="tabpanel">
        Photos
    </div>
    <div class="aria-hidden:hidden" role="tabpanel" aria-hidden="true" id="tab-music" aria-labelledby="music" data-x-tabs-target="tabpanel">
        Music
    </div>
    <div class="aria-hidden:hidden" role="tabpanel" aria-hidden="true" id="tab-documents" aria-labelledby="documents" data-x-tabs-target="tabpanel">
        Documents
    </div>
</div>
```
```vue [winduum-vue]
<script setup lang="ts">
    import { ref } from 'vue'
    import { Tabs, TabsList } from '@/components/tabs'

    const tabs = ['All', 'Photos', 'Music', 'Documents']
    const tabElements = ref<HTMLElement[]>([])
    const tabPanelElements = ref<HTMLElement[]>([])
</script>

<template>
    <Tabs v-slot="{ toggleTab }" :refs="{ tabElements, tabPanelElements }">
        <TabsList class="accent-main">
            <button
                v-for="(tab, index) in tabs"
                :key="tab"
                ref="tabElements"
                class="x-button ghosted aria-selected:[--x-button-background-color-opacity:100%] aria-selected:[--x-button-color:var(--color-accent-foreground)]"
                role="tab"
                :aria-controls="`tab-${tab.toLowerCase()}`"
                :id="tab.toLowerCase()"
                :aria-selected="index === 0 ? 'true' : 'false'"
                @click="toggleTab"
            >
                {{ tab }}
            </button>
        </TabsList>
        <div
            v-for="(tab, index) in tabs"
            :key="tab"
            ref="tabPanelElements"
            class="aria-hidden:hidden"
            role="tabpanel"
            :aria-hidden="index === 0 ? 'false' : 'true'"
            :id="`tab-${tab.toLowerCase()}`"
            :aria-labelledby="tab.toLowerCase()"
        >
            {{ tab }}
        </div>
    </Tabs>
</template>
```
```jsx [winduum-react]
import { createRef, useRef } from 'react'
import { Tabs, TabsList } from "@/components/tabs"

const tabs = ['All', 'Photos', 'Music', 'Documents']

export function Example() {
    const tabElements = useRef(tabs.map(() => createRef<HTMLElement>())).current
    const tabPanelElements = useRef(tabs.map(() => createRef<HTMLElement>())).current

    return (
        <Tabs refs={{ tabElements, tabPanelElements }}>
            {({ toggleTab }) => (
                <>
                    <TabsList className="accent-main">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab}
                                ref={tabElements[index]}
                                className="x-button ghosted aria-selected:[--x-button-background-color-opacity:100%] aria-selected:[--x-button-color:var(--color-accent-foreground)]"
                                role="tab"
                                aria-controls={`tab-${tab.toLowerCase()}`}
                                id={tab.toLowerCase()}
                                aria-selected={index === 0 ? 'true' : 'false'}
                                onClick={toggleTab}
                            >
                                {tab}
                            </button>
                        ))}
                    </TabsList>
                    {tabs.map((tab, index) => (
                        <div
                            key={tab}
                            ref={tabPanelElements[index]}
                            className="aria-hidden:hidden"
                            role="tabpanel"
                            aria-hidden={index === 0 ? 'false' : 'true'}
                            id={`tab-${tab.toLowerCase()}`}
                            aria-labelledby={tab.toLowerCase()}
                        >
                            {tab}
                        </div>
                    ))}
                </>
            )}
        </Tabs>
    )
}
```
:::

### Custom

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/tabs/custom.html"></iframe>

<<< @/public/examples/components/tabs/custom.html#body{} [winduum]

## Accessibility

Tabs follow the [ARIA tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) — triggers use `role="tab"` with `aria-controls` and `aria-selected` inside a `role="tablist"` wrapper, panels use `role="tabpanel"` with `aria-labelledby`. The [`toggleTab`](#toggletab) helper keeps `aria-selected` and `aria-hidden` in sync when switching tabs.

## JavaScript API

### `toggleTab`

* **Type:** `(element: HTMLElement | Element, options?: ToggleTabOptions) => void`
* **Kind:** `sync`

Toggles tab and tab panel aria attributes.

#### ToggleTabOptions

---

##### tabElements

* **Type:** `NodeListOf<Element> | Element[]`
* **Default:** `undefined`

Elements representing tabs.

##### tabPanelElements

* **Type:** `NodeListOf<Element> | Element[]`
* **Default:** `undefined`

Elements representing tab panels.
