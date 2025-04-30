# Control
Form control as it should be! 

This component supports **input**, **select** and **textarea** including **all** [input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
* `text`, `color`, `date`, `datetime-local`, `email`, `file`, `hidden`, `month`, `number`, `password`, `search`, `tel`, `time`, `url`, `week`

Other input types are supported in other components
* `checkbox`, `radio` - included in [Check](/docs/components/check), [Switch](/docs/components/switch), [Color](/docs/components/color) or [Rating](/docs/components/rating)
* `range` - included in [Range](/docs/components/range)
* `button`, `reset`, `submit` - included in [Button](/docs/components/button)

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/components/control" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/components/control" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/control" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/control" />
* <LinkGh name="winduum-stimulus" url="https://github.com/winduum/winduum-stimulus/tree/main/components/control" />

### Usage

```css
@import "winduum/src/components/control/index.css" layer(utilities);
```

### Variants
* <LinkGh name="default" path="components/control" />
* <LinkGh name="interactive" path="components/control" />
* <LinkGh name="invalid" path="components/control" />
* <LinkGh name="floating" path="components/control" />
* <LinkGh name="floating-interactive" path="components/control" />
* <LinkGh name="file" path="components/control" />
* <LinkGh name="color" path="components/control" />
* <LinkGh name="select" path="components/control" />
* <LinkGh name="select-multiple" path="components/control" />
* <LinkGh name="icon" path="components/control" />

### Props
* <LinkGh name="default" path="components/control/props" />
* <LinkGh name="floating" path="components/control/props" />
* <LinkGh name="color" path="components/control/props" />
* <LinkGh name="select" path="components/control/props" />
* <LinkGh name="icon" path="components/control/props" />

##  Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/input/basic.html"></iframe>

::: code-group
<<< @/public/examples/components/input/basic.html#body{} [html]
```vue
<script setup lang="ts">
    import { Control } from '@/components/control'
</script>

<template>
    <Control>
        <input type="text">
    </Control>
</template>
```
```jsx
import { Control } from "@/components/control"

export function Example() {
    return (
        <>
            <Control>
                <input type="text" />
            </Control>
        </>
    )
}
```
:::

### Icon
You can position any content to `start` and `end` of the control.<br>Padding is automatically handled by CSS up to two icons, or you can do it manually.
* `--x-control-icon-count-start` - number of icons at the start of the control
* `--x-control-icon-count-end`- number of icons at the end of the control
* `--x-control-start` - manually change start padding in px according to content
* `--x-control-end` - manually change end padding in px according to content

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/input/icon.html"></iframe>

<<< @/public/examples/components/input/icon.html#body{}

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/select/icon.html"></iframe>

<<< @/public/examples/components/select/icon.html#body{}

### Textarea

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/input/textarea.html" style="height: 15rem"></iframe>

<<< @/public/examples/components/input/textarea.html#body{}

### Select

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/select/basic.html"></iframe>

<<< @/public/examples/components/select/basic.html#body{}

### Placeholder

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/input/placeholder.html"></iframe>

<<< @/public/examples/components/input/placeholder.html#body{}

### Label

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/input/label.html"></iframe>

<<< @/public/examples/components/input/label.html#body{}

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/select/label.html"></iframe>

<<< @/public/examples/components/select/label.html#body{}

### Floating Label

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/input/floating.html"></iframe>

<<< @/public/examples/components/input/floating.html#body{}

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/select/floating.html"></iframe>

<<< @/public/examples/components/select/floating.html#body{}

### Time

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/input/time.html"></iframe>

<<< @/public/examples/components/input/time.html#body{}

### Date

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/input/date.html"></iframe>

<<< @/public/examples/components/input/date.html#body{}

### Datetime

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/input/datetime.html"></iframe>

<<< @/public/examples/components/input/datetime.html#body{}

### Number

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/input/number.html"></iframe>

<<< @/public/examples/components/input/number.html#body{}

### Color

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/input/color.html"></iframe>

<<< @/public/examples/components/input/color.html#body{}

### File

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/input/file.html"></iframe>

<<< @/public/examples/components/input/file.html#body{}

### Required

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/input/required.html"></iframe>

<<< @/public/examples/components/input/required.html#body{}

### Validation

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/input/validation.html"></iframe>

<<< @/public/examples/components/input/validation.html#body{}

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/select/validation.html"></iframe>

<<< @/public/examples/components/select/validation.html#body{}

### Disabled

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/input/disabled.html"></iframe>

<<< @/public/examples/components/input/disabled.html#body{}

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/select/disabled.html"></iframe>

<<< @/public/examples/components/select/disabled.html#body{}

### Group

You can group controls into groups via `x-group` component and combine them with other components like [Button](/docs/components/button)

<iframe onload="this.style.visibility = 'visible';" src="/examples/components/input/group.html"></iframe>

<<< @/public/examples/components/input/group.html#body{}
