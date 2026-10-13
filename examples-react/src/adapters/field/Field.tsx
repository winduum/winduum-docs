import { createRef, type ChangeEvent, type HTMLProps } from 'react'
import { Slot } from '@radix-ui/react-slot'
import classNames from 'classnames'
import type { ValidateFieldOptions } from 'winduum/src/components/field'
import { validateField } from 'winduum/src/components/field'

interface Props extends HTMLProps<HTMLElement> {
    asChild?: boolean
    as?: string
    validateOptions?: ValidateFieldOptions
}

export default function Field({ validateOptions, ...props }: Props) {
    const ref = createRef<HTMLElement>()
    const Comp = props.asChild ? Slot : props.as ?? 'div'

    const onChange = (event: ChangeEvent<HTMLElement>) => {
        props.onChange?.(event)
        validateField(event.currentTarget, validateOptions)
    }

    return (
        <Comp {...props} className={classNames('x-field', props.className)} ref={ref} onChange={onChange}>
            {props.children}
        </Comp>
    )
}
