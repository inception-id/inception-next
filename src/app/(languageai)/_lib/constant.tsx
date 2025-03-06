import {
  LuAudioLines,
  LuBadgeCheck,
  LuClock,
  LuDatabase,
  LuFileQuestion,
  LuHouse,
  LuLanguages,
  LuSquareTerminal,
  LuUser,
} from "react-icons/lu";
import { CgTranscript } from "react-icons/cg";
import { TbPigMoney, TbUserShare } from "react-icons/tb";

export const LANGUAGEAI_MENUS = [
  {
    title: "Home",
    href: "/languageai",
    icon: <LuHouse />,
  },
  {
    title: "Translate",
    href: "/languageai/translate",
    icon: <LuLanguages />,
  },
  {
    title: "Checkbot",
    href: "/languageai/checkbot",
    icon: <LuSquareTerminal />,
  },
  {
    title: "Text to Speech",
    href: "/languageai/text-to-speech",
    icon: <LuAudioLines />,
  },
  {
    title: "Speech to Text",
    href: "/languageai/speech-to-text",
    icon: <CgTranscript />,
  },
  {
    title: "History",
    href: "/languageai/history",
    icon: <LuClock />,
    refresh: true,
  },
  {
    title: "Storage",
    href: "/languageai/storage",
    icon: <LuDatabase />,
    refresh: true,
  },
  {
    title: "Shared",
    href: "/languageai/shared",
    icon: <TbUserShare />,
    refresh: true,
  },
  {
    title: "Subscription",
    href: "/languageai/subscription",
    icon: <LuBadgeCheck />,
    refresh: true,
  },
  {
    title: "Pricing",
    href: "/languageai/plans",
    icon: <TbPigMoney />,
  },
  {
    title: "Support",
    href: "/support",
    icon: <LuFileQuestion />,
  },
  {
    title: "Account",
    href: "/account",
    icon: <LuUser />,
  },
];
