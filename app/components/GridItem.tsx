import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GridItemProps } from "../lib/types";

const GridItem: React.FC<GridItemProps> = ({
  type,
  title,
  description,
  image,
  video,
  tags,
  githubLink,
  liveProjectLink,
  className = "",
  styles = {},
}) => {
  const renderContent = () => {
    switch (type) {
      case "description":
        return (
          <h2 style={styles.description} className={styles.descriptionClass}>
            {description}
          </h2>
        );
      case "image":
        return (
          <div className="relative w-full h-full">
            {image && (
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className={image.className}
                layout="responsive"
                objectFit="cover"
              />
            )}
          </div>
        );
      case "portfolio":
        return (
          <div
            className={`relative w-full h-full overflow-hidden ${styles.portfolioWrapperClass}`}
          >
            {video && (
              <video
                className={`absolute top-0 left-0 w-full h-full object-cover ${styles.videoClass}`}
                autoPlay={video.autoPlay}
                loop={video.loop}
                muted={video.muted}
                playsInline={video.playsInline}
              >
                <source src={video.src} type={video.type} />
                {video.fallbackText}
              </video>
            )}
            <div
              className={`absolute inset-0 flex flex-col justify-end ${styles.portfolioContentClass}`}
            >
              {title && <h2 className={styles.portfolioTitleClass}>{title}</h2>}
              {description && (
                <p className={styles.portfolioDescriptionClass}>
                  {description}
                </p>
              )}
              {tags && tags.length > 0 && (
                <div
                  className={`grid grid-cols-4  md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2 ${styles.tagsContainerClass}`}
                >
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`text-xs md:text-base rounded-md whitespace-nowrap text-center ${styles.tagClass}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div
                className={`mt-4 flex flex-wrap gap-2 ${styles.portfolioLinksWrapperClass}`}
              >
                {githubLink && (
                  <Link
                    href={githubLink}
                    className={`text-sm sm:text-base ${styles.portfolioLinkClass}`}
                  >
                    GitHub
                  </Link>
                )}
                {liveProjectLink && (
                  <Link
                    href={liveProjectLink}
                    className={`text-sm sm:text-base ${styles.portfolioLinkClass}`}
                  >
                    Live Project
                  </Link>
                )}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`rounded-lg w-full h-full overflow-hidden ${className}`}>
      {renderContent()}
    </div>
  );
};

export default GridItem;
