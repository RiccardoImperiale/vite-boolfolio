<script>

export default {
    name: 'InfoDot',
    props: {
        message: String
    }
}
</script>

<template>
    <div class="dot">
        <div class="dot_light"></div>
        <div class="dot_blur pulse"></div>
        <div class="dot_blur_extra"></div>
        <div class="info_text">{{ message }}</div>
    </div>
</template>

<style scoped>
.pulse {
    animation: pulse-animation 2s infinite;
}

@keyframes pulse-animation {
    0% {
        box-shadow: 0 0 0 0px rgb(255, 255, 255);
    }

    50% {
        box-shadow: 0 0 0 6px rgb(255, 255, 255);
    }

    100% {
        box-shadow: 0 0 0 0px rgb(255, 255, 255);
    }
}

.dot {
    position: absolute;
    top: 25rem;
    right: 25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    width: 20px;
    height: 20px;
    cursor: pointer;

    .dot_blur,
    .dot_blur_extra,
    .dot_light {
        border-radius: 50%;
        background-color: white;
        aspect-ratio: 1;
        position: absolute;
    }

    .dot_blur {
        width: 6px;
        filter: blur(2px);
        opacity: 0.2;
    }

    .dot_blur_extra {
        width: 5px;
        filter: blur(3px);
    }

    .dot_light {
        width: 5px;
        /* filter: blur(1px); */
    }

    &:hover .info_text {
        opacity: 1;
        scale: 1;
    }

    .info_text {
        position: absolute;
        opacity: 0;
        scale: 0;
        top: 2rem;
        left: 3rem;
        color: #dedede;
        white-space: nowrap;
        transition: .25s ease;
    }
}
</style>
