import { Form } from '@/components/form'
import { Field } from '@/components/field'
import { Label } from '@/components/label'
import { Control } from '@/components/control'
import { Button } from '@/components/button'

export function Example() {
    return (
        <Form className="grid grid-cols-12 gap-4">
            <Field className="col-span-4">
                <Label htmlFor="given-name">First name</Label>
                <Control>
                    <input id="given-name" name="given-name" autoComplete="given-name" required />
                </Control>
            </Field>
            <Field className="col-span-4">
                <Label htmlFor="family-name">Last name</Label>
                <Control>
                    <input id="family-name" name="family-name" autoComplete="family-name" required />
                </Control>
            </Field>
            <Field className="col-span-4">
                <Label htmlFor="email">Email</Label>
                <Control>
                    <input type="email" id="email" name="email" autoComplete="email" required />
                </Control>
            </Field>
            <Field className="col-span-4 items-start">
                <Button type="submit">Submit</Button>
            </Field>
        </Form>
    )
}

