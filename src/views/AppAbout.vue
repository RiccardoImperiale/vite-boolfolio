<script>
export default {
    name: 'AppAbout',
    components: {
    }
}
</script>

<template>
    <section id="about">
        <div class="container">
            <div class="section_title">
                <div class="dot"></div>
                <div>about</div>
                <!-- <img height="35" src="/img/about.png" alt="about title"> -->
            </div>
            <div class="text no_select">
                <p>
                    Hi, I'm Ricky a Web Developer
                    with a flair for<br> creating engaging
                    and interactive <br>web
                    experiences.
                </p>
            </div>
        </div>

        <!-- <button class="btn">
            <div class="btn_in">
                <span class="name">Download</span>
                <img width="25" src="/img/logo-gray100.png" alt="">
                <span class="location">Full CV</span>
            </div>
        </button> -->
    </section>
</template>

<style scoped>
#about {
    padding: 10rem 0;
}

.section_title {
    text-align: center;
    color: var(--pf-gray-300);
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: 500;
    z-index: 2;

    .dot {
        background-color: var(--pf-accent-b);
        width: 5px;
        aspect-ratio: 1;
        border-radius: 50%;
        margin-bottom: 1rem;
    }
}

.text {
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 4rem;
    display: flex;
    justify-content: center;

    p {
        font-size: 2rem;
        font-weight: 700;
        color: var(--pf-gray-900);
        line-height: 3rem;
        text-transform: capitalize;
    }
}
</style>
