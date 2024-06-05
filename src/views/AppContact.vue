<script>
import axios from 'axios';

export default {
    name: 'AppContact',
    data() {
        return {
            name: '',
            email: '',
            message: '',
            base_api_url: 'http://127.0.0.1:8000',
            loaded: false,
            errors: null
        }
    },
    methods: {
        sendMessage() {
            this.loaded = true

            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }
            const url = this.base_api_url + '/api/contacts'
            axios.post(url, data)
                .then(res => {
                    console.log(res);
                    if (res.data.success) {
                        this.cleanForm()
                        // this.success = res.data.errors
                    } else {
                        this.errors = res.data.errors
                        console.log('wef', this.errors);
                    }
                    this.loaded = false
                })
                .catch(err => console.error(err))
        },
        cleanForm() {
            this.name = ''
            this.email = ''
            this.message = ''
        }
    },
}
</script>

<template>
    <section id="contact">
        <form @submit.prevent="sendMessage()" class="container">
            <input type="text" placeholder="enter your name..." name="name" v-model="name">
            <input type="email" placeholder="type here your email..." name="email" v-model="email">
            <textarea name="message" id="message" cols="30" rows="10" v-model="message"></textarea>

            <button type="submit" :disabled="loaded"> {{ loaded ? 'sending...' : 'send' }}</button>
        </form>

    </section>
</template>

<style scoped>
#contact {
    padding: 5rem 0;
}

form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
