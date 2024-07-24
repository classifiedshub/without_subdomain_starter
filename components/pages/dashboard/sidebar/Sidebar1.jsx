"use client";
import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  Collapse,
  useDisclosure,
  IconButton,
  Stack,
  HStack,
} from "@chakra-ui/react";
import theme from "@/context/theme/theme";
import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiChevronUp,
} from "react-icons/fi";
import sidebarContents from "@/constants/dashboard_pages";
import LogoSection from "@/sections/home/LogoSection";
import Link from "next/link";

const SidebarItem = ({
  label,
  icon,
  link,
  subItems,
  children,
  isSidebarOpen,
}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <VStack align="stretch" spacing={0}>
      {subItems ? (
        <>
          <Flex
            align="center"
            py={2}
            px={3}
            rounded="lg"
            _hover={{ bg: theme.colors.secondary[500], color: "white" }}
            // onClick={hasChildren ? onToggle : undefined}
            // cursor={hasChildren ? "pointer" : undefined}
          >
            <HStack
              align="center"
              justify="space-between"
              w="100%"
              onClick={onToggle}
            >
              <HStack>
                {icon && <Box>{icon}</Box>}
                <Text
                  flex={1}
                  fontSize="sm"
                  fontWeight={600}
                  display={isSidebarOpen ? "flex" : "none"}
                >
                  {label}
                </Text>
              </HStack>
              <IconButton
                size="xs"
                icon={isOpen ? <FiChevronUp /> : <FiChevronDown />}
                aria-label="Toggle submenu"
                variant="ghost"
                color="white"
                _hover={{
                  bg: "transparent"
                }}
                display={isSidebarOpen ? "flex" : "none"}
              />
            </HStack>
          </Flex>
          <Collapse in={isOpen}>
            <VStack align="stretch" pl={8} spacing={1} color="white">
              {subItems.map((subItem, i) => (
                <HStack key={i}>
                  <Link href={subItem.href}>
                    <Text
                      flex={1}
                      fontSize="sm"
                      display={isSidebarOpen ? "flex" : "none"}
                    >
                      {subItem.label}
                    </Text>
                  </Link>
                </HStack>
              ))}
            </VStack>
          </Collapse>
        </>
      ) : (
        <Link href={link}>
          <Flex
            align="center"
            py={2}
            px={3}
            rounded="lg"
            _hover={{ bg: theme.colors.secondary[500], color: "white" }}
            // onClick={hasChildren ? onToggle : undefined}
            // cursor={hasChildren ? "pointer" : undefined}
          >
            <HStack>
              {icon && <Box>{icon}</Box>}
              <Text
                flex={1}
                fontSize="sm"
                fontWeight={600}
                display={isSidebarOpen ? "flex" : "none"}
              >
                {label}
              </Text>
            </HStack>
          </Flex>
        </Link>
      )}
    </VStack>
  );
};

const Sidebar1 = ({ isOpen, onClose }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <Stack
      display={{ base: "none", md: "block" }}
      bg={theme.colors.primary[500]}
      color="white"
      width={isSidebarOpen ? 220 : 75}
      p={4}
      transition="width 0.2s ease-in-out"
      overflowY="auto"
      spacing={4}
    >
      <HStack mx={2} my={4} align="center" justify="space-between">
        <Box display={isSidebarOpen ? "flex" : "none"}>
          <LogoSection logoSize="md" />
        </Box>
        <IconButton
          size="xs"
          icon={isSidebarOpen ? <FiChevronLeft /> : <FiChevronRight />}
          bg={theme.colors.primary[400]}
          color="white"
          _hover={{
            bg: theme.colors.secondary[500],
          }}
          onClick={handleOpenSidebar}
        />
      </HStack>
      <Box overflowY="auto">
        <VStack align="stretch">
          {sidebarContents.map((item, index) => (
            <SidebarItem
              key={index}
              label={item.label}
              icon={item.icon ? <item.icon fontSize="md"/> : undefined}
              link={item.href}
              subItems={item.subItems}
              isSidebarOpen={isSidebarOpen}
            />
          ))}
        </VStack>
      </Box>
    </Stack>
  );
};

export default Sidebar1;
