"use client";
import { descriptionContent } from "@/constants/home_pages";
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

const Description1 = () => {
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
        <Stack spacing={4} textAlign="center" maxW="screen-md" mx="auto">
          <Heading
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="extrabold"
            as="h2"
          >
            {descriptionContent.headline}
          </Heading>
          <Text fontSize={{ base: "md", sm: "xl" }} color="gray.500" as="h3">
            {descriptionContent.subheadline}
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Description1;
