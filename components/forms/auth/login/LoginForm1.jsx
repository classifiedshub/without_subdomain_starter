"use client";
import InputField from "@/components/inputs/InputField";
import theme from "@/context/theme/theme";
import LogoSection from "@/sections/home/LogoSection";
import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import toast from "react-hot-toast";

const LoginForm1 = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNavigate = () => {
    router.push("/dashboard");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...formData,
    };
    try {
      setLoading(true);
      const loginData = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      if (loginData?.error) {
        setLoading(false);
        let errorMessage = "Something went wrong";
        if (loginData.error === "No user found") {
          errorMessage = "No user found with this email";
        } else if (loginData.error === "Invalid credentials") {
          errorMessage = "Invalid email or password";
        }
        // else if (loginData.error === "User not verified") {
        //   errorMessage = "Please verify your email before logging in";
        // }
        toast.error(errorMessage);
      } else {
        toast.success(responseData.message, {
          position: "top-center",
          style: {
            background: "white",
            color: "black",
          },
        });
        // resetForm();
        handleNavigate();
      }
    } catch (error) {
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
            Sign in to your account
          </Heading>
          <Stack>
            <Text align="center">
              Don’t have an account yet?{" "}
              <Link color={theme.colors.secondary[500]} href="/register">
                Sign up
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
            <Button
              bg={theme.colors.primary[500]}
              color="white"
              _hover={{ color: "white", bg: theme.colors.primary[400] }}
              isLoading={loading}
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

export default LoginForm1;
