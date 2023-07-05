# Dialog

Basic styles for a dialog element, can be used together with [LibDialog](/docs/lib/dialog)

<a href="https://github.com/winduum/winduum/blob/main/src/components/dialog.css" target="_blank" rel="noreferrer" class="winduum-gh-link">View Source <svg><use href="#icon-gh" /></svg></a>

### Single Import

```css
@import "winduum/ui/components/dialog.css" layer(components);
```

## Basic

<button class="ui-btn bg-primary" id="showDialog" style="padding: var(--ui-btn-py) var(--ui-btn-px)">Show dialog</button>

```html
<form class="c-dialog" method="dialog">
    <div class="ui-heading">Example dialog</div>
    <br>
    <div class="ui-text">
        <p>You can close this dialog with Esc, clicking outside, or by form submit</p>
    </div>
    <br>
    <button class="ui-btn">Close dialog</button>
</form>
```
