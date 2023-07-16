"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getTransition } from "@/utils/getTransition";

const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)] bg-dark/10 grid grid-cols-5">
      {/* FIRST COL */}
      <div className="w-full h-full">
        <div className="w-full h-4/6 overflow-hidden">
          <motion.div
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition()}
            className="w-full h-full"
          >
            <Image
              src="https://images.pexels.com/photos/6070148/pexels-photo-6070148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="female teenager sitting on floor of supermarket near shopping trolley
"
              width={300}
              height={700}
              priority
              className="w-full h-full  object-cover"
            />
          </motion.div>
        </div>
      </div>
      {/* SECOND COL */}
      <div className="w-full h-full"></div>
      {/* THIRD COL */}
      <div className="w-full h-full flex items-center">
        <div className="w-full h-4/6  overflow-hidden">
          <motion.div
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition(0.2)}
            className="w-full h-full"
          >
            <Image
              src="https://images.pexels.com/photos/6280951/pexels-photo-6280951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Black woman choosing flowers in street shop"
              width={300}
              height={700}
              priority
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      {/* FOURTH COL */}
      <div className="w-full h-full"></div>
      {/* FIFTH COL */}
      <div className="w-full h-full flex items-end">
        <div className="w-full h-4/6 overflow-hidden">
          <motion.div
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition(0.4)}
            className="w-full h-full"
          >
            <Image
              src="https://images.pexels.com/photos/6567731/pexels-photo-6567731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Cheerful woman with shopping bags running on street
"
              width={300}
              height={700}
              priority
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
