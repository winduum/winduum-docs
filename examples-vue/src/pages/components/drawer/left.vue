<script setup lang="ts">
  import { ref, useId } from 'vue'
  import { Drawer, DrawerContent, DrawerScroller } from '@/components/drawer'
  import { Button } from '@/components/button'
  
  const drawerLeft = useId()
  const contentElement = ref<HTMLElement>()
</script>

<template>
  <Button command="show-modal" :commandfor="drawerLeft">Show drawer</Button>
  <Drawer :id="drawerLeft" closedby="any" :refs="{ contentElement }">
    <DrawerScroller class="snap-x snap-mandatory">
      <DrawerContent ref="contentElement" as="nav">
        Drawer content
        <Button class="muted" command="request-close" :commandfor="drawerLeft">
          Close drawer
        </Button>
      </DrawerContent>
    </DrawerScroller>
  </Drawer>
</template>

