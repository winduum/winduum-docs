---
description: "Component used to group a form components."
---

# Field

Component used to group a form components.

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/field/basic.html" style="margin: 1.5rem 0"></iframe>

<ViewSourceGh href="https://github.com/winduum/winduum/blob/next/src/components/field" />

## Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/next/src/components/field" />
* <LinkGh name="winduum-elements" url="https://github.com/winduum/winduum-elements/tree/main/components/field" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/tree/main/components/field" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/field" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/field" />

## Styles

### Variants
* <LinkGh name="default" path="components/field" />

## Scripts
The Field script validates the field on change and renders the validation message and
icon when the control is invalid.

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/field/basic.html"></iframe>

::: code-group
<<< @/public/examples/components/field/basic.html#body{} [winduum-elements]
```html [winduum-stimulus]
<div class="x-field" data-controller="x-field">
    <label class="x-label">Label</label>
    <div class="x-control" data-controller="x-control">
        <input type="text" required>
    </div>
    <em class="x-info">Info message</em>
</div>
```
```vue [winduum-vue]
<script setup lang="ts">
    import { Field } from '@/components/field'
    import { Label } from '@/components/label'
    import { Control } from '@/components/control'
    import { Info } from '@/components/info'
</script>

<template>
    <Field>
        <Label>Label</Label>
        <Control>
            <input type="text" required>
        </Control>
        <Info as="em">Info message</Info>
    </Field>
</template>
```
```jsx [winduum-react]
import { Field } from "@/components/field"
import { Label } from "@/components/label"
import { Control } from "@/components/control"
import { Info } from "@/components/info"

export function Example() {
    return (
        <Field>
            <Label>Label</Label>
            <Control>
                <input type="text" required />
            </Control>
            <Info as="em">Info message</Info>
        </Field>
    )
}
```
:::
