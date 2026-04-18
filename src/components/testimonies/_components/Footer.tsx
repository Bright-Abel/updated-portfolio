import {
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';
import { GmailIcon, StarIcon } from '../../../lib/SvgIcons';
import Logo from '../../Logo';
import Link from './Link';

const linksArr = [
  {
    href: 'https://www.linkedin.com/',
    logo: <FaLinkedinIn width={20} height={20} />,
  },
  {
    href: 'https://www.linkedin.com/',
    logo: <FaWhatsapp width={20} height={20} />,
  },
  {
    href: 'https://www.linkedin.com/',
    logo: <GmailIcon className='white' />,
  },
  {
    href: 'https://www.instagram.com/',
    logo: <FaInstagram width={20} height={20} />,
  },
  {
    href: 'https://www.linkedin.com/',
    logo: <FaTiktok width={20} height={20} />,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='bg-accent-dark z-10 flex-1 rounded-t-[100px] py-8'>
      <div className='w-full max-w-285 mx-auto z-10 flex flex-col items-center  gap-6 md:gap-10 '>
        <div className='max-w-176 w-full flex-col gap-5 text-center items-center'>
          <div
            style={{
              background:
                'linear-gradient(103.76deg, rgba(255, 255, 255, 0.12) 18.33%, rgba(255, 255, 255, 0.08) 81.67%)',
            }}
            className='py-2.5 px-4 rounded-[50px] flex items-center gap-2 border-grad backdrop-blur-xl'
          >
            <StarIcon className='#9D86FF' height={20} width={20} />
            <p className='text-20 font-semibold text-white'>
              LET&apos;S BUILD SOMETHING IMPACTFUL
            </p>
          </div>
          <h1 className='font-bold text-white text-64'>
            Let’s work together to transform your ideas into reality
          </h1>
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

        <div className='w-full'>
          <div className='w-full h-px bg-white/12' />
          <div className='py-6 flex items-center justify-between flex-wrap gap-4'>
            <Logo />
            {/* LINKS */}
            <div className='flex items-center gap-4'>
              {linksArr.map((item, index) => {
                return <Link key={index} {...item} />;
              })}
            </div>

            <p className='text-accent-paragraph font-normal text-18 inter'>
              {' '}
              © {year} Emmanuel. Alll Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
