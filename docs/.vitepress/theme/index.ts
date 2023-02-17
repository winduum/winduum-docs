import Theme from 'vitepress/theme'
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

export default {
  ...Theme,
  enhanceApp({ router }) {
    watch(router.route, () => {
      setTimeout(() => {
        updateDarkIframes()
      }, 10)
    })
  },
  setup() {
    onMounted(() => {
      updateDarkIframes()

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
