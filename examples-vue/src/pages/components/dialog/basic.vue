<script setup lang="ts">
    import { useId } from 'vue'
    import { Button } from '@/components/button'
    import { Dialog, DialogContent } from '@/components/dialog'
    import { Heading } from '@/components/heading'

    const dialogBasic = useId()
</script>

<template>
    <Button command="show-modal" :commandfor="dialogBasic">
        Open Dialog
    </Button>
    <Dialog :id="dialogBasic" closedby="any">
        <DialogContent>
            <Heading>Hello there!</Heading>
            <Button class="muted accent-main" command="close" :commandfor="dialogBasic">
                Close me!
            </Button>
        </DialogContent>
    </Dialog>
</template>
