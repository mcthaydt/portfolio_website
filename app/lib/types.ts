// lib/types.ts

export interface BusinessCardInfo {
  firstName: string;
  lastName: string;
  title: string;
  role1: string;
  role2: string;
  socialHandle: string;
  workInquiries: string;
  projectName: string;
  projectLink: string;
  startDate: Date;
}

export interface TaglineInfo {
  text: string;
  className: string;
}

export interface FooterInfo {
  mainText: string;
  links: FooterLink[];
  endingMessage: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

// GridItem Props Interface
export interface GridItemProps {
  type: "description" | "image" | "portfolio";
  title?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  };
  video?: {
    src: string;
    type: string;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    playsInline?: boolean;
    fallbackText?: string;
  };
  tags?: string[];
  githubLink?: string;
  liveProjectLink?: string;
  className?: string;
  styles?: {
    description?: React.CSSProperties;
    descriptionClass?: string;
    portfolioWrapperClass?: string;
    videoClass?: string;
    portfolioContentClass?: string;
    portfolioTitleClass?: string;
    portfolioDescriptionClass?: string;
    tagsContainerClass?: string;
    tagClass?: string;
    portfolioLinksWrapperClass?: string;
    portfolioLinkClass?: string;
  };
}

// BentoGrid Props Interface
export interface BentoGridProps {
  tagline: TaglineInfo;
}
