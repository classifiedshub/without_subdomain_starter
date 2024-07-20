import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export const FooterNavLinks = (appName, appLink) => [
  {
    label: "Resources",
    children: [
      { label: `${appName}`, url: "/" },
      { label: "Tailwind CSS", url: "https://tailwindcss.com/" },
    ],
  },
  {
    label: "Follow Us",
    children: [
      {
        label: "Github",
        url: `https://github.com/${appLink}`,
        icon: <FaGithub />,
      },
      {
        label: "Discord",
        url: `https://discord.com/${appLink}`,
        icon: <FaDiscord />,
      },
    ],
  },
  {
    label: "Legal",
    children: [
      { label: "Privacy Policy", url: "/privacy-policy" },
      { label: "Terms & Conditions", url: "terms-conditions" },
    ],
  },
];

export const SocialMediaLinks = (appLink) => [
  {
    label: "Twitter",
    hoverColor: "#1DA1F2",
    url: `https://twitter.com/${appLink}`,
    icon: <FaTwitter />,
  },
  {
    label: "Facebook",
    hoverColor: "#1877F2",
    url: `https://facebook.com/${appLink}`,
    icon: <FaFacebook />,
  },
  {
    label: "Instagram",
    hoverColor: "#8A3AB9",
    url: `https://instagram.com/${appLink}`,
    icon: <FaInstagram />,
  },
  {
    label: "Github",
    hoverColor: "#181717",
    url: `https://github.com/${appLink}`,
    icon: <FaGithub />,
  },
  {
    label: "Discord",
    hoverColor: "#5865F2",
    url: `https://discord.com/${appLink}`,
    icon: <FaDiscord />,
  },
];
