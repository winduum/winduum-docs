<script setup lang="ts">
    import { Form } from '@/components/form'
    import { Field } from '@/components/field'
    import { Label } from '@/components/label'
    import { Control } from '@/components/control'
    import { Button } from '@/components/button'
</script>

<template>
    <Form class="grid grid-cols-12 gap-4">
        <Field class="col-span-4">
            <Label for="given-name">First name</Label>
            <Control>
                <input id="given-name" name="given-name" autocomplete="given-name" required>
            </Control>
        </Field>
        <Field class="col-span-4">
            <Label for="family-name">Last name</Label>
            <Control>
                <input id="family-name" name="family-name" autocomplete="family-name" required>
            </Control>
        </Field>
        <Field class="col-span-4">
            <Label for="email">Email</Label>
            <Control>
                <input type="email" id="email" name="email" autocomplete="email" required>
            </Control>
        </Field>
        <Field class="col-span-4 items-start">
            <Button type="submit">Submit</Button>
        </Field>
    </Form>
</template>

