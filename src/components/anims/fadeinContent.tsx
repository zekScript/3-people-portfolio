import { motion } from "framer-motion";
import { useState } from "react";

const FadeInContent: React.FC = () => {
  const [showText, setShowText] = useState(false);
  return (
    <>
      <div className="w-full h-full flex items-center justify-center flex-col gap-12">
        <motion.h1
          className="text-6xl font-bold text-sky-300 shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 7 }} // Adjust the duration as needed
          onAnimationComplete={() => setShowText(true)}
        >
          Welcome to my classmates wikipedia
        </motion.h1>
        {showText && (
          <motion.p
            className="text-xl font-semibold text-white shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Featuring: Eivydas, Vakaris, and danielius
          </motion.p>
        )}
      </div>
    </>
  );
};

export default FadeInContent;
