import Sidebar1 from "@/components/pages/dashboard/sidebar/Sidebar1";
import React from "react";

const SidebarSection = ({ isMobileOpenSidebar }) => {
  return (
    <>
      <Sidebar1 isMobileOpenSidebar={isMobileOpenSidebar} />
    </>
  );
};

export default SidebarSection;
