import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlinePieChart,
  AiOutlineUser,
} from "react-icons/ai";
import { FiMail, FiSettings, FiTwitter } from "react-icons/fi";

const dashboardBaseUrl = "/dashboard";
const sidebarContents = [
  {
    label: "Overview",
    icon: AiOutlineHome,
    href: `${dashboardBaseUrl}`,
  },
  {
    label: "Schedule",
    icon: AiOutlineCalendar,
    href: `${dashboardBaseUrl}/schedule`,
  },
  {
    label: "Analytics",
    icon: AiOutlinePieChart,
    href: `${dashboardBaseUrl}/analytics`,
  },
  {
    label: "Email",
    icon: FiMail,
    href: `${dashboardBaseUrl}/email-campaigns`,
    subItems: [
      {
        label: "Sign In",
        href: "/sign-in",
      },
      {
        label: "Sign Up",
        href: "/sign-up",
      },
      {
        label: "Forgot Password",
        href: "/forgot-password",
      },
    ],
  },
  {
    label: "Twitter",
    icon: FiTwitter,
    href: `${dashboardBaseUrl}/twitter`,
    subItems: [
      {
        label: "Sign In",
        href: "/sign-in",
      },
      {
        label: "Sign Up",
        href: "/sign-up",
      },
      {
        label: "Forgot Password",
        href: "/forgot-password",
      },
    ],
  },
  {
    label: "Settings",
    href: `${dashboardBaseUrl}/settings`,
    icon: FiSettings,
  },
];

export default sidebarContents;
