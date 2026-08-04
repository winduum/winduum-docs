<script setup lang="ts">
    import { Details } from '@/components/details'
</script>

<template>
    <Details class="group bg-body-secondary p-4 rounded-md">
        <summary class="w-fit flex">
            <label class="x-check">
                <input type="checkbox" autocomplete="off">
                Fill more
            </label>
        </summary>
        <div class="x-control max-w-96 mt-4">
            <input>
        </div>
    </Details>
</template>

