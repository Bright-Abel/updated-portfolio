import { PiQuotesLight } from 'react-icons/pi';

interface TestimonialCardProps {
  name: string;
  position: string;
  testimony: string;
  image: string;
}

const TestimonialCard = ({
  name,
  position,
  testimony,
  image,
}: TestimonialCardProps) => {
  return (
    <div className=' w-full bg-white/8 border  border-white/12 rounded-[24px] p-10 h-78.75 flex-col gap-6 justify-between'>
      <h5 className='italic text-18 text-accent-paragraph jakarta '>
        {testimony}
      </h5>

      <div className='flex justify-between items-center gap-4 w-full'>
        <div className='flex items-center gap-4'>
          <div className='w-17.5 h-17.5 bg-white/20 rounded-full flex items-center justify-center shrink-0'>
            <img
              src={image}
              alt='image'
              className='size-17.5 rounded-full  object-contain'
            />
          </div>
          <div className='flex-col gap-1.5'>
            <h4 className='font-bold text-24 text-white'>{name}</h4>
            <p className='text-[15px] leading-5.5 text-accent-paragraph jakarta '>
              {position}
            </p>
          </div>
        </div>

        {/* <img src={quote} alt='quote' className='w-10 h-7.25 ' /> */}

        <PiQuotesLight className='text-accent-1 text-4xl' />
      </div>
    </div>
  );
};

export default TestimonialCard;
// max-w-138.75
