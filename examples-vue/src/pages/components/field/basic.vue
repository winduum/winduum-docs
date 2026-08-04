<script setup lang="ts">
    import { Field } from '@/components/field'
    import { Label } from '@/components/label'
    import { Control } from '@/components/control'
    import { Info } from '@/components/info'
</script>

<template>
    <Field>
        <Label>Label</Label>
        <Control>
            <input type="text" required>
        </Control>
        <Info as="em">Info message</Info>
    </Field>
</template>

