import { appDetails } from "@/constants/home_pages";
import { HStack, Image, Text } from "@chakra-ui/react";

const Logo1 = () => {
  const logoUrl = appDetails.logoUrl
  return (
    <>
      {logoUrl ? (
        <HStack spacing={1}>
          <Image src={logoUrl} alt={appDetails.name} />
        </HStack>
      ) : (
        <Text>{appDetails.name}</Text>
      )}
    </>
  );
};

export default Logo1;
