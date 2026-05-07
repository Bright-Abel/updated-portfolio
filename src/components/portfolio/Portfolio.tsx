import { useEffect, useMemo, useState } from 'react';
import Filter from './_component/Filter';
import PortfolioCard from './_component/PortfolioCard';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useFetchProjects } from '../../custom/FetchData';

import { motion } from 'framer-motion';
import MotionWrap from '../../wrapper/MotionWrap';

const Portfolio = () => {
  const [active, setActive] = useState('all');
  const { project } = useFetchProjects();
  const [projectFilter, setProjectFilter] = useState<
    {
      src: string;
      header: string;
      description: string;
      link: string;
      type: string;
    }[]
  >([]);
  const [animateCard, setAnimateCard] = useState<{
    y: number;
    opacity: number;
  }>({ y: 0, opacity: 1 });

  useEffect(() => {
    if (!project?.length) return;

    setProjectFilter(
      project.map((item) => ({
        src: item.img,
        header: item.title,
        description: item.productDesign,
        link: item.projectLink,
        type: item.projectType,
      }))
    );
  }, [project]);

  const filter = useMemo(() => {
    if (!project?.length) {
      return { tagFilter: [] };
    }

    const tagFilter = [
      { btnName: 'All', btnTag: 'all' },
      ...Array.from(
        new Map(
          project
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
        ).values()
      ),
    ];

    return { tagFilter };
  }, [project]);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [projectFilter]);

  const handleWorkFilter = (tool: string) => {
    setActive(tool);

    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      const filteredProjects =
        tool === 'all'
          ? project
          : project.filter(
              (item) => item.projectType?.toLowerCase() === tool.toLowerCase()
            );

      setProjectFilter(
        filteredProjects.map((item) => ({
          src: item.img,
          header: item.title,
          description: item.productDesign,
          link: item.projectLink,
          type: item.projectType,
        }))
      );

      ScrollTrigger.refresh();
    }, 500);
  };

  return (
    <section id='portfolio' className='bg-dark-bg  relative py-6'>
      <div className='size-125 bg-accent-2 blur-[400px] absolute left-350 opacity-50' />
      <div className='size-125 bg-accent-2 blur-[400px] absolute -bottom-40 left-350 opacity-50' />
      <div className='size-125 bg-accent-2 blur-[400px] absolute top-1/2  opacity-50' />

      <MotionWrap className='w-full max-w-285 mx-auto h-full  z-10 flex flex-col items-center justify-center gap-6 md:gap-10 xl:gap-20'>
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
                handleWorkFilter={handleWorkFilter}
                key={index}
              />
            ))}
          </div>
        </div>

        <motion.div
          animate={animateCard}
          // whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delayChildren: 1 }}
          className='w-full grid grid-cols-1 h-full md:grid-cols-2 lg:grid-cols-3 gap-7.5 '
        >
          {projectFilter.length > 0 ? (
            projectFilter.map((item, index) => (
              <PortfolioCard {...item} key={index} />
            ))
          ) : (
            <p className='text-white text-20'>No projects found.</p>
          )}
        </motion.div>
      </MotionWrap>
    </section>
  );
};

export default Portfolio;
