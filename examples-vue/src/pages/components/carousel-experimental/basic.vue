<script setup lang="ts">
    import { ref } from 'vue'
    import { Carousel } from '@/components/carousel-experimental'

    const contentElement = ref<HTMLElement>()
    const prevElement = ref<HTMLButtonElement>()
    const nextElement = ref<HTMLButtonElement>()
</script>

<template>
    <Carousel
        v-slot="{ scrollPrev, scrollNext, toggleScrollState }"
        :refs="{ contentElement, prevElement, nextElement }"
        class="flex gap-4 items-center w-full"
    >
        <button ref="prevElement" class="x-button circle muted" aria-label="Prev" disabled @click="scrollPrev">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
        </button>
        <div ref="contentElement" class="x-carousel-experimental-content gap-2 w-full" tabindex="-1" @scroll="toggleScrollState">
            <div class="x-image w-full rounded-md aspect-square">
                <img src="https://placehold.co/512" alt="" loading="lazy">
            </div>
            <div class="x-image w-full rounded-md aspect-square">
                <img src="https://placehold.co/512" alt="" loading="lazy">
            </div>
        </div>
        <button ref="nextElement" class="x-button circle muted" aria-label="Next" @click="scrollNext">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
        </button>
    </Carousel>
</template>
