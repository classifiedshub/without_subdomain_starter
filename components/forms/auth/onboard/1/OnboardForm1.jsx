"use client";
import { useDispatch, useSelector } from "react-redux";
import AccountInfo from "./AccountInfo";
import BusinessInfo from "./BusinessInfo";
import { appPlans } from "@/constants/home_pages";
import theme from "@/context/theme/theme";
import LogoSection from "@/sections/home/LogoSection";
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  List,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import Stepper from "@/components/inputs/Stepper";
import { setCurrentStep } from "@/redux/slices/OnboardSlice";
import PreferencesInfo from "./PreferencesInfo";
import PlanSelection from "./PlanSelection";
import SocialMediaIntegration from "./Integrations";

export const steps = [
  { label: "Account Info" },
  { label: "Business Info" },
  { label: "Preferences" },
  { label: "Choose Plan" },
  { label: "Integrations" },
];

const OnboardForm1 = ({ data }) => {
  const currentStep = useSelector((store) => store.onboard.currentStep);
  const freePlan = appPlans.filter((plan) => plan.name === "Free Plan");
  const dispatch = useDispatch();

  const renderFormByStep = (step) => {
    if (step === 1) {
      return <AccountInfo data={data} />;
    } else if (step === 2) {
      return <BusinessInfo data={data} />;
    } else if (step === 3) {
      return <PreferencesInfo />;
    } else if (step === 4) {
      return <PlanSelection />;
    } else if (step === 5) {
      return <SocialMediaIntegration />;
    }
  };

  const handleStepChange = (step) => {
    dispatch(setCurrentStep(currentStep + 1));
  };

  return (
    <Stack>
      <Grid
        templateColumns={{ base: "repeat(12, 1fr)", lg: "repeat(12, 1fr)" }}
        gap={4}
        minH="100vh"
      >
        <GridItem
          colSpan={{ base: 12, lg: 4 }}
          bg={theme.colors.primary[500]}
          color="white"
          // display={{ base: "none", lg: "flex" }}
          display="none"
        >
          {/* Form Details  */}
          <VStack spacing={6} mx="auto" p={4}>
            <HStack w="full" justify="space-between" p={4} rounded="md">
              <LogoSection logoSize="lg" />
              <Button
                size="sm"
                bg={theme.colors.secondary[500]}
                _hover={{ bg: theme.colors.secondary[400] }}
              >
                Go Back
              </Button>
            </HStack>
            <Stack
              w="full"
              bg={theme.colors.primary[400]}
              rounded="lg"
              // bg={useColorModeValue("white", "gray.800")}
              // boxShadow="lg"
              p={8}
              // maxW="6xl"
            >
              {freePlan.map((plan, i) => (
                <Box key={i}>
                  <Heading fontSize="2xl">{plan.name}</Heading>
                  <Text color="gray.200">14-day free trial</Text>
                  <List spacing={3} mt={4}>
                    {plan.features.map((feature, index) => (
                      <HStack key={index} spacing={2}>
                        <FaCheckCircle color="gray.200" />
                        <ListItem>{feature}</ListItem>
                      </HStack>
                    ))}
                  </List>
                </Box>
              ))}
            </Stack>
          </VStack>
        </GridItem>

        {/* FORMS  */}
        {/* <GridItem colSpan={{ base: 12, lg: 8 }}> */}
        <GridItem colSpan={{ base: 12, lg: 12 }}>
          <Container maxW={{ base: "none", lg: "6xl" }}>
            <Stack p={4}>
              <Stepper
                steps={steps}
                currentStep={currentStep - 1}
                onStepChange={handleStepChange}
              />
              <Stack mx={6} spacing={4}>
                <Box>{renderFormByStep(currentStep)}</Box>
              </Stack>
            </Stack>
          </Container>
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default OnboardForm1;
