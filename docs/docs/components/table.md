---
description: "Display your data in non-interactive, interactive or responsive tables."
---

# Table
Display your data in non-interactive, interactive or responsive tables.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/table/default.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/table" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/table" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/table" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/table" />

## Styles

### Variants
* <LinkGh name="default" path="components/table" />
* <LinkGh name="interactive" path="components/table" />

### Props
* <LinkGh name="default" path="components/table/props" />

## Examples

### Default

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/table/default.html"></iframe>

::: code-group
<<< @/public/examples/components/table/default.html#body{} [winduum]
```vue [winduum-vue]
<script setup lang="ts">
    import { Table } from '@/components/table'
</script>

<template>
    <Table class="border border-body-tertiary text-sm">
        <table>
            <thead class="whitespace-nowrap text-main-secondary font-bold">
                <tr>
                    <th>Full name</th>
                    <th>Email</th>
                    <th>Employment</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Agata Henderson</td>
                    <td>a.henderson@example.com</td>
                    <td>Interpreter</td>
                </tr>
                <tr>
                    <td>Tony Johnston</td>
                    <td>t.johnston@example.com</td>
                    <td>Singer</td>
                </tr>
                <tr>
                    <td>Maya Walker</td>
                    <td>m.walker@example.com</td>
                    <td>Lawer</td>
                </tr>
            </tbody>
        </table>
    </Table>
</template>
```
```jsx [winduum-react]
import { Table } from '@/components/table'

export function Example() {
    return (
        <Table className="border border-body-tertiary text-sm">
            <table>
                <thead className="whitespace-nowrap text-main-secondary font-bold">
                    <tr>
                        <th>Full name</th>
                        <th>Email</th>
                        <th>Employment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Agata Henderson</td>
                        <td>a.henderson@example.com</td>
                        <td>Interpreter</td>
                    </tr>
                    <tr>
                        <td>Tony Johnston</td>
                        <td>t.johnston@example.com</td>
                        <td>Singer</td>
                    </tr>
                    <tr>
                        <td>Maya Walker</td>
                        <td>m.walker@example.com</td>
                        <td>Lawer</td>
                    </tr>
                </tbody>
            </table>
        </Table>
    )
}
```
:::

### Interactive

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/table/interactive.html"></iframe>

<<< @/public/examples/components/table/interactive.html#body{}

### Advanced

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/table/advanced.html" style="height: 600px"></iframe>

<<< @/public/examples/components/table/advanced.html#body{}
