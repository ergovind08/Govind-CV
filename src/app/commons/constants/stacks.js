import { BiLogoJavascript } from "react-icons/bi";
import { BsFillBootstrapFill } from "react-icons/bs";
import {
  SiChakraui,
  SiCss3,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGithub,
  SiGraphql,
  SiGulp,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPhp,
  SiPrisma,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiReacttable,
  SiRedux,
  SiSass,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiCplusplus,
  SiPython,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiKeras } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiOpencv } from "react-icons/si";
import { SiFoodpanda } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiStreamlit } from "react-icons/si";
import { TbVectorSpline } from "react-icons/tb";
import { FaDocker } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { SiAzuredevops } from "react-icons/si";
import { FcLinux } from "react-icons/fc";

const iconSize = "100%";

export const STACKS = [
  {
    name: "JavaScript",
    icon: <SiJavascript size={iconSize} className="text-yellow-400" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={iconSize} />,
  },
  {
    name: "React.js",
    icon: <SiReact size={iconSize} className="text-sky-500" />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  },
  {
    name: "Bootstrap",
    icon: <BsFillBootstrapFill size={iconSize} className="text-purple-500" />,
  },
  {
    name: "Material UI",
    icon: <SiMui size={iconSize} className="text-sky-400" />,
  },
  {
    name: "Vite",
    icon: <SiVite size={iconSize} className="text-purple-500" />,
  },
  {
    name: "ChakraUI",
    icon: <SiChakraui size={iconSize} className="text-teal-500" />,
  },
  {
    name: "React Native",
    icon: <SiReact size={iconSize} className="text-sky-600" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase size={iconSize} className="text-yellow-500" />,
  },
  {
    name: "Framer Motion",
    icon: <SiFramer size={iconSize} />,
  },
  {
    name: "Vue.js",
    icon: <SiVuedotjs size={iconSize} className="text-green-500" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress size={iconSize} />,
  },
  {
    name: "Redux",
    icon: <SiRedux size={iconSize} className="text-purple-500" />,
  },
  {
    name: "React Query",
    icon: <SiReactquery size={iconSize} className="text-red-600" />,
  },
  {
    name: "HTML",
    icon: <SiHtml5 size={iconSize} className="text-orange-500" />,
  },
  {
    name: "CSS",
    icon: <SiCss3 size={iconSize} className="text-blue-500" />,
  },
  {
    name: "Node JS",
    icon: <SiNodedotjs size={iconSize} className="text-green-600" />,
  },
  {
    name: "Github",
    icon: <SiGithub size={iconSize} />,
  },

  {
    name: "React Router",
    icon: <SiReactrouter size={iconSize} className="text-pink-500" />,
  },
  {
    name: "React Hook Form",
    icon: <SiReacthookform size={iconSize} className="text-pink-500" />,
  },
  {
    name: "React Table",
    icon: <SiReacttable size={iconSize} className="text-rose-600" />,
  },
];

export const STACK_LANG = [
  {
    name: "C++",
    icon: <SiCplusplus size={iconSize} />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={iconSize} className="text-yellow-400" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={iconSize} className="text-blue-500" />,
  },
  {
    name: "Python",
    icon: <SiPython size={iconSize} className="text-green-600" />,
  },
  {
    name: "Java",
    icon: <DiJava size={iconSize} className="text-orange-500" />,
  },
  // {
  //   name: "Java",
  //   icon: <SiJava size={iconSize} />,
  // },
  // {
  //   name: "Python",
  //   icon: <SiPython size={iconSize} />,
  // },
];

export const STACK_DATABASE = [
  {
    name: "MySQL",
    icon: <SiMysql size={iconSize} className="text-blue-500" />, // MySQL's typical blue color
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={iconSize} className="text-green-500" />, // MongoDB's green color
  },
];

export const STACK_ML = [
  {
    name: "TensorFlow",
    icon: <SiTensorflow size={iconSize} className="text-orange-500" />, // TensorFlow's orange color
  },
  {
    name: "PyTorch",
    icon: <SiPytorch size={iconSize} className="text-red-600" />, // PyTorch's red color
  },
  {
    name: "Keras",
    icon: <SiKeras size={iconSize} className="text-red-500" />, // Keras's red color
  },
  {
    name: "Scikit-learn",
    icon: <SiScikitlearn size={iconSize} className="text-blue-500" />, // Scikit-learn's blue color
  },
  {
    name: "OpenCV",
    icon: <SiOpencv size={iconSize} className="text-blue-400" />, // OpenCV's blue color
  },
  {
    name: "Pandas",
    icon: <SiFoodpanda size={iconSize} className="text-pink-600" />, // Pandas' pink color (assuming you meant the mascot, which is pink)
  },
  {
    name: "NumPy",
    icon: <SiNumpy size={iconSize} className="text-blue-600" />, // NumPy's blue color
  },
];

export const STACK_TOOL = [
  {
    name: "Git/GitHub",
    icon: <SiGithub size={iconSize} />,
  },
  {
    name: "Vercel",
    icon: <SiVercel size={iconSize} className="text-black" />,
  },
  {
    name: "Netlify",
    icon: <SiNetlify size={iconSize} className="text-cyan-500" />,
  },
  {
    name: "Streamlit",
    icon: <SiStreamlit size={iconSize} className="text-red-500" />,
  },
  {
    name: "Spline",
    icon: <TbVectorSpline size={iconSize} className="text-blue-500" />, // No direct icon, using a web icon
  },

  {
    name: "Docker",
    icon: <FaDocker size={iconSize} className="text-blue-600" />,
  },

  {
    name: "Postman",
    icon: <SiPostman size={iconSize} className="text-orange-500" />,
  },
  {
    name: "VS Code",
    icon: <SiVisualstudiocode size={iconSize} className="text-blue-500" />,
  },
  {
    name: "Figma",
    icon: <SiFigma size={iconSize} className="text-pink-500" />,
  },
  {
    name: "Heroku",
    icon: <SiHeroku size={iconSize} className="text-purple-600" />,
  },
  {
    name: "AWS",
    icon: <FaAws size={iconSize} className="text-orange-500" />,
  },
  {
    name: "Google Cloud",
    icon: <SiGooglecloud size={iconSize} className="text-blue-400" />,
  },
  {
    name: "Azure DevOps",
    icon: <SiAzuredevops size={iconSize} className="text-blue-600" />,
  },

  {
    name: "Linux",
    icon: <FcLinux size={iconSize} className="text-green-500" />,
  },
];
