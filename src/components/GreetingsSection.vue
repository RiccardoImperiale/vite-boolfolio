<script>
import { store } from '../store.js'

import TextSlider from './TextSlider.vue'
import OvalTransition from "./OvalTransition.vue";


export default {
    name: 'GreetingsSection',
    data() {
        return {
            store
        }
    },
    components: {
        TextSlider,
        OvalTransition
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
    <div class="white_wrapper">
        <!-- text slide -->
        <TextSlider class="textSlider" color="var(--pf-gray-300)" @mouseover="isOver(true)" @mouseleave="isOver(false)"
            text="Thanks For Watching / Thanks For Watching / Thanks For Watching / Thanks For Watching /" />

        <!-- btn -->
        <button class="btn" @mouseover="isCursor(true)" @mouseleave="isCursor(false)">
            <a href="https://github.com/RiccardoImperiale" target="_blank">
                <div class="btn_in">
                    <img width="25" src="/img/logo-gray100.png" alt="site logo">
                </div>
                <img class="gh_logo" width="76" src="/img/logo-github-gray.png" alt="git hub logo">
            </a>
        </button>
    </div>
    <OvalTransition />


</template>

<style scoped>
.white_wrapper {
    background-color: var(--pf-gray-100);
    position: relative;
    height: 500px;
    z-index: 2;

    .textSlider {
        background-color: aqua;
        top: 3rem;
        height: 0;
    }

    .btn {
        position: absolute;
        top: 20rem;
        left: 0;
        right: 0;
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

}
</style>