import React from "react";
import { appDetails, seoDetails } from "@/constants/home_pages";
import { Box } from "@chakra-ui/react";
import HeaderSection from "@/sections/home/HeaderSection";
import FooterSection from "@/sections/home/FooterSection";

export const metadata = {
  title: appDetails.name,
  description: appDetails.description,
  keywords: "",
  metadataBase: seoDetails.metadataBase,
  alternates: {
    canonical: "/",
  },
  author: {
    name: seoDetails.author,
  },
  publisher: seoDetails.publisher,
};
const Layout = ({ children }) => {
  return (
    <Box>
      <HeaderSection />
      {children}
      <FooterSection />
    </Box>
  );
};

export default Layout;
