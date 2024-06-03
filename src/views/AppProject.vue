<script>
import axios from 'axios';

export default {
    name: 'AppProject',
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
                    console.log(res.data.response);
                    this.project = res.data.response
                    this.loading = false
                })
                .catch(err => console.error(err))
        },
    },
    mounted() {
        let url = this.base_api_url + this.base_project_url + this.$route.params.slug;
        this.callApi(url);
    },
}
</script>

<template>
    {{ project.id }}
    {{ project.title }}
    <img :src="base_api_url + '/storage/' + project.image" alt="">
</template>

<style scoped></style>