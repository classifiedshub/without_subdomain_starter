import { appDetails } from "@/constants/home_pages";
import { Box } from "@chakra-ui/react";
import React from "react";

export const metadata = {
    title: `Login - ${appDetails.name}`
}

const Layout = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Layout;
