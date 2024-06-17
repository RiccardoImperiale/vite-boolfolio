<script>
import { store } from '../store';

export default {
    name: 'ProjectCardFeatured',
    props: {
        imageSrc: String
    },
    data() {
        return {
            store,
            imageHover: false,
            isInfo: false
        }
    },
    methods: {
        changeImageStyle(val) {
            this.imageHover = val
        },
        toggleInfoCircle() {
            this.isInfo = !this.isInfo;
            console.log('fwe');
        }
    },
}
</script>

<template>
    <div class="project_card" @mouseleave="isInfo = false">
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
        <div @click="toggleInfoCircle" class="info_btn">
            <div class="head">
                <img v-if="!isInfo" width="18" src="/img/eye-open.png" alt="eye icon">
                <img v-else width="18" src="/img/eye-close.png" alt="eye icon">
            </div>
        </div>
        <div :style="{ width: isInfo ? '110%' : '0' }" class="info_circle no_select">
            <div class="info_text">
                <div class="title">
                    titolo
                </div>
                <div class="dot"></div>
                <div class="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inve repellendus consectetur ad
                    est, deleniti ut veritatis.
                </div>
            </div>
        </div>
        <img :class="{ imageHover: imageHover }" class="project_image" :src="imageSrc" alt="project cover image">
    </div>
</template>

<style scoped>
.info_circle {
    /* background-color: rgba(255, 255, 255, 0.593);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px); */
    background-color: var(--pf-gray-100);
    width: 100px;
    aspect-ratio: 1;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    bottom: 3rem;
    transform: translateY(calc(50% - 17.5px));
    z-index: 2;
    transition: .3s ease;

    .info_text {
        position: absolute;
        inset: 0;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        gap: .8rem;

        .title {
            color: var(--pf-gray-700);
            font-weight: 700;
            font-size: 1.2rem;
        }

        .dot {
            background-color: var(--pf-accent-b);
            width: 5px;
            height: 5px;
            border-radius: 50%;
        }

        .desc {
            color: var(--pf-gray-300);
            text-align: center;
            font-size: .9rem;
            width: 70%;
            padding-top: .3rem;

        }
    }
}

.info_btn {
    position: absolute;
    /* width: 100%; */
    bottom: 3rem;
    border-radius: 50%;
    z-index: 3;
    text-align: center;
    cursor: pointer;

    .head {
        width: 35px;
        aspect-ratio: 1;
        border-radius: 50%;
        margin: auto;
        background-color: var(--pf-accent);
        color: var(--pf-gray-100);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
    }

    /* .title {
        position: absolute;
        z-index: 3;
        bottom: 0;
        width: 100%;
        font-weight: 700;
        font-size: 0.9rem;
        color: var(--pf-gray-800);
    } */
}


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
            gap: 4.25rem;
            transform: translateX(-16px);
            transition: .3s ease;

            .text_left,
            .text_right {
                font-family: "Syne", sans-serif;
                white-space: nowrap;
                letter-spacing: .25px;
                font-size: 1rem;
                color: var(--pf-gray-300);
                cursor: pointer;
                transition: .25s ease;
                position: relative;

                &:hover {
                    color: var(--pf-gray-800);

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
                    background-color: var(--pf-gray-600);
                    position: absolute;
                    bottom: -8px;
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
