import React from "react";
import { motion } from "framer-motion";
import { BusinessCardInfo } from "../lib/types";
import { calculateExperience } from "../lib/utils";

const GridCell: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <motion.div
    className={`border-b-2 border-slate-150 py-2 ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const Name: React.FC<{
  firstName: string;
  lastName: string;
  experience: string;
}> = ({ firstName, lastName, experience }) => (
  <GridCell className="pr-2 relative">
    <motion.h1
      className="mt-6 text-7xl md:text-8xl lg:text-9xl font-bold leading-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      {firstName}
    </motion.h1>
    <motion.h1
      className="text-7xl md:text-8xl lg:text-9xl font-bold mb-1 leading-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      {lastName}
    </motion.h1>
    <motion.div
      className="badge badge-primary text-white px-2 py-1 rounded-bl-lg text-sm mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      {experience}
    </motion.div>
  </GridCell>
);

const InfoRow: React.FC<{
  left: React.ReactNode;
  right: React.ReactNode;
  leftHref?: string;
  rightHref?: string;
}> = ({ left, right, leftHref, rightHref }) => (
  <motion.div className="grid grid-cols-2" variants={rowVariants}>
    <GridCell className="pr-2">
      {leftHref ? (
        <motion.a
          href={leftHref}
          className="btn btn-ghost btn-sm text-sm md:text-base text-slate-100 hover:text-white transition-colors p-0 h-auto min-h-0 normal-case"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {left}
        </motion.a>
      ) : (
        <p className="text-sm md:text-base text-slate-100">{left}</p>
      )}
    </GridCell>
    <GridCell className="pl-2 text-right">
      {rightHref ? (
        <motion.a
          href={rightHref}
          className="btn btn-ghost btn-sm text-sm md:text-base text-slate-100 hover:text-white transition-colors p-0 h-auto min-h-0 normal-case"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {right}
        </motion.a>
      ) : (
        <p className="text-sm md:text-base text-slate-100">{right}</p>
      )}
    </GridCell>
  </motion.div>
);

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6, // Delay the start of row animations
    },
  },
};

const BusinessCard: React.FC<BusinessCardInfo> = ({
  firstName,
  lastName,
  title,
  role1,
  role2,
  socialHandle,
  workInquiries,
  projectName,
  projectLink,
  startDate,
}) => {
  const experience = React.useMemo(
    () => calculateExperience(startDate),
    [startDate]
  );

  return (
    <motion.div
      className="text-white max-w-screen flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full max-w-4xl"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Name
          firstName={firstName}
          lastName={lastName}
          experience={experience}
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <InfoRow
            left={title}
            right={socialHandle}
            rightHref={`https://twitter.com/${socialHandle.replace("@", "")}`}
          />
          <InfoRow left={role1} right={workInquiries} rightHref="#footer" />
          <InfoRow
            left={role2}
            right={`Building: ${projectName}`}
            rightHref={projectLink}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BusinessCard;
