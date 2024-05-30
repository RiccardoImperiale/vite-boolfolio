<script>
import BouncyLine from "./BouncyLine.vue";
import { store } from '../store.js'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default {
    name: 'SectionAbout',
    components: {
        BouncyLine
    },
    methods: {
        setIsHover(isHovered) {
            store.isHovered = isHovered;
        },
    },
    mounted() {
        store.maskRef = this.$refs.mask;

        // ScrollTrigger.create({
        //     trigger: this.$refs.skills,
        //     start: 'top 30%',
        //     scrub: true,
        //     onEnter: () => {
        //         gsap.to(this.$refs.skills, {
        //             opacity: 1,
        //             duration: .5,
        //             ease: 'power1.inOut'
        //         });
        //     },
        //     onLeaveBack: () => {
        //         gsap.to(this.$refs.skills, {
        //             opacity: 0,
        //             duration: .5,
        //             ease: 'power1.inOut'
        //         });
        //     },
        //     markers: true
        // })



    },
}
</script>

<template>
    <section ref="skills" id="skills">
        <div class="container">
            <div ref="title" class="title">
                <img height="50" src="/img/skills.png" alt="skills title">
                <span class="dot">.</span>
            </div>
            <div ref="text" class="text_skills">
                <div class="text no_select">
                    <p @mouseover="setIsHover(true)" @mouseleave="setIsHover(false)">
                        From concept to deployment,<br> I bring
                        <span class="fluo_hover">full-stack</span> fluency <br> to every <span
                            class="fluo_hover">project</span>.
                    </p>
                </div>
            </div>
        </div>
        <div ref="logoBanner" class="logo_banner">
            <div class="container">
                <BouncyLine lineColor="var(--pf-gray-300)" />
            </div>
            <div class="logos">

            </div>
            <div class="container">
                <BouncyLine lineColor="var(--pf-gray-300)" />
            </div>
        </div>
        <button class="btn">
            <div class="btn_in">
                <span class="name">Download</span>
                <img width="35" src="/img/logo-gray100.png" alt="">
                <span class="location">Full CV</span>
            </div>
        </button>

    </section>

</template>

<style scoped>
#skills {
    padding-top: 9rem;
    /* background-color: var(--pf-gray-800); */
    background-color: transparent;
    /* transform: translateY(-50%);
    opacity: 0; */
}

.title {
    text-align: center;

    .dot {
        font-size: 5rem;
        color: var(--pf-accent);
        position: relative;
        right: 5px;
        bottom: 1px;
    }
}

.text_skills {
    position: relative;
    display: flex;
    justify-content: center;
}

.text {
    text-align: center;
    padding-top: 3rem;
    padding-bottom: 6rem;
    display: flex;
    justify-content: center;

    /* filter: blur(2px);

    &:hover {
        filter: blur(0);
    } */

    & p {
        font-size: 3rem;
        font-weight: 600;
        color: var(--pf-gray-200);
        line-height: 4.5rem;
        /* width: 80%; */

        .fluo_hover {
            transition: .5s ease;

            &:hover {
                color: var(--pf-gray-300);
                filter: blur(1.5px) invert();
                /* filter: blur(1.5px); */
            }
        }
    }
}

.logos {
    background-color: rgba(41, 41, 41, 0.12);
    height: 150px;
    transform: translateY(-11px);
}

.btn {
    background-color: var(--pf-gray-100);
    background-color: var(--pf-accent);
    margin: auto;
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 80px;
    border: none;
    transition: .45s ease;
    position: relative;
    overflow: hidden;
    margin-top: 4rem;
    cursor: pointer;

    .btn_in {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.4rem;
        transform: translateX(-18px);
        transition: .3s ease;

        & img {
            margin-bottom: 5px;
        }

        span {
            font-family: "Roboto", sans-serif;
            font-weight: 200;
            white-space: nowrap;
            font-size: 1.8rem;
            color: var(--pf-gray-300);
        }

        .name {
            transform: translateX(-150px);
            transition: .5s ease;
        }

        .location {
            transform: translateX(150px);
            transition: .5s ease;
        }

    }

    &:hover {
        width: 380px;
        background-color: var(--pf-gray-700);
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
</style>