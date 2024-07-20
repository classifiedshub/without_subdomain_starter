"use client";
import React from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  Stack,
  Divider,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import LogoSection from "@/sections/home/LogoSection";
import {
  appDetails,
  footerNavLinks,
  socialMediaLinks,
} from "@/constants/home_pages";
import Link from "next/link";
import theme from "@/context/theme/theme";

const Footer1 = () => {
  return (
    <Box px={4} py={8} color="white" bg={theme.colors.primary[500]} fontSize={{base: "sm", lg: "md"}}>
      <Container maxW="container.xl"> 
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          mb={6}
        >
          <Flex align="center" mb={{ base: 4, md: 0 }}>
            <LogoSection />
          </Flex>
          <HStack
            align="center"
            justify="space-between"
            direction={{ base: "column", lg: "row" }}
            spacing={8}
          >
            {footerNavLinks.map((item, i) => (
              <Box key={i} as="section" mb={{ base: 4, sm: 0 }}>
                <Text fontWeight="semibold" mb={6}>
                  {item.label}
                </Text>
                {item.children.map((subItem, i) => (
                  <Stack key={i} spacing={3} color="gray.200">
                    <Link
                      key={subItem.label}
                      href={subItem.url}
                      _hover={{ textDecoration: "underline" }}
                      display="flex"
                      alignItems="center"
                    >
                      {subItem.icon ? (
                        <HStack>
                          <Box as="span" mr={2}>
                            {subItem.icon}
                          </Box>
                          <Text>{subItem.label}</Text>
                        </HStack>
                      ) : (
                        <Text>{subItem.label}</Text>
                      )}
                    </Link>
                  </Stack>
                ))}
              </Box>
            ))}
          </HStack>
        </Flex>
        <Divider
          borderColor={useColorModeValue("gray.200", "gray.700")}
          my={6}
        />
        <Flex
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          align="center"
        >
          <Text color={useColorModeValue("gray.500", "gray.400")}>
            © 2022 &nbsp;
            <Link href="/" title="Home">
              {appDetails.name}™
            </Link>
            . All Rights Reserved.
          </Text>
          <HStack spacing={6} mt={{ base: 4, sm: 0 }}>
            {socialMediaLinks.map((item, i) => (
              <Link href={item.url} key={i} title={item.label}>
                <Box
                  _hover={{
                    color: item.hoverColor,
                  }}
                >
                  {item.icon}
                </Box>
              </Link>
            ))}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer1;
