import { motion, useReducedMotion } from 'framer-motion';

type FloatingMetricProps = {
  text: string;
  index?: number;
};

export default function FloatingMetric({ text, index = 0 }: FloatingMetricProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="rounded-xl border border-neon/20 bg-neon/5 px-3 py-2 text-xs font-semibold text-slate-100"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, delay: index * 0.07 }}
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -4, 0],
            }
      }
    >
      {text}
    </motion.div>
  );
}
