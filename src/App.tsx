import About from './components/about/About';
import HeroSection from './components/hero/HeroSection';

import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Testimonials from './components/testimonies/Testimonials';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard expo easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    // 2. Hook Lenis into GSAP's RequestAnimationFrame
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 3. Tell ScrollTrigger to use Lenis for proxying
    lenis.on('scroll', ScrollTrigger.update);

    // 4. Your Stacking Animation Logic
    const sections = gsap.utils.toArray<HTMLElement>('.stack-section');

    sections.forEach((section, i) => {
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

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main
      ref={containerRef}
      className='min-h-screen w-full max-w-432 mx-auto bg-accent-dark  overflow-hidden bricole'
    >
      <div className='stack-section bg-accent-dark relative z-1'>
        <HeroSection />
      </div>
      <div className='stack-section bg-accent-dark relative z-2'>
        <About />
      </div>
      <div className='stack-section bg-accent-dark relative z-3'>
        <Services />
      </div>
      <div className='stack-section bg-accent-dark relative z-4'>
        <Portfolio />
      </div>
      <div className='stack-section bg-accent-dark relative z-5'>
        <Testimonials />
      </div>
    </main>
  );
};

export default App;
