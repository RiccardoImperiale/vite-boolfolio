<script>
import { store } from '../store.js'
import { animateHeader } from '../assets/gsap/animations.js';

export default {
    name: 'AppHeader',
    props: {
        color: String,
    },
    data() {
        return {
            store,
            isNavWhite: null,
        }
    },
    mounted() {
        const header = this.$refs.header;
        const links = document.querySelectorAll('.link_container')

        animateHeader(header, links);

        this.$watch(() => this.$route, (to) => {
            if (to.name === 'home' || to.name === 'contact') {
                this.isNavWhite = true;
            } else {
                this.isNavWhite = false;
            }
        });
    }
}
</script>

<template>
    <header :class="isNavWhite || 'invert'" ref="header" @mouseover="store.isCursorHidden = true"
        @mouseleave="store.isCursorHidden = false">
        <nav ref="nav">
            <router-link class="nav_link" :to="{ name: 'home' }">
                <img class="logo" width=35 src="/img/logo-wt.png" alt="logo">
            </router-link>
            <div class="page_links">
                <router-link class="link_container" :to="{ name: 'home' }">
                    <div class="nav_link">HOME</div>
                    <div class="nav_link">HOME</div>
                </router-link>
                <!-- <router-link class="link_container" :to="{ name: 'about' }">
                    <div class="nav_link">ABOUT</div>
                    <div class="nav_link">ABOUT</div>
                </router-link> -->
                <router-link class="link_container" :to="{ name: 'projects' }">
                    <div class="nav_link">ALL PROJECTS</div>
                    <div class="nav_link">ALL PROJECTS</div>
                </router-link>
                <router-link :class="isNavWhite || 'invert'" class="pill" :to="{ name: 'contact' }">
                    <div class="nav_link">CONTACT</div>
                    <div class="nav_link">CONTACT</div>
                </router-link>
                <!-- <a href="#contact" :class="isNavWhite || 'invert'" class="pill">
                    <div class="nav_link">CONTACT</div>
                    <div class="nav_link">CONTACT</div>
                </a> -->
            </div>
        </nav>
    </header>
</template>

<style scoped>
.invert {
    filter: invert();
}

.nav_link {
    color: var(--pf-lighter);
    font-size: .9rem;
    opacity: 0.5;
    transition: .3s ease;
}

header {
    position: absolute;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;

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
            opacity: 0.9;
        }

        .page_links {
            display: flex;
            gap: 1.5rem;
            align-items: center;

            .link_container {
                overflow: hidden;
                height: 17px;
                text-decoration: none;

                &:hover .nav_link {
                    transform: translateY(-17px);
                }
            }

            .pill {
                background-color: var(--pf-gray-700);
                padding: 1.25rem 1.5rem;
                border-radius: 20px;
                overflow: hidden;
                height: 20px;
                text-decoration: none;

                &:hover .nav_link {
                    transform: translateY(-35px);
                }

                .nav_link {
                    transform: translateY(-8px);
                    margin-bottom: 10px;
                }
            }
        }
    }
}
</style>
