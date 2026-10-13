<script setup lang="ts">
    import { useId } from 'vue'
    import { Button } from '@/components/button'
    import { Popover, PopoverContent } from '@/components/popover'

    const tooltipPopover = useId()
</script>

<template>
    <Button :interestfor="tooltipPopover" style="interest-delay: 0s;">
        Tooltip
    </Button>
    <Popover class="tooltip bottom my-1" :id="tooltipPopover" popover="hint" placement="bottom">
        <PopoverContent>
            Popover
        </PopoverContent>
    </Popover>
</template>
