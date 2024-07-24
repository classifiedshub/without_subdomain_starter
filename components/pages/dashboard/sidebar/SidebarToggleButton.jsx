import { IconButton } from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";

const SidebarToggleButton = ({ onClick }) => {
  return (
    <IconButton
      icon={<MdMenu />}
      aria-label="Open sidebar"
      onClick={onClick}
      p={2}
      mt={2}
      ml={3}
      size="sm"
      variant="outline"
      display={{ base: "inline-flex", md: "none" }}
      _hover={{ bg: "gray.100" }}
      _focus={{ outline: "none", ring: 2, ringColor: "gray.200" }}
    />
  );
};

export default SidebarToggleButton;
