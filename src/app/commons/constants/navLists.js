import {
  BiHome,
  BiEditAlt,
  BiCategoryAlt,
  BiLeaf,
  BiPaperPlane,
  BiBox,
  BiPackage,
  BiSitemap,
  BiPlay,
  BiChat,
} from "react-icons/bi";

const icon_size = 20;

export const navLists = [
  {
    name: "Home",
    link: "/",
    icon: <BiHome size={icon_size} />,
  },
  {
    name: "About",
    link: "/about",
    icon: <BiLeaf size={icon_size} />,
  },

  {
    name: "Projects",
    link: "/projects",
    icon: <BiBox size={icon_size} />,
  },

  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <BiCategoryAlt size={icon_size} />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <BiPaperPlane size={icon_size} />,
  },
];
