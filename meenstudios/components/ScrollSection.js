
// components/ScrollSection.js
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ScrollSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="h-screen flex justify-center items-center bg-gray-800 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-semibold">Interactive Scroll Effects</h2>
        <p className="mt-4 text-gray-400">Experience transitions as you scroll down.</p>
      </motion.div>
    </div>
  );
}
