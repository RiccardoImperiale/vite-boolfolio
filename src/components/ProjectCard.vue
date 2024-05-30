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
        <img :src="imageSrc" alt="">
    </div>
</template>

<style scoped>
.project_card {
    display: block;
    width: 100%;
    background-color: rgb(80, 80, 80);
    aspect-ratio: 1;
    border-radius: .5rem;
    z-index: 1;
    overflow: hidden;

    & img {
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
