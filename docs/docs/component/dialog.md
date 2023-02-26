# Dialog

Basic styles for a dialog element, can be used together with [LibDialog](/docs/lib/dialog)

### CSS Properties

```css
:where(.c-dialog) {
    --c-dialog-py: 1.5rem;
    --c-dialog-px: 1.5rem;
    --c-dialog-width: 35rem;
    --c-dialog-offset-y: 2rem;
    --c-dialog-animation-duration: var(--transition-duration);
}
```

# Basic

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
