import {
  Home,
  User,
  ArrowUpRight,
  Edit2,
  Briefcase,
  BookOpen,
  DollarSign,
  Activity,
  GitHub,
  Instagram,
  Linkedin,
} from "react-feather";

export const arrayHome = [
  { name: "Home", icon: <Home size={16} />, href: "/" },
];

export const arrayMe = [
  { name: "About", icon: <User size={16} />, href: "/about" },
  { name: "Thoughts", icon: <Activity size={16} />, href: "/thoughts" },
  { name: "Reading List", icon: <BookOpen size={16} />, href: "/reading-list" },
  { name: "Investments", icon: <DollarSign size={16} />, href: "/investments" },
];

export const arrayProjects = [
  { name: "From a Junior", icon: <Edit2 size={16} />, href: "/from-a-junior" },
  { name: "Design Work", icon: <Briefcase size={16} />, href: "/design-work" },
];

export const arraySocials = [
  {
    name: "Linkedin",
    icon: <Linkedin size={16} />,
    right: <ArrowUpRight size={16} />,
    href: "/",
  },
  {
    name: "Medium",
    icon: <User size={16} />,
    right: <ArrowUpRight size={16} />,
    href: "/",
  },
  {
    name: "Substack",
    icon: <User size={16} />,
    right: <ArrowUpRight size={16} />,
    href: "/",
  },
  {
    name: "Instagram",
    icon: <Instagram size={16} />,
    right: <ArrowUpRight size={16} />,
    href: "/",
  },
  {
    name: "Github",
    icon: <GitHub size={16} />,
    right: <ArrowUpRight size={16} />,
    href: "/",
  },
];
