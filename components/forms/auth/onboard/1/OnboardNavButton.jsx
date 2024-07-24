"use client";
import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { steps } from "./OnboardForm1";
import theme from "@/context/theme/theme";
import { prevStep, nextStep } from "@/redux/slices/OnboardSlice";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const OnboardNavButton = () => {
  const currentStep = useSelector((store) => store.onboard.currentStep);
  const dispatch = useDispatch();
  const handlePrevStep = () => {
    dispatch(prevStep());
  };
  const handleNextStep = () => {
    dispatch(nextStep(steps.length));
  };

  return (
    <HStack spacing={4} align="center" justify="space-between">
      <Button
        leftIcon={<MdChevronLeft />}
        onClick={handlePrevStep}
        isDisabled={currentStep === 1}
        bg="white"
        size={{ base: "sm", lg: "lg" }}
      >
        Previous
      </Button>
      <Button
        rightIcon={<MdChevronRight />}
        // onClick={handleNextStep}
        isDisabled={currentStep === steps.length}
        bg={theme.colors.secondary[500]}
        _hover={{ bg: theme.colors.secondary[400] }}
        color="white"
        size={{ base: "sm", lg: "lg" }}
        type="submit"
      >
        Next
      </Button>
    </HStack>
  );
};

export default OnboardNavButton;
