import { defineConfig } from 'vitepress'

const ogDescription = 'Modern, modular, small modest CSS component framework built on top of TailwindCSS'
const ogImage = 'https://winduum.dev/og-image.png'
const ogTitle = 'Winduum'
const ogUrl = 'https://winduum.dev'

export default defineConfig({
  title: ogTitle,
  description: ogDescription,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@winduum_dev' }],
    ['meta', { name: 'theme-color', content: '#2d55ff' }],
    ['script', { defer: '', 'data-domain': 'winduum.dev', src: 'https://plausible.io/js/script.js'}]
  ],

  vue: {
    reactivityTransform: true
  },

  themeConfig: {
    logo: '/logo.svg',

    editLink: {
      pattern: 'https://github.com/winduum/winduum-docs/edit/main/docs/:path',
      text: 'Suggest changes to this page'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/winduum/winduum' },
      { icon: 'twitter', link: 'https://twitter.com/winduum' }
    ],

    algolia: {
      appId: '3DLECEENW2',
      apiKey: '31331a8def9abe0356f5338d568ca974',
      indexName: 'winduum'
    },

    footer: {
      message: `Released under the MIT License.`,
      copyright: 'Copyright © 2022-present lubomirblazek.cz'
    },

    nav: [
      { text: 'Docs', link: '/docs/', activeMatch: '/docs/' },
      {
        text: 'Resources',
        items: [
          {
            items: [
              {
                text: 'TailwindCSS',
                link: 'https://tailwindcss.com'
              },
              {
                text: 'Changelog',
                link: 'https://github.com/winduum/winduum/blob/main/CHANGELOG.md'
              }
            ]
          }
        ]
      }
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'Get started',
          items: [
            {
              text: 'Install',
              link: '/docs/'
            },
            {
              text: 'Use',
              link: '/docs/use'
            },
            {
              text: 'Config',
              link: '/docs/config'
            },
            {
              text: 'Colors',
              link: '/docs/colors'
            },
            {
              text: 'Themes',
              link: '/docs/themes'
            },
            {
              text: 'Icons',
              link: '/docs/icons'
            }
          ]
        },
        {
          text: 'Layout',
          items: [
            {
              text: 'Reset',
              link: '/docs/layout/reset'
            },
            {
              text: 'Breakpoints',
              link: '/docs/layout/breakpoints'
            },
            {
              text: 'Keyframes',
              link: '/docs/layout/keyframes'
            },
            {
              text: 'Container',
              link: '/docs/layout/container'
            },
            {
              text: 'Grid',
              link: '/docs/layout/grid'
            }
          ]
        },
        {
          text: 'UI',
          items: [
            {
              text: 'Button',
              link: '/docs/ui/button'
            },
            {
              text: 'Badge',
              link: '/docs/ui/badge'
            },
            {
              text: 'Link',
              link: '/docs/ui/link'
            },
            {
              text: 'Heading',
              link: '/docs/ui/heading'
            },
            {
              text: 'Title',
              link: '/docs/ui/title'
            },
            {
              text: 'Text',
              link: '/docs/ui/text'
            },
            {
              text: 'Image',
              link: '/docs/ui/image'
            },
            {
              text: 'Label',
              link: '/docs/ui/label'
            },
            {
              text: 'Input',
              link: '/docs/ui/input'
            },
            {
              text: 'Select',
              link: '/docs/ui/select'
            },
            {
              text: 'Checkbox',
              link: '/docs/ui/checkbox'
            },
            {
              text: 'Radio',
              link: '/docs/ui/radio'
            },
            {
              text: 'Switch',
              link: '/docs/ui/switch'
            },
            {
              text: 'Info',
              link: '/docs/ui/info'
            },
            {
              text: 'Notice',
              link: '/docs/ui/notice'
            },
            {
              text: 'Progress',
              link: '/docs/ui/progress'
            }
          ]
        },
        {
          text: 'Components',
          items: [
            {
              text: 'Dialog',
              link: '/docs/component/dialog'
            },
            {
              text: 'Field',
              link: '/docs/component/field'
            }
          ]
        },
        {
          text: 'Libraries',
          items: [
            {
              text: 'Dialog',
              link: '/docs/lib/dialog'
            },
            {
              text: 'Ripple',
              link: '/docs/lib/ripple'
            }
          ]
        }
      ]
    }
  }
})
