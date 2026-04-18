import Footer from './_components/Footer';
import TestimonialCarousel from './_components/TestimonialCarousel';

const Testimonials = () => {
  return (
    <section
      id='testimonials'
      className='bg-accent-dark h-full  relative pt-6 gap-20 flex-col'
    >
      <div className='h-125 w-180 bg-accent-2/70  blur-[400px] absolute top-1/2 left-125  -transalate-x-1/2 -translate-y-1/2' />

      <div className='w-full max-w-285 mx-auto   z-10 flex flex-col items-center  gap-6 md:gap-10 '>
        <div className='flex-col gap-4 w-full items-center'>
          <h5 className='font-medium text-20 text-accent-1 uppercase'>
            Testimonials
          </h5>
          <h2 className='text-40 font-bold text-white'>What Clients Say</h2>
        </div>

        <TestimonialCarousel />
      </div>
      <Footer />
    </section>
  );
};

export default Testimonials;
