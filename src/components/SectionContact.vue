<script>
import BouncyLine from "./BouncyLine.vue";
import { store } from '../store.js'

export default {
    name: 'SectionContact',
    components: {
        BouncyLine
    },
    methods: {
        isOver(val) {
            store.isHovered = val
        }
    }
}
</script>

<template>
    <section id="contact">
        <div class="container">
            <div class="section_title">
                <div class="dot"></div>
                <div>contact</div>
            </div>
            <!-- <div class="avatar">
                <img src="/img/avatar2.png" alt="avatar image">
            </div> -->

            <div ref="container">
                <div class="text no_select">
                    <p @mouseover="isOver(true)" @mouseleave="isOver(false)">
                        Let's Keep In Touch
                    </p>
                </div>
            </div>


            <form action="">
                <div class="form_inputs">
                    <div class="line">
                        <BouncyLine lineColor="var(--pf-gray-300)" />
                    </div>
                    <input type="text" placeholder="Type Your Message...">

                    <div class="line">
                        <!-- <BouncyLine lineColor="var(--pf-gray-300)" /> -->
                    </div>

                </div>
                <div class="validation">
                    <div class="step1 step_success"></div>
                    <div class="step2"></div>
                    <div class="step3"></div>
                </div>

                <button class="btn">
                    <div class="btn_in">
                        <img width="25" src="/img/logo-gray100.png" alt="">
                    </div>
                </button>
            </form>


        </div>
        <!-- big icon -->
        <img class="icon3d" width="300" src="/img/3d-icon-3.png" alt="spaceship icon">
        <img class="violet_blur" width="600" src="/img/violet-blur.png" alt="">
        <!-- <img class="violet_blur2" width="1600" src="/img/blue-blur.png" alt=""> -->
        <!-- <div class="bg"></div> -->
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
    background-color: var(--pf-gray-900);
    overflow: hidden;

    .line {
        margin-bottom: -20px;
    }

    /* .avatar {
        width: 85px;
        height: 85px;
        overflow: hidden;
        border-radius: 50%;
        margin: auto;

        & img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    } */
}

.form_inputs {
    /* margin-bottom: 3rem; */

    & input {
        height: 168px;
        width: 100%;
        background-color: transparent;
        border: none;
        text-align: center;
        font-size: 1.5rem;
        color: var(--pf-gray-300);
        font-weight: 500;
        caret-color: var(--pf-accent-b);

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: var(--pf-gray-700)
        }
    }
}

.validation {
    margin-top: .5rem;
    margin-bottom: 3rem;
    padding-bottom: 0.5rem;
    width: 100%;
    height: 15px;
    display: flex;
    gap: .5rem;

    & div {
        width: calc(100% / 3);
        border-radius: 7.5px;
        height: 100%;
        background-color: var(--pf-gray-700);
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

.icon3d {
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
}
</style>