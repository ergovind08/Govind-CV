import {
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiNextdotjs,
  SiFramer,
} from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { SiStreamlit } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
const iconSize = 24;

export const PROJECTSLISTS = [
  {
    id: 1,
    title: "IEM INNOVACION",
    description:
      "Tech-fest Website built with Next Js, Javascript and Tailwind CSS",
    slug: "hafidz-protfolio-website",
    link_demo: "https://iem-innovacia.vercel.app/",
    link_github: "https://github.com/ergovind08/IEM-INNOVACION",
    tech_stack: [
      {
        title: "Nextjs",
        icon: <SiNextdotjs size={iconSize} />,
      },
      {
        title: "TailwindCSS",
        icon: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
      },
      {
        title: "Javascript",
        icon: <SiJavascript size={iconSize} className="text-yellow-400" />,
      },
    ],

    tooltip: ["Next.js", "Tailwind CSS", "Javascript"],
    aos_delay: 200,

    image: "/innova.png",
    is_show: true,
    is_featured: true,
    params: {
      slug: "tech-fest-website",
    },
  },
  {
    id: 2,
    title: "Restuarant Rec Sys",
    description:
      "Restuarant Recommendation System using tech stack python and nlp",
    slug: "res-rec-ai",
    link_demo: "http://172.31.196.21:8501",
    link_github: "https://github.com/ergovind08/res-rec-AI",
    tech_stack: [
      {
        title: "Python",
        icon: <FaPython size={iconSize} />,
      },
      {
        title: "Flask",
        icon: <SiFlask size={iconSize} className="text-cyan-300" />,
      },
      {
        title: "Streamlit",
        icon: <SiStreamlit size={iconSize} className="text-yellow-400" />,
      },
      {
        title: "Jupyter Notebook",
        icon: <SiJupyter size={iconSize} />,
      },
    ],

    tooltip: ["Next.js", "Tailwind CSS", "Javascript", "Framer Motion"],
    aos_delay: 200,

    image: "/res.png",
    is_show: true,
    is_featured: true,
    params: {
      slug: "res-rec",
    },
  },
  {
    id: 3,
    title: "Reviews Analysis (Machine Learning)",
    description:
      "Analyse the Reviews of Any product in Ecomm Website on the basis of their sentiment",
    slug: "Reviews-Analysis",
    link_demo: "https://sentiment-analysis-react-app.vercel.app/",
    link_github: "https://github.com/ergovind08/Sentiment-Analysis-ReactApp",
    tech_stack: [
      {
        title: "Python",
        icon: <FaPython size={iconSize} />,
      },
      {
        title: "Flask",
        icon: <SiFlask size={iconSize} className="text-cyan-300" />,
      },
      {
        title: "Streamlit",
        icon: <SiStreamlit size={iconSize} className="text-yellow-400" />,
      },
      {
        title: "Jupyter Notebook",
        icon: <SiJupyter size={iconSize} />,
      },
    ],

    tooltip: ["Next.js", "Tailwind CSS", "Javascript", "Framer Motion"],
    aos_delay: 200,

    image: "/sentiment.png",
    is_show: true,
    is_featured: false,
    params: {
      slug: "res-rec",
    },
  },
  {
    id: 4,
    title: "Vedic GPT (Gen AI)",
    description:
      "Anlyzing the user text search and gives the sutaible and filtered response using Gen AI",
    slug: "Vedic GPT",
    link_demo: "https://sentiment-analysis-react-app.vercel.app/",
    link_github: "https://github.com/ergovind08/Sentiment-Analysis-ReactApp",
    tech_stack: [
      {
        title: "Python",
        icon: <FaPython size={iconSize} />,
      },
      {
        title: "Flask",
        icon: <SiFlask size={iconSize} className="text-cyan-300" />,
      },
      {
        title: "Streamlit",
        icon: <SiStreamlit size={iconSize} className="text-yellow-400" />,
      },
      {
        title: "Jupyter Notebook",
        icon: <SiJupyter size={iconSize} />,
      },
    ],

    tooltip: ["Next.js", "Tailwind CSS", "Javascript", "Framer Motion"],
    aos_delay: 200,

    image: "/vedic.png",
    is_show: true,
    is_featured: false,
    params: {
      slug: "res-rec",
    },
  },
  {
    id: 4,
    title: "Movie Metaverse (Machine Learning)",
    description: "Movie Recommendation based on similarity",
    slug: "movie-rec",
    link_demo: "https://sentiment-analysis-react-app.vercel.app/",
    link_github:
      "https://www.linkedin.com/posts/govind-jha-9209481a4_machinelearning-aicommunity-activity-7125724336056844288-pcLl?utm_source=share&utm_medium=member_desktop",
    tech_stack: [
      {
        title: "Python",
        icon: <FaPython size={iconSize} />,
      },
      {
        title: "Flask",
        icon: <SiFlask size={iconSize} className="text-cyan-300" />,
      },
      {
        title: "Streamlit",
        icon: <SiStreamlit size={iconSize} className="text-yellow-400" />,
      },
      {
        title: "Jupyter Notebook",
        icon: <SiJupyter size={iconSize} />,
      },
    ],

    tooltip: ["Next.js", "Tailwind CSS", "Javascript", "Framer Motion"],
    aos_delay: 200,

    image: "/mov-rec.png",
    is_show: true,
    is_featured: false,
    params: {
      slug: "res-rec",
    },
  },
];
