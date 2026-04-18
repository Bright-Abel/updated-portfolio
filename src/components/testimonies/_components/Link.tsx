interface Props {
  href: string;
  logo: React.ReactNode;
}

const Link = ({ href, logo }: Props) => {
  return (
    <div
      className='relative size-11 flex items-center justify-center text-white'
      style={{
        padding: '1px',
        background:
          'linear-gradient(96.77deg, rgba(255, 255, 255, 0.08) 0.57%, rgba(153, 153, 153, 0.16) 99.43%)',
        borderRadius: '9999px',
      }}
    >
      <div className='bg-accent-dark size-full rounded-full flex items-center justify-center'>
        <a href={href} target='_blank' rel='noreferrer'>
          {logo}
        </a>
      </div>
    </div>
  );
};

export default Link;
