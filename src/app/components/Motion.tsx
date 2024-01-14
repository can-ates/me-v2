'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Transition from './Transition';

const Motion: React.FunctionComponent = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div className="h-full">
        <Transition />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Motion;
