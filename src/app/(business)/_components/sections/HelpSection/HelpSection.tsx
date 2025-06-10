import { Button } from "@/shared_components/Button";
import React from "react";

export interface InfoItem {
  title: string;
  description: string;
  btn: string;
  action: string;
}

const InformationBlock = ({ title, description, btn, action }: InfoItem) => {
  const isExternalLink = (url: string | undefined) => {
    if (!url) return false;
    return (
      url.startsWith("http://") ||
      url.startsWith("https://") ||
      url.startsWith("//") ||
      url.includes("forms.office.com")
    );
  };

  // Determina si este action específico es una URL externa
  const isExternal = isExternalLink(action);

  return (
    <div className="lg:pb:24 flex flex-1 flex-col items-center gap-4 border-t-[1px] border-gray px-12 py-12 lg:items-start lg:border-l-[1px] lg:border-t-0 lg:pb-24 lg:pt-8">
      <h3 className="text-center text-2xl font-medium lg:text-left">{title}</h3>
      <p className="text-center lg:text-left">{description}</p>
      <Button variant={"outline"} className="block max-w-96 px-8 py-4">
        {action ? (
          <a
            href={action}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            {btn}
          </a>
        ) : (
          btn
        )}
      </Button>
    </div>
  );
};

interface Props {
  info: InfoItem[];
  title?: string;
}

const HelpSection = ({ info, title }: Props) => {
  if (info.length === 0) return;
  return (
    <section className="limit px-12">
      {title && <h3 className="my-12 text-4xl">{title}</h3>}
      <div className="flex flex-col lg:flex-row">
        {info.map((inf) => (
          <InformationBlock key={inf.title} {...inf} />
        ))}
      </div>
    </section>
  );
};

export default HelpSection;
