import { motion } from "framer-motion";

const Aboutdetails = () => {
  const waveVariants = {
    animate: {
      y: [0, -10, 0, 10, 0],
      scaleX: [1, 1.1, 1, 0.9, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full p-5">
      <div className="flex items-center justify-center mb-5">
        <motion.div
          className="w-24 h-1 bg-gray-300"
          variants={waveVariants}
          animate="animate"
        />
        <h2 className="mx-4 text-3xl font-bold whitespace-nowrap font-bebas">
          ABOUT LAZERJET TECHNOLOGIES
        </h2>
        <motion.div
          className="w-24 h-1 bg-gray-300"
          variants={waveVariants}
          animate="animate"
        />
      </div>
    </div>
  );
};

export default Aboutdetails;
