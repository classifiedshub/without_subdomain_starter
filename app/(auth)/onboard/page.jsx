import { getData } from "@/lib/api/getData";
import OnboardSection from "@/sections/auth/OnboardSection";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const OnboardPage = async ({ searchParams }) => {
  const { uid } = searchParams;
  // const countries = await getData("data/get-countries")
  const userData = await getData(`account/${uid}`);

  return (
    <Box>
      <OnboardSection data={userData} />
    </Box>
  );
};

export default OnboardPage;
