# Control
Form control as it should be! 

This component supports **input**, **select** and **textarea** including **all** [input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
* `text`, `color`, `date`, `datetime-local`, `email`, `file`, `hidden`, `month`, `number`, `password`, `search`, `tel`, `time`, `url`, `week`

Other input types are supported in other components
* `checkbox`, `radio` - included in [Check](/docs/ui/check), [Switch](/docs/ui/switch), [Color](/docs/ui/color) or [Rating](/docs/ui/rating)
* `range` - included in [Range](/docs/ui/range)
* `button`, `reset`, `submit` - included in [Button](/docs/ui/button)

<ViewSourceGh href="https://github.com/winduum/winduum/blob/main/src/ui/control" />

### Installation
Follow instructions for individual framework usage below

* <LinkGh name="winduum" url="https://github.com/winduum/winduum/blob/main/src/ui/control" />
* <LinkGh name="winduum-vue" url="https://github.com/winduum/winduum-vue/blob/main/src/components/ui/control" />
* <LinkGh name="winduum-react" url="https://github.com/winduum/winduum-react/blob/main/src/components/ui/control" />

### Usage

```css
@import "winduum/src/ui/control/index.css" layer(components);
```

### Variants
* <LinkGh name="default" path="ui/control" />
* <LinkGh name="interactive" path="ui/control" />
* <LinkGh name="floating" path="ui/control" />
* <LinkGh name="floating-interactive" path="ui/control" />
* <LinkGh name="file" path="ui/control" />
* <LinkGh name="color" path="ui/control" />
* <LinkGh name="select" path="ui/control" />
* <LinkGh name="select-multiple" path="ui/control" />
* <LinkGh name="icon" path="ui/control" />

### Props
* <LinkGh name="default-props" path="ui/control" />
* <LinkGh name="interactive-props" path="ui/control" />
* <LinkGh name="floating-props" path="ui/control" />
* <LinkGh name="color-props" path="ui/control" />
* <LinkGh name="select-props" path="ui/control" />
* <LinkGh name="icon-props" path="ui/control" />

### Tokens
* <LinkGh name="invalid" path="ui/control" />

##  Examples

### Basic

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/basic.html"></iframe>

::: code-group
<<< @/public/examples/ui/input/basic.html#body{} [html]
```vue
<script setup lang="ts">
    import { UiControl } from '@/components/ui/control'
</script>

<template>
    <UiControl>
        <input type="text">
    </UiControl>
</template>
```
```jsx
import { UiControl } from "@/components/ui/control"

export function Example() {
    return (
        <>
            <UiControl>
                <input type="text" />
            </UiControl>
        </>
    )
}
```
:::

### Icon
You can position any content to `start` and `end` of the control.<br>Padding is automatically handled by CSS up to 2 icons or you can do it manually.
* `--ui-control-icon-count-s` - number of icons at the start of the control
* `--ui-control-icon-count-e`- number of icons at the end of the control
* `--ui-control-s` - manually change start padding in px according to content
* `--ui-control-e` - manually change end padding in px according to content

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/icon.html"></iframe>

<<< @/public/examples/ui/input/icon.html#body{}

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/select/icon.html"></iframe>

<<< @/public/examples/ui/select/icon.html#body{}

### Textarea

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/textarea.html" style="height: 15rem"></iframe>

<<< @/public/examples/ui/input/textarea.html#body{}

### Select

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/select/basic.html"></iframe>

<<< @/public/examples/ui/select/basic.html#body{}

### Placeholder

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/placeholder.html"></iframe>

<<< @/public/examples/ui/input/placeholder.html#body{}

### Label

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/label.html"></iframe>

<<< @/public/examples/ui/input/label.html#body{}

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/select/label.html"></iframe>

<<< @/public/examples/ui/select/label.html#body{}

### Floating Label

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/floating.html"></iframe>

<<< @/public/examples/ui/input/floating.html#body{}

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/select/floating.html"></iframe>

<<< @/public/examples/ui/select/floating.html#body{}

### Time

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/time.html"></iframe>

<<< @/public/examples/ui/input/time.html#body{}

### Date

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/date.html"></iframe>

<<< @/public/examples/ui/input/date.html#body{}

### Datetime

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/datetime.html"></iframe>

<<< @/public/examples/ui/input/datetime.html#body{}

### Number

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/number.html"></iframe>

<<< @/public/examples/ui/input/number.html#body{}

### Color

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/color.html"></iframe>

<<< @/public/examples/ui/input/color.html#body{}

### File

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/file.html"></iframe>

<<< @/public/examples/ui/input/file.html#body{}

### Required

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/required.html"></iframe>

<<< @/public/examples/ui/input/required.html#body{}

### Validation

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/validation.html"></iframe>

<<< @/public/examples/ui/input/validation.html#body{}

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/select/validation.html"></iframe>

<<< @/public/examples/ui/select/validation.html#body{}

### Disabled

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/disabled.html"></iframe>

<<< @/public/examples/ui/input/disabled.html#body{}

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/select/disabled.html"></iframe>

<<< @/public/examples/ui/select/disabled.html#body{}

### Group

You can group controls into groups via `ui-group` component and combine them with other components like [Button](/docs/ui/button)

<iframe onload="this.style.visibility = 'visible';" src="/examples/ui/input/group.html"></iframe>

<<< @/public/examples/ui/input/group.html#body{}
