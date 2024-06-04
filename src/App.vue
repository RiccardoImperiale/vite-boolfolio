<script>
import AppHeader from './components/AppHeader.vue'
import CustomCursor from './components/CustomCursor.vue'

export default {
    name: 'App',
    components: {
        AppHeader,
        CustomCursor
    },
}
</script>

<template>
    <AppHeader />
    <main>
        <RouterView />
    </main>
    <CustomCursor />
</template>

<style scoped></style>