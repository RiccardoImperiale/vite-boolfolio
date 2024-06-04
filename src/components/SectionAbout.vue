<script>
import BouncyLine from "./BouncyLine.vue";
import { store } from '../store.js'
import LogosSlider from "./LogosSlider.vue";
import { animateButton, animateText } from "../assets/gsap/animations.js";
import OvalTransition from "./OvalTransition.vue";

export default {
    name: 'SectionAbout',
    data() {
        return {
            store
        }
    },
    components: {
        BouncyLine,
        LogosSlider,
        OvalTransition
    },
    mounted() {
        const staggerTexts = document.querySelectorAll('.staggerAboutSection');
        // const staggerIcons = document.querySelectorAll('.staggerIcon');

        // animateIcons(staggerIcons);
        animateText(staggerTexts, 'top bottom-=10px', 0.25);
        animateButton(this.$refs.button, 'top bottom-=2px');
    },
}
</script>

<template>
    <section ref="aboutSection" id="about">
        <div class="container staggerAboutSection">
            <div class="section_title">
                <div class="dot"></div>
                <div>about</div>
            </div>
        </div>
        <div class="container staggerAboutSection">
            <div class="text no_select">
                <p @mouseover="store.isBiggerCursor = true" @mouseleave="store.isBiggerCursor = false">
                    Web Developer
                    with a flair for<br> creating engaging
                    and interactive <br>web
                    experiences.
                </p>
            </div>
        </div>

        <div id="zzz" ref="button" class="btn_wrapper">
            <button class="btn">
                <div class="btn_in">
                    <!-- <span class="text_left">Download</span> -->
                    <img width="25" src="/img/logo-gray100.png" alt="">
                    <span class="text_right">Download Full CV</span>
                </div>
            </button>
        </div>

        <!-- logos -->
        <div class="container">
            <BouncyLine lineColor="var(--pf-gray-300)" />
        </div>
        <div class="logos">
            <LogosSlider @mouseover="store.isCursorHidden = true" @mouseleave="store.isCursorHidden = false" />
        </div>
        <div class="container">
            <BouncyLine lineColor="var(--pf-gray-300)" />
        </div>

    </section>
    <div class="bg-helper"></div>
</template>

<style scoped>
#about {
    padding-top: 6rem;
    padding-bottom: 10rem;
    z-index: 2;
}

.bg-helper {
    background-color: var(--pf-gray-800);
    position: absolute;
    height: 1900px;
    width: 100%;
    bottom: -95rem;
    z-index: -1;
}

.btn_wrapper,
.staggerAboutSection {
    transform: translateY(200px);
    opacity: 0;
    visibility: hidden;
}

.staggerIcon {
    transform: translateX(-200px);
    opacity: 0;
    visibility: hidden;
}

.btn {
    margin-bottom: 9rem;

    .btn_in {
        transform: translateX(74px);
        gap: 1rem;
        transition: .5s ease;
    }

    .text_right {
        transform: translateX(50px);
        transition: .5s ease;
        font-size: 1rem;
    }

    &:hover {
        width: 280px;
        background-color: var(--pf-gray-700);
        z-index: 0;
    }

    &:hover .btn_in {
        transform: translateX(0px);
    }

    &:hover .btn_in .text_right {
        transform: translateX(10px);
    }
}

p {
    position: relative;
}

.logos {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 22px;
}

.icon3d {
    left: -1rem;
    top: 6.5rem;
    filter: drop-shadow(-30px 70px 10px rgba(0, 0, 0, 0.198));
}

.violet_blur {
    left: -22rem;
    top: 0;
}
</style>