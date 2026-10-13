import { useId, useRef } from 'react'
import { Drawer, DrawerScroller } from '@/components/drawer'
import { Button } from '@/components/button'

export function Example() {
    const drawerId = useId()
    const contentElement = useRef<HTMLElement>(null)

    return (
        <>
            <Button command="show-modal" commandfor={drawerId}>Show dialog drawer</Button>
            <Drawer
                id={drawerId}
                closedby="any"
                placement="bottom"
                className="x-dialog drawer @max-xl:bg-transparent @max-xl:p-0 @max-xl:backdrop:block"
                style={{ animationDirection: 'reverse' }}
                refs={{ contentElement }}
            >
                <DrawerScroller className="scroll-pt-6 flex flex-col after:order-first snap-y snap-mandatory @xl:contents @xl:after:content-none noscript:after:content-none">
                    <section ref={contentElement} className="x-dialog-content @max-xl:mt-6 @max-xl:opacity-100 @max-xl:transform-none shrink-0 @max-xl:snap-end @max-xl:w-dvw @max-xl:min-h-[calc(100dvh-4rem)] @max-xl:rounded-b-none">
                        <div className="x-heading">Dialog drawer</div>
                        <br />
                        <div className="x-text">
                            <p>This component behaves as a bottom drawer on small screens and as a dialog on larger screens.</p>
                        </div>
                        <br />
                        <Button className="muted @xl:hidden" command="request-close" commandfor={drawerId}>Close drawer</Button>
                        <Button className="muted @max-xl:hidden" command="close" commandfor={drawerId}>Close dialog</Button>
                    </section>
                </DrawerScroller>
            </Drawer>
        </>
    )
}

