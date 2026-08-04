<script setup lang="ts">
    import { Compare } from '@/components/compare'
</script>

<template>
    <Compare class="rounded w-fit accent-dark">
        <input type="range" step="0.1" aria-hidden="true">
        <div class="x-button circle" aria-hidden="true">
            <svg class="size-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none">
                <path class="-translate-x-1.5 scale-75 origin-center" stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                <path class="translate-x-1.5 scale-75 origin-center" stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </div>
        <div class="x-image">
            <div class="bg-primary text-light text-9xl font-black grid place-content-center p-6">PRIMARY</div>
            <div class="bg-main text-body text-9xl font-black grid place-content-center p-6">PRIMARY</div>
        </div>
    </Compare>
</template>

