import { type CSSProperties, useId } from 'react'
import { Button } from '@/components/button'
import { Popover, PopoverContent } from '@/components/popover'

export function Example() {
    const tooltipPopover = useId()

    return (
        <>
            <Button interestfor={tooltipPopover} style={{ interestDelay: '0s' } as CSSProperties}>
                Tooltip
            </Button>
            <Popover className="tooltip bottom my-1" id={tooltipPopover} popover="hint" placement="bottom">
                <PopoverContent>
                    Popover
                </PopoverContent>
            </Popover>
        </>
    )
}
