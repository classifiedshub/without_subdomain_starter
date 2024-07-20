"use client";
import { headerNavLinks } from "@/constants/home_pages";
import LogoSection from "@/sections/home/LogoSection";
import {
  Box,
  Flex,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { MdCancel, MdMenu } from "react-icons/md";
import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";
import theme from "@/context/theme/theme";

const Header3 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box px={4} bg={theme.colors.primary[500]} color="white">
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW="screen-xl"
        mx="auto"
      >
        <Flex alignItems="center">
          <LogoSection />
        </Flex>
        <Stack
          as="nav"
          spacing={4}
          direction="row"
          display={{ base: "none", lg: "flex" }}
        >
          {headerNavLinks.map((link, i) => (
            <Link key={i} href={link.url} title={link.label}>
              <Button
                variant="ghost"
                p={2}
                rounded="lg"
                _hover={{ bg: "transparent" }}
                color="white"
                size="sm"
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </Stack>

        <Flex alignItems="center">
          <HStack align="center" spacing={6}>
            <IconButton
              icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
              onClick={toggleColorMode}
              aria-label="Toggle color mode"
              variant="ghost"
              color="white"
              display={{ base: "none", lg: "flex" }}
              _hover={{
                bg: theme.colors.primary[400]
              }}
              
            />
            <Link href="/login" title="login-link">
              <Button
                bg={theme.colors.secondary[500]}
                color="white"
                size="sm"
                _hover={{
                  bg: theme.colors.secondary[600],
                }}
              >
                Login
              </Button>
            </Link>
            <Link href="/register" title="register-link">
              <Button
                bg={theme.colors.secondary[500]}
                color="white"
                size="sm"
                _hover={{
                  bg: theme.colors.secondary[600],
                }}
              >
                Register
              </Button>
            </Link>
          </HStack>
        </Flex>
        <IconButton
          icon={isOpen ? <MdCancel /> : <MdMenu />}
          onClick={isOpen ? onClose : onOpen}
          display={{ lg: "none" }}
          aria-label="Toggle navigation"
          variant="ghost"
          color="white"
          _hover={{
            bg: "transparent"
          }}
        />
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ lg: "none" }}>
          <Stack as="nav" spacing={4}>
            {headerNavLinks.map((link, i) => (
              <Link key={i} href={link.url} title={link.label}>
                <Button
                  variant="ghost"
                  p={2}
                  rounded="lg"
                  _hover={{ bg: "transparent" }}
                  color="white"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Header3;
