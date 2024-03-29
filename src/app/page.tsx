'use client';
import { motion } from 'framer-motion';

import ParticlesContainer from './components/ParticlesContainer';
import ProjectsBtn from './components/ProjectsBtn';
import Avatar from './components/Avatar';

import { fadeIn } from './constants/variants';

export default function Home() {
  return (
    <div className="h-full bg-primary/60">
      {/* text */}
      <div className="h-full w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="container mx-auto flex h-full flex-col justify-center text-center xl:pt-40 xl:text-left">
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 xl:mt-8"
          >
            Product-Driven <br />{' '}
            <span className="text-accent">Software Engineer</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-4 max-w-sm xl:mx-0 xl:mb-16 xl:max-w-xl"
          >
            Deeply passionate about front-end development, I've honed my skills
            in JavaScript to create seamless, accessible user experiences. I
            continuously strive for excellence, leveraging my product
            engineering background to push boundaries.
          </motion.p>
          {/* btn */}
          <div className="relative z-10 flex justify-center xl:hidden">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="absolute bottom-0 right-0 h-full w-[1200px]">
        {/* bg img */}
        <div className="translate-z-0 absolute h-full w-full bg-none mix-blend-color-dodge xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat"></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute -bottom-32 h-full max-h-[600px] w-full max-w-[600px] lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
}
