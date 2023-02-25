import { Box, Heading, List, ListIcon, ListItem } from "@chakra-ui/react";
import Link from "next/link";
import { Post } from "../constants/types";
import { GiPineTree } from "react-icons/gi";

type Props = {
  posts: Post[];
};

export default function Nav({ posts }: Props) {
  return (
    <Box>
      <Heading size="md" mb="2">
        Recent Posts
      </Heading>
      <List>
        {posts.map(({ slug, title }: Post) => (
          <ListItem
            key={slug}
            color="green.700"
            textDecoration="underline"
            _hover={{ color: "#1a281f" }}
          >
            <ListIcon as={GiPineTree} />
            <Link href={`/blog/${slug}`}>{title}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
