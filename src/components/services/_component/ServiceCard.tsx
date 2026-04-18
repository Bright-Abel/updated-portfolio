interface Props {
  src: string;
  header: string;
  description: string;
}

const ServiceCard = ({ description, header, src }: Props) => {
  return (
    <div className='max-w-90 w-full hover:scale-105 z-20 duration-500 border border-white/12 bg-white/8 rounded-[24px] p-6'>
      <div className='gap-4 flex-col'>
        <img src={src} alt='graphic_design' className='w-14 h-13.5' />
        <div className='flex-col gap-2 text-white'>
          <h3 className='text-28 font-bold'>{header}</h3>
          <p className='text-18'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
