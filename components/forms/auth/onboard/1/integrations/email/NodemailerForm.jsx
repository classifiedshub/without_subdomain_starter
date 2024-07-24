"use client";
import InputField from "@/components/inputs/InputField";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";

const NodemailerForm = ({ formData, handleChange }) => {
  return (
    <Box>
      <Link href="/blogs/how-to-generate-app-name-passwords-gmail">
        <Text color="blue.500" size="sm">
          How to create an app username and password using Gmail?
        </Text>
      </Link>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
        <InputField
          id="username"
          title="Username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
        />
        <InputField
          id="appPassword"
          title="App Password"
          name="appPassword"
          type="appPassword"
          value={formData.appPassword}
          onChange={handleChange}
        />
      </SimpleGrid>
    </Box>
  );
};

export default NodemailerForm;
