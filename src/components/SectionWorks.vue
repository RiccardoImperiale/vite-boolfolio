<script>
import { store } from '../store.js'
// import { animateText } from "../assets/gsap/animations.js";

import BouncyLine from "./BouncyLine.vue";
import ProjectsFeatured from './ProjectsFeatured.vue';
import GreetingsSection from './GreetingsSection.vue'

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default {
    name: 'SectionWorks',
    components: {
        BouncyLine,
        ProjectsFeatured,
        GreetingsSection
    },
    methods: {
        isOver(val) {
            store.isHovered = val
        },
    },
    mounted() {
        const staggerText = document.querySelectorAll('.staggerWorksSection');
        // animateText(staggerTexts);
        ScrollTrigger.create({
            trigger: staggerText,
            start: 'top center',
            end: 'top center',
            scrub: 0.2,
            markers: true,
            onEnter: () => {
                gsap.to(staggerText, { y: 0, autoAlpha: 1, duration: 0.25, stagger: 0.1, ease: "power1.out" });

            },
            onLeaveBack: () => {
                gsap.to(staggerText, { y: 200, autoAlpha: 0, duration: 0.25, stagger: -0.1, ease: "power1.in" });
            },
        });
    },
}
</script>

<template>
    <section id="works">
        <!-- <div class="color_gradient"></div> -->

        <div class="container staggerWorksSection">
            <div class="section_title">
                <div class="dot"></div>
                <div>works</div>
            </div>
        </div>
        <div ref="container" class="container staggerWorksSection">
            <div class="text no_select">
                <p @mouseover="isOver(true)" @mouseleave="isOver(false)">
                    from concept to deployment <br>
                    I bring full-stack fluency <br>
                    to every projecy.
                </p>
            </div>
        </div>

        <!-- SELECTED PROJECTS  -->
        <ProjectsFeatured class="staggerWorksSection" />

        <!-- ALL PROJECTS LINK  -->
        <router-link class="all_projects_link staggerWorksSection" to="/projects">
            <div class="link_container">
                <span class="nav_link">see all projects</span>
                <span class="nav_link">see all projects</span>
            </div>
            <div class="dot_wrapper">
                <div class="dot"></div>
            </div>
        </router-link>

        <GreetingsSection />
    </section>
</template>

<style scoped>
.staggerWorksSection {
    transform: translateY(200px);
    opacity: 0;
    visibility: hidden;
}

#works {
    padding-top: 5rem;
    margin-top: -80vh;
    /* z-index: 2; */
}

.dot {
    background-color: var(--pf-accent-b);
    width: 5px;
    height: 5px;
    margin: 2rem auto;
    aspect-ratio: 1;
    border-radius: 50%;
}

.text p {
    color: var(--pf-gray-900);
}


.all_projects_link {
    display: flex;
    text-decoration: none;
    flex-direction: column;
    background-color: var(--pf-accent-);

    .link_container {
        overflow: hidden;
        height: 55px;
        width: 220px;
        margin: auto;
        border: 1px dashed var(--pf-gray-800);
        border-radius: 55px;
        background-color: var(--pf-gray-800);
        transition: .45s ease;

        &:hover {
            background-color: var(--pf-gray-200);
            background-color: var(--pf-gray-200);
            border: 1px dashed var(--pf-gray-700);
        }

        &:hover .nav_link {
            transform: translateY(-39px);
            color: var(--pf-gray-800);
        }

        .nav_link {
            margin-top: 13px;
            text-align: center;
            display: block;
            text-decoration: none;
            color: var(--pf-gray-300);
            font-size: 1.25rem;
            transition: .3s ease;
        }

        .nav_link:nth-of-type(2) {
            padding-top: 2px;
        }
    }
}

.dot_wrapper {
    background-color: var(--pf-gray-100);
    height: 100%;
    width: 100%;
    margin: 0%;
}



/* .color_gradient,
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
    background-color: var(--pf-gray-100);
} */


/* BIG ICONS -----------------------------> */

/* .icon3d {
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
} */

/* .violet_blur3 {
    right: -40rem;
    bottom: 0rem;
} */
</style>