<script setup lang="ts">
    import { ref } from 'vue'
    import { Carousel } from '@/components/carousel-experimental'

    const contentElement = ref<HTMLElement>()
    const markerGroupElement = ref<HTMLElement>()
    const prevElement = ref<HTMLButtonElement>()
    const nextElement = ref<HTMLButtonElement>()

    const slides = [1, 2, 3, 4, 5, 6]
</script>

<template>
    <Carousel
        v-slot="{ scrollPrev, scrollNext, toggleScrollState, scrollToMarker }"
        :refs="{ contentElement, markerGroupElement, prevElement, nextElement }"
        class="flex flex-col gap-4"
        role="region"
        aria-roledescription="carousel"
        aria-label="Carousel gallery"
    >
        <div class="flex gap-4 items-center">
            <button ref="prevElement" class="x-button circle muted" aria-label="Prev" disabled @click="scrollPrev">
                Prev
            </button>
            <div ref="contentElement" class="x-carousel-experimental-content gap-4 w-full" tabindex="-1" @scroll="toggleScrollState">
                <div
                    v-for="slide in slides"
                    :key="slide"
                    class="x-image rounded-md"
                    :id="`slide-${slide}`"
                    :data-snapped="slide === 1 ? '' : undefined"
                >
                    <img src="https://placehold.co/320x240" alt="" loading="lazy" width="320" height="240">
                </div>
            </div>
            <button ref="nextElement" class="x-button circle muted" aria-label="Next" @click="scrollNext">
                Next
            </button>
        </div>
        <nav ref="markerGroupElement" class="x-carousel-experimental-marker-group justify-center flex gap-1.5 py-4" aria-label="Carousel navigation">
            <a
                v-for="slide in slides"
                :key="slide"
                :href="`#slide-${slide}`"
                class="x-carousel-experimental-marker"
                :aria-label="`Slide ${slide}`"
                :aria-current="slide === 1 ? 'true' : undefined"
                @click="scrollToMarker"
            ></a>
        </nav>
    </Carousel>
</template>

