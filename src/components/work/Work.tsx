import { VStack, Heading } from "@chakra-ui/react";
import { Dropdown } from "./components/Dropdown";
import { work } from "./static";

export function Work() {
  return (
    <VStack
      alignContent="center"
      w="70%"
      mx="auto"
      align="left"
      mt="5rem"
      mb="10rem"
    >
      <Heading
        as="h3"
        fontFamily="Open Sans"
        fontWeight="bold"
        color="white"
        textAlign={{ base: "center", lg: "left" }}
      >
        Work Experience
      </Heading>
      {work.map((job) => {
        return <Dropdown work={job} />;
      })}
    </VStack>
  );
}
