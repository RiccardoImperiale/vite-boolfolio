<script>
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export default {
    name: 'AnimationEnd',
    data() {
        return {
            frameOutCount: 55,
        }
    },
    mounted() {
        const canvas = this.$refs.canvas;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const context = canvas.getContext("2d");

        const currentFrame2 = (index) => `/out/${(index + 1).toString()}.jpg`;

        const images = [];
        let frame = { frame: 0 };

        for (let i = 0; i < this.frameOutCount; i++) {
            const img = new Image();
            img.src = currentFrame2(i);
            images.push(img);
        }

        gsap.to(frame, {
            frame: this.frameOutCount - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
                scrub: 1.5,
                pin: canvas,
                end: "150%",
                // markers: true
            },
            onUpdate: render,
        });

        images[0].onload = render;

        function render() {
            context.canvas.width = images[0].width;
            context.canvas.height = images[0].height;

            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(images[frame.frame], 0, 0);
        }
    },
}
</script>

<template>
    <canvas ref="canvas" class="canvas"></canvas>
</template>

<style scoped>
.canvas {
    /* border: 4px solid red; */
    /* opacity: 0.5; */
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    margin-top: -45vh;
}
</style>
