import { appDetails } from "@/constants/home_pages";
import { Box } from "@chakra-ui/react";
import React from "react";

export const metadata = {
    title: `Onboard - ${appDetails.name}`
}

const Layout = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Layout;
