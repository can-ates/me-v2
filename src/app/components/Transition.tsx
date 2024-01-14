'use client';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
};

const Transition = () => {
  const pathname = usePathname();
  return (
    <>
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.4, ease: 'easeInOut' }}
        variants={transitionVariants}
        className="fixed bottom-0 right-full top-0 z-30 h-screen w-screen bg-[#2e2257]"
      ></motion.div>
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.4, ease: 'easeInOut' }}
        variants={transitionVariants}
        className="fixed bottom-0 right-full top-0 z-20 h-screen w-screen bg-[#3b2d71]"
      ></motion.div>
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.4, ease: 'easeInOut' }}
        variants={transitionVariants}
        className="fixed bottom-0 right-full top-0 z-10 h-screen w-screen bg-[#4b3792]"
      ></motion.div>
    </>
  );
};

export default Transition;
