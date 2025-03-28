import { motion } from "framer-motion";

const Banner = () => {
  // Annimation Varient
  const textVariants_1 = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  const textVariants_2 = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  // button var
  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-black/35">
      <div className="container mx-auto">
        <div className="banner relative w-full min-h-[400px] flex items-center justify-center">
          <div className="relative w-full bg-gradient-to-r md:grid md:grid-cols-[500px_1fr] lg:pt-24 pt-10 pb-10 md:pb-20">
            <div className="text-center md:text-left text-white space-y-4 md:space-y-6 px-4">
              {/* Head */}
              <div className="space-y-2 md:space-y-4">
                <motion.h1
                  initial="hidden"
                  animate="visible"
                  variants={textVariants_1}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-4xl sm:text-5xl md:text-[50px] lg:text-6xl font-bold leading-[1.2] md:leading-[70px] mt-8 md:mt-0"
                >
                  Raining Offers For Hot Summer!
                </motion.h1>
              </div>

              {/*Discount*/}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={textVariants_2}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-xl md:text-2xl font-bold py-2 px-2 rounded-full inline-block"
              >
                25%Off On All Products
              </motion.div>

              <div className="flex flex-col md:flex-row gap-4 justify-start">
                <motion.button
                  initial="hidden"
                  animate="visible"
                  variants={buttonVariants}
                  transition={{ duration: 1.5, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white text-blue-900 px-8 py-3 rounded-[4px] font-bold hover:bg-yellow-300 transition-all"
                >
                  SHOP NOW
                </motion.button>
                <motion.button
                  initial="hidden"
                  animate="visible"
                  variants={buttonVariants}
                  transition={{ duration: 1.5, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white/20 transition-all"
                >
                  FIND MORE
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
