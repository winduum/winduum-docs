<script setup>
    import { useId } from 'vue'
    import { Button } from '@/components/button'
    import { Popover, PopoverContent } from '@/components/popover'

    const popoverApi = useId()
</script>

<template>
    <div class="w-full flex flex-col items-center">
        <Button command="toggle-popover" :commandfor="popoverApi">
            Popover
        </Button>
        <Popover class="bottom my-2" popover :id="popoverApi" placement="bottom">
            <PopoverContent class="shadow dark:bg-body-secondary p-2 w-32 flex flex-col">
                <Button class="ghosted accent-main justify-start w-full">Item 1</Button>
                <Button class="ghosted accent-main justify-start w-full">Item 2</Button>
            </PopoverContent>
        </Popover>
    </div>
</template>
