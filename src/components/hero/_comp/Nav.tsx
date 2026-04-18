import Logo from '../../Logo';
import NavTab from './Tabs';

const Nav = () => {
  return (
    <nav className='w-full hidden md:block'>
      <div className='flex w-full justify-between items-center gap-4'>
        <Logo />
        <NavTab />
        <div className='bg-white w-28.75 h-13.5 rounded-[50px] flex items-center justify-center py-4 px-6'>
          <a
            href='https://mail.google.com/mail/?view=cm&to=falopeoluwapelumi@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Emmanuel,%0A%0AI%20would%20like%20to%20connect%20with%20you%20regarding%20your%20UI/UX%20work.'
            target='_blank'
            rel='noreferrer'
            className='text-lg text-accent-dark font-semibold leading-5.5 capitalize'
          >
            Hire me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
