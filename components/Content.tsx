import { Box, Heading, Text } from "@chakra-ui/react";

type Props = {
  title: string;
  content: string;
  date: string;
};

export default function Content({ title, content, date }: Props) {
  return (
    <Box>
      <Heading>{title}</Heading>
      <Heading mb="3" mt="1" color="gray.500" size="md">
        Published on{" "}
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </Heading>
      <MDXWrapper dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
  );
}

const MDXWrapper = (props: any) => <div className="mdx-prose" {...props} />;
