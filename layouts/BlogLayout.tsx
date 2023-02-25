import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from "../api";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function BlogLayout({
  title,
  content,
  posts,
}: {
  title: string;
  content: string;
  posts: { slug: string; title: string }[];
}) {
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
            {posts.map(({ slug, title }: { slug: string; title: string }) => (
              <Link href={`/blog/${slug}`} key={slug}>
                {title}
              </Link>
            ))}
          </GridItem>
          <GridItem pl="2" bg="green.300" area={"main"}>
            <Head>
              <title>{title}</title>
            </Head>
            <article>
              <h1>{title}</h1>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>
          </GridItem>
          <GridItem pl="2" bg="blue.300" area={"footer"}>
            <Footer />
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
}
