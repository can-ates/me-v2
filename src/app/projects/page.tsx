'use client';

import WorkSlider from '../components/WorkSlider';
import Bulb from '../components/Bulb';
import Circles from '../components/Circles';

import { motion } from 'framer-motion';
import { fadeIn } from '../constants/variants';

const Work = () => {
  return (
    <div className="flex h-full items-center bg-primary/30 py-36">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-8 xl:flex-row">
          {/* text */}
          <div className="mb-4 flex flex-col text-center xl:mb-0 xl:w-[30vw] xl:text-left">
            <motion.h2
              variants={fadeIn('up', '0.2')}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-0"
            >
              My Projects <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', '0.4')}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto mb-4 max-w-[400px] xl:mx-0"
            >
              Here are some my projects that I leveraged many technologies.
              Through the development of these projects, I have gained
              invaluable experience and insights.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
