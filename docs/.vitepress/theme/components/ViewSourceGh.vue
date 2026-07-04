<script setup>
    defineProps(['href', 'path'])
</script>

<template>
    <a :href="href ? href : `https://github.com/winduum/winduum/blob/next/${path}`" target="_blank" rel="noreferrer" class="winduum-gh-link">View Source&nbsp;<svg><use href="#icon-gh" /></svg></a>
</template>
