import { Tabs } from '@heroui/react';
import clsx from 'clsx';
import { useState } from 'react';

const tabsData = [
  { id: '#home', label: 'home' },
  { id: '#about', label: 'about' },
  { id: '#services', label: 'services' },
  { id: '#portfolio', label: 'portfolio' },
];
const NavTab = () => {
  const [activeTab, setActiveTab] = useState('#home');
  return (
    <Tabs className='w-full max-w-115.75 h-10 '>
      <Tabs.ListContainer className=''>
        <Tabs.List
          aria-label='Options'
          style={{
            background:
              'linear-gradient(103.76deg, rgba(255, 255, 255, 0.12) 18.33%, rgba(255, 255, 255, 0.08) 81.67%)',
          }}
          className='px-0 py-0 '
        >
          {tabsData.map((tab) => (
            <Tabs.Tab
              className={clsx(
                'text-center py-0 h-10 uppercase text-sm transition-colors duration-500 ease-in-out',
                activeTab === tab.id ? 'text-accent-dark' : 'text-white'
              )}
              key={tab.id}
              id={tab.id}
              onClick={() => setActiveTab(tab.id)}
              aria-selected={activeTab === tab.id}
              aria-current={activeTab === tab.id ? 'page' : undefined}
            >
              <a href={tab.id} className=''>
                {tab.label}
              </a>
              <Tabs.Indicator className='h-10 py-0' />
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs.ListContainer>
    </Tabs>
  );
};

export default NavTab;
// bg-[linear-gradient(103.76deg,rgba(255,255,255,0.12)_18.33%,rgba(255,255,255,0.08)_81.67%)]
