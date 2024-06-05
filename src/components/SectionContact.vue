<script>
import BouncyLine from "./BouncyLine.vue";
import { store } from '../store.js'

export default {
    name: 'SectionContact',
    data() {
        return {
            store,
            stepCount: 0,
            translation: 'translateX(0%)'
        }
    },
    components: {
        BouncyLine
    },
    methods: {
        submit() {
            console.log('fwe');
            this.formReset();
        },
        nextStep() {
            this.stepCount++;


            if (this.stepCount === 0) {
                this.translation = 'translateX(0%)';
            } else if (this.stepCount === 1) {
                this.translation = 'translateX(-100%)';
            } else {
                this.translation = 'translateX(-200%)';
            }
            console.log(this.stepCount);
        },
        formReset() {
            this.stepCount = 0;
            this.translation = 'translateX(0%)';
        }
    },
    mounted() {

    },
}
</script>

<template>
    <section id="contact">
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
            <form @submit.prevent="submit()">
                <div class="form_inputs">
                    <div class="line">
                        <BouncyLine lineColor="var(--pf-gray-300)" />
                    </div>
                    <div :style="{ transform: translation }" class="slides">
                        <input class="slide" type="text" placeholder="Type Your Name...">
                        <input class="slide" type="text" placeholder="Type Your Email...">
                        <input class="slide" type="text" placeholder="Type Your Message...">
                    </div>
                </div>
                <div class="validation">
                    <div class="step1 step_success"></div>
                    <div class="step2"></div>
                    <div class="step3"></div>
                </div>
                <!-- BUTTON -->
                <button v-if="stepCount === 2" type="submit" class="btn">
                    <div class="btn_in">
                        <img width="25" src="/img/logo-gray100.png" alt="logo">
                    </div>
                </button>
                <div v-else @click="nextStep()" class="btn">
                    <div class="btn_in">
                        <img width="25" src="/img/logo-gray100.png" alt="logo">
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<style scoped>
#contact {
    padding-bottom: 5rem;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--pf-gray-800);
    overflow: hidden;

    .line {
        margin-bottom: -20px;
    }

    .text {
        display: block;
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
                color: var(--pf-gray-300);
                font-size: 1.2rem;
            }
        }
    }
}

.validation {
    margin-bottom: 3rem;
    padding-bottom: 0.5rem;
    width: 100%;
    height: 15px;
    display: flex;
    gap: .5rem;

    div {
        width: calc(100% / 3);
        border-radius: 7.5px;
        height: 100%;
        background-color: var(--pf-gray-300);
    }

    .step_error {
        background-color: rgb(167, 0, 0);
    }

    .step_success {
        background-color: var(--pf-accent-b);
    }
}

.btn {
    z-index: 11;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(0);
    width: 75px;
    height: 75px;
    position: relative;

    .btn_in {
        transform: translateX(0);

    }

    &:hover {
        background-color: var(--pf-gray-700);
        z-index: 0;
    }

}

/* .icon3d {
    rotate: -10deg;
    left: -2rem;
    bottom: 0rem;
    filter: drop-shadow(-40px 40px 10px rgba(0, 0, 0, 0.198));
}

.violet_blur {
    left: -20rem;
    bottom: -16rem;
}

.violet_blur2 {
    right: -40rem;
    top: 25rem;
} */
</style>