import { appDetails } from "@/constants/home_pages";
import theme from "@/context/theme/theme";
import { HStack, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { MdSend } from "react-icons/md";

const Logo1 = ({ logoSize }) => {
  const logoUrl = appDetails.logoUrl;
  return (
    <>
      {logoUrl ? (
        <HStack spacing={1}>
          <Image src={logoUrl} alt={appDetails.name} />
        </HStack>
      ) : (
        <Link href="/" title="Home">
          <HStack spacing={1}>
            <MdSend />
            <Text
              fontWeight={700}
              fontFamily={theme.fonts.logo}
              fontSize={logoSize}
            >
              {appDetails.name}
            </Text>
          </HStack>
        </Link>
      )}
    </>
  );
};

export default Logo1;
