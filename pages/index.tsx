import { Box, Container, Grid, GridItem, HStack } from "@chakra-ui/react";
import getConfig from "next/config";
import Link from "next/link";
import { getAllPosts } from "../api";
import Footer from "../components/Footer";
import Header from "../components/Header";

type Props = {
  posts: { slug: string; title: string }[];
};

export default function Home({ posts }: Props) {
  return (
    <Container maxW="container.lg">
      <Box w="100%" p={6}>
        <Header />
        <Grid
          templateAreas={` "nav main"
                  "footer footer"`}
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida
            arcu ac tortor dignissim convallis aenean et tortor at. Volutpat
            odio facilisis mauris sit amet massa vitae tortor. Ac tincidunt
            vitae semper quis lectus nulla at. Sit amet mattis vulputate enim
            nulla aliquet porttitor. Sed risus ultricies tristique nulla aliquet
            enim tortor. Aliquam faucibus purus in massa tempor. Semper quis
            lectus nulla at volutpat diam ut venenatis. Vitae nunc sed velit
            dignissim sodales ut eu sem. Turpis egestas sed tempus urna. Vivamus
            at augue eget arcu dictum varius duis at consectetur. Eu volutpat
            odio facilisis mauris. Nunc aliquet bibendum enim facilisis gravida
            neque convallis a cras. Est placerat in egestas erat imperdiet. Non
            blandit massa enim nec dui. Ac auctor augue mauris augue neque
            gravida. Elit at imperdiet dui accumsan. Ornare lectus sit amet est
            placerat. Pretium viverra suspendisse potenti nullam ac. Nec
            tincidunt praesent semper feugiat nibh sed pulvinar. Ligula
            ullamcorper malesuada proin libero nunc consequat interdum varius
            sit. Neque aliquam vestibulum morbi blandit cursus risus. Interdum
            velit euismod in pellentesque massa placerat duis ultricies. Lacus
            suspendisse faucibus interdum posuere lorem ipsum dolor sit. Vel
            fringilla est ullamcorper eget nulla facilisi etiam. Ut faucibus
            pulvinar elementum integer enim. Senectus et netus et malesuada
            fames ac turpis egestas. Faucibus a pellentesque sit amet porttitor
            eget dolor. Tristique senectus et netus et malesuada fames. A diam
            maecenas sed enim. Cursus eget nunc scelerisque viverra mauris in
            aliquam. Elit at imperdiet dui accumsan sit amet nulla facilisi
            morbi. Neque vitae tempus quam pellentesque nec nam aliquam sem.
            Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare.
            Lacinia at quis risus sed vulputate odio ut enim blandit. Ut enim
            blandit volutpat maecenas volutpat blandit. Sit amet luctus
            venenatis lectus magna. Diam in arcu cursus euismod quis viverra
            nibh cras pulvinar. Morbi tristique senectus et netus et malesuada.
            Placerat orci nulla pellentesque dignissim enim sit. Fringilla ut
            morbi tincidunt augue interdum velit euismod in pellentesque. At
            urna condimentum mattis pellentesque id nibh tortor id aliquet.
            Etiam tempor orci eu lobortis elementum nibh. Dolor sit amet
            consectetur adipiscing elit duis tristique sollicitudin nibh. Sit
            amet aliquam id diam maecenas ultricies mi eget mauris. Aenean et
            tortor at risus viverra adipiscing. Eu volutpat odio facilisis
            mauris sit amet massa vitae tortor. Facilisi nullam vehicula ipsum a
            arcu cursus vitae congue. Tempor orci dapibus ultrices in iaculis
            nunc sed augue lacus. Pellentesque habitant morbi tristique senectus
            et netus et. Nunc id cursus metus aliquam eleifend. Quis vel eros
            donec ac odio tempor. Turpis cursus in hac habitasse platea dictumst
            quisque sagittis purus. Egestas purus viverra accumsan in nisl nisi
            scelerisque. Arcu felis bibendum ut tristique et. Aliquet nec
            ullamcorper sit amet risus nullam eget felis eget. Ut aliquam purus
            sit amet luctus venenatis lectus magna fringilla. Velit laoreet id
            donec ultrices tincidunt arcu non. At elementum eu facilisis sed
            odio morbi quis commodo. In egestas erat imperdiet sed euismod nisi
            porta. Vulputate mi sit amet mauris commodo quis imperdiet.
            Consequat ac felis donec et. Quam pellentesque nec nam aliquam sem
            et tortor. Adipiscing vitae proin sagittis nisl rhoncus mattis. Nibh
            tellus molestie nunc non blandit. Nec sagittis aliquam malesuada
            bibendum. Sodales neque sodales ut etiam sit amet nisl. Sit amet
            tellus cras adipiscing enim eu turpis egestas pretium. Placerat in
            egestas erat imperdiet sed euismod. Tincidunt tortor aliquam nulla
            facilisi cras. Pretium viverra suspendisse potenti nullam ac tortor
            vitae purus. Quis lectus nulla at volutpat diam ut venenatis tellus
            in. Nibh praesent tristique magna sit amet. Eget mauris pharetra et
            ultrices. Scelerisque mauris pellentesque pulvinar pellentesque
            habitant morbi.
          </GridItem>
          <GridItem pl="2" bg="blue.300" area={"footer"}>
            <Footer />
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
