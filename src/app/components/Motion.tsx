'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Transition from './Transition';

const Motion = (props: any) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div className="h-full">
        <Transition />
        {props.children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Motion;
