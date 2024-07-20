import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { HiExternalLink } from 'react-icons/hi';


const CTA2 = () => {
  return (
    <Box bg="white" dark={{ bg: 'gray.900' }} py={{ base: 8, sm: 16 }} px={{ base: 4, lg: 6 }}>
      <Container maxW="screen-xl">
        <Stack spacing={8} textAlign="center" maxW="screen-md" mx="auto">
          <Heading fontSize={{ base: '3xl', md: '4xl' }} fontWeight="extrabold" color="gray.900" dark={{ color: 'white' }}>
            Let&apos;s find more that brings us together.
          </Heading>
          <Text fontSize={{ base: 'md', sm: 'xl' }} color="gray.500" dark={{ color: 'gray.400' }}>
            Twitter Post Automator helps you connect with your audience effortlessly. Discover features that make it easy to manage and optimize your Twitter posts.
          </Text>
          <Stack spacing={4} direction={{ base: 'column', sm: 'row' }} justify="center">
            <Button
              as="a"
              href="#"
              colorScheme="blue"
              variant="solid"
              size="lg"
              px={4}
              py={2.5}
              fontWeight="medium"
              rounded="lg"
              _hover={{ bg: 'blue.800' }}
              _focus={{ ring: 4, ringColor: 'blue.300' }}
              dark={{ bg: 'blue.600', _hover: { bg: 'blue.700' }, _focus: { ringColor: 'blue.800' } }}
            >
              Get started
            </Button>
            <Button
              as="a"
              href="#"
              colorScheme="gray"
              variant="outline"
              size="lg"
              px={4}
              py={2.5}
              fontWeight="medium"
              rounded="lg"
              _hover={{ bg: 'gray.100' }}
              _focus={{ ring: 4, ringColor: 'gray.100' }}
              dark={{ color: 'white', borderColor: 'gray.600', _hover: { bg: 'gray.700' }, _focus: { ringColor: 'gray.600' } }}
              rightIcon={<HiExternalLink />}
            >
              View more
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default CTA2;
