import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className: string;
}

const MotionWrap = ({ children, className }: Props) => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 1 }}
      className={`${className} `}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrap;
