import React from "react";
import { motion } from "framer-motion";
import GridItem from "./GridItem";
import { BentoGridProps } from "../lib/types";

const BentoGridFirstLayer: React.FC<BentoGridProps> = ({ tagline }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      className="mx-auto max-w-7xl min-h-screen p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
        {/* Left Column: Description + Image */}
        <motion.div className="flex flex-col h-full" variants={itemVariants}>
          <GridItem
            type="description"
            description={tagline.text}
            className="text-wrap mb-4"
            styles={{
              descriptionClass:
                "text-white text-left text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed",
            }}
          />
          <div className="flex-grow relative">
            <img
              src="/54FA08BF-76E3-4396-95F7-E97B8BCFF25A.png"
              alt="Dawson"
              className="w-full h-96 lg:h-full object-cover rounded-lg"
            />
          </div>
        </motion.div>
        {/* Right Column: Portfolio Item with Video */}
        <motion.div
          className="relative h-full rounded-lg overflow-hidden"
          variants={itemVariants}
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/OSAS Progress.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-6 flex flex-col justify-end">
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary mb-2">
              OSAS
            </h2>
            <p className="text-base sm:text-lg text-white mb-4">
              An asset store for open-source game engines.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "SvelteKit",
                "TypeScript",
                "Supabase",
                "PostgreSQL",
                "Prisma",
                "Kinde",
                "Stripe",
                "TailwindCSS",
                "Shadcn-Svelte",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="text-xs text-white bg-primary py-1 px-3 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/mcthaydt/testing_osas"
                className="btn btn-primary btn-sm"
              >
                Source Code
              </a>
              <a
                href="https://testing-osas.netlify.app/"
                className="btn btn-primary btn-sm"
              >
                Live Project
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BentoGridFirstLayer;
