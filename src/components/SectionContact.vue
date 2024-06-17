<script>
import BouncyLine from "./BouncyLine.vue";
import { store } from '../store.js'
import axios from "axios";

export default {
    name: 'SectionContact',
    data() {
        return {
            store,
            fields: ['name', 'email', 'message'],
            nameSuccess: null,
            emailSuccess: null,
            messageSuccess: null,
            stepCount: 0,
            translation: 'translateX(0%)',
            name: '',
            email: '',
            message: '',
            isLoading: false,
            errors: {},
            success: false
        }
    },
    components: {
        BouncyLine
    },
    methods: {
        sendMessage() {
            this.isLoading = true

            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }
            const url = store.base_api_url + '/api/contacts'

            axios.post(url, data)
                .then(res => {
                    if (res.data.success) {
                        this.success = res.data.message
                        this.errors = false
                        this.formReset();
                    } else {
                        this.errors = res.data.errors;

                        this.fields.forEach(field => {
                            if (res.data.errors[field]) {
                                this.errors[field] = res.data.errors[field][0]
                            }
                        })
                    }
                    this.isLoading = false
                })
                .catch(err => console.error(err))
        },
        nextStep() {
            this.stepCount++;

            this.updateTranslation()
        },
        formReset() {
            this.stepCount = 0;
            this.translation = 'translateX(0%)';
            this.name = ''
            this.email = ''
            this.message = ''
            this.nameSuccess = null
            this.emailSuccess = null
            this.messageSuccess = null
        },
        updateTranslation() {
            if (this.stepCount === 0) {
                this.translation = 'translateX(0%)';
            } else if (this.stepCount === 1) {
                this.translation = 'translateX(-100%)';
            } else {
                this.translation = 'translateX(-200%)';
            }
        },
        validate() {
            const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            this.name.length > 0 ? this.nameSuccess = true : this.nameSuccess = false;
            this.email.length > 0 && mailRegex.test(this.email) ? this.emailSuccess = true : this.emailSuccess = false;
            this.message.length > 0 ? this.messageSuccess = true : this.messageSuccess = false;
        },
        setStep(step) {
            this.stepCount = step;
            this.updateTranslation();
        }
    },
}
</script>

<template>
    <section id="contact">
        <div v-if="success" class="success_message no_select" @mouseover="store.isCursorHidden = true"
            @mouseleave="store.isCursorHidden = false">
            <h4>{{ success }}</h4>
            <div class="close" @click="success = false">X</div>
        </div>
        <div class="container">
            <!-- TEXT -->
            <div ref="container">
                <div class="text no_select">
                    <div class="section_title">
                        <div class="dot"></div>
                    </div>
                    <p @mouseover="store.isBiggerCursor = true" @mouseleave="store.isBiggerCursor = false">
                        Let's Keep In Touch
                    </p>
                </div>
            </div>
            <!-- FORM -->
            <form @submit.prevent="sendMessage()" autocomplete="off">
                <div class="form_inputs">
                    <div class="line">
                        <BouncyLine lineColor="var(--pf-gray-300)" />
                    </div>
                    <!-- INPUT -->
                    <div :style="{ transform: translation }" class="slides">
                        <input @keyup="validate()" @keyup.enter="nextStep()" v-model="name" name="name" class="slide"
                            type="text" placeholder="Type Your Name...">
                        <input @keyup="validate()" @keyup.enter="nextStep()" v-model="email" name="email" class="slide"
                            type="text" placeholder="Type Your Email...">
                        <input @keyup="validate()" v-model="message" name="message" class="slide" type="text"
                            placeholder="Type Your Message...">
                    </div>
                </div>
                <!-- VALIDATION -->
                <div class="validation" @mouseover="store.isCursorHidden = true"
                    @mouseleave="store.isCursorHidden = false">
                    <div :class="{ 'step_error': errors.name, 'step_success': nameSuccess }" class="step step1"
                        @click="setStep(0)">
                        <div v-if="errors.name" class="error_message">{{ errors.name }}</div>
                        <div v-if="stepCount === 0" class="dot_step"></div>
                    </div>
                    <div :class="{ 'step_error': errors.email, 'step_success': emailSuccess }" class="step step2"
                        @click="setStep(1)">
                        <div v-if="errors.email" class="error_message">{{ errors.email }}</div>
                        <div v-if="stepCount === 1" class="dot_step"></div>
                    </div>
                    <div :class="{ 'step_error': errors.message, 'step_success': messageSuccess }" class="step step3"
                        @click="setStep(2)">
                        <div v-if="errors.message" class="error_message">{{ errors.message }}</div>
                        <div v-if="stepCount === 2" class="dot_step"></div>
                    </div>
                </div>
                <!-- BUTTON -->
                <button v-if="stepCount === 2" type="submit" class="btn">
                    <div class="btn_in">
                        <img style="margin-bottom: 0;margin-left: 5px;" width="26" src="/img/send-icon.png"
                            alt="airplane icon">
                    </div>
                </button>
                <div v-else @click="nextStep()" class="btn">
                    <div class="btn_in">
                        <img width="25" src="/img/logo-gray100.png" alt="logo">
                    </div>
                </div>
            </form>
        </div>
        <!-- SOCIAL -->
        <div class="socials" @mouseover="store.isCursorHidden = true" @mouseleave="store.isCursorHidden = false">
            <a href="https://github.com/RiccardoImperiale" target="_blank"><img width="30" src="/img/logo-github-wt.png"
                    alt="git hub logo"></a>
            <a href="https://www.linkedin.com/in/riccardoimperiale/" target="_blank"><img width="25"
                    src="/img/logo-linkedin-light.png" alt="linkedin logo"></a>
        </div>
    </section>
