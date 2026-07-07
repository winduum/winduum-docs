---
description: "Displays the current page location within a navigational hierarchy."
---

# Breadcrumb
Displays the current page location within a navigational hierarchy.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/breadcrumb.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/breadcrumb" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/breadcrumb" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/breadcrumb" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/breadcrumb" />

## Styles

### Variants
* <LinkGh name="default" path="components/breadcrumb" />

### Props
* <LinkGh name="default" path="components/breadcrumb/props" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/breadcrumb.html"></iframe>

::: code-group
<<< @/public/examples/components/breadcrumb.html#body{} [winduum]
```vue [winduum-vue]
<script setup lang="ts">
    import { Breadcrumb } from '@/components/breadcrumb'
    import { Link } from '@/components/link'
</script>

<template>
    <Breadcrumb class="text-sm">
        <ol>
            <li>
                <Link href="#" class="flex" title="Home">
                    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </Link>
            </li>
            <li>
                <Link href="#">User</Link>
            </li>
            <li>
                <Link href="#" class="opacity-50 pointer-events-none" aria-current="location">
                    Documents
                </Link>
            </li>
        </ol>
    </Breadcrumb>
</template>
```
```jsx [winduum-react]
import { Breadcrumb } from '@/components/breadcrumb'
import { Link } from '@/components/link'

export function Example() {
    return (
        <Breadcrumb className="text-sm">
            <ol>
                <li>
                    <Link href="#" className="flex" title="Home">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link href="#">User</Link>
                </li>
                <li>
                    <Link href="#" className="opacity-50 pointer-events-none" aria-current="location">
                        Documents
                    </Link>
                </li>
            </ol>
        </Breadcrumb>
    )
}
```
:::
