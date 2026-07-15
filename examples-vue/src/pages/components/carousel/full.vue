<script setup lang="ts">
    import { ref } from 'vue'
    import { Carousel } from '@/components/carousel'

    const contentElement = ref<HTMLElement>()
    const prevElement = ref<HTMLButtonElement>()
    const nextElement = ref<HTMLButtonElement>()
    const paginationElement = ref<HTMLElement>()

    const slides = [1, 2, 3, 4, 5, 6]
</script>

<template>
    <Carousel
        v-slot="{ scrollPrev, scrollNext, onScroll }"
        :refs="{ contentElement, prevElement, nextElement, paginationElement }"
        class="flex flex-col gap-4"
        role="region"
        aria-roledescription="carousel"
        aria-label="Carousel gallery"
    >
        <div class="flex gap-4 items-center">
            <button ref="prevElement" class="x-button circle muted" aria-label="Prev" disabled @click="scrollPrev">
                Prev
            </button>
            <div
                ref="contentElement"
                class="x-carousel-content gap-4 w-full"
                tabindex="-1"
                @scroll="onScroll($event, { pagination: { element: paginationElement } })"
            >
                <div v-for="slide in slides" :key="slide" class="x-image rounded-md w-full">
                    <img src="https://placehold.co/160x240" alt="" loading="lazy" width="160" height="240">
                </div>
            </div>
            <button ref="nextElement" class="x-button circle muted" aria-label="Next" @click="scrollNext">
                Next
            </button>
        </div>
        <div ref="paginationElement" class="justify-center flex gap-1.5 h-4 py-4" aria-hidden="true">
            <div
                v-for="(slide, index) in slides"
                :key="slide"
                class="dot size-2 bg-body-secondary transition data-active:bg-accent"
                :data-active="index === 0 ? true : undefined"
            ></div>
        </div>
    </Carousel>
</template>

