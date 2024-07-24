"use client";
import InputField from "@/components/inputs/InputField";
import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { useState } from "react";
import OnboardNavButton from "./OnboardNavButton";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentStep,
  updateOnboardFormData,
} from "@/redux/slices/OnboardSlice";

const AccountInfo = ({ data }) => {
  const dispatch = useDispatch();
  const currentStep = useSelector((store) => store.onboard.currentStep);
  const existingFormData = useSelector(
    (store) => store.onboard.onboardFormData
  );
  const [formData, setFormData] = useState({
    firstName: existingFormData.firstName,
    lastName: existingFormData.lastName,
    email: data.email,
    ...existingFormData,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...formData,
    };
    dispatch(updateOnboardFormData(data));
    dispatch(setCurrentStep(currentStep + 1));
    console.log(data);
  };

  return (
    <Stack spacing={4} as="form" onSubmit={handleSubmit}>
      <Heading fontSize="2xl">Account Details</Heading>
      <Stack bg="white" p={6} borderRadius="lg">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
          <InputField
            id="first-name"
            title="First Name"
            name="firstName"
            type="text"
            placeholder="John"
            value={formData.firstName}
            onChange={handleChange}
            isRequired={true}
          />
          <InputField
            id="last-name"
            title="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange}
            isRequired={true}
          />
          <InputField
            id="email"
            title="Email Address"
            name="email"
            type="email"
            placeholder="name@company.com"
            value={formData.email}
            onChange={handleChange}
            isRequired={true}
          />
        </SimpleGrid>
      </Stack>
      <OnboardNavButton />
    </Stack>
  );
};

export default AccountInfo;
