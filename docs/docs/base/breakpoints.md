# Breakpoints

Breakpoints in Winduum are very close to TailwindCSS, yet they have slightly different values and extended to cover all possible resolutions. 

You can use the same principles as defined in [Responsive design](https://tailwindcss.com/docs/responsive-design)

* **xs** - 360px
* **sm** - 416px
* **md** - 744px
* **lg** - 960px
* **xl** - 1216px
* **2xl** - 1312px
* **3xl** - 1408px
* **4xl** - 1600px
* **xxl** - 2016px
* **2xxl** - 2528px

Breakpoints are defined in [`src/base/breakpoints.css`](https://github.com/winduum/winduum/blob/next/src/base/breakpoints.css) and in [config#screens](/docs/base/config#screens)
(TailwindCSS `v3`)
or [`tailwindcss/theme/config/breakpoint.css`](https://github.com/winduum/winduum/blob/next/tailwindcss/theme/config/breakpoint.css)
(TailwindCSS `v4`)

You can also use the breakpoints inside CSS like this.

```postcss
@media (--media-md) {
    /* > 768 */
}

@media not all and (--media-md) {
    /* < 768 */
}
```
[Custom Media Specification](https://www.w3.org/TR/mediaqueries-5/#at-ruledef-custom-media) is used, so PostCSS or LightningCSS is required, see [Install](/docs/) for more info.
