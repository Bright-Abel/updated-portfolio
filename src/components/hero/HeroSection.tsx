import HeroImage from './_comp/HeroImage';
import Nav from './_comp/Nav';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section
      id={'home'}
      className='bg-accent-dark w-full  relative bricole h-full pt-3'
    >
      {/* bg */}
      <div className='absolute w-30 h-162.5 -top-27 left-350 rotate-200 bg-accent-2 blur-[150px] ' />
      <div className='absolute w-30 h-125 -top-51 left-240 rotate-220 bg-accent-2 blur-[150px]  ' />
      <div className='absolute w-30 h-125 -top-51 left-75 -rotate-30 bg-accent-2 blur-[150px]  ' />
      <div className='absolute w-30 h-162.5 -top-27 -left-29 -rotate-32 bg-accent-2 blur-[150px] ' />

      {/* HERO TEXT */}
      <div className='w-full max-w-285 mx-auto  z-10 flex flex-col gap-6'>
        <Nav />

        <div className='w-full flex items-center gap-10 flex-col md:flex-row! overflow-x-hidden xl:overflow-visible'>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className='max-w-136.75 w-full flex-col gap-5'
          >
            <div
              style={{
                background:
                  'linear-gradient(103.76deg, rgba(255, 255, 255, 0.12) 18.33%, rgba(255, 255, 255, 0.08) 81.67%)',
              }}
              className='py-2.5 px-4 rounded-[50px] flex items-center gap-2 border-grad backdrop-blur-xl'
            >
              {/* <StarIcon className='#9D86FF' height={20} width={20} /> */}
              <span>👋</span>
              <h4 className='text-20 font-semibold text-white'>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("LET'S BUILD SOMETHING IMPACTFUL.")
                      .start();
                  }}
                />
              </h4>
            </div>
            <h1 className='text-64 fomt-bold text-white'>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      'I’m Emmanuel, a UI/UX Designer Based in Nigeria.'
                    )
                    .start();
                }}
              />
            </h1>
            <p className='text-18 text-accent-paragraph inter'>
              Designing simple, user-focused digital experiences for a global
              audience.
            </p>
          </motion.div>

          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
// background: #151022;
