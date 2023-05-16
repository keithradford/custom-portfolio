import {
  Box,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  List,
  ListIcon,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { Post } from "../constants/types";
import { GiPineTree } from "react-icons/gi";
import { RiArrowDropRightFill } from "react-icons/ri";

type Props = {
  posts: Post[];
  slug: string;
  mobile?: boolean;
  onClose?: () => void;
};

function NavContent({ posts, slug, onClose }: Props) {
  return (
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
            onClick={onClose}
          >
            <ListIcon as={GiPineTree} />
            <Link href={`/blog/${s}`}>{title}</Link>
          </ListItem>
        ))}
    </List>
  );
}

export default function Nav({ posts, slug, mobile }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!mobile) {
    return (
      <Box>
        <Heading size="md" mb="2">
          Recent Posts
        </Heading>
        <NavContent posts={posts} slug={slug} />
      </Box>
    );
  }

  return (
    <>
      <Box
        onClick={onOpen}
        w="fit-content"
        textDecor="underline"
        _hover={{
          cursor: "pointer",
          textColor: "#1a281f",
        }}
      >
        View Recent Posts
        <RiArrowDropRightFill
          size={24}
          style={{
            display: "inline-block",
            verticalAlign: "middle",
          }}
        />
      </Box>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Flex justify="space-between">
              Recent Posts
              <CloseButton onClick={onClose} />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <NavContent posts={posts} slug={slug} onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
