<script>

export default {
    name: 'ProjectCard',
    props: {
        imageSrc: String
    }
}
</script>

<template>
    <div class="project_card">
        <button class="btn">
            <div class="logo">
                <img width="25" src="/img/logo-gray100.png" alt="">
            </div>
            <div class="btn_in">
                <span class="text_left">Live Version</span>
                <span class="text_right">Source Code</span>
            </div>
        </button>
        <img class="project_image" :src="imageSrc" alt="">
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

    .btn {
        cursor: default;
        width: 75px;
        height: 75px;
        border-radius: 75px;
        border: none;
        transition: .45s ease;
        position: absolute;
        overflow: hidden;
        z-index: 1;
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
                font-size: 1rem;
                color: var(--pf-gray-300);
                cursor: pointer;

                &:hover {
                    color: var(--pf-gray-900);
                }
            }

            .text_left {
                transform: translateX(-150px);
                transition: .5s ease;
            }

            .text_right {
                transform: translateX(150px);
                transition: .5s ease;
            }
        }

        &:hover {
            width: 325px;
            background-color: var(--pf-gray-100);

            /* background: rgba(43, 43, 43, 0.345);
            backdrop-filter: blur(3px);
            -webkit-backdrop-filter: blur(2px); */
            z-index: 0;
        }

        &:hover .btn_in {
            transform: translateX(0px);
        }

        &:hover .project_image {
            scale: 2;
        }

        &:hover .btn_in .text_left {
            transform: translateX(0);

        }

        &:hover .btn_in .text_right {
            transform: translateX(0);
        }
    }


    .project_image {
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
        object-position: top;
        display: block;
    }
}

@media screen and (min-width: 720px) {
    .project_card {
        width: calc(100% / 2 - 1rem + (1rem / 3));
    }
}

@media screen and (min-width: 1280px) {
    .project_card {
        width: calc(100% / 3 - 1rem + (1rem / 3));
    }
}
</style>
