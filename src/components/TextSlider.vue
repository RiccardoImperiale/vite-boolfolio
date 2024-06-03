<script>
// import { parallax, textSlideLoop } from "../assets/gsap/animations.js";
import { textSlideLoop } from "../assets/gsap/animations.js";

import { gsap } from "gsap";

export default {
    name: 'TextSlider',
    props: {
        text: String,
        color: String
    },
    data() {
        return {
            xPercent: 0,
            direction: 1,
        }
    },
    methods: {
        animation() {
            if (!this.$refs.firstText || !this.$refs.secondText) {
                return;
            }

            if (this.xPercent <= -100) {
                this.xPercent = 0;
            }
            if (this.xPercent > 0) {
                this.xPercent = -100;
            }
            gsap.set(this.$refs.firstText, { xPercent: this.xPercent })
            gsap.set(this.$refs.secondText, { xPercent: this.xPercent })
            this.xPercent += 0.025 * this.direction;
            requestAnimationFrame(this.animation)
        },
        updateDirection(self) {
            this.direction = self.direction * -1;
        }
    },
    mounted() {
        requestAnimationFrame(this.animation)
        // parallax(this.$refs.textSlider, 'top top+=700px', -50, 5)
        textSlideLoop(this.$refs.slider, this.updateDirection)
    }
}
</script>

<template>
    <div ref="textSlider" class="slider_container no_select">
        <div ref="slider" class="slider">
            <p :style="{ color: color }" ref="firstText"> {{ text }} </p>
            <p :style="{ color: color }" ref="secondText"> {{ text }} </p>
        </div>
    </div>
</template>

<style scoped>
.slider_container {
    position: absolute;
    bottom: 6rem;

    .slider {
        position: relative;
        white-space: nowrap;
        display: flex;
        align-items: center;
    }

    .slider p {
        font-weight: 700;
        color: var(--pf-gray-100);
        font-size: 5rem;
        position: relative;
        padding-right: 1.6rem;
    }

    .slider p:nth-of-type(2) {
        position: absolute;
        left: 100%;
    }
}
</style>
