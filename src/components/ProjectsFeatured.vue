<script>
import { store } from '../store.js'
import axios from 'axios';
import ProjectCardFeatured from './ProjectCardFeatured.vue';

export default {
    name: 'ProjectsFeatured',
    components: {
        ProjectCardFeatured
    },
    data() {
        return {
            base_api_url: 'http://127.0.0.1:8000',
            base_projects_url: '/api/featured',
            projects: [],
            store
        }
    },
    methods: {
        callApi(url) {
            store.loading = true
            axios
                .get(url)
                .then(res => {
                    this.projects = res.data.projects
                    store.loading = false
                })
                .catch(err => console.error(err))
        }
    },
    mounted() {
        let url = this.base_api_url + this.base_projects_url;
        this.callApi(url);
    }
}
</script>

<template>
    <div class="container projects_container">
        <div v-if="!store.loading" class="projects">
            <template v-for="project in projects" :key="project.id">
                <!-- <router-link class="router_links" :to="{ name: 'project', params: { slug: project.slug } }"> -->
                <ProjectCardFeatured v-if="project.image.startsWith('/img/')" class="project_card"
                    :imageSrc="base_api_url + project.image" />
                <ProjectCardFeatured v-else class="project_card"
                    :imageSrc="base_api_url + '/storage/' + project.image" />
                <!-- </router-link> -->
            </template>
        </div>
        <div class="loader" v-else>
            Loading...
        </div>
    </div>
</template>

<style scoped>
.projects_container {
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .projects {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }
}

.loader {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--pf-gray-800);
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
