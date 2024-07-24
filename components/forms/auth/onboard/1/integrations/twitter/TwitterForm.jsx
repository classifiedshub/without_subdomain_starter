"use client";
import InputField from "@/components/inputs/InputField";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";

const TwitterForm = ({ formData, handleChange }) => {
  return (
    <Box>
      <Link href="/blogs/how-to-create-developer-account-twitter">
        <Text color="blue.500" size="sm">
          How to create a developer account using X (formerly Twitter)?
        </Text>
      </Link>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
        <InputField
          id="handle"
          title="Twitter Handle"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
        />
        <InputField
          id="clientId"
          title="Client ID"
          name="clientId"
          type="password"
          value={formData.clientId}
          onChange={handleChange}
        />
         <InputField
          id="clientSecret"
          title="Client Secret"
          name="clientSecret"
          type="password"
          value={formData.clientSecret}
          onChange={handleChange}
        />
         <InputField
          id="bearerToken"
          title="Bearer Token"
          name="bearerToken"
          type="password"
          value={formData.bearerToken}
          onChange={handleChange}
        />
       
      </SimpleGrid>
    </Box>
  );
};

export default TwitterForm;
