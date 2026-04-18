import { test1, test2 } from '../../../assets';
import TestimonialCard from './TestimonialCard';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const testArr = [
  {
    id: 1,
    name: 'Kelvin Ayobamidele',
    position: 'Project Manager',
    testimony:
      'Emmanuel has a strong eye for detail and truly understands how users think. He transformed our rough ideas into a clean, intuitive design that was easy to build and scale.',
    image: test1,
  },
  {
    id: 2,
    name: 'Stephen Mao',
    position: 'UX Researcher',
    testimony:
      'Emmanuel single-highhandedly executed every stage of the EZ Bracket app-from user research to final UI design and prototyping. His attention to detail and intuitive design thinking brought the concept to life in a seamless, user-friendly way.',
    image: test2,
  },
  {
    id: 3,
    name: 'Stephen Mao',
    position: 'UX Researcher',
    testimony:
      'Emmanuel single-highhandedly executed every stage of the EZ Bracket app-from user research to final UI design and prototyping. His attention to detail and intuitive design thinking brought the concept to life in a seamless, user-friendly way.',
    image: test2,
  },
  {
    id: 4,
    name: 'Stephen Mao',
    position: 'UX Researcher',
    testimony:
      'Emmanuel single-highhandedly executed every stage of the EZ Bracket app-from user research to final UI design and prototyping. His attention to detail and intuitive design thinking brought the concept to life in a seamless, user-friendly way.',
    image: test2,
  },
  {
    id: 5,
    name: 'Kelvin Ayobamidele',
    position: 'Project Manager',
    testimony:
      'Emmanuel has a strong eye for detail and truly understands how users think. He transformed our rough ideas into a clean, intuitive design that was easy to build and scale.',
    image: test1,
  },
  {
    id: 6,
    name: 'Kelvin Ayobamidele',
    position: 'Project Manager',
    testimony:
      'Emmanuel has a strong eye for detail and truly understands how users think. He transformed our rough ideas into a clean, intuitive design that was easy to build and scale.',
    image: test1,
  },
];

const TestimonialCarousel = () => {
  return (
    <div className='max-w-285 w-full mx-auto'>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        // width={'555px'}
        showStatus={false}
        showArrows={false}
        stopOnHover={true}
        centerMode={true}
        centerSlidePercentage={50}
      >
        {testArr.map((item) => (
          <div key={item.id} className='px-2'>
            <TestimonialCard key={item.id} {...item} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
