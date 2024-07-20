"use client";
import LogoSection from "@/sections/home/LogoSection";
import theme from "@/context/theme/theme";
import {
  Box,
  Button,
  Collapse,
  Flex,
  HStack,
  Icon,
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { MdCancel, MdChevronRight, MdMenu } from "react-icons/md";
import { headerNavLinks } from "@/constants/home_pages";

// DESKTOP NAVBAR
const DesktopItem = () => {
  const linkHoverColor = theme.colors.secondary[300];
  return (
    <Stack direction={"row"} spacing={4}>
      {headerNavLinks.map((item, i) => (
        <Box key={i}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={item.url ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                // color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {item.label}
              </Box>
            </PopoverTrigger>
            {item.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                // bg={theme.colors.gray[400]}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {item.children.map((child) => (
                    <DesktopSubItem key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubItem = ({ label, url, subLabel }) => {
  return (
    <Box
      as="a"
      href={url}
      role={"group"}
      display={"block"}
      p={1}
      rounded={"md"}
      //   boxShadow="xl"
      color={theme.colors.primary[500]}
      _hover={{ bg: theme.colors.secondary[500], color: "white" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box p={1}>
          <Text
            transition={"all .3s ease"}
            // _groupHover={{ color: theme.colors.secondary[800] }}
            fontWeight={500}
            fontSize={"sm"}
          >
            {label}
          </Text>
          {subLabel && (
            <Text fontSize={"sm"} p={1}>
              {subLabel}
            </Text>
          )}
        </Box>
        <Flex
          transition="all .3s ease"
          transform="translateX(-10px)"
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify="flex-end"
          align="center"
          flex={1}
        >
          <Icon
            color={theme.colors.secondary[800]}
            w={5}
            h={5}
            as={MdChevronRight}
          />
        </Flex>
      </Stack>
    </Box>
  );
};

// MOBILE NAVBAR
const MobileNav = () => {
  return (
    <Stack bg={theme.colors.gray[400]} p={4} display={{ md: "none" }}>
      {headerNavLinks.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, url }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <Stack spacing={1} onClick={children && handleToggle}>
      <Box
        py={2}
        as="a"
        href={url ?? "#"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={theme.colors.gray[100]}>
          {label}
        </Text>
        {children && (
          <Icon
            as={FiChevronDown}
            boxSize={4}
            color={theme.colors.gray[100]}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          // mt={2}
          pl={2}
          // borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box
                as="a"
                key={child.label}
                py={1}
                href={child.href}
                color={theme.colors.gray[100]}
                _hover={{ color: theme.colors.secondary[800], p: 1 }}
              >
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const Header2 = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);
  const loginUrl = `http://app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/login`;
  const registerUserUrl = `http://app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/register`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
    // position="fixed" top="0" left="0" width="100%" zIndex="999"
    >
      <Flex
        bg="#219ebc"
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        align="center"
        justify="space-between"
      >
        <Stack direction="row" align="center" justify="space-between">
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={isOpen ? <MdCancel w={3} h={3} /> : <MdMenu w={5} h={5} />}
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
              color="white"
            />
          </Flex>
          <LogoSection />
        </Stack>

        <Box color="white" display={{ base: "none", lg: "flex" }}>
          <DesktopItem linkColor={theme.colors.secondary[500]} />
        </Box>

        <HStack align="center" spacing={6}>
          <Link href={registerUserUrl}>
            <Button
              color="white"
              size="sm"
              _hover={{
                bg: theme.colors.secondary[600],
              }}
              variant="outline"
              borderColor="white"
            >
              Register
            </Button>
          </Link>
          <Link href={loginUrl}>
            <Button
              bg={theme.colors.secondary[400]}
              color="white"
              size="sm"
              _hover={{
                bg: theme.colors.secondary[600],
              }}
            >
              Login
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header2;
