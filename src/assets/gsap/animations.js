import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export const animateOval = (el) => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: '-800rem top bottom',
            end: 'bottom top',
            scrub: true,
        },
        height: '0px'
    });
}

export const parallax = (el, start, dist, scrub = true) => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: start,
            end: 'bottom top',
            scrub: scrub,
            ease: 'power1.inOut'
        },
        y: dist,
    });
}

export const textSlideLoop = (el, updateDirection) => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.25,
            onUpdate: updateDirection
        },
        x: "-=400px",
    })
}

export const animateHeader = (el, links) => {
    ScrollTrigger.create({
        start: "120px top top",
        scrub: true,
        ease: 'power2.inOut',
        onEnter: () => {
            gsap.to(el, { y: -100, autoAlpha: 0, duration: 1 });
            gsap.to(links, { y: -100, autoAlpha: 0, duration: 1, stagger: 0.1 });
        },
        onLeaveBack: () => {
            gsap.to(el, { y: 0, autoAlpha: 1, duration: 0.5 });
            gsap.to(links, { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.1 });
        },
    });
}

export const animateText = (links) => {
    ScrollTrigger.create({
        trigger: links,
        start: 'top bottom-=10px',
        end: 'top bottom-=10px',
        scrub: 0.2,
        onEnter: () => {
            gsap.to(links, { y: 0, autoAlpha: 1, duration: 0.25, stagger: 0.1, ease: "power1.out" });

        },
        onLeaveBack: () => {
            gsap.to(links, { y: 200, autoAlpha: 0, duration: 0.25, stagger: -0.1, ease: "power1.in" });
        },
    });
}


export const animateIcons = (links) => {
    ScrollTrigger.create({
        trigger: links,
        start: 'top bottom-=400px',
        end: 'top bottom-=400px',
        scrub: 0.2,
        onEnter: () => {
            gsap.to(links, { x: 0, autoAlpha: 1, duration: 0.45, scale: 1, stagger: 0.1, ease: "power1.out" });

        },
        onLeaveBack: () => {
            gsap.to(links, { x: -200, autoAlpha: 0, duration: 0.25, scale: 0, stagger: 0.1, ease: "power1.in" });
        },
    });
}


export const animateButton = (el) => {
    ScrollTrigger.create({
        trigger: el,
        start: 'top bottom-=2px',
        end: 'top bottom-=2px',
        scrub: 0.2,
        onEnter: () => {
            gsap.to(el, { y: 0, autoAlpha: 1, duration: 0.6, ease: "bounce" });

        },
        onLeaveBack: () => {
            gsap.to(el, { y: 200, autoAlpha: 0, duration: 0.25, ease: "power1.in" });
        },
    });
}

