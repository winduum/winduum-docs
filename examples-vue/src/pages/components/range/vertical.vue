<script setup lang="ts">
    import { ref } from 'vue'
    import { Range } from '@/components/range'

    const startElement = ref<HTMLInputElement>()
</script>

<template>
    <Range v-slot="{ setValue }" :refs="{ startElement }" class="vertical h-48">
        <input ref="startElement" type="range" value="0" step="10" max="100" min="0" aria-labelledby="single" id="range-single" @input="setValue">
    </Range>

    <output class="before:content-[attr(data-unit)]" data-unit="$" aria-label="Price" id="single">10 000</output>
</template>

