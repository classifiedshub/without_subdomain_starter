"use client";
import theme from "@/context/theme/theme";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Toaster
        position="bottom-center"
        duration={4000}
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
              color: "white",
            },
          },
        }}
      />
      {children}
    </ChakraProvider>
  );
}
