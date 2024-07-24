import Logo1 from "@/components/logo/Logo1";
import Logo2 from "@/components/logo/Logo2";
import Logo3 from "@/components/logo/Logo3";
import { Box } from "@chakra-ui/react";
import React from "react";

const LogoSection = ({ logoSize }) => {
  return (
    <Box>
      <Logo1 logoSize={logoSize} />
      {/* <Logo2 />
      <Logo3 /> */}
    </Box>
  );
};

export default LogoSection;
