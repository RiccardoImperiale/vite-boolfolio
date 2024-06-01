<script>
import { store } from '../store.js';
import { animateOval } from '../assets/gsap/animations.js';

export default {
    name: 'OvalTransition',
    data() {
        return {
            store
        }
    },
    mounted() {
        this.$watch(() => store.loading, () => {
            animateOval(this.$refs.oval);
        });
    },
}
</script>

<template>
    <div ref="oval" class="circle_container">
        <div class="circle_page_end"></div>
    </div>
</template>

<style scoped>
.circle_container {
    position: relative;
    height: 50px;
    width: 100%;
    overflow-x: clip;
    z-index: 1;

    .circle_page_end {
        box-shadow: 0px 40px 60px rgba(0, 0, 0, 0.75);
        position: absolute;
        height: 1000%;
        width: 120%;
        left: -10%;
        background-color: var(--pf-gray-100);
        border-radius: 0 0 50% 50%;
    }
}
</style>