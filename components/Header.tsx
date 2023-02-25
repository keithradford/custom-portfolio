import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <Heading as="h1" size="2xl" color="#1a281f">
        Keith Radford
      </Heading>
      <Box py={4}>
        <Image
          src="/mountains.svg"
          alt="pencil drawing of a mountainous scenery"
          width={944}
          height={500}
          draggable={false}
        />
      </Box>
    </>
  );
}
