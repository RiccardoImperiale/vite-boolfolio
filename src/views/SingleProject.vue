<script>
import axios from 'axios';

export default {
    name: 'SingleProject',
    data() {
        return {
            base_api_url: 'http://127.0.0.1:8000',
            base_project_url: '/api/projects/',
            project: {},
            loading: true
        }
    },
    methods: {
        callApi(url) {
            axios
                .get(url)
                .then(res => {
                    if (res.data.success) {
                        // console.log(res.data.response);
                        this.project = res.data.response
                        this.loading = false
                    } else {
                        this.$router.push({ name: 'NotFound' });
                    }
                })
                .catch(err => {
                    console.error(err)
                    this.$router.push({ name: 'NotFound' });
                })
        },
    },
    mounted() {
        let url = this.base_api_url + this.base_project_url + this.$route.params.slug;
        this.callApi(url);
    },
}
</script>

<template>
    <div class="project_container">
        <div class="container ">
            <div v-if="!loading" class="project_card">
                <div class="image">
                    <img :src="base_api_url + '/storage/' + project.image" alt="">
                </div>
                <div class="text">
                    <h2>
                        {{ project.title }}
                    </h2>
                </div>
            </div>
            <div class="loader" v-else>
                Loading...
            </div>
        </div>
    </div>
</template>

<style scoped>
.project_container {
    padding: 5rem 0;

    .project_card {
        display: flex;
        flex-direction: column;

        .image {
            width: 100%;
            height: 350px;
            overflow: hidden;
            border-radius: .5rem;

            & img {
                object-fit: cover;
                width: 100%;
            }
        }
    }
}


.loader {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--pf-gray-100);
}
</style>