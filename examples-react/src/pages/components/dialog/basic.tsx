import { useId } from 'react'
import { Button } from '@/components/button'
import { Dialog, DialogContent } from '@/components/dialog'
import { Heading } from '@/components/heading'

export function Example() {
    const dialogBasic = useId()

    return (
        <>
            <Button command="show-modal" commandfor={dialogBasic}>
                Open Dialog
            </Button>
            <Dialog id={dialogBasic}>
                <DialogContent>
                    <Heading>Hello there!</Heading>
                    <Button className="muted accent-main" command="close" commandfor={dialogBasic}>
                        Close me!
                    </Button>
                </DialogContent>
            </Dialog>
        </>
    )
}
