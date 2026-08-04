import { useId, useRef } from 'react'
import { Drawer, DrawerContent, DrawerScroller } from '@/components/drawer'
import { Button } from '@/components/button'

export function Example() {
    const drawerId = useId()
    const contentElement = useRef<HTMLElement>(null)

    return (
        <>
            <Button command="show-modal" commandfor={drawerId}>Show drawer</Button>
            <Drawer id={drawerId} closedby="any" className="noscript:starting:-translate-x-full noscript:not-open:-translate-x-full noscript:duration-500" refs={{ contentElement }}>
                <DrawerScroller className="snap-x snap-mandatory noscript:after:content-none">
                    <DrawerContent ref={contentElement} as="nav">
                        Drawer content
                        <Button className="muted" command="request-close" commandfor={drawerId}>
                            Close drawer
                        </Button>
                    </DrawerContent>
                </DrawerScroller>
            </Drawer>
        </>
    )
}

