import { Application } from '@hotwired/stimulus'
import { Button } from 'winduum-stimulus/components/button/index.js'
import { Carousel as CarouselExperimental } from 'winduum-stimulus/components/carousel-experimental/index.js'
import { Carousel } from 'winduum-stimulus/components/carousel/index.js'
import { Compare } from 'winduum-stimulus/components/compare/index.js'
import { Control } from 'winduum-stimulus/components/control/index.js'
import { Details } from 'winduum-stimulus/components/details/index.js'
import { Drawer } from 'winduum-stimulus/components/drawer/index.js'
import { Field } from 'winduum-stimulus/components/field/index.js'
import { Form } from 'winduum-stimulus/components/form/index.js'
import { Image } from 'winduum-stimulus/components/image/index.js'
import { Popover } from 'winduum-stimulus/components/popover/index.js'
import { Range } from 'winduum-stimulus/components/range/index.js'
import { Tabs } from 'winduum-stimulus/components/tabs/index.js'
import { Toast } from 'winduum-stimulus/components/toast/index.js'
import { Toaster } from 'winduum-stimulus/components/toaster/index.js'
import { Invoke } from 'winduum-stimulus/utilities/invoke/index.js'

const application = Application.start()

if (!('command' in HTMLButtonElement.prototype)) {
  const { apply } = await import('invokers-polyfill/fn')
  apply()
}

if (!Object.prototype.hasOwnProperty.call(HTMLButtonElement.prototype, 'interestForElement')) {
  await import('interestfor')
}

application.register('invoke', Invoke)
application.register('x-button', Button)
application.register('x-carousel-experimental', CarouselExperimental)
application.register('x-carousel', Carousel)
application.register('x-compare', Compare)
application.register('x-control', Control)
application.register('x-details', Details)
application.register('x-drawer', Drawer)
application.register('x-field', Field)
application.register('x-form', Form)
application.register('x-image', Image)
application.register('x-popover', Popover)
application.register('x-range', Range)
application.register('x-tabs', Tabs)
application.register('x-toast', Toast)
application.register('x-toaster', Toaster)
