import About from './components/about/About';
import HeroSection from './components/hero/HeroSection';

import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Testimonials from './components/testimonies/Testimonials';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { createTriggers } from './lib/fuctions';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    createTriggers();

    // VERY IMPORTANT
    const resizeObserver = new ResizeObserver(() => {
      createTriggers();
    });

    const portfolio = document.querySelector('#portfolio');
    const about = document.querySelector('#about');

    if (about) {
      resizeObserver.observe(about);
    }

    if (portfolio) {
      resizeObserver.observe(portfolio);
    }

    return () => {
      resizeObserver.disconnect();
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main
      ref={containerRef}
      className='min-h-screen w-full max-w-432 mx-auto bg-accent-dark  overflow-x-hidden bricole'
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
