<script>
import TextSlider from "./TextSlider.vue";
import { store } from '../store.js'
import InfoDot from "./InfoDot.vue";

export default {
    name: 'AppHero',
    components: {
        TextSlider,
        InfoDot
    },
    methods: {
        isCursor(val) {
            store.isCustomCursor = val
        }
    }
}
</script>

<template>
    <div @mouseover="isCursor(true)" @mouseleave="isCursor(false)">

        <div id="hero">
            <img class="violet_blur" width="600" src="/img/violet-blur.png" alt="">

            <img class="hero_img" src="/img/hero-profile.jpg" alt="fwef">
            <div class="color_filter"></div>

            <TextSlider class="hero_text_slider"
                text="Riccardo Imperiale / Full Stack Web Developer / Riccardo Imperiale / Full Stack Web Developer /" />

            <img class="blur_filter" src="/img/frame.png" alt="">

            <InfoDot class="info_dot" message="Hi, I'm Ricky... 👋" />
        </div>
    </div>

</template>

<style scoped>
#hero {
    background-color: #d4d4d4;
    /* background-color: #929292; */
    height: 900px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    width: 100vw;

    .color_filter {
        background-color: #0038FF;
        mix-blend-mode: multiply;
        position: absolute;
        inset: 0;
        z-index: 0;
    }

    .blur_filter {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 800px;
        bottom: -5rem;
    }

    .hero_img {
        height: 110%;
        transform: translate(20px, -60px);
        rotate: 3deg;
        object-fit: cover;
        object-position: center;
        display: block;
        margin: auto;
        mix-blend-mode: multiply;
    }

    .hero_text_slider {
        mix-blend-mode: color-dodge;
        z-index: 2;
    }

}

.info_dot {
    position: absolute;
}
</style>
