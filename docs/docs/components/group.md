# Group

Group common ui components such as [Button](/docs/components/button), [Badge](/docs/components/badge) or [Control](/docs/components/control) together.

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/group" />

### Usage

```css
@import "winduum/src/components/group/index.css" layer(utilities);
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
    import { Group } from '@/components/group'
    import { Button } from '@/components/button'
</script>

<template>
    <Group>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
    </Group>
</template>
```
```jsx
import { Group } from '@/components/group'
import { Button } from '@/components/button'

export function Example() {
    return (
        <>
            <Group>
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
            </Group>
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
