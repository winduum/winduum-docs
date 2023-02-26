# Breakpoints

Breakpoints in Winduum are very close to TailwindCSS, yet slightly different values, defined in `em` and extended to cover all possible resolutions. 

You can use the same principles as defined in [Responsive design](https://tailwindcss.com/docs/responsive-design)

* **xs** - 360px
* **sm** - 416px
* **md** - 768px
* **lg** - 960px
* **xl** - 1216px
* **2xl** - 1312px
* **3xl** - 1408px
* **4xl** - 1600px
* **xxl** - 2016px
* **2xxl** - 2528px

Breakpoints are defined in [`src/base/breakpoints.css`](https://github.com/winduum/winduum/blob/main/src/base/breakpoints.css) and in [config#screens](/docs/config#screens)

You can also use the breakpoints inside CSS like this.

```postcss
@media (--media-md) {
    /* > 768 */
}

@media not all and (--media-md) {
    /* < 768 */
}
```
[Custom Media Specification](https://www.w3.org/TR/mediaqueries-5/#at-ruledef-custom-media) is used, so PostCSS is required, see [Install](/) for more info.
