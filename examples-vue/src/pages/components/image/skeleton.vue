<script setup lang="ts">
    import { Image } from '@/components/image'
</script>

<template>
    <Image class="before:skeleton">
        <img class="aspect-[3/2]" src="https://picsum.photos/seed/picsum/300/200" loading="lazy" alt="">
    </Image>
</template>
