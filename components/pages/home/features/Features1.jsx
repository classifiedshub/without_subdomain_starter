"use client";
import { featuresDetails } from "@/constants/home_pages";
import theme from "@/context/theme/theme";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  Stack,
  useColorMode,
} from "@chakra-ui/react";

const Features1 = () => {
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
        <Stack spacing={4} mb={{ base: 8, lg: 16 }} textAlign="center">
          <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="extrabold" as="h2">
            {featuresDetails.title}
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} fontWeight="light" as="h3">
            {featuresDetails.description}
          </Text>
        </Stack>
        <SimpleGrid
          columns={{ base: 2, lg: 3 }}
          spacing={{ base: 8, md: 12 }}
          mb={{ base: 8, lg: 16 }}
        >
          {featuresDetails.features.map((feature, i) => (
            <Box key={i} textAlign="center">
              <Flex
                justify="center"
                align="center"
                mb={4}
                w={12}
                h={12}
                borderRadius="full"
                mx="auto"
                bg={
                  colorMode === "light"
                    ? theme.colors.primary[500]
                    : theme.colors.light[500]
                }
              >
                <Icon
                  as={feature.icon}
                  w={6}
                  h={6}
                  color={
                    colorMode === "light"
                      ? "white"
                      : theme.colors.secondary[500]
                  }
                />
              </Flex>
              <Heading fontSize="xl" fontWeight="bold" mb={2} as="h3">
                {feature.title}
              </Heading>
              <Text color="gray.500" as="h4">{feature.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Features1;
