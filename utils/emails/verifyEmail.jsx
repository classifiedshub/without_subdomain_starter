import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { appDetails } from "@/constants/home_pages";
import theme from "@/context/theme/theme";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  ? `https://${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
  : "";

export const VerifyEmail = ({ code }) => {
  const year = new Date().getFullYear();

  return (
    <Html>
      <Head />
      <Preview>Verify your email address</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            {/* <Img
              src={appDetails.appLogo}
              width="300"
              height="90"
              alt={appDetails.appLogo}
            /> */}
            <Text style={logoTextStyle}>PostMastered</Text>
          </Section>
          <Heading style={h1}>Verify your email address</Heading>
          <Text style={heroText}>Your confirmation code is below.</Text>
          <Section style={codeBox}>
            <Text style={confirmationCodeText}>{code}</Text>
          </Section>

          <Text style={text}>
            If you didn&apos;t request this email, there&apos;s nothing to worry
            about, you can safely ignore it.
          </Text>

          <Text style={footerText}>
            ©{year} {appDetails.name}.<br />
            {appDetails.address}
            <br />
            <br />
            All rights reserved.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const footerText = {
  fontSize: "12px",
  color: "#b7b7b7",
  lineHeight: "15px",
  textAlign: "left",
  marginBottom: "50px",
};

const main = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "0px 20px",
};

const logoContainer = {
  marginTop: "32px",
  align: "center",
  justify: "center",
};

const h1 = {
  color: theme.colors.secondary[500],
  fontSize: "24px",
  fontWeight: "600",
  fontFamily: "'Montserrat', sans-serif",
  margin: "30px 0",
  padding: "0",
  lineHeight: "36px",
};

const logoTextStyle = {
  color: "#1d1c1d",
  fontSize: "36px",
  fontWeight: "700",
  margin: "30px 0",
  padding: "0",
  lineHeight: "42px",
};

const heroText = {
  fontSize: "20px",
  lineHeight: "28px",
  marginBottom: "30px",
};

const codeBox = {
  background: "rgb(245, 244, 245)",
  borderRadius: "4px",
  marginBottom: "30px",
  padding: "40px 10px",
};

const confirmationCodeText = {
  fontSize: "30px",
  textAlign: "center",
  verticalAlign: "middle",
};

const text = {
  color: "#000",
  fontSize: "14px",
  lineHeight: "24px",
};
