---
description: "Navigation between multiple pages of content."
---

# Pagination
Navigation between multiple pages of content.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/pagination.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/pagination" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/pagination" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/pagination" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/pagination" />

## Styles

### Variants
* <LinkGh name="default" path="components/pagination" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/pagination.html"></iframe>

::: code-group
<<< @/public/examples/components/pagination.html#body{} [winduum]
```vue [winduum-vue]
<script setup lang="ts">
    import { Pagination } from '@/components/pagination'
    import { Button } from '@/components/button'
</script>

<template>
    <Pagination>
        <Button as="a" class="sm square muted pointer-events-none" href="#" aria-current="page">1</Button>
        <Button as="a" class="sm square ghosted" href="#">2</Button>
        <Button as="a" class="sm square ghosted" href="#">3</Button>
        <Button as="a" class="sm square ghosted" href="#">4</Button>
        <Button as="a" class="sm square ghosted">...</Button>
        <Button as="a" class="sm square ghosted" href="#">30</Button>
    </Pagination>
</template>
```
```jsx [winduum-react]
import { Pagination } from '@/components/pagination'
import { Button } from '@/components/button'

export function Example() {
    return (
        <Pagination>
            <Button as="a" className="sm square muted pointer-events-none" href="#" aria-current="page">1</Button>
            <Button as="a" className="sm square ghosted" href="#">2</Button>
            <Button as="a" className="sm square ghosted" href="#">3</Button>
            <Button as="a" className="sm square ghosted" href="#">4</Button>
            <Button as="a" className="sm square ghosted">...</Button>
            <Button as="a" className="sm square ghosted" href="#">30</Button>
        </Pagination>
    )
}
```
:::
