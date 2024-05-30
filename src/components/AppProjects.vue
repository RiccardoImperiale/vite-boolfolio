<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    name: 'AppProjects',
    components: {
        ProjectCard
    },
    data() {
        return {
            base_api_url: 'http://127.0.0.1:8000',
            base_projects_url: '/api/projects',
            projects: [],
            loading: true
        }
    },
    methods: {
        callApi(url) {
            axios
                .get(url)
                .then(res => {
                    console.log(res);
                    this.projects = res.data.projects
                    this.loading = false
                })
                .catch(err => console.error(err))
        }
    },
    mounted() {
        let url = this.base_api_url + this.base_projects_url;
        this.callApi(url);
    },
}
</script>

<template>
    <div class="container projects_container">
        <div class="projects">
            <ProjectCard v-for="project in projects.data" :key="project.id" />
        </div>
        <div class="pagination">

        </div>
    </div>
</template>

<style scoped>
/* PROJECTS -----------------------------> */
.pagination {
    margin-top: 1rem;
    height: 50px;
    width: 100%;
    background-color: aliceblue;
}

.projects {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>
