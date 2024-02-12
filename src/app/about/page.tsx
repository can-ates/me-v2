'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaNpm } from 'react-icons/fa';

import {
  SiNextdotjs,
  SiJavascript,
  SiGatsby,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiStorybook,
  SiPlaywright,
  SiSocketdotio,
  SiWebpack,
  SiEslint,
} from 'react-icons/si';

import { PiFileSqlDuotone } from 'react-icons/pi';

import Avatar from '../components/Avatar';
import Circles from '../components/Circles';
import { fadeIn } from '../constants/variants';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Languages',
        icons: [
          <FaHtml5 color="#ffaa02" />,
          <FaCss3 color="#02e9ff" />,
          <SiJavascript color="#FFFF00" />,
          <SiTypescript color="#01FFFF" />,
        ],
      },
      {
        title: 'Technologies',
        icons: [
          <FaReact color="#01FFFF" />,
          <SiRedux color="#FF00FF" />,
          <SiNextdotjs />,
          <SiGatsby color="#FF00FF" />,
          <FaNodeJs color="#82CD2B" />,
          <SiTailwindcss color="#01FFFF" />,
          <SiStorybook color="#FF4B88" />,
          <SiPlaywright color="#57C15D" />,
          <SiSocketdotio />,
          <PiFileSqlDuotone />,
          <FaNpm color="#C53736" />,
          <SiWebpack color="#5599C8" />,
          <SiEslint />,
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Front End Engineer @ Jotform',
        stage: 'Apr 2021 - Present',
      },
      {
        title: 'Front End Developer Intern @ Jotform',
        stage: 'Jan 2021 - Mar 2021',
      },
      {
        title: 'Front End Developer Intern @ VBT',
        stage: 'Jun 2019 - Aug 2019',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="absolute -left-[285px] bottom-0 hidden xl:flex"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto flex h-full flex-col items-center gap-x-6 xl:flex-row">
        {/* text */}
        <div className="flex flex-1 flex-col justify-center">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Focus on delivering seamless, intuitive
            <span className="text-accent"> user experiences.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-6 max-w-[500px] px-2 xl:mx-0 xl:mb-12 xl:px-0"
          >
            4 years ago, I began creating impactful, user-centric software
            products. Along the way, I've honed my skills in both front and
            back-end development.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-8 hidden md:flex md:max-w-xl xl:mx-0 xl:max-w-none"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-white/10">
                <div className="mb-2 text-2xl font-extrabold text-accent xl:text-4xl">
                  <CountUp start={0} end={4} duration={3} /> +
                </div>
                <div className="max-w-[100px] text-xs uppercase leading-[1.4] tracking-[1px]">
                  Years of experience
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-white/10">
                <div className="mb-2 text-2xl font-extrabold text-accent xl:text-4xl">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="max-w-[100px] text-xs uppercase leading-[1.4] tracking-[1px]">
                  Finished projects
                </div>
              </div>
              {/* satisfied */}
              <div className="relative flex-1 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-white/10">
                <div className="mb-2 text-2xl font-extrabold text-accent xl:text-3xl">
                  Countless
                </div>
                <div className="max-w-[100px] text-xs uppercase leading-[1.4] tracking-[1px]">
                  Satisfied Users
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex h-[480px] w-full flex-col xl:max-w-[48%]"
        >
          <div className="mx-auto mb-4 flex gap-x-4 xl:mx-0 xl:gap-x-8">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} relative cursor-pointer capitalize after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-8 after:bg-white xl:text-lg`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col items-center gap-y-2 py-2 xl:items-start xl:gap-y-4 xl:py-6">
            {aboutData[index].info.map((item, itemIndex) => {
              const dataSection = aboutData[index].title;
              return (
                <div
                  key={itemIndex}
                  className="flex max-w-max flex-1 flex-col flex-wrap items-center gap-x-4 gap-y-4 text-white/60 md:flex-row"
                >
                  {/* title */}
                  <div
                    className={`mb-2 ${dataSection !== 'experience' ? 'mr-3' : ''} text-lg font-light md:mb-0`}
                  >
                    {item.title}
                  </div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4"></div>
                  {/* icons */}
                  {item.icons?.map((icon, itemIndex) => {
                    return (
                      <div
                        className={`${itemIndex === 0 ? '-ml-6' : ''} text-3xl text-white`}
                      >
                        {icon}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
