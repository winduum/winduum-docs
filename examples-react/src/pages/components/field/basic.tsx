import { Field } from "@/components/field"
import { Label } from "@/components/label"
import { Control } from "@/components/control"
import { Info } from "@/components/info"

export function Example() {
    return (
        <Field>
            <Label>Label</Label>
            <Control>
                <input type="text" required />
            </Control>
            <Info as="em">Info message</Info>
        </Field>
    )
}

