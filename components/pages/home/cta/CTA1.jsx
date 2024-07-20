"use client";
import { ctaContent } from "@/constants/home_pages";
import theme from "@/context/theme/theme";
import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";

const CTA1 = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      bg={
        colorMode === "light"
          ? theme.colors.light[500]
          : theme.colors.primary[500]
      }
      color={
        colorMode === "light" ? theme.colors.dark[900] : theme.colors.light[100]
      }
      py={{ base: 8, sm: 16 }}
      px={{ base: 4, lg: 6 }}
    >
      <Container maxW="6xl">
        <Stack spacing={4} textAlign="center" maxW="screen-sm" mx="auto">
          <Heading fontSize={{ base: "3xl", md: "4xl" }} fontWeight="extrabold" as="h2">
            {ctaContent.title}
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.500" as="h3">
            {ctaContent.description}
          </Text>
          <Link href="/register" title="Register Link">
            <Button
              variant="solid"
              size="lg"
              fontWeight="medium"
              bg={
                colorMode === "light"
                  ? theme.colors.primary[500]
                  : theme.colors.secondary[500]
              }
              color="white"
              rounded="lg"
              _hover={{ bg: theme.colors.primary[600] }}
            >
              {ctaContent.ctaButton}
            </Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default CTA1;
