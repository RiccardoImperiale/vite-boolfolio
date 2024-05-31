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

export const animate = (el) => {
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

export const parallax = (el) => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: '+100px top bottom',
            end: 'bottom top',
            scrub: true,
        },
        y: 200
    });
}
