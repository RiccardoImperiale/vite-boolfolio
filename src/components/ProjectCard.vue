<script>

export default {
    name: 'ProjectCard',

}
</script>

<template>
    <div class="project_card">
        <img src="" alt="">
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
}

@media screen and (min-width: 720px) {
    .project_card {
        width: calc(100% / 2 - 1rem + (1rem / 3));
        background-color: lightgreen;
    }
}

@media screen and (min-width: 1240px) {
    .project_card {
        width: calc(100% / 3 - 1rem + (1rem / 3));
        background-color: lightgreen;
    }
}
</style>
