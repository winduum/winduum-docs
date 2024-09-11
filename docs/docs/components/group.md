# Group

Group common ui components such as [Button](/docs/components/button), [Badge](/docs/components/badge) or [Control](/docs/components/control) together.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/group" />

### Usage

```css
@import "winduum/src/components/group/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="components/group" />
  
### Tokens
* <LinkGh name="vertical" path="components/group" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/group" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/group" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/group" />

## Examples

### Button Group

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/btn/group.html"></iframe>

::: code-group
<<< @/public/examples/components/btn/group.html#body{} [html]
```vue
<script setup lang="ts">
    import { UiGroup } from '@/components/group'
    import { UiBtn } from '@/components/btn'
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
import { UiGroup } from '@/components/group'
import { UiBtn } from '@/components/btn'

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

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/badge/group.html"></iframe>

<<< @/public/examples/components/badge/group.html#body{}

### Control Group

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/input/group.html"></iframe>

<<< @/public/examples/components/input/group.html#body{}

### Vertical Group

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/group/vertical.html"></iframe>

<<< @/public/examples/components/group/vertical.html#body{}

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/group/vertical-control.html"></iframe>

<<< @/public/examples/components/group/vertical-control.html#body{}
