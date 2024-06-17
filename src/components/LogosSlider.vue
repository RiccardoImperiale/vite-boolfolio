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
            logos: [],
            perPage: 8,
            splideInstance: null,
        }
    },
    mounted() {
        this.updatePerPage();
        window.addEventListener('resize', this.updatePerPage);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updatePerPage);
        if (this.splideInstance) {
            this.splideInstance.destroy();
        }
    },
    methods: {
        initSplide() {
            if (this.splideInstance) {
                this.splideInstance.destroy();
            }

            this.splideInstance = new Splide('.splide', {
                type: 'loop',
                arrows: false,
                pagination: false,
                drag: 'free',
                focus: 'center',
                perPage: this.perPage,
                autoScroll: {
                    speed: 0.5,
                },
            });

            this.splideInstance.mount({ AutoScroll });
        },
        updatePerPage() {
            if (window.innerWidth < 700) {
                this.perPage = 3;
            } else if (window.innerWidth < 970) {
                this.perPage = 5;
            } else if (window.innerWidth < 1280) {
                this.perPage = 7;
            } else {
                this.perPage = 8;
            }

            this.initSplide();
        }
    }
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