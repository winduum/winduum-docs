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
    ['script', { defer: '', 'data-domain': 'winduum.dev', src: 'https://plausible.newlogic.cz/js/script.outbound-links.js'}]
  ],

  themeConfig: {
    logo: '/logo.svg',



    outline: 'deep',

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
          text: '🚀&nbsp;&nbsp; Get started',
          items: [
            {
              text: 'Install',
              link: '/docs/'
            },
            {
              text: 'About',
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
          text: '📏&nbsp;&nbsp; Layout',
          items: [
            {
              text: 'Reset',
              link: '/docs/layout/reset'
            },
            {
              text: 'Defaults',
              link: '/docs/layout/defaults'
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
              text: 'Grid',
              link: '/docs/layout/grid'
            },
            {
              text: 'Layers',
              link: '/docs/layout/layers'
            }
          ]
        },
        {
          text: '✨&nbsp;&nbsp; Utilities',
          items: [
            {
              text: 'Animation',
              link: '/docs/utilities/animation'
            },
            {
              text: 'Container',
              link: '/docs/utilities/container'
            },
            {
              text: 'Divide Gap',
              link: '/docs/utilities/divide-gap'
            },
            {
              text: 'Divider',
              link: '/docs/utilities/divider'
            },
            {
              text: 'Dot',
              link: '/docs/utilities/dot'
            },
            {
              text: 'Flex',
              link: '/docs/utilities/flex'
            },
            {
              text: 'Mask',
              link: '/docs/utilities/mask'
            },
            {
              text: 'Skeleton',
              link: '/docs/utilities/skeleton'
            },
            {
              text: 'Swap',
              link: '/docs/utilities/swap'
            },
            {
              text: 'Ripple',
              link: '/docs/utilities/ripple'
            },
            {
              text: 'Underline',
              link: '/docs/utilities/underline'
            }
          ]
        },
        {
          text: '🎨&nbsp;&nbsp; UI',
          items: [
            {
              text: 'Badge',
              link: '/docs/ui/badge'
            },
            {
              text: 'Button',
              link: '/docs/ui/button'
            },
            {
              text: 'Check',
              link: '/docs/ui/check'
            },
            {
              text: 'Color',
              link: '/docs/ui/color'
            },
            {
              text: 'Control',
              link: '/docs/ui/control'
            },
            {
              text: 'Group',
              link: '/docs/ui/group'
            },
            {
              text: 'Heading',
              link: '/docs/ui/heading'
            },
            {
              text: 'Image',
              link: '/docs/ui/image'
            },
            {
              text: 'Info',
              link: '/docs/ui/info'
            },
            {
              text: 'Label',
              link: '/docs/ui/label'
            },
            {
              text: 'Link',
              link: '/docs/ui/link'
            },
            {
              text: 'Notice',
              link: '/docs/ui/notice'
            },
            {
              text: 'Progress',
              link: '/docs/ui/progress'
            },
            {
              text: 'Range',
              link: '/docs/ui/range'
            },
            {
              text: 'Rating',
              link: '/docs/ui/rating'
            },
            {
              text: 'Switch',
              link: '/docs/ui/switch'
            },
            {
              text: 'Text',
              link: '/docs/ui/text'
            },
            {
              text: 'Title',
              link: '/docs/ui/title'
            }
          ]
        },
        {
          text: '📦&nbsp;&nbsp; ️Components',
          items: [
            {
              text: 'Breadcrumb',
              link: '/docs/components/breadcrumb'
            },
            {
              text: 'Card',
              link: '/docs/components/card'
            },
            {
              text: 'Carousel',
              link: '/docs/components/carousel'
            },
            {
              text: 'Compare',
              link: '/docs/components/compare'
            },
            {
              text: 'Details',
              link: '/docs/components/details'
            },
            {
              text: 'Dialog',
              link: '/docs/components/dialog'
            },
            {
              text: 'Drawer',
              link: '/docs/components/drawer'
            },
            {
              text: 'Field',
              link: '/docs/components/field'
            },
            {
              text: 'Form',
              link: '/docs/components/form'
            },
            {
              text: 'Pagination',
              link: '/docs/components/pagination'
            },
            {
              text: 'Popover',
              link: '/docs/components/popover'
            },
            {
              text: 'Table',
              link: '/docs/components/table'
            },
            {
              text: 'Tabs',
              link: '/docs/components/tabs'
            },
            {
              text: 'Toaster',
              link: '/docs/components/toaster'
            },
            {
              text: 'Tooltip',
              link: '/docs/components/tooltip'
            }
          ]
        }
      ]
    }
  }
})
