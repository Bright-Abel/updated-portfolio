import { person, figma, ppt, xd, excel, word, framer } from '../../../assets';

const icons = [
  { src: figma, className: 'top-10 left-4 rotate-35' },
  { src: ppt, className: 'top-[65px] -right-12 -rotate-22' },
  { src: xd, className: '-right-30 top-1/2 rotate-20' },
  { src: excel, className: '-bottom-15 -left-1 -rotate-120' },
  { src: word, className: '-bottom-12 -right-1 rotate-23' },
  { src: framer, className: '-left-30 top-1/2 rotate-12' },
];

const HeroImage = () => {
  return (
    <div className='w-full relative'>
      <div className='relative z-10 rounded-[40px] p-4 flex items-center justify-center'>
        <img
          src={person}
          alt='profile'
          className='w-full h-full object-cover rounded-[30px]'
        />
      </div>

      {icons.map((icon, i) => (
        <div
          className={`size-30 ${icon.className} absolute z-0 flex-center `}
          key={i}
        >
          {/* Outer Ring: size-30 border gradient */}
          <div
            className='size-30 rounded-[32px] p-px flex-center shadow-lg '
            style={{
              background: `linear-gradient(180deg, #171717 0%, #2A2A2A 100%)`,
            }}
          >
            {/* Outer Ring Background + Backdrop Blur */}
            <div
              className='size-full rounded-[31px] flex-center  backdrop-blur-lg bg-black/50'
              style={{
                background: `linear-gradient(180deg, rgba(42, 42, 42, 0.4) 0%, rgba(23, 23, 23, 0.4) 100%)`,
              }}
            >
              {/* Middle Ring: size-22 border gradient */}
              <div
                className='size-22 rounded-[24px] p-0.5 flex-center'
                style={{
                  background: `linear-gradient(180deg, #171717 0%, #2a2a2a 100%)`,
                }}
              >
                {/* Inner of Middle Ring: size-20 */}
                <div
                  className='size-20 rounded-[22px] flex-center bg-black/20'
                  style={{
                    background: `linear-gradient(180deg, rgba(23, 23, 23, 0.4) 0%, rgba(42, 42, 42, 0.4) 100%)`,
                  }}
                >
                  {/* Inner Ring 1: size-17 border gradient */}
                  <div
                    className='size-17 rounded-[20px] p-px flex-center'
                    style={{
                      background:
                        'linear-gradient(180deg, #3F3F3F 0%, #171717 100%)',
                    }}
                  >
                    <div className='size-full rounded-[19px] flex-center bg-transparent'>
                      {/* Inner Ring 2: size-14 border gradient */}
                      <div
                        className='size-14 rounded-4xl p-px flex-center'
                        style={{
                          background:
                            'linear-gradient(180deg, #3F3F3F 0%, #171717 100%)',
                          boxShadow: '0px 16px 16px 0px rgba(0,0,0,0.5)',
                        }}
                      >
                        {/* Inner Ring 2 Background */}
                        <div
                          className='size-full rounded-[15px] flex-center'
                          style={{
                            background:
                              'linear-gradient(180deg, rgba(23, 23, 23, 0.4) 0%, rgba(42, 42, 42, 0.4) 100%)',
                          }}
                        >
                          <img
                            src={icon.src}
                            alt='icon'
                            className='size-10 object-contain '
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroImage;
