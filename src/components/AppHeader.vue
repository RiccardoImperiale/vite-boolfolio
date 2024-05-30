<script>
import { store } from '../store.js'

export default {
    name: 'AppHeader',
    methods: {
        isOver(val) {
            store.isCustomCursor = val
        },
    }
}
</script>

<template>
    <header @mouseover="isOver(true)" @mouseleave="isOver(false)">
        <nav>
            <img class="logo" width=35 src="/img/logo-wt.png" alt="logo">
            <div class="page_links">
                <div class="link_container">
                    <a href="#about">ABOUT</a>
                    <a href="#about">ABOUT</a>
                </div>
                <div class="link_container">
                    <a href="#works">WORKS</a>
                    <a href="#works">WORKS</a>
                </div>
                <div class="link_container">
                    <a href="#contact">CONTACT</a>
                    <a href="#contact">CONTACT</a>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
header {
    position: absolute;
    /* position: fixed; */
    top: 0;
    width: 100%;
    z-index: 10;

    & nav {
        max-width: 1920px;
        width: 90%;
        margin: auto;
        padding: 1.5rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo {
            mix-blend-mode: color-dodge;
            opacity: 0.7;
        }

        .page_links {
            display: flex;
            gap: 1rem;

            .link_container {
                overflow: hidden;
                height: 20px;

                &:hover a {
                    transform: translateY(-20px);
                }

                & a {
                    display: block;
                    text-decoration: none;
                    color: white;
                    font-size: .9rem;
                    opacity: 0.7;
                    transition: .3s ease;
                }

                & a:nth-of-type(2) {
                    padding-top: 2px;
                }
            }
        }
    }
}
</style>
