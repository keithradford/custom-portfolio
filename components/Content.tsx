import { Box, Heading } from "@chakra-ui/react";

type Props = {
  title: string;
  content: string;
};

export default function Content({ title, content }: Props) {
  console.log(content);
  return (
    <Box>
      <Heading mb="2">{title}</Heading>
      <MDXWrapper dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
  );
}

const MDXWrapper = (props: any) => <div className="mdx-prose" {...props} />;
