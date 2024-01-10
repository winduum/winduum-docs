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
          text: '📏&nbsp;&nbsp; Layout',
          items: [
            {
              text: 'Reset',
              link: '/docs/layout/reset'
            },
            {
              text: 'Defaults',
              link: '/docs/layout/defaults?soon'
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
              link: '/docs/ui/divider?soon'
            },
            {
              text: 'Dot',
              link: '/docs/utilities/dot?soon'
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
              text: 'Control',
              link: '/docs/ui/control'
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
              link: '/docs/ui/link?soon'
            },
            {
              text: 'Notice',
              link: '/docs/ui/notice'
            },
            {
              text: 'Range',
              link: '/docs/ui/range?soon'
            },
            {
              text: 'Progress',
              link: '/docs/ui/progress'
            },
            {
              text: 'Radial progress',
              link: '/docs/ui/radial-progress?soon'
            },
            {
              text: 'Rating',
              link: '/docs/component/rating?soon'
            },
            {
              text: 'Swap',
              link: '/docs/ui/swap?soon'
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
              link: '/docs/component/breadcrumb?soon'
            },
            {
              text: 'Card',
              link: '/docs/component/card?soon'
            },
            {
              text: 'Carousel',
              link: '/docs/lib/carousel?soon'
            },
            {
              text: 'Compare',
              link: '/docs/component/compare?soon'
            },
            {
              text: 'Details',
              link: '/docs/lib/details?soon'
            },
            {
              text: 'Dialog',
              link: '/docs/component/dialog'
            },
            {
              text: 'Drawer',
              link: '/docs/lib/details?soon'
            },
            {
              text: 'Drop',
              link: '/docs/component/drop?soon'
            },
            {
              text: 'Field',
              link: '/docs/component/field'
            },
            {
              text: 'Form',
              link: '/docs/lib/form?soon'
            },
            {
              text: 'Group',
              link: '/docs/ui/group'
            },
            {
              text: 'Pagination',
              link: '/docs/component/pagination?soon'
            },
            {
              text: 'Popover',
              link: '/docs/lib/popover?soon'
            },
            {
              text: 'Table',
              link: '/docs/component/table?soon'
            },
            {
              text: 'Tabs',
              link: '/docs/component/tabs?soon'
            },
            {
              text: 'Toast',
              link: '/docs/lib/toast?soon'
            },
            {
              text: 'Tooltip',
              link: '/docs/lib/tooltip?soon'
            }
          ]
        },
        {
          text: '💡️&nbsp;&nbsp; Libraries',
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
