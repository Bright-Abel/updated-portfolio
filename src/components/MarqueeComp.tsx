import { StarIcon } from '../lib/SvgIcons';
import FastMarquee from 'react-fast-marquee';

// Safely unwrap the default export to prevent ESM/CJS interop issues in Vite
const Marquee = (FastMarquee as any).default || FastMarquee;

const MarqueeItem = ({ text }: { text: string }) => {
  return (
    <div className='flex items-center gap-3'>
      <StarIcon className='#9D86FF' width={28} height={28} />
      <span className='font-semibold capitalize text-28'>{text}</span>
    </div>
  );
};

const MarqueeComp = () => {
  const arr = [
    {
      text: 'App Design',
    },
    {
      text: 'UI/UX Design',
    },
    {
      text: 'Web Design',
    },
    {
      text: 'Graphic Design',
    },
    {
      text: 'Brand Identity design',
    },
    {
      text: 'Business Plan Writing',
    },
  ];
  return (
    <div
      style={{ background: 'linear-gradient(90deg, #9D86FF 0%, #7D52FD 100%)' }}
      className='w-full z-10 h-27.5'
    >
      <div className='h-20 -rotate-2 w-full bg-white flex justify-center items-center'>
        <Marquee>
          {arr.map((item) => (
            <div key={item.text} className='mx-3'>
              <MarqueeItem text={item.text} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeComp;
