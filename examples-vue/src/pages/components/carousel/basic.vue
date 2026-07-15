<script setup lang="ts">
    import { ref } from 'vue'
    import { Carousel } from '@/components/carousel'

    const contentElement = ref<HTMLElement>()
    const prevElement = ref<HTMLButtonElement>()
    const nextElement = ref<HTMLButtonElement>()
</script>

<template>
    <Carousel
        v-slot="{ scrollPrev, scrollNext, onScroll }"
        :refs="{ contentElement, prevElement, nextElement }"
        class="flex gap-4 items-center w-full"
    >
        <button ref="prevElement" class="x-button circle muted" aria-label="Prev" disabled @click="scrollPrev">
            Prev
        </button>
        <div ref="contentElement" class="x-carousel-content gap-2 w-full" tabindex="-1" @scroll="onScroll">
            <div class="x-image w-full rounded-md aspect-square">
                <img src="https://placehold.co/512" alt="" loading="lazy">
            </div>
            <div class="x-image w-full rounded-md aspect-square">
                <img src="https://placehold.co/512" alt="" loading="lazy">
            </div>
        </div>
        <button ref="nextElement" class="x-button circle muted" aria-label="Next" @click="scrollNext">
            Next
        </button>
    </Carousel>
</template>

