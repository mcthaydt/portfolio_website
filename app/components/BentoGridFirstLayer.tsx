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
        staggerChildren: 0.5, // Increased stagger time for slower sequence
        delayChildren: 0.3, // Slightly increased initial delay
        duration: 0.8, // Slower overall container fade-in
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Increased initial offset
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50, // Reduced stiffness for slower, smoother motion
        damping: 15, // Increased damping for less bouncy effect
        duration: 1, // Increased duration for slower animation
      },
    },
  };

  return (
    <motion.div
      className="p-4 grid mx-auto max-w-6xl grid-cols-1 md:grid-cols-2 gap-2 md:gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Column: Description + Image */}
      <div className="grid grid-rows-3 gap-2">
        <motion.div variants={itemVariants}>
          <GridItem
            type="description"
            description={tagline.text}
            className="text-wrap row-span-1"
            styles={{
              descriptionClass:
                "text-white text-left text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed mb-4",
            }}
          />
        </motion.div>
        <motion.div variants={itemVariants} className="row-span-2">
          <GridItem
            type="image"
            image={{
              src: "/54FA08BF-76E3-4396-95F7-E97B8BCFF25A.png",
              alt: "Dawson",
              width: 800,
              height: 600,
              className: "rounded-lg",
            }}
          />
        </motion.div>
      </div>
      {/* Right Column: Portfolio Item with Video */}
      <motion.div
        className="relative min-h-96 md:h-full"
        variants={itemVariants}
      >
        <GridItem
          type="portfolio"
          title="OSAS"
          description="An asset store for open-source game engines."
          video={{
            src: "OSAS Progress.mp4",
            type: "video/mp4",
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            fallbackText: "Your browser does not support the video tag.",
          }}
          tags={[
            "SvelteKit",
            "TypeScript",
            "Supabase",
            "PostgreSQL",
            "Prisma",
            "Kinde",
            "Stripe",
            "TailwindCSS",
            "Shadcn-Svelte",
          ]}
          githubLink="https://github.com/mcthaydt/testing_osas"
          liveProjectLink="https://testing-osas.netlify.app/"
          className="absolute inset-0"
          styles={{
            portfolioWrapperClass: "rounded-lg",
            portfolioContentClass:
              "bg-gradient-to-t from-black to-transparent p-4 z-10",
            portfolioTitleClass:
              "card-title text-5xl font-semibold text-primary",
            portfolioDescriptionClass: "text-sm mt-2 text-white",
            tagsContainerClass: "mt-8 space-r-2",
            tagClass: "text-xs text-white bg-primary py-1 rounded",
            portfolioLinksWrapperClass: "mt-12 space-x-4",
            portfolioLinkClass: "btn btn-secondary btn-sm",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default BentoGridFirstLayer;
