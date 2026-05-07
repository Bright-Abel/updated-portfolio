import { app, brand, design, desktop, graphic, writer } from '../../assets';
import MotionWrap from '../../wrapper/MotionWrap';
import ServiceCard from './_component/ServiceCard';

const serviceArr = [
  {
    src: design,
    header: 'UI/UX Design',
    description:
      'Designing user - centered product design. Clear, intuitive user flows focused on usability and results.',
  },
  {
    src: app,
    header: 'App Design',
    description:
      'Mobile app interface design, optimized for IOS and Android. Built for performance and clarity',
  },
  {
    src: desktop,
    header: 'Web Design',
    description:
      'Responsive website design, optimized for usability and conversion. Clean, modern layouts.',
  },
  {
    src: graphic,
    header: 'Graphic Design',
    description:
      'Creative Visual communication design ,Consistent and purposeful visuals, for digital and print use.',
  },
  {
    src: brand,
    header: 'Brand Identity Design',
    description:
      'Strategic brand identity systems, with consistent visual language, Designed for recognition.',
  },
  {
    src: writer,
    header: 'Business Plan Writer',
    description:
      'Well Structured, professional business plans with clear strategy and objectives. Investor-ready documentation.',
  },
];

const Services = () => {
  return (
    <section id='services' className='bg-accent-dark h-full relative py-6'>
      <div className='h-125 w-180 bg-accent-2/70  blur-[400px] absolute top-1/2 left-125  -transalate-x-1/2 -translate-y-1/2' />

      <div className='w-full max-w-285 mx-auto h-full  z-10 flex flex-col items-center justify-center gap-6 md:gap-10 xl:gap-20'>
        <div className='flex-col gap-4 w-full items-center'>
          <h5 className='font-medium text-20 text-accent-1 uppercase'>
            services
          </h5>
          <h2 className='text-40 font-bold text-white'>My Specialities</h2>
        </div>

        <MotionWrap className='flex flex-wrap items-center justify-center gap-7.5'>
          {serviceArr.map((item, index) => {
            return <ServiceCard {...item} key={index} />;
          })}
        </MotionWrap>
      </div>
    </section>
  );
};

export default Services;
