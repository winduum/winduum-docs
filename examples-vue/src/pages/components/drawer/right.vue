<script setup lang="ts">
    import { ref, useId } from 'vue'
    import { Drawer, DrawerContent, DrawerScroller } from '@/components/drawer'
    import { Button } from '@/components/button'

    const drawerId = useId()
    const contentElement = ref<HTMLElement>()
</script>

<template>
    <Button command="show-modal" :commandfor="drawerId">Show drawer</Button>
    <Drawer :id="drawerId" closedby="any" placement="right" style="animation-direction: reverse" :refs="{ contentElement }">
        <DrawerScroller class="after:order-first snap-x snap-mandatory">
            <DrawerContent ref="contentElement" as="nav">
                Drawer content
                <Button class="muted" command="request-close" :commandfor="drawerId">
                    Close drawer
                </Button>
            </DrawerContent>
        </DrawerScroller>
    </Drawer>
</template>

