import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// export const animateTitle = (title) => {
//     ScrollTrigger.create({
//         trigger: title,
//         start: 'top bottom-=150px',
//         end: 'top bottom+=100',
//         scrub: true,
//         onEnter: () => {
//             gsap.to(title, {
//                 opacity: 1,
//                 duration: .5,
//                 y: 0,
//                 ease: 'power1.inOut'
//             });
//         },
//         onLeaveBack: () => {
//             gsap.to(title, {
//                 opacity: 0,
//                 duration: .5,
//                 y: 100,
//                 ease: 'power1.inOut'
//             });
//         },
//     })
// };

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

export const animateHeader = (header, links) => {
    ScrollTrigger.create({
        start: "120px top top",
        onEnter: () => {
            gsap.to(header, { y: -100, autoAlpha: 0, duration: 1 });
            gsap.to(links, { y: -100, autoAlpha: 0, duration: 1, stagger: 0.1 });
        },
        onLeaveBack: () => {
            gsap.to(header, { y: 0, autoAlpha: 1, duration: 0.5 });
            gsap.to(links, { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.1 });
        },
    });
}