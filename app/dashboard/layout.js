import { appDetails } from "@/constants/home_pages";
import FooterSection from "@/sections/dashboard/FooterSection";
import HeaderSection from "@/sections/dashboard/HeaderSection";
import SidebarSection from "@/sections/dashboard/SidebarSection";
import { Box, Flex, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const metadata = {
  title: `Dashboard - ${appDetails.name}`,
};

const Layout = ({ children }) => {
  return (
    <Stack direction="row" h="100vh" spacing="none">
      <SidebarSection />
      <Box flex="1">
        <HeaderSection />
        <Box overflowY="scroll">
          {children}
        </Box>
        <FooterSection />
      </Box>
    </Stack>
  );
};

export default Layout;
