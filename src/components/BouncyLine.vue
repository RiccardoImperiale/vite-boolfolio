<script>
export default {
    name: 'BouncyLine',
    props: {
        lineColor: String
    },
    data() {
        return {
            path: null,
            progress: 0,
            time: Math.PI / 2,
            lerp: (x, y, a) => x * (1 - a) + y * a,
            reqId: null,
            // lineColor: 'var(--pf-gray-700)'
        }
    },
    mounted() {
        this.setPath(this.progress);
    },
    methods: {
        setPath(progress) {
            const width = this.$refs.bouncyContainer.clientWidth;
            this.$refs.path.setAttributeNS('', 'd', `M0 50 Q${width / 2} ${50 + progress},${width} 50`);
        },
        manageMouseMove(e) {
            const { movementY } = e;
            this.progress += movementY
            this.setPath(this.progress);
        },
        manageMouseleave() {
            this.animateOut()
        },
        animateOut() {
            const newProgress = this.progress * Math.sin(this.time)
            this.time += 0.2;
            this.setPath(newProgress)
            this.progress = this.lerp(this.progress, 0, 0.025);

            if (Math.abs(this.progress) > 0.75) {
                this.reqId = window.requestAnimationFrame(this.animateOut)
            } else {
                this.resetAnimation()
            }
        },
        resetAnimation() {
            this.progress = 0
            this.time = Math.PI / 2
        },
        manageMouseEnter() {
            if (this.reqId) {
                window.cancelAnimationFrame(this.reqId)
                this.resetAnimation()
            }
        }
    }
}
</script>

<template>
    <div ref="bouncyContainer" class="bouncy_line">
        <div class="line">
            <span @mouseenter="manageMouseEnter" @mousemove="manageMouseMove" @mouseleave="manageMouseleave"
                class="box"></span>
            <svg>
                <path :style="{ stroke: lineColor }" ref="path"></path>
            </svg>
        </div>
    </div>

</template>

<style scoped>
.line {
    height: 1px;
    position: relative;
    width: 100%;
    margin-bottom: 20px;

    & svg {
        position: absolute;
        height: 100px;
        width: 100%;
        top: -50px;

        & path {
            stroke-width: 2px;
            stroke: var(--pf-gray-700);
            fill: none;
        }
    }
}

.box {
    height: 40px;
    width: 100%;
    display: flex;
    position: relative;
    top: -20px;
    z-index: 1;

    &:hover {
        height: 150px;
        top: -75px;
    }
}

.bouncy_line {
    width: 100%;
    /* padding-top: 5rem; */
    margin: auto;
    display: flex;
    justify-content: center;
}
</style>
