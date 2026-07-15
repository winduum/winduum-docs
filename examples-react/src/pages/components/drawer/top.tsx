import type { CSSProperties } from 'react'
import { useId, useRef } from 'react'
import { Drawer, DrawerContent, DrawerScroller } from '@/components/drawer'
import { Button } from '@/components/button'

export function Example() {
    const drawerId = useId()
    const contentElement = useRef<HTMLElement>(null)

    return (
        <>
            <Button command="show-modal" commandfor={drawerId}>Show drawer</Button>
            <Drawer id={drawerId} closedby="any" placement="top" refs={{ contentElement }}>
                <DrawerScroller className="flex flex-col snap-y snap-mandatory">
                    <DrawerContent ref={contentElement} as="nav" style={{ '--x-drawer-content-inline-size': '100dvw', '--x-drawer-content-block-size': 'calc(100vh - 4rem)' } as CSSProperties}>
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

