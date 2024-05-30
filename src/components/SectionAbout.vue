<script>
import BouncyLine from "./BouncyLine.vue";
import { store } from '../store.js'
import LogosSlider from "./LogosSlider.vue";


export default {
    name: 'SectionAbout',
    components: {
        BouncyLine,
        LogosSlider
    },
    methods: {
        isOver(val) {
            store.isHovered = val
        },
        isCursor(val) {
            store.isCustomCursor = val
        }
    }
}
</script>

<template>
    <section id="about">
        <div class="container">
            <div class="section_title">
                <div class="dot"></div>
                <div>about</div>
                <!-- <img height="35" src="/img/about.png" alt="about title"> -->
            </div>
        </div>
        <div ref="container" class="container">
            <div class="text no_select">
                <p @mouseover="isOver(true)" @mouseleave="isOver(false)">
                    Web Developer
                    with a flair for<br> creating engaging
                    and interactive <br>web
                    experiences.
                </p>
            </div>
        </div>

        <button class="btn">
            <div class="btn_in">
                <span class="name">Download</span>
                <img width="25" src="/img/logo-gray100.png" alt="">
                <span class="location">Full CV</span>
            </div>
        </button>

        <!-- logos -->
        <div class="container">
            <BouncyLine lineColor="var(--pf-gray-300)" />
        </div>
        <div class="logos">
            <LogosSlider @mouseover="isCursor(true)" @mouseleave="isCursor(false)" />
        </div>
        <div class="container">
            <BouncyLine lineColor="var(--pf-gray-300)" />
        </div>

        <!-- big icon -->
        <img class="icon3d" width="270" src="/img/3d-icon-1.png" alt="spaceship icon">
        <img class="violet_blur" width="600" src="/img/violet-blur.png" alt="">
    </section>
</template>

<style scoped>
#about {
    padding-top: 6rem;
    padding-bottom: 20rem;
    z-index: 3;
}


.btn {
    margin-bottom: 9rem;

    .name {
        transform: translateX(-150px);
        transition: .5s ease;
    }

    .location {
        transform: translateX(150px);
        transition: .5s ease;
    }

    &:hover {
        width: 350px;
        background-color: var(--pf-gray-700);
        z-index: 0;
    }

    &:hover .btn_in {
        transform: translateX(0px);
    }

    &:hover .btn_in .name {
        transform: translateX(0);
    }

    &:hover .btn_in .location {
        transform: translateX(0);
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