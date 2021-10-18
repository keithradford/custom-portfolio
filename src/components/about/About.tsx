import { Image, Text, Link, VStack, Heading, Flex } from "@chakra-ui/react";
import { Social } from "./components/Social";

export function About() {
  return (
    <VStack
      align="left"
      minH="fit-content"
      w="70%"
      my={20}
      mx="auto"
      alignContent="center"
    >
      <Heading
        as="h3"
        fontFamily="Open Sans"
        fontWeight="bold"
        color="white"
        textAlign={{ base: "center", lg: "left" }}
      >
        About Me
      </Heading>
      <Flex
        direction={{ base: "column", lg: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={`${process.env.PUBLIC_URL + "/assets/svg/keith.svg"}`}
          mr="1em"
          mb="1em"
          maxW={{ sm: "70%", base: "250px", lg: "250px" }}
        />
        <VStack color="whitesmoke" flexGrow={1}>
          <Text w={{ base: "100%", lg: "45em", xl: "100%" }} mb="1em">
            My name's Keith and I'm a student and software developer with an
            interest in making tools to help others. I'm from Victoria, BC and
            currently studying Software Engineering at UVic.
            <br />
            <br />I am a former hockey player who has always had an interest in
            computers and how they work. Aside from coding I enjoy fitness,
            skiing, video games, and chess among other things. <br />
            <br />
            Check me out on the various networks linked below, take a look at my{" "}
            <Link
              href={`${process.env.PUBLIC_URL + "/assets/resume.pdf"}`}
              target="_blank"
              _hover={{
                color: "blue.500",
              }}
              _focus={{
                border: "none",
              }}
              textDecor="underline"
            >
              resume
            </Link>
            , send me an email at{" "}
            <Link
              href="mailto:khr8771@gmail.com"
              _focus={{
                border: "none",
              }}
              _hover={{
                color: "blue.500",
              }}
              textDecor="underline"
            >
              khr8771@gmail.com
            </Link>
            , and take a look at some of my projects and work experience!
          </Text>
          <Social />
        </VStack>
      </Flex>
    </VStack>
  );
}
