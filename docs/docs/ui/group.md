# Group

Group common ui components such as [Button](/docs/ui/button), [Badge](/docs/ui/badge) or [Control](/docs/ui/control) together.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/ui/group" />

### Usage

```css
@import "winduum/src/ui/group/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="ui/group" />
  
### Tokens
* <LinkGh name="vertical" path="ui/group" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/ui/group" />

## Examples

### Button Group

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/btn/group.html"></iframe>

::: code-group
<<< @/public/examples/ui/btn/group.html#body{} [html]
```vue
<script setup lang="ts">
    import { UiGroup } from '@/components/ui/group'
    import { UiBtn } from '@/components/ui/btn'
</script>

<template>
    <UiGroup>
        <UiBtn>Button</UiBtn>
        <UiBtn>Button</UiBtn>
        <UiBtn>Button</UiBtn>
    </UiGroup>
</template>
```
```jsx
import { UiGroup } from '@/components/ui/group'
import { UiBtn } from '@/components/ui/btn'

export function Example() {
    return (
        <>
            <UiGroup>
                <UiBtn>Button</UiBtn>
                <UiBtn>Button</UiBtn>
                <UiBtn>Button</UiBtn>
            </UiGroup>
        </>
    )
}
```
:::

### Badge Group

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/badge/group.html"></iframe>

<<< @/public/examples/ui/badge/group.html#body{}

### Control Group

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/group.html"></iframe>

<<< @/public/examples/ui/input/group.html#body{}

### Vertical Group

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/group/vertical.html"></iframe>

<<< @/public/examples/ui/group/vertical.html#body{}

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/group/vertical-control.html"></iframe>

<<< @/public/examples/ui/group/vertical-control.html#body{}
