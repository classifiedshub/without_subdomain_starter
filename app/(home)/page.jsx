import BenefitsSection from "@/sections/home/BenefitsSection";
import CTASection from "@/sections/home/CTASection";
import DescriptionSection from "@/sections/home/DescriptionSection";
import FAQSection from "@/sections/home/FAQSection";
import FeaturesSection from "@/sections/home/FeaturesSection";
import HeroSection from "@/sections/home/HeroSection";
import { Box } from "@chakra-ui/react";
import React from "react";

const HomePage = () => {
  return (
    <Box>
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <CTASection />
      <DescriptionSection />
      {/* <FAQSection /> */}
    </Box>
  );
};

export default HomePage;
