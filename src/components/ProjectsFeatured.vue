<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
import { store } from '../store.js'

export default {
    name: 'ProjectsFeatured',
    components: {
        ProjectCard
    },
    data() {
        return {
            base_api_url: 'http://127.0.0.1:8000',
            base_projects_url: '/api/featured',
            projects: [],
            loading: store.loading
        }
    },
    methods: {
        callApi(url) {
            axios
                .get(url)
                .then(res => {
                    this.projects = res.data.projects
                    store.loading = false
                    this.loading = store.loading
                })
                .catch(err => console.error(err))
        }
    },
    mounted() {
        let url = this.base_api_url + this.base_projects_url;
        this.callApi(url);

        this.$watch(() => store.loading, (newVal) => {
            this.loading = newVal;
        });
    }
}
</script>

<template>
    <div class="container projects_container">
        <div v-if="!loading" class="projects">
            <ProjectCard v-for="project in projects" :key="project.id"
                :imageSrc="base_api_url + '/storage/' + project.image" />
        </div>
        <div class="loader" v-else>
            Loading...
        </div>
    </div>
</template>

<style scoped>
.projects_container {
    /* height: 825px; */
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
    color: var(--pf-gray-100);
}

.pagination_container {
    display: flex;
    justify-content: center;

    .pagination {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        padding-inline: 7.5px;
        margin-top: 2rem;
        height: 65px;
        border-radius: 65px;
        /* background-color: var(--pf-gray-900); */

        & button {
            background-color: var(--pf-gray-900);
            width: 50px;
            aspect-ratio: 1;
            border-radius: 50px;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: .25s ease;
            border: 1px solid var(--pf-gray-700);

            &:hover {
                background-color: var(--pf-gray-300);
                background-color: var(--pf-gray-700);
                cursor: pointer;
            }

            .arrow_left,
            .arrow_right {
                transform: translateX(1px);
            }

            .arrow_left {
                rotate: 180deg;
            }
        }

        .page_dot {
            width: 15px;
            height: 15px;
            background-color: var(--pf-gray-700);
            transition: .5s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;

            .dot_active {
                position: absolute;
                top: 20px;
                width: 4px;
                height: 4px;
                background-color: var(--pf-lighter);
                border-radius: 50%;
            }

            /* & span {
                color: var(--pf-gray-300);
                position: relative;
                top: 17px;
                font-size: 0.7rem;
                transition: .5s ease;
            } */

            &:hover {
                background-color: var(--pf-gray-300);
            }

            &:hover span {
                color: var(--pf-gray-900);
            }
        }

        /* .page_dot.page-active {
            background-color: var(--pf-gray-100);
        } */

    }
}

/* @media screen and (min-width: 720px) {
    .projects_container {
        height: 1476px;


    }
} */

/* @media screen and (min-width: 1280px) {
    .projects_container {
        height: 1476px;
        height: 825px;

    }
} */
</style>
