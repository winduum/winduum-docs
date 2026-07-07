---
description: "Content container for grouping related information and actions."
---

# Card
Content container for grouping related information and actions.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/card/default.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/card" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/card" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/card" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/card" />

## Styles

### Variants
* <LinkGh name="default" path="components/card" />

### Props
* <LinkGh name="default" path="components/card/props" />

## Examples

### Default

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/card/default.html"></iframe>

::: code-group
<<< @/public/examples/components/card/default.html#body{} [winduum]
```vue [winduum-vue]
<script setup lang="ts">
    import { Card } from '@/components/card'
    import { Heading } from '@/components/heading'
    import { Text } from '@/components/text'
</script>

<template>
    <Card class="border border-body-tertiary shadow-sm max-w-md gap-2">
        <Heading>Card title</Heading>
        <Text>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Lorem ipsum dolor sit amet
        </Text>
    </Card>
</template>
```
```jsx [winduum-react]
import { Card } from '@/components/card'
import { Heading } from '@/components/heading'
import { Text } from '@/components/text'

export function Example() {
    return (
        <Card className="border border-body-tertiary shadow-sm max-w-md gap-2">
            <Heading>Card title</Heading>
            <Text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Lorem ipsum dolor sit amet
            </Text>
        </Card>
    )
}
```
:::

### Image

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/card/image.html" style="height: 500px;"></iframe>

<<< @/public/examples/components/card/image.html#body{}
