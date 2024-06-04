<script>
import { store } from '../store.js'
import { animateText } from "../assets/gsap/animations.js";

import BouncyLine from "./BouncyLine.vue";
import ProjectsFeatured from './ProjectsFeatured.vue';
import GreetingsSection from './GreetingsSection.vue'

export default {
    name: 'SectionWorks',
    data() {
        return {
            store
        }
    },
    components: {
        BouncyLine,
        ProjectsFeatured,
        GreetingsSection,
    },
    mounted() {
        const staggerTexts = document.querySelectorAll('.staggerWorksSection');
        animateText(staggerTexts, 'top center+=100px', 0.6);
    },
}
</script>

<template>
    <section id="works">
        <div class="container staggerWorksSection">
            <div class="section_title">
                <div class="dot"></div>
                <div>works</div>
            </div>
        </div>
        <div ref="container" class="container staggerWorksSection">
            <div class="text no_select">
                <p @mouseover="store.isBiggerCursor = true" @mouseleave="store.isBiggerCursor = false">
                    from concept to deployment <br>
                    I bring full-stack fluency <br>
                    to every projecy.
                </p>
            </div>
        </div>

        <!-- SELECTED PROJECTS  -->
        <ProjectsFeatured class="staggerWorksSection" />

        <!-- ALL PROJECTS LINK  -->
        <router-link class="all_projects_link staggerWorksSection" :to="{ name: 'projects' }">
            <div class="link_container">
                <span class="nav_link">see all projects</span>
                <span class="nav_link">see all projects</span>
            </div>
            <div class="dot_wrapper">
                <div class="dot"></div>
            </div>
        </router-link>
    </section>
    <GreetingsSection />
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
    z-index: 3;

    .section_title {
        color: var(--pf-gray-300);
    }

    .dot {
        background-color: var(--pf-accent-b);
        width: 6px;
        height: 6px;
        margin-bottom: 1rem;
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
        width: fit-content;
        margin: auto;

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
                background-color: transparent;
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
        display: flex;
        justify-content: center;
        margin: 2rem 0;
    }

}
</style>