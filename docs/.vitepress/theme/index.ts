import Theme from 'vitepress/theme'
import { showDialog } from 'winduum/src/libraries/Dialog.js'
import './styles/vars.css'
import 'winduum/main.css'
import 'winduum/tailwind.css'
import { watch, onMounted } from 'vue'

function updateDarkIframes() {
  if (typeof document !== 'undefined') {
    if (!document.documentElement.classList.contains('dark')) {
      document.querySelectorAll('iframe').forEach(element => {
        element.src = element.src + '?dark=false'
      })
    }
  }
}

function dialogEvent() {
  if (typeof document !== 'undefined') {
    // @ts-ignore
    document.querySelector('#showDialog')?.addEventListener('click', async () => {
      await showDialog({
        content: `
            <form class="c-dialog" method="dialog">
                <div class="ui-heading">Example dialog</div>
                <br>
                <div class="ui-text">
                    <p>You can close this dialog with Esc, clicking outside, or by form submit</p>
                </div>
                <br>
                <button class="ui-btn bg-primary" style="padding: var(--ui-btn-py) var(--ui-btn-px)">Close dialog</button>
            </form>
          `
      })
    })
  }
}

export default {
  ...Theme,
  enhanceApp({ router }) {
    watch(router.route, () => {
      setTimeout(() => {
        updateDarkIframes()
        dialogEvent()
      }, 10)
    })
  },
  setup() {
    onMounted(() => {
      updateDarkIframes()
      dialogEvent()

      document.querySelector('.VPSwitchAppearance').addEventListener('click', () => {
        document.querySelectorAll('iframe').forEach(element => {
          if (element.contentDocument.documentElement.classList.contains('dark')) {
            element.contentDocument.documentElement.classList.remove('dark')
          } else {
            element.contentDocument.documentElement.classList.add('dark')
          }
        })
      })
    })
  }
}
