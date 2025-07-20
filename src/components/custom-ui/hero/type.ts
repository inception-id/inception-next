import { JSX } from "react";

export type HeroSectionProps = {
  title: string;
  description: string;
  imageSrc: string;
  ctaOne?: JSX.Element;
  ctaTwo?: JSX.Element;
};
