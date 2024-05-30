<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'TextSlider',
  props: {
    text: String,
  },
  data() {
    return {
      xPercent: 0,
      direction: 1,
    }
  },
  methods: {
    animation() {
      if (this.xPercent <= -100) {
        this.xPercent = 0;
      }
      if (this.xPercent > 0) {
        this.xPercent = -100;
      }
      gsap.set(this.$refs.firstText, { xPercent: this.xPercent })
      gsap.set(this.$refs.secondText, { xPercent: this.xPercent })
      this.xPercent += 0.025 * this.direction;
      requestAnimationFrame(this.animation)
    }
  },
  mounted() {
    requestAnimationFrame(this.animation)
    gsap.to(this.$refs.slider, {
      scrollTrigger: {
        trigger: this.$refs.slider,
        start: "top bottom",
        end: "bottom top",
        // start: 0,
        // end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (self) => {
          this.direction = self.direction * -1;
        }
      },
      x: "-=300px",
    })
  }
}
</script>

<template>
  <div class="slider_container no_select">
    <div ref="slider" class="slider">
      <p ref="firstText"> {{ text }} </p>
      <p ref="secondText"> {{ text }} </p>
    </div>
  </div>
</template>

<style scoped>
.slider_container {
  position: absolute;
  bottom: 6rem;

  .slider {
    position: relative;
    white-space: nowrap;
    display: flex;
    align-items: center;
  }

  .slider p {
    font-weight: 700;
    color: var(--pf-gray-100);
    font-size: 5rem;
    position: relative;
    padding-right: 1.6rem;
  }

  .slider p:nth-of-type(2) {
    position: absolute;
    left: 100%;
  }
}
</style>
