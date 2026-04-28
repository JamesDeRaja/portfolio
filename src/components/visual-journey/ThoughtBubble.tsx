import { motion, useReducedMotion } from 'framer-motion';

type ThoughtBubbleProps = {
  text: string;
  index?: number;
};

export default function ThoughtBubble({ text, index = 0 }: ThoughtBubbleProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className="inline-flex items-center rounded-full border border-neon/20 bg-void-900/70 px-3 py-1 text-xs font-mono text-neon"
      initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -6, 0],
            }
      }
    >
      {text}
    </motion.span>
  );
}
