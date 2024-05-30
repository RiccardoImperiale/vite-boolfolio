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
        },
        prevPage(url) {
            this.callApi(url);
        },
        nextPage(url) {
            this.callApi(url);
        },
        goTo(page) {
            const url = this.base_api_url + this.base_projects_url + `?page=${page}`
            this.callApi(url)
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
            <ProjectCard v-for="project in projects.data" :key="project.id"
                :imageSrc="base_api_url + '/storage/' + project.image" />
        </div>
        <div class="pagination_container">
            <div class="pagination">
                <button @click="prevPage(projects.prev_page_url)">
                    <img class="arrow_left" width="10" src="/img/arrow-light.png" alt="arrow icon">
                </button>
                <button class="page_dot" v-for="page in projects.last_page" @click="goTo(page)">
                    <div :class="{ 'dot_active': page == projects.current_page }"></div>
                    <!-- <span>{{ page }}</span> -->
                </button>
                <button @click="nextPage(projects.next_page_url)">
                    <img class="arrow_right" width="10" src="/img/arrow-light.png" alt="arrow icon">
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.projects_container {
    padding-top: 5rem 0;

}

.projects {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
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
        margin-top: 1rem;
        height: 65px;
        border-radius: 65px;
        background-color: var(--pf-gray-900);

        & button {
            background-color: var(--pf-accent);
            color: var(--pf-gray-100);
            width: 50px;
            aspect-ratio: 1;
            border-radius: 50px;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: .25s ease;

            &:hover {
                background-color: var(--pf-gray-700);
                background-color: #0a3497;
                cursor: pointer;
            }

            .arrow_left {
                rotate: 180deg;
                transform: translateX(2px);
            }

            .arrow_right {
                transform: translateX(2px);
            }
        }

        .page_dot {
            width: 15px;
            height: 15px;
            background-color: var(--pf-gray-700);
            transition: .25s ease;
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
</style>
