<script>
import { store } from '../store';

export default {
    name: 'ProjectCard',
    props: {
        imageSrc: String,
        slug: String
    },
    data() {
        return {
            store,
            imageHover: false,
            isInfo: false,
            imgPath: ''
        }
    },
    methods: {
        changeImageStyle(val) {
            this.imageHover = val
        },
        toggleInfoCircle() {
            this.isInfo = !this.isInfo;
            console.log('fwe');
        },
        getImageSrc(image) {
            if (image.startsWith('/img/')) {
                return `${store.base_api_url}${image}`;
            } else {
                return `${store.base_api_url}/storage/${image}`;
            }
        }
    }
}
</script>

<template>
    <div class="project_card" @mouseover="changeImageStyle(true)" @mouseleave="changeImageStyle(false), isInfo = false">
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
        <router-link class="router_links" :to="{ name: 'project', params: { slug: slug } }">
            <img :class="{ imageHover: imageHover }" class="project_image" :src="getImageSrc(imageSrc)"
                alt="project cover image">
        </router-link>
    </div>
</template>

<style scoped>
.info_circle {
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

    /* .btn_container {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        background-color: aquamarine;
        z-index: 2;
    } */

    .info_btn {
        position: absolute;
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
    }

    .info_circle {
        position: absolute;
    }

}

.project_image {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: top;
    display: block;
    filter: brightness(0.6);
    transition: transform .5s ease, filter .5s ease;
}

.imageHover {
    transform: scale(1.2) rotate(-10deg);
    filter: brightness(1);
}
</style>
