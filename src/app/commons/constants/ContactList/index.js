import {
  SiYoutube,
  SiGithub,
  SiInstagram,
  SiTiktok,
  SiDiscord,
  SiLinkedin,
} from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

const iconSize = 24;

export const CONTACTLIST = [
  {
    name: "Github",
    logo: <SiGithub size={iconSize} />,
    href: "https://github.com/ergovind08",
    color: "bg-neutral-800",
  },
  {
    name: "Instagram",
    logo: <SiInstagram size={iconSize} className="text-rose-600" />,
    href: "https://www.instagram.com/succinic08/",
    color: "bg-neutral-800",
  },
  {
    name: "Linkedin",
    logo: <SiLinkedin size={iconSize} className="text-blue-500" />,
    href: "https://www.linkedin.com/in/govind-jha-9209481a4/",
    color: "bg-neutral-800",
  },

  {
    name: "Youtube",
    logo: <SiYoutube size={iconSize} className="text-rose-500" />,
    href: "https://www.youtube.com/channel/UC6hrhQa3YDG_4P0DrQGuh9g",
    color: "bg-neutral-800",
  },
  {
    name: "Leetcode",
    logo: <SiLeetcode size={iconSize} className="text-lime-300" />,
    href: "https://leetcode.com/u/incorelang/",
    color: "bg-neutral-800",
  },
];
