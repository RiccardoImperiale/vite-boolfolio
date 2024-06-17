<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
import { store } from '../store';

export default {
    name: 'ProjectsAll',
    components: {
        ProjectCard
    },
    data() {
        return {
            base_projects_url: '/api/projects',
            projects: [],
            loading: true,
            store
        }
    },
    methods: {
        callApi(url) {
            axios
                .get(url)
                .then(res => {
                    this.projects = res.data.projects
                    this.loading = false
                })
                .catch(err => console.error(err))
        },
        prevPage(url) {
            this.callApi(url);
        },
        nextPage(url) {
            this.callApi(url);
        },
        goTo(page) {
            const url = store.base_api_url + this.base_projects_url + `?page=${page}`
            this.callApi(url)
        }
    },
    mounted() {
        let url = store.base_api_url + this.base_projects_url;
        this.callApi(url);
    },
}
</script>

<template>
    <div class="container projects_container">
        <div v-if="!loading" class="projects">
            <template v-for="project in projects.data" :key="project.id">
                <ProjectCard class="project_card" :slug="project.slug" :imageSrc="project.image" />
            </template>
        </div>
        <div class="loader" v-else>
            Loading...
        </div>
        <div v-if="projects.last_page > 1" class="pagination_container">
            <div class="pagination">
                <button @click="prevPage(projects.prev_page_url)">
                    <img class="arrow_left" width="7" src="/img/arrow.png" alt="arrow icon">
                </button>
                <button class="page_dot" v-for="page in projects.last_page" @click="goTo(page)">
                    <div :class="{ 'dot_active': page == projects.current_page }"></div>
                </button>
                <button @click="nextPage(projects.next_page_url)">
                    <img class="arrow_right" width="7" src="/img/arrow.png" alt="arrow icon">
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.projects_container {
    padding: 10rem 0;
    height: 920px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .projects {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        .project_card {
            width: calc(100% / 3 - 1rem);
        }
    }
}

.router_links {
    width: 100%;
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

@media screen and (min-width: 720px) {
    .router_links {
        width: calc(100% / 2 - 1rem + (1rem / 3));
    }
}

@media screen and (min-width: 1280px) {
    .router_links {
        width: calc(100% / 3 - 1rem + (1rem / 3));
    }
}
</style>
