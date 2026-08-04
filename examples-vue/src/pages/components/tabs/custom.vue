<script setup lang="ts">
    import { ref } from 'vue'
    import { Tabs, TabsList } from '@/components/tabs'

    const tabs = ['All', 'Photos', 'Music', 'Documents']
    const tabElements = ref<HTMLElement[]>([])
    const tabPanelElements = ref<HTMLElement[]>([])
</script>

<template>
    <Tabs v-slot="{ toggleTab }" :refs="{ tabElements, tabPanelElements }">
        <TabsList class="flex gap-0 p-0 bg-transparent">
            <button
                v-for="(tab, index) in tabs"
                :key="tab"
                ref="tabElements"
                class="p-2 border-b-2 border-b-main/25 transition aria-selected:border-b-main/100"
                role="tab"
                :aria-controls="`tab-${tab.toLowerCase()}`"
                :id="tab.toLowerCase()"
                :aria-selected="index === 0 ? 'true' : 'false'"
                @click="toggleTab"
            >
                {{ tab }}
            </button>
        </TabsList>
        <div
            v-for="(tab, index) in tabs"
            :key="tab"
            ref="tabPanelElements"
            class="aria-hidden:hidden"
            role="tabpanel"
            :aria-hidden="index === 0 ? 'false' : 'true'"
            :id="`tab-${tab.toLowerCase()}`"
            :aria-labelledby="tab.toLowerCase()"
        >
            {{ tab }}
        </div>
    </Tabs>
</template>

