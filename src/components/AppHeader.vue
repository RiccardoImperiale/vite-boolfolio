<script>
import { store } from '../store.js'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'AppHeader',
    data() {
        return {
            scrollPosition: 0,
        }
    },
    methods: {
        isOver(val) {
            store.isCustomCursor = val
        },
    },
    mounted() {
        const header = this.$refs.header;
        const nav = this.$refs.nav;
        const linearGradient = 'linear-gradient(90deg, rgba(189, 189, 189, 0) 0%, rgba(189, 189, 189, 0.1) 50%, rgba(189, 189, 189, 0) 100%)'

        window.addEventListener("scroll", () => {
            const currentScroll = window.scrollY;
            if (currentScroll > 0) {
                gsap.to(header, { background: linearGradient, backdropFilter: "blur(10px)", duration: 1 })
                gsap.to(nav, { borderBottom: '1px solid rgba(255, 255, 255, 0.252)', duration: 1 })
            } else {
                gsap.to(header, { background: 'transparent', backdropFilter: "blur(0px)", duration: 1 })
                gsap.to(nav, { borderBottom: 'none', duration: 1 })
            }

            if (currentScroll > 560) {
                if (currentScroll > this.scrollPosition) {
                    gsap.to(header, { y: -100, duration: 0.5 });
                } else {
                    gsap.to(header, { y: 0, duration: 0.5 });
                }
            }
            this.scrollPosition = currentScroll;
        });
    },
}
</script>

<template>
    <header ref="header" @mouseover="isOver(true)" @mouseleave="isOver(false)">
        <nav ref="nav">
            <router-link class="nav_link" to="/">
                <img class="logo" width=35 src="/img/logo-wt.png" alt="logo">
            </router-link>
            <div class="page_links">
                <div class="link_container">
                    <router-link class="nav_link" to="/">HOME</router-link>
                    <router-link class="nav_link" to="/">HOME</router-link>
                </div>
                <div class="link_container">
                    <router-link class="nav_link" to="/about">ABOUT</router-link>
                    <router-link class="nav_link" to="/about">ABOUT</router-link>
                </div>
                <div class="link_container">
                    <router-link class="nav_link" to="/projects">ALL PROJECTS</router-link>
                    <router-link class="nav_link" to="/projects">ALL PROJECTS</router-link>
                </div>
                <div class="link_container">
                    <router-link class="nav_link" to="/contact">CONTACT</router-link>
                    <router-link class="nav_link" to="/contact">CONTACT</router-link>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
/* .glass {
    background: linear-gradient(90deg, rgba(189, 189, 189, 0) 0%, rgba(189, 189, 189, 0.114) 50%, rgba(189, 189, 189, 0) 100%);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
} */

header {
    position: absolute;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    /* background: transparent;
    backdrop-filter: blur(0); */
    /* transition: 0.5s ease; */
    /* transition: transform 0.5s, background 0.5s, backdrop-filter 0.5s; */

    & nav {
        max-width: 1920px;
        width: 90%;
        margin: auto;
        padding: 1rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* transition: 0.5s ease; */

        /* border-bottom: 1px solid rgba(255, 255, 255, 0.252); */

        .logo {
            mix-blend-mode: color-dodge;
            opacity: 0.7;
        }

        .page_links {
            display: flex;
            gap: 1.5rem;

            .link_container {
                overflow: hidden;
                height: 20px;

                &:hover .nav_link {
                    transform: translateY(-20px);
                }

                .nav_link {
                    display: block;
                    text-decoration: none;
                    color: white;
                    font-size: .9rem;
                    opacity: 0.7;
                    transition: .3s ease;
                }

                .nav_link:nth-of-type(2) {
                    padding-top: 2px;
                }
            }
        }
    }
}
</style>
