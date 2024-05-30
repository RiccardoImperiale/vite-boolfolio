<script>
import { SplideSlide } from '@splidejs/vue-splide';
import Splide from '@splidejs/splide';
import '@splidejs/vue-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export default {
    components: {
        Splide,
        SplideSlide,
    },
    data() {
        return {
            logos: [

            ]
        }
    },
    mounted() {
        const splide = new Splide('.splide', {
            type: 'loop',
            arrows: false,
            pagination: false,
            drag: 'free',
            // gap: '1rem',
            focus: 'center',
            perPage: 8,
            autoScroll: {
                speed: 0.5,
            },
        });

        splide.mount({ AutoScroll });
    },
};
</script>

<template>
    <section class="splide" aria-label="Beautiful Logos">
        <div class="splide__track">
            <ul class="splide__list">
                <SplideSlide v-for="n in 14" :key="n">
                    <div class="slide_container">
                        <img :src="`/img/logos/logo${n}.png`" alt="Sample Image">
                    </div>
                </SplideSlide>
            </ul>
        </div>
    </section>
</template>

<style scoped>
.splide {
    width: 100%;
    cursor: grab;
}

img {
    filter: grayscale(1);
    transition: .5s ease;

    &:hover {
        filter: grayscale(0);
        scale: 1.8;
    }
}

.slide_container {
    width: 20px;
    height: 130px;
    display: flex;
    justify-content: center;
}
</style>