<script>

export default {
    name: 'NotFound',
    components: {
    }
}
</script>

<template>
    <div class="container not_found">
        <p>not found</p>
        <router-link :to="{ name: 'home' }">Go Back Home</router-link>
    </div>
</template>

<style scoped>
.not_found {
    padding: 5rem 0;
}
</style>
