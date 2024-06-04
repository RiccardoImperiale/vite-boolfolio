<script>
import { store } from '../store.js'
import TextSlider from './TextSlider.vue'
import OvalTransition from "./OvalTransition.vue";
import { animateButton } from '../assets/gsap/animations.js';

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
    mounted() {
        this.$nextTick(() => {
            const gitHubBtn = this.$refs.gitHubBtn;
            if (gitHubBtn) {
                animateButton(gitHubBtn, 'top+=650px bottom');
            }
        });
    },
}
</script>

<template>
    <div class="white_wrapper">
        <!-- text slide -->
        <TextSlider class="textSlider" color="var(--pf-gray-700)" @mouseover="store.isBiggerCursor = true"
            @mouseleave="store.isBiggerCursor = false"
            text="Thanks For Watching / Thanks For Watching / Thanks For Watching / Thanks For Watching /" />

        <!-- btn -->
        <div ref="gitHubBtn" class="gitHub_button">
            <button class="btn" @mouseover="store.isCursorHidden = true" @mouseleave="store.isCursorHidden = false">
                <a href="https://github.com/RiccardoImperiale" target="_blank">
                    <div class="btn_in">
                        <img width="25" src="/img/logo-gray100.png" alt="site logo">
                    </div>
                    <img class="gh_logo" width="76" src="/img/logo-github-gray.png" alt="git hub logo">
                </a>
            </button>
        </div>

    </div>
    <OvalTransition />
</template>

<style scoped>
.gitHub_button {
    transform: translateY(200px);
    opacity: 0;
    visibility: hidden;
}

.white_wrapper {
    background-color: var(--pf-gray-100);
    position: relative;
    height: 600px;
    z-index: 2;


    .textSlider {
        height: 0;
        top: 5rem;
    }


    .btn {
        position: absolute;
        top: 25rem;
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