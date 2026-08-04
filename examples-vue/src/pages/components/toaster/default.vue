<script setup lang="ts">
    import { ref } from 'vue'
    import { Button } from '@/components/button'
    import { Title } from '@/components/title'
    import { Text } from '@/components/text'
    import { Toast, ToastContent } from '@/components/toast'
    import { Toaster } from '@/components/toaster'

    const toasts = ref<number[]>([Date.now()])

    const closeToast = (toast: number) => {
        toasts.value = toasts.value.filter(item => item !== toast)
    }

    const closeToaster = () => {
        toasts.value = []
    }
</script>

<template>
    <Button class="muted" @click="closeToaster">Close all</Button>

    <Toaster class="items-end">
        <Toast v-for="toast in toasts" :key="toast" @close="closeToast(toast)">
            <ToastContent>
                <div class="flex-col">
                    <Title>Hello toast</Title>
                    <Text>Amazing toast</Text>
                </div>
                <Button class="muted ml-auto" data-action="closeToast">Close</Button>
            </ToastContent>
        </Toast>
    </Toaster>
</template>

