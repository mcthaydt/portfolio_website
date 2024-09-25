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
  title: "IT Analyst",
  role1: "Game Developer",
  role2: "Gen-Z Indie Hacker",
  socialHandle: "@mcthaydt",
  workInquiries: "Work with me?",
  projectName: "OSAS",
  projectLink: "https://testing-osas.netlify.app/",
  startDate: new Date(2023, 8, 1),
};

const taglineInfo: TaglineInfo = {
  text: "Optimizing IT support through automation: enhancing efficiency, resolving issues, and elevating user experiences across platforms.",
  className: "text-white text-left text-3xl font-light leading-relaxed",
};

const footerInfo: FooterInfo = {
  mainText:
    "Dawson is an experienced Service Desk Analyst specializing in automation and delivering exceptional customer support. He excels in troubleshooting diverse IT systems, managing high-volume support requests, and maintaining critical technical infrastructure. With a strong background in communication and problem-solving, Dawson works effectively with cross-functional teams to streamline IT operations and enhance user experiences across multiple platforms and technologies.",
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
