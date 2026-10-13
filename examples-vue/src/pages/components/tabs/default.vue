<script setup lang="ts">
    import { ref } from 'vue'
    import { Tabs, TabsList } from '@/components/tabs'

    const tabs = ['All', 'Photos', 'Music', 'Documents']
    const tabElements = ref<HTMLElement[]>([])
    const tabPanelElements = ref<HTMLElement[]>([])
</script>

<template>
    <Tabs v-slot="{ toggleTab }" :refs="{ tabElements, tabPanelElements }">
        <TabsList class="accent-main">
            <button
                v-for="(tab, index) in tabs"
                :key="tab"
                ref="tabElements"
                class="x-button ghosted aria-selected:[--x-button-background-color-opacity:100%] aria-selected:[--x-button-color:var(--color-accent-foreground)]"
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

