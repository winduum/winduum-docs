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
* <LinkGh name="default" path="components/link/props" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/link" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/link" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/link" />

## Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/link/basic.html"></iframe>

::: code-group
<<< @/public/examples/components/link/basic.html#body{} [html]
```vue
<script setup lang="ts">
    import { Link } from '@/components/link'
</script>

<template>
    <Link href="#" title="">
        Link Default
    </Link>
    <Link href="#" class="accent-primary" title="">
        Link Primary
    </Link>
</template>
```
```jsx
import { Link } from '@/components/link'

export function Example() {
    return (
        <>
            <Link href="#" title="">
                Link Default
            </Link>
            <Link href="#" className="accent-primary" title="">
                Link Primary
            </Link>
        </>
    )
}
```
:::

### Underline

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/link/underline.html"></iframe>

<<< @/public/examples/components/link/underline.html#body{}
