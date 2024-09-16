"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import BusinessCard from "./components/BusinessCard";
import Footer from "./components/Footer";
import BentoGridFirstLayer from "./components/BentoGridFirstLayer";
import { BusinessCardInfo, FooterInfo, TaglineInfo } from "./lib/types";

const businessCardInfo: BusinessCardInfo = {
  firstName: "Dawson",
  lastName: "McThay",
  title: "Full-Stack Developer",
  role1: "Game Developer",
  role2: "Gen-Z Indie Hacker",
  socialHandle: "@mcthaydt",
  workInquiries: "Work with me?",
  projectName: "OSAS",
  projectLink: "https://testing-osas.netlify.app/",
  startDate: new Date(2021, 4, 1),
};

const taglineInfo: TaglineInfo = {
  text: "Building digital solutions that drive results: mobile apps, games, and websites with a sales-focused edge.",
  className: "text-white text-left text-3xl font-light leading-relaxed",
};

const footerInfo: FooterInfo = {
  mainText:
    "Dawson is an account executive and full-stack developer selling AI-driven communication solutions and creating custom web and mobile applications for clients across industries. He works with marketing teams, security professionals, and entrepreneurs to automate business interactions and elevate digital experiences.",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dawsonmcthay/" },
    { label: "GitHub", href: "https://github.com/mcthaydt" },
    { label: "Twitter", href: "https://x.com/mcthaydt" },
    { label: "Email", href: "mailto:mcthaydawson@gmail.com" },
  ],
  endingMessage: "Let's chat 👋",
};

const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedSection>
        <BusinessCard {...businessCardInfo} />
      </AnimatedSection>
      <AnimatedSection>
        <div className="w-full flex justify-center">
          <div className="max-w-6xl w-full">
            <BentoGridFirstLayer tagline={taglineInfo} />
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <Footer {...footerInfo} />
      </AnimatedSection>
    </div>
  );
}
