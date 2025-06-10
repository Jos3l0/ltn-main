import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const socialNetworks = {
  linkedin: {
    url: "https://www.linkedin.com/company/gltn",
    icons: {
      black: "/icons/linkedin-black.png",
      white: "/icons/linkedin-white.png",
    },
  },
  youtube: {
    url: "https://www.youtube.com/@GrupoLTN",
    icons: {
      black: "/icons/youtube-black.png",
      white: "/icons/youtube-white.png",
    },
  },
  facebook: {
    url: "https://www.facebook.com/LTNargentina",
    icons: {
      black: "/icons/facebook-black.png",
      white: "/icons/facebook-white.png",
    },
  },
  instagram: {
    url: "https://www.instagram.com/grupoltn.oficial/",
    icons: {
      black: "/icons/instagram-black.png",
      white: "/icons/instagram-white.png",
    },
  },
};

interface Props {
  className?: string;
  variant?: "white" | "black";
  size?: "fit" | "full";
}

const SocialIcons = ({ className, variant = "white", size = "fit" }: Props) => {
  const iconClasses = cn({
    "text-white": variant === "white",
    "text-black": variant === "black",
    "w-full": size === "full",
    "gap-12": size === "fit",
  });

  return (
    <div
      className={cn(
        "flex flex-row gap-8 md:w-12 md:flex-col md:items-center",
        className
      )}
    >
      {Object.entries(socialNetworks).map(([name, { url, icons }]) => (
        <div key={name}>
          <a href={url}>
            <Image
              src={icons[variant]}
              alt={`${name} icon`}
              className={cn("w-8", iconClasses)}
              width={100}
              height={100}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;
