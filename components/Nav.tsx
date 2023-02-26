import { Box, Heading, List, ListIcon, ListItem } from "@chakra-ui/react";
import Link from "next/link";
import { Post } from "../constants/types";
import { GiPineTree } from "react-icons/gi";
import { getLatestPost } from "../api";

type Props = {
  posts: Post[];
  slug: string;
};

export default function Nav({ posts, slug }: Props) {
  return (
    <Box>
      <Heading size="md" mb="2">
        Recent Posts
      </Heading>
      <List>
        {posts
          .sort(
            ({ date: a }: Post, { date: b }: Post) =>
              new Date(b).getTime() - new Date(a).getTime()
          )
          .map(({ slug: s, title }: Post) => (
            <ListItem
              key={s}
              color={s === slug ? "#1a281f" : "green.700"}
              textDecoration={s === slug ? "underline" : "none"}
              _hover={{ color: "#1a281f", textDecoration: "underline" }}
            >
              <ListIcon as={GiPineTree} />
              <Link href={`/blog/${s}`}>{title}</Link>
            </ListItem>
          ))}
      </List>
    </Box>
  );
}
