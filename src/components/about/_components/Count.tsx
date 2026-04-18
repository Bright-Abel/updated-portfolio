import ReactCountUp from 'react-countup';

// Safely unwrap the default export to prevent ESM/CJS interop issues in Vite
const CountUp = (ReactCountUp as any).default || ReactCountUp;

interface Props {
  firstSpan?: string;
  end: number;
  start: number;
  duration: number;
  secondSpan: string;
  experience: string;
}

const Count = ({
  duration,
  end,
  experience,
  secondSpan,
  start,
  firstSpan,
}: Props) => {
  return (
    <div className='w-full max-w-90 h-45 border gap-6 border-white/12 bg-white/8 opacity-80 rounded-[24px] backdrop-blur-xl flex-col justify-center items-center'>
      <p className='font-bold text-64 text-white'>
        {firstSpan && <span>{firstSpan}</span>}
        <CountUp
          end={end}
          start={start}
          duration={duration}
          enableScrollSpy
          scrollSpyDelay={200}
        />
        {''}
        <span className='text-accent-1'>{secondSpan}</span>
      </p>

      <p className='text-24 font-medium text-white'>{experience}</p>
    </div>
  );
};

export default Count;
