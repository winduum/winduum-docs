<script setup>
    defineProps(['href'])
</script>

<template>
    <a :href="href" target="_blank" rel="noreferrer" class="winduum-gh-link">View Source&nbsp;<svg><use href="#icon-gh" /></svg></a>
</template>
