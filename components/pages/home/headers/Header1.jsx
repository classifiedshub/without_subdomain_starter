import theme from "@/context/theme/theme";
import LogoSection from "@/sections/home/LogoSection";
import { Box, Button, HStack, Stack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Header1 = () => {

  return (
    <Box bg={theme.colors.primary[500]} p={2}>
      <Stack direction="row" align="center" justify="space-between" mx={4}>
        <LogoSection />
        <HStack align="center" spacing={6}>
          <Link href="/login" title="login-link">
            <Button
              bg={theme.colors.secondary[500]}
              color="white"
              size="sm"
              _hover={{
                bg: theme.colors.secondary[600],
              }}
            >
              Login
            </Button>
          </Link>
          <Link href="/register" title="register-link">
            <Button
              bg={theme.colors.secondary[500]}
              color="white"
              size="sm"
              _hover={{
                bg: theme.colors.secondary[600],
              }}
            >
              Register
            </Button>
          </Link>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Header1;
