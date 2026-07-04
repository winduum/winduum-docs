<script setup>
    defineProps(['path', 'name', 'url'])
</script>

<template>
    <code>{{name}}</code>&nbsp;
    <a :href="url ? url : 'https://github.com/winduum/winduum/blob/next/src/' + path + '/' + name + '.css'" target="_blank" rel="noreferrer" class="winduum-gh-link"><svg><use href="#icon-gh" /></svg></a>
</template>
