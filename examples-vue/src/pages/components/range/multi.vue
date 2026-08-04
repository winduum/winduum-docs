<script setup lang="ts">
    import { ref } from 'vue'
    import { Range } from '@/components/range'

    const startElement = ref<HTMLInputElement>()
    const endElement = ref<HTMLInputElement>()
</script>

<template>
    <Range v-slot="{ setValue }" :refs="{ startElement, endElement }" class="accent-warning">
        <input ref="startElement" type="range" value="0" step="100" max="10000" min="0" id="range-from" aria-labelledby="from" @input="setValue">
        <input ref="endElement" type="range" value="10000" step="100" max="10000" min="0" id="range-to" aria-labelledby="to" @input="setValue">
    </Range>

    <div class="flex-between items-center">
        <output class="before:content-[attr(data-unit)]" data-unit="$" aria-label="Price from" id="from">0</output>
        <output class="before:content-[attr(data-unit)]" data-unit="$" aria-label="Price to" id="to">10 000</output>
    </div>
</template>

