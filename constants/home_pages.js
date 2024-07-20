import {
  AiOutlineBell,
  AiOutlineCalendar,
  AiOutlineMessage,
  AiOutlineRetweet,
  AiOutlineSend,
  AiOutlineLock,
  AiOutlineHome,
  AiOutlineDollarCircle,
  AiOutlineBulb,
  AiOutlineTool,
} from "react-icons/ai";
import { FooterNavLinks, SocialMediaLinks } from "./nav-links/footer-links";
import { HeaderNavLinks } from "./nav-links/header-links";

export const appDetails = {
  name: "App Name",
  slug: "app-name",
  logoUrl:
    "https://upload.wikimedia.org/wikipedia/commons/f/f1/Mercedes-Benz_Group.svg",
  description: "This is the App Description",
};

export const seoDetails = {
  author: "Tarantino",
  publisher: "Tarantino",
  metadataBase: "",
};

export const headerNavLinks = HeaderNavLinks;
export const footerNavLinks = FooterNavLinks(appDetails.name, appDetails.slug);
export const socialMediaLinks = SocialMediaLinks(appDetails.slug);

export const heroContent = {
  alert: {
    text: "New: SocialBridge is here! Check out the latest updates",
    label: "New",
  },
  heading: "Automate Your Emails and Tweets Effortlessly",
  subheading:
    "Our SaaS platform helps you schedule, manage, and optimize your email and Twitter content with ease.",
  buttonOne: {
    label: "Get Started",
    link: "/register",
  },
  buttonTwo: {
    label: "Learn more",
    link: "#features",
  },
  // featuredIn: {
  //   title: "FEATURED IN",
  //   children: [
  //     {
  //       label: "",
  //       logoUrl: "",
  //       link: "",
  //     },
  //     {
  //       label: "",
  //       logoUrl: "",
  //       link: "",
  //     },
  //   ],
  // },
  statsData: [
    {
      stat: "73M+",
      label: "developers",
    },
    {
      stat: "1B+",
      label: "contributors",
    },
    {
      stat: "4M+",
      label: "organizations",
    },
  ],
};

export const descriptionContent = {
  headline: "Connecting You with Your Audience Seamlessly",
  subheadline:
    "SocialBridge helps you connect with your audience effortlessly. Discover features that make it easy to manage and optimize your email and Twitter posts.",
};

export const benefitsContent = {
  title: "Bringing Communication and Automation Together",
  description:
    "SocialBridge helps you connect with your audience more effectively, streamlining your social media and email management with features designed to enhance your engagement and productivity.",
  benefits: [
    {
      title: "Automated Posting",
      description:
        "Schedule and automate your tweets and emails to keep your communication channels active even when you're not online.",
      icon: <AiOutlineRetweet size="3rem" />,
    },
    {
      title: "Engagement Tracking",
      description:
        "Monitor engagement metrics and track the performance of your emails and tweets with ease.",
      icon: <AiOutlineMessage size="3rem" />,
    },
    {
      title: "Custom Alerts",
      description:
        "Set up custom notifications to stay updated on important interactions and trends.",
      icon: <AiOutlineBell size="3rem" />,
    },
    {
      title: "Content Calendar",
      description:
        "Manage and plan your email and Twitter content with an integrated calendar view for better organization.",
      icon: <AiOutlineCalendar size="3rem" />,
    },
  ],
};

export const featuresDetails = {
  title: "Designed for business teams like yours",
  description:
    "Here at SocialBridge, we focus on technology and innovation to unlock long-term value and drive growth for your communication strategy.",
  features: [
    {
      title: "Automate Posts and Emails",
      description:
        "Schedule and automate your Twitter posts and emails effortlessly with our intuitive interface.",
      icon: AiOutlineSend,
    },
    {
      title: "Security & Compliance",
      description:
        "Ensure your data is secure and compliant with robust privacy controls and permissions.",
      icon: AiOutlineLock,
    },
    {
      title: "Advanced Analytics",
      description:
        "Gain insights with advanced analytics and track the performance of your Twitter and email campaigns.",
      icon: AiOutlineHome,
    },
    {
      title: "Cost Efficiency",
      description:
        "Optimize your marketing spend with cost-effective solutions tailored for businesses of all sizes.",
      icon: AiOutlineDollarCircle,
    },
    {
      title: "Innovative Features",
      description:
        "Access cutting-edge tools and features designed to enhance your communication strategy.",
      icon: AiOutlineBulb,
    },
    {
      title: "Easy Integration",
      description:
        "Seamlessly integrate with other tools and platforms for a smooth workflow.",
      icon: AiOutlineTool,
    },
  ],
};

export const ctaContent = {
  title: "Start your free trial today",
  description: "Try SocialBridge for 30 days. No credit card required.",
  ctaButton: "Free trial for 30 days",
};
