import { useId } from 'react'
import { Button } from '@/components/button'
import { Popover, PopoverContent } from '@/components/popover'

export function Example() {
    const popoverBasic = useId()

    return (
        <>
            <Button command="toggle-popover" commandfor={popoverBasic} aria-controls={popoverBasic}>
                Popover
            </Button>
            <Popover className="bottom my-2" popover="auto" id={popoverBasic}>
                <PopoverContent className="shadow dark:bg-body-secondary p-2 w-32 flex flex-col">
                    <Button className="ghosted accent-main justify-start w-full">Item 1</Button>
                    <Button className="ghosted accent-main justify-start w-full">Item 2</Button>
                </PopoverContent>
            </Popover>
        </>
    )
}
