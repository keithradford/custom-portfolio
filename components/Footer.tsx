import { Center, HStack, Text, VStack } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Center w="100%" my="4">
      <VStack w="100%">
        <hr color="#1a281f" style={{ width: "75%" }} />
        <HStack>
          <Text
            color="green.700"
            as="a"
            href="https://www.github.com/keithradford"
            _hover={{ color: "#1a281f" }}
            target="_blank"
          >
            GitHub
          </Text>
          <Text
            as="a"
            color="green.700"
            _hover={{ color: "#1a281f" }}
            href="https://www.linkedin.com/in/keith-radford/"
            target="_blank"
          >
            LinkedIn
          </Text>
        </HStack>
        <Text color="#1a281f" fontSize="xs">
          © {new Date().getFullYear()} Keith Radford
        </Text>
      </VStack>
    </Center>
  );
}
