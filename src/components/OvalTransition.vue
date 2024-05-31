<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { store } from '../store.js';

export default {
    name: 'OvalTransition',
    data() {
        return {
            store
        }
    },
    methods: {
        animateOval() {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: this.$refs.oval,
                    start: '-800rem top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            });
            timeline.to(this.$refs.oval, {
                height: '0px'
            });
        }
    },
    mounted() {
        this.$watch(() => store.loading, () => {
            this.animateOval();
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
        background-color: var(--pf-gray-800);
        border-radius: 0 0 50% 50%;
    }
}
</style>