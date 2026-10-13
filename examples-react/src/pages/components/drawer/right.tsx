import { useId, useRef } from 'react'
import { Drawer, DrawerContent, DrawerScroller } from '@/components/drawer'
import { Button } from '@/components/button'

export function Example() {
    const drawerId = useId()
    const contentElement = useRef<HTMLElement>(null)

    return (
        <>
            <Button command="show-modal" commandfor={drawerId}>Show drawer</Button>
            <Drawer id={drawerId} closedby="any" placement="right" style={{ animationDirection: 'reverse' }} refs={{ contentElement }}>
                <DrawerScroller className="after:order-first snap-x snap-mandatory">
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

