import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { container } from '../../lib/motion';

type Props = { children: ReactNode };

export default function BentoGrid({ children }: Props) {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-16 md:auto-rows-[minmax(96px,auto)] md:grid-cols-12 md:py-24"
    >
      {children}
    </motion.section>
  );
}
