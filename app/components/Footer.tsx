import React from "react";
import { motion } from "framer-motion";
import { FooterInfo } from "../lib/types";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";

const iconMap = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Twitter: Twitter,
  Email: Mail,
};

const Footer: React.FC<FooterInfo> = ({ mainText, links, endingMessage }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        stiffness: 100,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  return (
    <motion.footer
      id="footer"
      className="text-white w-full flex justify-center p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full max-w-4xl space-y-8">
        <motion.div variants={itemVariants}>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl text-left font-light mt-6 max-w-4xl mx-auto leading-loose lg:px-0">
            {mainText}
          </h2>
        </motion.div>
        <div className="flex justify-between items-center">
          <motion.div className="w-2/3" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none">
              {endingMessage}
            </h2>
          </motion.div>
          <motion.div className="flex space-x-4" variants={itemVariants}>
            {links.map((link, index) => {
              const Icon = iconMap[link.label as keyof typeof iconMap];
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-slate-200 hover:text-white transition-colors"
                  aria-label={link.label}
                  variants={iconVariants}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-6 h-6 md:w-9 md:h-9 lg:w-12 lg:h-12" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
