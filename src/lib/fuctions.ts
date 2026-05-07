import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

export const createTriggers = () => {
  ScrollTrigger.getAll().forEach((t) => t.kill());

  const sections = gsap.utils.toArray<HTMLElement>('.stack-section');

  sections.forEach((section) => {
    const isTall = section.offsetHeight > window.innerHeight;

    ScrollTrigger.create({
      trigger: section,
      start: isTall ? 'bottom bottom' : 'top top',
      end: 'max',
      pin: true,
      pinSpacing: false,
      invalidateOnRefresh: true,
    });
  });

  //   sections.forEach((section) => {
  //     const isTall = section.scrollHeight > window.innerHeight;

  //     if (isTall) return;

  //     ScrollTrigger.create({
  //       trigger: section,
  //       start: 'top top',
  //       end: '+=100%',
  //       pin: true,
  //       pinSpacing: false,
  //       invalidateOnRefresh: true,
  //     });
  //   });

  ScrollTrigger.refresh();
};
