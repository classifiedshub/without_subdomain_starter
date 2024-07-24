"use client";

import InputField from "@/components/inputs/InputField";
import theme from "@/context/theme/theme";
import LogoSection from "@/sections/home/LogoSection";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
  Image,
  SimpleGrid,
  Text,
  Link,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const RegisterForm1 = () => {
  const router = useRouter();
  const [isVerifyEmailLoading, setIsVerifyEmailLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isTerms, setIsTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    code: "",
    password: "",
  });

  const handleTermsConditions = () => {
    setIsTerms(!isTerms);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSendVerificationEmail = async (e) => {
    e.preventDefault();
    const data = {
      email: formData.email,
    };
    console.log(data);
    try {
      setIsVerifyEmailLoading(true);
      const response = await fetch("/api/auth/verify", {
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
        setIsVerifyEmailLoading(false);
        setIsCodeSent(true);
      } else {
        setIsCodeSent(true);
        toast.error(responseData.message, {
          position: "top-center",
          style: {
            background: "white",
            color: "black",
          },
        });
        setIsVerifyEmailLoading(false);
      }
    } catch (error) {
      console.error(error);
      setIsVerifyEmailLoading(false);
      toast.error(responseData.message, {
        position: "top-center",
        style: {
          background: "white",
          color: "black",
        },
      });
    }
  };

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
      isTos: isTerms,
    };
    try {
      setLoading(true);
      if (confirmPassword === data.password) {
        const response = await fetch("/api/auth/register/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const responseData = await response.json();
        toast.success("User registered successfully", {
          position: "top-center",
          style: {
            background: "white",
            color: "black",
          },
        });
        router.push(`/onboard?uid=${responseData.data.id}`);
      } else {
        toast.error("Passwords do not match", {
          position: "top-center",
          style: {
            background: "white",
            color: "black",
          },
        });
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("Something went wrong", {
        position: "top-center",
        style: {
          background: "white",
          color: "black",
        },
      });
    }
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue(theme.colors.light[200], "gray.900")}
    >
      <Stack spacing={4} mx="auto" py={12} px={6}>
        {/* Logo  */}
        <Stack align="center">
          <LogoSection logoSize={{ base: "lg", lg: "xl" }} />
          <Heading
            fontSize="4xl"
            color={useColorModeValue("gray.900", "white")}
          >
            Create an account
          </Heading>
          <Stack>
            <Text align="center">
              Already have an account?{" "}
              <Link color={theme.colors.secondary[500]} href="/login">
                Login here
              </Link>
            </Text>
          </Stack>
        </Stack>

        <Stack
          rounded="lg"
          bg={useColorModeValue("white", "gray.800")}
          boxShadow="lg"
          p={8}
          maxW="6xl"
          as="form"
          onSubmit={handleSubmit}
        >
          <SimpleGrid columns={1} gap={4}>
            <InputField
              id="email"
              title="Email Address"
              name="email"
              type="email"
              placeholder="name@company.com"
              value={formData.email}
              onChange={handleChange}
              isRequired={true}
              rightAddon={
                <Button
                  bg={theme.colors.secondary[500]}
                  color="white"
                  _hover={{ color: "white", bg: theme.colors.secondary[400] }}
                  isLoading={isVerifyEmailLoading}
                  onClick={handleSendVerificationEmail}
                >
                  Verify
                </Button>
              }
            />
            <InputField
              id="code"
              title="Verification Code"
              name="code"
              type="number"
              value={formData.code}
              onChange={handleChange}
              isRequired={true}
            />
            <InputField
              id="password"
              title="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              isRequired={true}
            />
            <InputField
              id="confirm-password"
              title="Confirm Password"
              type="password"
              name="confirm-password"
              value={confirmPassword}
              onChange={handleConfirmPassword}
              isRequired={true}
            />
            <Checkbox
              colorScheme="red"
              isChecked={isTerms}
              onChange={handleTermsConditions}
            >
              I accept the&nbsp;
              <Link color={theme.colors.secondary[500]} href="terms-conditions">
                Terms and Conditions
              </Link>
            </Checkbox>
            <Button
              bg={theme.colors.primary[500]}
              color="white"
              _hover={{ color: "white", bg: theme.colors.primary[400] }}
              isLoading={loading}
              isDisabled={isCodeSent === false || isTerms === false}
              type="submit"
            >
              Create an account
            </Button>
          </SimpleGrid>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default RegisterForm1;
