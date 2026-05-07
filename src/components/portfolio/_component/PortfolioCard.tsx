import { LuArrowUpRight } from 'react-icons/lu';
import { motion } from 'framer-motion';

interface PortfolioCardProps {
  src: string;
  header: string;
  description: string;
  link: string;
}

const PortfolioCard = ({
  src,
  header,
  description,
  link,
}: PortfolioCardProps) => {
  return (
    <div className='w-full h-100 bg-white/8 border border-white/12 rounded-[32px] flex-col gap-4 z-10'>
      <div className='w-full h-90 rounded-4xl overflow-hidden p-4'>
        <img
          src={src}
          alt={header}
          className='object-contain h-full w-full rounded-4xl'
        />
      </div>

      <div className='flex justify-between items-end gap-2 px-6 pb-6'>
        <div className='flex-col gap-2'>
          <h2
            title={header}
            className='text-xl text-white capitalize font-bold line-clamp-1'
          >
            {header}
          </h2>
          <h5
            title={description}
            className='uppercase text-accent-1 text-xs line-clamp-4 font-medium'
          >
            {description}
          </h5>
        </div>
        <motion.div
          whileInView={{ scale: [0, 1] }}
          whileHover={{ scale: [1, 0.9] }}
          transition={{
            duration: 0.5,
          }}
          className='size-12 rounded-full flex-center bg-white shrink-0'
        >
          <a href={link} target='_blank' className='text-accent-dark text-2xl'>
            <LuArrowUpRight />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioCard;
