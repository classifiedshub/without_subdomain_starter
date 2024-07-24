import React from "react";
import { Box, HStack, Icon, Text, VStack, Flex } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import theme from "@/context/theme/theme";

const Step = ({ stepNumber, label, isCompleted, isActive, onClick }) => (
  <VStack spacing={1} onClick={onClick} cursor="pointer">
    <Box
      borderRadius="50%"
      w="40px"
      h="40px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={
        isCompleted
          ? "green.500"
          : isActive
          ? theme.colors.primary[500]
          : "gray.300"
      }
      color="white"
    >
      {isCompleted ? <Icon as={FaCheck} /> : <Text>{stepNumber}</Text>}
    </Box>
    <Text
      color={
        isCompleted
          ? "green.500"
          : isActive
          ? theme.colors.primary[500]
          : "gray.500"
      }
    >
      {label}
    </Text>
  </VStack>
);

const Stepper = ({ steps, currentStep, onStepChange }) => (
  <HStack spacing={4} justify="center" mb={8}>
    {steps.map((step, index) => (
      <React.Fragment key={index}>
        <Step
          stepNumber={index + 1}
          label={step.label}
          isCompleted={index < currentStep}
          isActive={index === currentStep}
          onClick={() => onStepChange(index)}
        />
        {index < steps.length - 1 && (
          <Flex
            align="center"
            justify="center"
            flex="1"
            height="3px"
            bg={
              index < currentStep - 1
                ? "green.500"
                : "gray.300"
            }
          />
        )}
      </React.Fragment>
    ))}
  </HStack>
);

export default Stepper;
