import clsx from 'clsx';

interface FilterProps {
  active: boolean;
  btnName: string;
  btnTag: string;
  handleWorkFilter: (tool: string) => void;
}

const Filter = ({ active, btnName, btnTag, handleWorkFilter }: FilterProps) => {
  return (
    <button
      style={{
        background:
          'linear-gradient(103.76deg, rgba(255, 255, 255, 0.12) 18.33%, rgba(255, 255, 255, 0.08) 81.67%)',
        border: '1px solid',
        borderImageSource:
          'linear-gradient(96.77deg, rgba(255, 255, 255, 0.08) 0.57%, rgba(153, 153, 153, 0.16) 99.43%)',
      }}
      type='button'
      aria-label={btnName}
      onClick={() => handleWorkFilter(btnTag)}
      className={clsx(
        'py-3 px-5 backdrop-blur-xl capitalize line-clamp-1 text-nowrap rounded-full text-lg text-white font-medium cursor-pointer transition-colors duration-1000',
        active && 'bg-white! text-accent-dark!'
      )}
    >
      {btnName}
    </button>
  );
};

export default Filter;
