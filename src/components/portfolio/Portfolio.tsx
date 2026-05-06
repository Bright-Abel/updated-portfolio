import { useEffect, useMemo, useState } from 'react';
import Filter from './_component/Filter';
import PortfolioCard from './_component/PortfolioCard';

import {
  appDesign,
  appDesign2,
  ecommerce,
  hr,
  portfolio,
  restaurant,
  ig,
  mountain,
  xmas,
  appreciation,
  jewelry,
  fashion,
} from '../../assets';
import { useFetchProjects } from '../../custom/FetchData';
import type { IFetchProject } from '../../custom/interface';

const arr = [
  {
    btnName: 'All',
    btnTag: 'all',
  },
  {
    btnName: 'UI/UX Design',
    btnTag: 'ui/ux design',
  },
  {
    btnName: 'Graphic Design',
    btnTag: 'graphic design',
  },
  {
    btnName: 'Business Plan',
    btnTag: 'business plan',
  },
];

const portfolioArr = [
  {
    src: ecommerce,
    header: 'E commerce Website ',
    description: 'UI/UX Design',
    link: '',
  },
  {
    src: portfolio,
    header: 'Portfolio Website ',
    description: 'UI/UX Design',
    link: '',
  },
  {
    src: hr,
    header: 'HR Website ',
    description: 'UI/UX Design',
    link: '',
  },
  {
    src: restaurant,
    header: 'Restaurant Website ',
    description: 'UI/UX Design',
    link: '',
  },
  {
    src: appDesign,
    header: 'App Design',
    description: 'UI/UX Design',
    link: '',
  },
  {
    src: appDesign2,
    header: 'App Design',
    description: 'UI/UX Design',
    link: '',
  },
  {
    src: fashion,
    header: 'Fashion Design Flyer',
    description: 'Graphic Design',
    link: '',
  },
  {
    src: ig,
    header: 'Instagram Story Fashion',
    description: 'Graphic Design',
    link: '',
  },
  {
    src: mountain,
    header: 'A mountain Retreat UI ',
    description: 'Graphic Design',
    link: '',
  },
  {
    src: appreciation,
    header: 'Appreciation Design',
    description: 'Graphic Design',
    link: '',
  },
  {
    src: jewelry,
    header: 'Jewelry Sales Design',
    description: 'Graphic Design',
    link: '',
  },
  {
    src: xmas,
    header: 'Merry Xmas Flyer',
    description: 'Graphic Design',
    link: '',
  },
];

const Portfolio = () => {
  const [active, setActive] = useState('all');
  const { project, isLoading, isError } = useFetchProjects();
  const [projectFilter, setProjectFilter] = useState<IFetchProject[]>([]);

  const filter = useMemo(() => {
    if (!projectFilter.length || !projectFilter)
      return { tagFilter: [], project: [] };

    const tagFilter = [
      ...new Map(
        projectFilter
          .filter((item) => item.projectType)
          .map((item) => {
            const key = item.projectType.toLowerCase();
            return [
              key,
              {
                btnName: item.projectType,
                btnTag: key,
              },
            ];
          })
      ).values(),
    ];

    const project = projectFilter.map((item) => {
      return {
        src: item.img,
        header: item.title,
        description: item.productDesign,
        link: item.projectLink,
      };
    });

    return { tagFilter, project };
  }, [project, projectFilter]);

  useEffect(() => {
    setProjectFilter(project);
    // console.log(projectFilter);/
  }, [project]);

  const filterPortfolio = filter?.project.filter((item) => {
    if (active === 'all') {
      return true;
    }
    return item.description.toLowerCase() === active.toLowerCase();
  });

  return (
    <section id='portfolio' className='bg-dark-bg h-full  relative py-6'>
      <div className='size-125 bg-accent-2 blur-[400px] absolute left-350 opacity-50' />
      <div className='size-125 bg-accent-2 blur-[400px] absolute -bottom-40 left-350 opacity-50' />
      <div className='size-125 bg-accent-2 blur-[400px] absolute top-1/2  opacity-50' />

      <div className='w-full max-w-285 mx-auto h-full  z-10 flex flex-col items-center justify-center gap-6 md:gap-10 xl:gap-20'>
        <div className='flex-col gap-4 w-full items-center max-w-201.5 text-center'>
          <h5 className='font-medium text-20 text-accent-1 uppercase'>
            portfolio
          </h5>
          <h2 className='text-40 font-bold text-white'>
            Projects That Reflect My Expertise And Design Approach
          </h2>
          <div className='flex items-center gap-4'>
            {filter?.tagFilter.map((item, index) => (
              <Filter
                active={active === item.btnTag}
                btnName={item.btnName}
                btnTag={item.btnTag}
                setActive={setActive}
                key={index}
              />
            ))}
          </div>
        </div>

        <div className='w-full grid grid-cols-1 h-full md:grid-cols-2 lg:grid-cols-3 gap-7.5 '>
          {filterPortfolio.length > 0 ? (
            filterPortfolio.map((item, index) => (
              <PortfolioCard {...item} key={index} />
            ))
          ) : (
            <p className='text-white text-20'>No projects found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
