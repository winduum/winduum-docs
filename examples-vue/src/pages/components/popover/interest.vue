<script setup lang="ts">
    import { useId } from 'vue'
    import { Button } from '@/components/button'
    import { Popover, PopoverContent } from '@/components/popover'

    const popoverInterest = useId()
</script>

<template>
    <Button :interestfor="popoverInterest">Popover</Button>
    <Popover class="bottom my-2" popover="hint" :id="popoverInterest">
        <PopoverContent class="shadow dark:bg-body-secondary p-2 w-32 flex flex-col">
            <Button class="ghosted accent-main justify-start w-full">Item 1</Button>
            <Button class="ghosted accent-main justify-start w-full">Item 2</Button>
        </PopoverContent>
    </Popover>
</template>
