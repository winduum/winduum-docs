import Theme from 'vitepress/theme'
import { insertDialog } from 'winduum/src/libraries/dialog.js'
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
      await insertDialog(`
        <form class="c-dialog" method="dialog">
            <div class="ui-heading">Example dialog</div>
            <br>
            <div class="ui-text">
                <p>You can close this dialog with Esc, clicking outside, or by form submit</p>
            </div>
            <br>
            <button class="ui-btn bg-primary" style="padding: var(--ui-btn-py) var(--ui-btn-px)">Close dialog</button>
        </form>
      `)
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

      !document.getElementById('icons') && document.body.insertAdjacentHTML('beforeend', `
        <svg style="display: none" id="icons">
            <symbol id="icon-gh" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></symbol>
            <symbol id="icon-sb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clip-rule="evenodd" />
            </symbol>
        </svg>
      `)

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
