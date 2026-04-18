import { about } from '../../assets';
import MarqueeComp from '../MarqueeComp';
import Count from './_components/Count';

const arrCount = [
  {
    duration: 2,
    end: 2,
    experience: 'Years of experience',
    secondSpan: '+',
    start: 9,
    firstSpan: '0',
  },
  {
    duration: 2,
    end: 12,
    experience: 'Projects Completed',
    secondSpan: '+',
    start: 40,
  },
  {
    duration: 2,
    end: 100,
    experience: 'Customer Satisfaction',
    secondSpan: '%',
    start: 1,
  },
];

const About = () => {
  return (
    <section id='about' className='bg-dark-bg  relative pb-6 h-full '>
      <MarqueeComp />
      <div className='size-125 bg-accent-2 blur-[400px] absolute top-10 left-350' />
      <div className='size-125 bg-accent-2 blur-[400px] absolute top-10 right-350' />

      {/* About  */}
      <div className='w-full max-w-285 pt-10 mx-auto h-full z-10 flex flex-col justify-center gap-6'>
        <div className='w-full flex items-center gap-10 flex-col md:flex-row!'>
          {/* iMAGE */}
          <div className='max-w-125 w-full hidden md:block h-140'>
            <img
              src={about}
              alt='about'
              className='w-full h-full shrink-0 object-cover'
            />
          </div>
          {/* TEXT */}
          <div className='w-full flex-col gap-4 max-w-138.75'>
            <h5 className='text-20 text-accent-1 font-medium uppercase'>
              about me
            </h5>

            <h2 className='font-bold text-white text-40'>
              I’m a Professional UI/UX Designer, Based in Nigeria.
            </h2>

            <p className='text-18 text-white'>
              I&apos;m a UI/UX product designer who creates modern,
              user-friendly interfaces and supports projects with business
              planning, financial planning, and strategic research. <br />{' '}
              <br /> <br />I take a holistic approach, aligning design with
              business goals to build functional, impactful solutions.
              Let&apos;s build. <br /> Let&apos;s design. Let&apos;s plan.
            </p>

            <div className='w-41 h-13.5 flex items-center justify-center bg-white rounded-full text-accent-dark text-18 font-semibold'>
              <a href='' className=''>
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* COUNT */}
        <div className='flex flex-wrap items-center justify-center gap-7.5'>
          {arrCount.map((item, index) => {
            return <Count {...item} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
