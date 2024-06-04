<script>
import { store } from '../store';

export default {
    name: 'ProjectCard',
    props: {
        imageSrc: String
    },
    data() {
        return {
            store,
            imageHover: false
        }
    },
    methods: {
        changeImageStyle(val) {
            this.imageHover = val
        },
    },
}
</script>

<template>
    <div class="project_card">
        <div @mouseover="changeImageStyle(true)" @mouseleave="changeImageStyle(false)" class="btn_container">
            <button class="btn">
                <div class="logo">
                    <img width="25" src="/img/logo-gray100.png" alt="logo">
                </div>
                <div class="btn_in">
                    <span class="text_left">Live Version</span>
                    <span class="text_right">Source Code</span>
                </div>
            </button>
        </div>
        <img :class="{ imageHover: imageHover }" class="project_image" :src="imageSrc" alt="project cover image">
    </div>
</template>

<style scoped>
.project_card {
    display: block;
    width: 100%;
    aspect-ratio: 1;
    border-radius: .25rem;
    z-index: 1;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .btn_container {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        z-index: 2;
    }

    .btn {
        cursor: default;
        width: 75px;
        height: 75px;
        border-radius: 75px;
        border: none;
        transition: .45s ease;
        overflow: hidden;
        position: relative;
        background-color: var(--pf-gray-100);
        /* background: rgba(255, 255, 255, 0.159);
        backdrop-filter: blur(2.5px);
        -webkit-backdrop-filter: blur(2px); */

        .logo {
            top: 0;
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            filter: invert();

            & img {
                margin-bottom: 5px;
            }
        }

        .btn_in {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5rem;
            transform: translateX(-16px);
            transition: .3s ease;

            .text_left,
            .text_right {
                font-family: "Syne", sans-serif;
                white-space: nowrap;
                letter-spacing: .5px;
                font-size: .95rem;
                color: var(--pf-gray-300);
                cursor: pointer;
                transition: .25s ease;
                position: relative;

                &:hover {
                    color: var(--pf-gray-900);

                    &::after {
                        opacity: 1;
                        transition: .5s ease;
                    }
                }

                &::after {
                    content: '';
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background-color: var(--pf-accent-b);
                    position: absolute;
                    bottom: -9px;
                    margin: auto;
                    right: 0;
                    left: 0;
                    opacity: 0;
                }
            }

            .text_left {
                transform: translateX(-150px);
            }

            .text_right {
                transform: translateX(150px);
            }
        }

        &:hover {
            width: 325px;
            background-color: var(--pf-gray-100);

            /* background: rgba(233, 233, 233, 0.345);
            backdrop-filter: blur(3px);
            -webkit-backdrop-filter: blur(2px); */
            z-index: 0;
        }

        &:hover .btn_in {
            transform: translateX(0px);
        }

        &:hover .btn_in .text_left {
            transform: translateX(0);
        }

        &:hover .btn_in .text_right {
            transform: translateX(0);
        }
    }
}

.project_image {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: top;
    display: block;
    filter: blur(0) brightness(0.6);
    transition: transform .5s ease, filter .5s ease;
}

.imageHover {
    transform: scale(1.2) rotate(-10deg);
    filter: blur(1.2px) brightness(1);
}
</style>
