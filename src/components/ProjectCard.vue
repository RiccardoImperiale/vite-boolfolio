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
            <div class="btn_in">
                <span class="text_left">Live Version</span>
                <img width="25" src="/img/logo-gray100.png" alt="">
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
    border-radius: .5rem;
    z-index: 1;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .btn {
        position: absolute;
        cursor: default;

        .btn_in {
            transform: translateX(3.5px);

            .text_left,
            .text_right {
                font-size: 1rem;
                cursor: pointer;
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
            width: 350px;
            background-color: var(--pf-gray-700);
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
