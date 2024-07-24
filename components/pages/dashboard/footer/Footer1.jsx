import { appDetails } from "@/constants/home_pages";
import { Box, Text, Link, Flex, IconButton, Tooltip } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";

const Footer1 = () => {
  const year = new Date().getFullYear();
  return (
    <Box
      as="footer"
      bg="white"
      rounded="lg"
      shadow="md"
      p={4}
      position="fixed"
      bottom={0}
      width="100%"
      zIndex={1000}
      bgColor="gray.50"
      borderTop="1px"
      borderColor="gray.200"
    >
      <Flex
        justify="space-between"
        align="center"
        direction={{ base: "column", sm: "row" }}
        // p={{ sm: 6, xl: 8 }}
        className="antialiased"
      >
        <Text
          mb={{ base: 4, sm: 0 }}
          textAlign="center"
          color="gray.500"
          fontSize="xs"
        >
          &copy;{`2019-${year} `}
          <Link
            href={appDetails.parentSite}
            isExternal
            _hover={{ textDecoration: "underline" }}
          >
            Novascape Technologies Ltd
          </Link>
          . All rights reserved.
        </Text>
        {/* <Flex justify="center" align="center" spaceX={1}>
          <Tooltip label="Like us on Facebook" hasArrow>
            <IconButton
              as={Link}
              href="#"
              aria-label="Facebook"
              icon={<FaFacebook />}
              variant="ghost"
              colorScheme="gray"
              _hover={{ color: "gray.900", bg: "gray.100" }}
              className="dark:hover:text-white dark:hover:bg-gray-600"
            />
          </Tooltip>
          <Tooltip label="Follow us on Twitter" hasArrow>
            <IconButton
              as={Link}
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter />}
              variant="ghost"
              colorScheme="gray"
              _hover={{ color: "gray.900", bg: "gray.100" }}
              className="dark:hover:text-white dark:hover:bg-gray-600"
            />
          </Tooltip>
          <Tooltip label="Star us on GitHub" hasArrow>
            <IconButton
              as={Link}
              href="#"
              aria-label="GitHub"
              icon={<FaGithub />}
              variant="ghost"
              colorScheme="gray"
              _hover={{ color: "gray.900", bg: "gray.100" }}
              className="dark:hover:text-white dark:hover:bg-gray-600"
            />
          </Tooltip>
          <Tooltip label="Follow us on Dribbble" hasArrow>
            <IconButton
              as={Link}
              href="#"
              aria-label="Dribbble"
              icon={<FaDribbble />}
              variant="ghost"
              colorScheme="gray"
              _hover={{ color: "gray.900", bg: "gray.100" }}
              className="dark:hover:text-white dark:hover:bg-gray-600"
            />
          </Tooltip>
        </Flex> */}
      </Flex>
    </Box>
  );
};

export default Footer1;
