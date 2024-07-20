"use client";
import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
  useColorModeValue,
  HStack,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import theme from "@/context/theme/theme";
import { heroContent } from "@/constants/home_pages";
import Link from "next/link";
import StatsSection from "@/sections/home/StatsSection";

const Hero1 = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={
        colorMode === "light"
          ? theme.colors.light[500]
          : theme.colors.primary[500]
      }
      py={{ base: 8, lg: 16 }}
      px={4}
    >
      <Container maxW="container.xl" textAlign="center">
        {/* Alert Banner */}
        <Link href="/" title="Home">
          <Box
            display="inline-flex"
            alignItems="center"
            py={1}
            px={4}
            mb={7}
            fontSize="sm"
            color="black"
            bg={theme.colors.secondary[100]}
            borderRadius="full"
            // _hover={{ bg: , color:  }}
          >
            <Box
              bg={theme.colors.secondary[500]}
              px={4}
              py={1.5}
              borderRadius="full"
              mr={3}
              fontSize="xs"
            >
              {heroContent.alert.label}
            </Box>
            <Text fontSize="sm" fontWeight="medium">
              {heroContent.alert.text}
            </Text>
          </Box>
        </Link>

        {/* Heading and Subheading */}
        <Heading
          mb={4}
          fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
          fontWeight="extrabold"
          color={useColorModeValue("gray.900", "white")}
          as="h1"
        >
          {heroContent.heading}
        </Heading>
        <Text
          mb={8}
          fontSize={{ base: "lg", lg: "xl" }}
          color={useColorModeValue("gray.500", "gray.400")}
          as="h2"
        >
          {heroContent.subheading}
        </Text>

        {/* Action Buttons */}
        <Flex
          direction={{ base: "column", sm: "row" }}
          mb={8}
          gap={4}
          justify="center"
        >
          <Button
            as={Link}
            href={heroContent.buttonOne.link}
            bg={theme.colors.secondary[500]}
            color="white"
            _hover={{
              bg: theme.colors.secondary[600],
            }}
            variant="solid"
            size="lg"
            mx={2}
          >
            {heroContent.buttonOne.label}
          </Button>
          {heroContent.buttonTwo && (
            <Button
              as={Link}
              href="#"
              variant="outline"
              size="lg"
              bg={theme.colors.primary[500]}
              color="white"
              _hover={{
                bg: theme.colors.primary[600],
              }}
              mx={2}
            >
              {heroContent.buttonTwo.label}
            </Button>
          )}
        </Flex>

        {/* Featured In Section */}
        {heroContent.featuredIn && (
          <Box>
            <Text
              fontWeight="semibold"
              color="gray.400"
              textTransform="uppercase"
            >
              {heroContent.featuredIn.title}
            </Text>
            <Flex
              direction={{ base: "column", sm: "row" }}
              justify="center"
              mt={8}
              wrap="wrap"
              gap={5}
            >
              {heroContent.featuredIn.children.map((item, i) => (
                <Link href={item.link} key={i}>
                  <Image src={item.logoUrl} alt={item.label} />
                </Link>
              ))}
            </Flex>
          </Box>
        )}

        {heroContent.statsData && <StatsSection data={heroContent.statsData} />}
      </Container>
    </Box>
  );
};

export default Hero1;
