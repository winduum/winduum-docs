# Colors
There are few types of colors with various areas of use. Colors are defined in [Theme](/docs/base/theme).

## Common

<div style="display:flex; gap: 1rem; flex-direction: column">
    <div style="display: flex; align-items: center; gap: 1.75rem;flex-wrap: wrap;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;" class="bg-primary"></div>
        <code>--color-primary</code>
        <code>#3b82f6</code>
        <code>color.blue.500</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;flex-wrap: wrap;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;border: 1px solid rgb(0 0 0 / 0.1)" class="bg-light"></div>
        <code>--color-light</code>
        <code>#fff</code>
        <code>color.white</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;flex-wrap: wrap;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;border: 1px solid rgb(255 255 255 / 0.1)" class="bg-dark"></div>
        <code>--color-dark</code>
        <code>#171717</code>
        <code>color.neutral.900</code>
    </div>
</div>

## Main

<div style="display:flex; gap: 1rem; flex-direction: column">
    <div style="display: flex; align-items: center; gap: 1.75rem;flex-wrap: wrap;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;" class="bg-main"></div>
        <code>--color-main</code>
        <code>#171717</code>
        <code>color.neutral.900</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;flex-wrap: wrap;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;background-color: var(--color-main-primary)" class="bg-main-primary"></div>
        <code>--color-main-primary</code>
        <code>#171717</code>
        <code>color.neutral.900</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;flex-wrap: wrap;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;background-color: var(--color-main-secondary)" class="bg-main-secondary"></div>
        <code>--color-main-secondary</code>
        <code>75% of --color-main</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;flex-wrap: wrap;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;background-color: var(--color-main-tertiary)" class="bg-main-tertiary"></div>
        <code>--color-main-tertiary</code>
        <code>50% of --color-main</code>
    </div>
</div>

## Body

<div style="display:flex; gap: 1rem; flex-direction: column">
    <div style="display: flex; align-items: center; gap: 1.75rem;flex-wrap: wrap;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;border: 1px solid rgb(255 255 255 / 0.1)" class="bg-body"></div>
        <code>--color-body</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;flex-wrap: wrap;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;border: 1px solid rgb(255 255 255 / 0.1);background-color: var(--color-body-primary)" class="bg-body-primary"></div>
        <code>--color-body-primary</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;flex-wrap: wrap;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;border: 1px solid rgb(255 255 255 / 0.1);background-color: var(--color-body-secondary)" class="bg-body-secondary"></div>
        <code>--color-body-secondary</code>
        <code>75% of --color-body</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;flex-wrap: wrap;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;border: 1px solid rgb(255 255 255 / 0.1);background-color: var(--color-body-tertiary)" class="bg-body-tertiary"></div>
        <code>--color-body-tertiary</code>
        <code>50% of --color-body</code>
    </div>
</div>

## State

<div style="display:flex; gap: 1rem; flex-direction: column">
    <div style="display: flex; align-items: center; gap: 1.75rem;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;flex-wrap: wrap;" class="bg-success"></div>
        <code>--color-success</code>
        <code>#16a34a</code>
        <code>color.green.600</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;flex-wrap: wrap;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;" class="bg-error"></div>
        <code>--color-error</code>
        <code>#dc2626</code>
        <code>color.red.600</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;flex-wrap: wrap;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;" class="bg-warning"></div>
        <code>--color-warning</code>
        <code>#eab308</code>
        <code>color.yellow.500</code>
    </div>
    <div style="display: flex; align-items: center; gap: 1.75rem;flex-wrap: wrap;">
        <div style="width: 3rem;height: 3rem;border-radius: 50%;" class="bg-info"></div>
        <code>--color-info</code>
        <code>#0ea5e9</code>
        <code>color.sky.500</code>
    </div>
</div>

## Foreground

Each color has also it's foreground variant with `-foreground` postfix. So you can use foreground colors when needed, eg. `--color-primary-foreground`.

## Accent

The idea is that you should be able to set accent color via `accent-color` CSS property.
It is [discussed](https://github.com/w3c/csswg-drafts/issues/5900)
that you should have access to the color value of this property,
e.g. via `AccentColor` or `AccentColorText`.

Most of the components are using this idea via `--color-accent` and `--color-accent-foreground` as an alternative for their accent color.

<iframe onload="this.style.visibility = 'visible';" src="/examples/accent/btn.html"></iframe>

<<< @/public/examples/accent/btn.html#body{}

For example, this way you don't have to change background-color property for each component color variant, you just change the accent color.
