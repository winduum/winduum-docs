import { useId, useRef } from "react"
import { Drawer, DrawerContent, DrawerScroller } from "@/components/drawer"
import { Button } from "@/components/button"

export function Example() {
    const drawerLeft = useId()
    const contentElement = useRef<HTMLElement>(null)

    return (
        <>
            <Button command="show-modal" commandfor={drawerLeft}>Show drawer</Button>
            <Drawer id={drawerLeft} closedby="any" refs={{ contentElement }}>
                <DrawerScroller className="snap-x snap-mandatory">
                    <DrawerContent ref={contentElement} as="nav">
                        Drawer content
                        <Button className="muted" command="request-close" commandfor={drawerLeft}>
                            Close drawer
                        </Button>
                    </DrawerContent>
                </DrawerScroller>
            </Drawer>
        </>
    )
}

