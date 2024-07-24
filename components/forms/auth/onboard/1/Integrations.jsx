"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { prevStep, updateOnboardFormData } from "@/redux/slices/OnboardSlice";
import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdChevronLeft, MdChevronRight, MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import AccordionForm from "@/components/inputs/AccordionForm";
import theme from "@/context/theme/theme";
import NodemailerForm from "./integrations/email/NodemailerForm";
import ResendForm from "./integrations/email/ResendForm";
import TwitterForm from "./integrations/twitter/TwitterForm";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const emailIntegrations = [
  {
    title: "Gmail",
    form: (formData, handleChange) => (
      <NodemailerForm formData={formData} handleChange={handleChange} />
    ),
  },
  {
    title: "Resend",
    form: (formData, handleChange) => (
      <ResendForm formData={formData} handleChange={handleChange} />
    ),
  },
];

const twitterIntegrations = [
  {
    title: "Twitter",
    form: (formData, handleChange) => (
      <TwitterForm formData={formData} handleChange={handleChange} />
    ),
  },
];

const SocialMediaIntegration = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const currentStep = useSelector((store) => store.onboard.currentStep);
  const existingFormData = useSelector(
    (store) => store.onboard.onboardFormData
  );

  const handlePrevStep = () => {
    dispatch(prevStep());
  };

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    ...existingFormData,
    apiKey: existingFormData.apiKey || "",
    username: existingFormData.username || "",
    clientId:existingFormData.clientId || "",
    clientSecret: existingFormData.clientSecret || "",
    bearerToken: existingFormData.bearerToken || "",
    appPassword: existingFormData.appPassword || "",
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
    console.log(data);
    try {
      setLoading(true);
      const response = await fetch("/api/auth/onboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      if (response.ok) {
        toast.success(responseData.message, {
          position: "top-center",
          style: {
            background: "white",
            color: "black",
          },
        });
        router.push("/dashboard");
      } else {
        throw new Error(responseData.message || "Unknown error occurred");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error(error.message || "Something went wrong", {
        position: "top-center",
        style: {
          background: "white",
          color: "black",
        },
      });
    }
  };

  return (
    <Stack spacing={4} as="form" onSubmit={handleSubmit}>
      <Heading fontSize="2xl">Integrate your Accounts</Heading>
      <Stack bg="white" p={6} borderRadius="lg" spacing={4}>
        <Stack>
          <HStack spacing={2}>
            <MdEmail />
            <Heading fontSize="lg">Email</Heading>
          </HStack>
          <AccordionForm
            data={emailIntegrations.map((integration) => ({
              ...integration,
              form: integration.form(formData, handleChange),
            }))}
          />
        </Stack>

        <Stack>
          <HStack spacing={2}>
            <FaTwitter />
            <Heading fontSize="lg">Developer Account</Heading>
          </HStack>
          <AccordionForm
            data={twitterIntegrations.map((integration) => ({
              ...integration,
              form: integration.form(formData, handleChange),
            }))}
          />
        </Stack>
      </Stack>
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
          isLoading={loading}
          rightIcon={<MdChevronRight />}
          bg={theme.colors.primary[500]}
          _hover={{ bg: theme.colors.secondary[400] }}
          color="white"
          size={{ base: "sm", lg: "lg" }}
          type="submit"
        >
          Get Started
        </Button>
      </HStack>
    </Stack>
  );
};

export default SocialMediaIntegration;
