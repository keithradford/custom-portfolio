import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PostLayout({ children }: { children: JSX.Element }) {
  return (
    <Container maxW="container.lg">
      <Box w="100%" p={6}>
        <Header />
        <Grid
          templateAreas={` "nav main"
              "nav footer"`}
          gridTemplateColumns={"25% 1fr"}
          gap="1"
          color="blackAlpha.700"
        >
          <GridItem pl="2" bg="pink.300" area={"nav"}>
            <Link href="/post">link</Link>
          </GridItem>
          <GridItem pl="2" bg="green.300" area={"main"}>
            {children}
          </GridItem>
          <GridItem pl="2" bg="blue.300" area={"footer"}>
            <Footer />
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
}
