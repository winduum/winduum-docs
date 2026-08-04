import { useId } from 'react'
import { Button } from '@/components/button'
import { Popover, PopoverContent } from '@/components/popover'

export function Example() {
    const popoverApi = useId()

    return (
        <div className="w-full flex flex-col items-center">
            <Button command="toggle-popover" commandfor={popoverApi}>
                Popover
            </Button>
            <Popover className="bottom my-2" popover="auto" id={popoverApi} placement="bottom">
                <PopoverContent className="shadow dark:bg-body-secondary p-2 w-32 flex flex-col">
                    <Button className="ghosted accent-main justify-start w-full">Item 1</Button>
                    <Button className="ghosted accent-main justify-start w-full">Item 2</Button>
                </PopoverContent>
            </Popover>
        </div>
    )
}
