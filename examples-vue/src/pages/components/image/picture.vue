<script setup lang="ts">
    import { Image } from '@/components/image'
</script>

<template>
    <Image class="before:skeleton" as="picture">
        <source srcset="https://placehold.co/250x250/333333/webp" media="(min-width: 40rem)">
        <img class="aspect-[3/2]" src="https://placehold.co/150x150/777777/webp" loading="lazy" alt="">
    </Image>
</template>

