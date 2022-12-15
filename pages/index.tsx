import {
  Box,
  Center,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container>
      <Box w="100%" p={6}>
        <Heading as="h1" size="2xl" color="#1a281f">
          keith radford
        </Heading>
        <Center w="100%" my="4">
          <VStack w="100%">
            <hr color="#1a281f" style={{ width: "75%" }} />
            <HStack>
              <Text
                color="#588157"
                as="a"
                href="https://www.github.com/keithradford"
                _hover={{ color: "#1a281f" }}
                target="_blank"
              >
                GitHub
              </Text>
              <Text
                as="a"
                color="#588157"
                _hover={{ color: "#1a281f" }}
                href="https://www.linkedin.com/in/keith-radford/"
                target="_blank"
              >
                LinkedIn
              </Text>
            </HStack>
            <Text color="#1a281f" fontSize="xs">
              © 2022 Keith Radford
            </Text>
          </VStack>
        </Center>
      </Box>
    </Container>
  );
}
