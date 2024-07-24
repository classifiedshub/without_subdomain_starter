"use client";
import InputField from "@/components/inputs/InputField";
import { appDetails, appPlans } from "@/constants/home_pages";
import theme from "@/context/theme/theme";
import LogoSection from "@/sections/home/LogoSection";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import OnboardNavButton from "./OnboardNavButton";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentStep,
  updateOnboardFormData,
} from "@/redux/slices/OnboardSlice";
import DropdownField from "@/components/inputs/DropdownField";
import { businessGoals, communicationChannels } from "@/data/onboardData";

const PreferencesInfo = ({ data }) => {
  const dispatch = useDispatch();
  const currentStep = useSelector((store) => store.onboard.currentStep);
  const existingFormData = useSelector(
    (store) => store.onboard.onboardFormData
  );

  const [channel, setChannel] = useState(existingFormData.channel || "");
  const [goal, setGoal] = useState(existingFormData.goal || "");

  const [formData, setFormData] = useState({
    ...existingFormData,
  });

  const handleDropdownChange = (name, value) => {
    if (name === "channel") {
      setChannel(value);
    } else if (name === "goal") {
      setGoal(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      channel: channel,
      goal: goal,
    };
    dispatch(updateOnboardFormData(data));
    dispatch(setCurrentStep(currentStep + 1));
    console.log(data);
  };

  return (
    <Stack spacing={4} as="form" onSubmit={handleSubmit}>
      <Heading fontSize="2xl">Preferences</Heading>
      <Stack bg="white" p={6} borderRadius="lg">
        <SimpleGrid columns={1} spacing={4}>
          <DropdownField
            title="What channel do you prefer to communicate to your audience?"
            name="channel"
            items={communicationChannels}
            selectedItem={communicationChannels.find(
              (item) => item.value === channel
            )}
            onSelect={(item) => handleDropdownChange("channel", item.value)}
            buttonProps={{ bg: theme.colors.primary[100] }}
            dropdownColumns={1}
          />
          <DropdownField
            title={`What do you aim to achieve with ${appDetails.name}?`}
            name="goal"
            items={businessGoals}
            selectedItem={businessGoals.find((item) => item.value === goal)}
            onSelect={(item) => handleDropdownChange("goal", item.value)}
            buttonProps={{ bg: theme.colors.primary[100] }}
            dropdownColumns={3}
          />
        </SimpleGrid>
      </Stack>
      <OnboardNavButton />
    </Stack>
  );
};

export default PreferencesInfo;
