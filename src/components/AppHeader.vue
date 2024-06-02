<script>
import { store } from '../store.js'

import { animateHeader } from '../assets/gsap/animations.js';

export default {
    name: 'AppHeader',

    methods: {
        isOver(val) {
            store.isCustomCursor = val
        },
    },
    mounted() {
        const header = this.$refs.header;
        const links = document.querySelectorAll('.link_container')

        animateHeader(header, links);
    }
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
header {
    position: absolute;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;

    & nav {
        max-width: 1920px;
        width: 90%;
        margin: auto;
        padding: 1rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

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
