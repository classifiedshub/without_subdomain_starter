"use client";
import InputField from "@/components/inputs/InputField";
import { SimpleGrid } from "@chakra-ui/react";

const ResendForm = ({ formData, handleChange }) => {
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
      <InputField
        id="api-key"
        title="API Key"
        name="apiKey"
        type="password"
        value={formData.apiKey}
        onChange={handleChange}
      />
    </SimpleGrid>
  );
};

export default ResendForm;