</template>

<style scoped>
/* input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(--pf-gray-800) inset;
    -webkit-text-fill-color: var(--pf-gray-100);
    z-index: -1;
} */

#contact {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--pf-gray-800);
    overflow: hidden;

    .line {
        margin-bottom: -20px;
        padding-top: 50px;
    }

    .text {
        display: block;
        padding: 0;
        margin: auto;

        p {
            width: 100%;
            white-space: nowrap;
            margin: auto;
            text-align: center;
        }
    }
}

.form_inputs {
    overflow: hidden;

    .slides {
        display: flex;
        transition: transform .5s ease;

        .slide {
            width: 100%;
            flex-shrink: 0;
        }

        input {
            height: 168px;
            width: 100%;
            background-color: transparent;
            border: none;
            text-align: center;
            font-size: 1.6rem;
            color: var(--pf-gray-100);
            font-weight: 500;
            caret-color: var(--pf-accent-b);

            &:focus {
                outline: none;
            }

            &::placeholder {
                color: var(--pf-gray-600);
                font-size: 1.2rem;
            }
        }
    }
}

.validation {
    margin-bottom: 5rem;
    padding-bottom: 0.5rem;
    width: 100%;
    height: 15px;
    display: flex;
    gap: .5rem;

    .step {
        width: calc(100% / 3);
        border-radius: 7.5px;
        height: 100%;
        background-color: var(--pf-gray-300);
        cursor: pointer;
        display: flex;
        justify-content: center;
        position: relative;

        .error_message {
            color: var(--pf-gray-300);
            margin-top: 15px;
            text-transform: uppercase;
            font-size: 0.8rem;
        }
    }

    .step_error {
        background-color: rgb(255, 0, 0);
    }

    .step_success {
        background-color: var(--pf-accent-b);
    }

    .dot_step {
        background-color: var(--pf-lighter);
        height: 5px;
        aspect-ratio: 1;
        border-radius: 50%;
        position: absolute;
        top: 2.4rem;
    }
}

.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(0);
    width: 75px;
    height: 75px;
    position: relative;

    &::after {
        content: '';
        width: 80px;
        height: 80px;
        background-color: var(--pf-gray-700);
        border-radius: 50%;
        position: absolute;
        transform: translate(-80px, 50px);
        z-index: -1;
        transition: .2s ease;
    }

    &:hover::after {
        transform: translate(0px, 0px);
    }

    .btn_in {
        transform: translateX(0);
    }

    &:hover {
        background-color: var(--pf-gray-900);
    }
}

.success_message {
    background-color: rgba(77, 255, 0, 0.241);
    background-color: var(--pf-gray-300);
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.42);
    /* backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(10px); */
    position: absolute;
    top: 5rem;
    height: 4rem;
    width: 60%;
    border-radius: .5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 3rem;

    .close {
        cursor: pointer;
        font-weight: bold;
    }
}

.socials {
    width: 100%;
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    img {
        cursor: pointer;
    }
}
</style>