# Link
<br>
<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/link" />

### Usage

```css
@import "winduum/src/components/link/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="components/link" />
* <LinkGh name="interactive" path="components/link" />

### Props
* <LinkGh name="default-props" path="components/link" />
* <LinkGh name="interactive-props" path="components/link" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/link" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/link" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/link" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/link/basic.html"></iframe>

::: code-group
<<< @/public/examples/ui/link/basic.html#body{} [html]
```vue
<script setup lang="ts">
    import { UiLink } from '@/components/link'
</script>

<template>
    <UiLink href="#" title="">
        Link Default
    </UiLink>
    <UiLink href="#" class="accent-primary" title="">
        Link Primary
    </UiLink>
</template>
```
```jsx
import { UiLink } from '@/components/link'

export function Example() {
    return (
        <>
            <UiLink href="#" title="">
                Link Default
            </UiLink>
            <UiLink href="#" className="accent-primary" title="">
                Link Primary
            </UiLink>
        </>
    )
}
```
:::

### Underline

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/link/underline.html"></iframe>

<<< @/public/examples/ui/link/underline.html#body{}
