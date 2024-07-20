"use client";
import theme from "@/context/theme/theme";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const Stats1 = ({ data }) => {
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
      py={{ base: "8", lg: "16" }}
      px={{ base: "4", lg: "6" }}
    >
      <Container maxW="screen-xl" textAlign="center">
        <Grid
          templateColumns={{ base: "1fr", sm: "repeat(3, 1fr)" }}
          gap={{ base: "6", md: "8" }}
          maxW="md"
          mx="auto"
        >
          {data.map((item, i) => (
            <GridItem key={i}>
              <Heading
                mb="2"
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="extrabold"
                as="h3"
              >
                {item.stat}
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.500"
                dark={{ color: "gray.400" }}
                as="h3"
              >
                {item.label}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats1;
