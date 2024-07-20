"use client";
import { benefitsContent } from "@/constants/home_pages";
import theme from "@/context/theme/theme";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Image,
  useBreakpointValue,
  SimpleGrid,
  Container,
  useColorMode,
} from "@chakra-ui/react";
import {
  AiOutlineRetweet,
  AiOutlineMessage,
  AiOutlineBell,
  AiOutlineCalendar,
} from "react-icons/ai";

const Benefits1 = () => {
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
      dark={{ bg: "gray.900" }}
    >
      <Container maxW="6xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
          maxW="screen-xl"
          mx="auto"
          gap="8"
        >
          <Box mt={{ base: "4", md: "0" }} textAlign="center">
            <Heading
            as="h2"
              mb="4"
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
            >
              {benefitsContent.title}
            </Heading>
            <Text mb="6" fontSize={{ base: "md", md: "lg" }} fontWeight="light" as="h3">
              {benefitsContent.description}
            </Text>
            <SimpleGrid columns={{ base: 2, md: 4 }} gap={4}>
              {benefitsContent.benefits.map((benefit, index) => (
                <Box
                  key={index}
                  p="4"
                  textAlign="center"
                  borderWidth="1px"
                  borderRadius="lg"
                >
                  <Box mb="4" align="center">
                    {benefit.icon}
                  </Box>
                  <Heading mb="2" fontSize="lg" fontWeight="bold" as="h3">
                    {benefit.title}
                  </Heading>
                  <Text fontSize="md" as="h4">{benefit.description}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Benefits1;
