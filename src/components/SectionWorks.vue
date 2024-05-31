<script>
import { store } from '../store.js'
import BouncyLine from "./BouncyLine.vue";
import OvalTransition from "./OvalTransition.vue";
import TextSlider from "./TextSlider.vue";
import AppProjects from './AppProjects.vue';

export default {
    name: 'SectionWorks',
    components: {
        BouncyLine,
        OvalTransition,
        TextSlider,
        AppProjects
    },
    methods: {
        isOver(val) {
            store.isHovered = val
        },
        isCursor(val) {
            store.isCustomCursor = val
        }
    },
}
</script>

<template>
    <section id="works">
        <div class="color_gradient"></div>

        <div class="container">
            <div class="section_title">
                <div class="dot"></div>
                <div>works</div>
            </div>
        </div>
        <div ref="container" class="container">
            <div class="text no_select">
                <p @mouseover="isOver(true)" @mouseleave="isOver(false)">
                    from concept to deployment <br>
                    I bring full-stack fluency <br>
                    to every projecy.
                </p>
            </div>
        </div>

        <!-- <AppProjects @mouseover="isCursor(true)" @mouseleave="isCursor(false)" /> -->
        <AppProjects />

        <div class="color_gradient_reverse"></div>

        <div class="text_slider">
            <TextSlider @mouseover="isOver(true)" @mouseleave="isOver(false)"
                text="Thanks For Watching / Thanks For Watching / Thanks For Watching / Thanks For Watching /" />
        </div>

        <!-- btn -->
        <button class="btn" @mouseover="isCursor(true)" @mouseleave="isCursor(false)">
            <a href="https://github.com/RiccardoImperiale" target="_blank">
                <div class="btn_in">
                    <img width="25" src="/img/logo-gray100.png" alt="site logo">
                </div>
                <img class="gh_logo" width="76" src="/img/logo-github-wt.png" alt="git hub logo">
            </a>
        </button>

        <!-- big icon -->
        <img class="icon3d" width="370" src="/img/3d-icon-2.png" alt="spaceship icon">
        <img class="violet_blur" width="600" src="/img/violet-blur.png" alt="">
        <img class="violet_blur2" width="900" src="/img/violet-blur.png" alt="">
        <!-- <img class="violet_blur3" width="900" src="/img/blue-blur.png" alt=""> -->
        <!-- <img class="violet_blur3" width="900" src="/img/violet-blur.png" alt=""> -->

    </section>
    <OvalTransition />
</template>

<style scoped>
#works {
    padding-top: 6rem;
    margin-top: -14rem;
    padding-bottom: 6rem;
    background-color: var(--pf-gray-900);
    z-index: 2;
}

.text_slider {
    margin-top: 20rem;
    position: relative;
    mix-blend-mode: color-dodge;
}

.btn {
    transition: .25s ease;
    background-color: transparent;

    & a {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btn_in {
        transform: translateX(0);
        background-color: var(--pf-accent);
        width: 75px;
        height: 75px;
        border-radius: 50%;
        z-index: 1;
    }

    .gh_logo {
        position: absolute;
        top: 80px;
        transition: .45s ease;
    }

    &:hover .btn_in {
        transform: translateY(100%);
        /* scale: 2; */
    }

    &:hover .gh_logo {
        top: -2px;
    }
}


/* GRADIENT -----------------------------> */
.color_gradient,
.color_gradient_reverse {
    position: absolute;
    width: 100%;
}

.color_gradient {
    height: 550px;
    top: -550px;
    background-image: linear-gradient(var(--pf-gray-800), var(--pf-gray-900));
}

.color_gradient_reverse {
    z-index: -1;
    height: 650px;
    bottom: 0;
    background-image: linear-gradient(var(--pf-gray-900), var(--pf-gray-800));
}


/* BIG ICONS -----------------------------> */

.icon3d {
    right: -6rem;
    top: -8rem;
    filter: drop-shadow(70px 20px 10px rgba(0, 0, 0, 0.198));
}

.violet_blur {
    right: -22rem;
    top: -16rem;
}

.violet_blur2 {
    left: -30rem;
    top: -10rem;
}

/* .violet_blur3 {
    right: -40rem;
    bottom: 0rem;
} */
</style>