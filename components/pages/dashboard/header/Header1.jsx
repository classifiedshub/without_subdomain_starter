"use client";
import { appDetails } from "@/constants/home_pages";
import theme from "@/context/theme/theme";
import SidebarSection from "@/sections/dashboard/SidebarSection";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Text,
  Avatar,
  HStack,
  VStack,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { MdMenu } from "react-icons/md";

const profileMenu = [
  {
    label: "My Profile",
    icon: FaUser,
    link: "/dashboard/profile",
  },
];

const Header1 = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const user = session?.user;
  const [isMobileOpenSidebar, setIsMobileOpenSidebar] = useState(true);

  const handleLogout = async () => {
    await signOut();
    router.push("/");
  };
  const handleOpenSidebar = () => {
    setIsMobileOpenSidebar(!isMobileOpenSidebar);
  };

  return (
    <HStack
      align="center"
      justify="space-between"
      as="footer"
      bg="white"
      p={1}
      width="100%"
      // position="fixed"
      // top={0}
      // zIndex={1000}
    >
      <Box>
        <IconButton
          icon={<MdMenu />}
          size="sm"
          onClick={handleOpenSidebar}
          display={{ base: "flex", lg: "none" }}
        />
        {/* {isMobileOpenSidebar && (
          <SidebarSection isMobileOpenSidebar={isMobileOpenSidebar} />
        )} */}
      </Box>
      <HStack align="center" justify="space-between" spacing={4}>
        {/* Notifications  */}
        <Menu size="sm">
          <MenuButton
            as={IconButton}
            icon={<FiBell />}
            variant="outline"
            aria-label="Notifications"
          />
          <MenuList>
            <MenuItem>
              <HStack align="start">
                <Avatar
                  size="sm"
                  name="Bonnie Green"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold">Bonnie Green</Text>
                  <Text fontSize="sm">
                    Hey, what&apos;s up? All set for the presentation?
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    a few moments ago
                  </Text>
                </VStack>
              </HStack>
            </MenuItem>
            <MenuDivider />
            <MenuItem>View all notifications</MenuItem>
          </MenuList>
        </Menu>

        {/* Profile  */}
        <Menu size="sm">
          <MenuButton
            as={Button}
            rounded={"full"}
            minW={0}
            bg="transparent"
            _hover={{
              bg: "transparent",
            }}
          >
            <Avatar
              size="sm"
              name={`${user?.firstName} ${user?.lastName}`}
              src={`${appDetails.website}/images/`}
            />
          </MenuButton>

          <MenuList p={2}>
            <Stack spacing="none" fontSize="xs" p={2}>
              <Text fontWeight={700}>
                {user?.firstName} {user?.lastName}
              </Text>
              <Text>{user?.email}</Text>
            </Stack>
            {profileMenu.map((item, i) => (
              <Link key={i} href={item.link}>
                <MenuItem
                  _hover={{
                    bg: theme.colors.primary[500],
                    color: "white",
                    borderRadius: 10,
                  }}
                >
                  <HStack spacing={2} fontSize="xs">
                    <Icon as={item.icon} boxSize={4} />
                    <Text>{item.label}</Text>
                  </HStack>
                </MenuItem>
              </Link>
            ))}
            <MenuDivider />
            <MenuItem
              _hover={{
                bg: theme.colors.primary[500],
                color: "white",
                borderRadius: 10,
              }}
              onClick={handleLogout}
            >
              <HStack spacing={2} fontSize="xs">
                <Icon as={FaSignOutAlt} boxSize={4} />
                <Text>Sign Out</Text>
              </HStack>
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </HStack>
  );
};

export default Header1;
