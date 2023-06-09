import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `"Inria Serif", serif`,
    heading: `"Inria Serif", serif`,
  },
  styles: {
    global: {
      ".mdx-prose": {
        h1: {
          fontSize: "xl",
          fontWeight: "bold",
          mb: "2",
        },
        h2: {
          fontSize: "lg",
          fontWeight: "bold",
          mb: "1",
        },
        h3: {
          fontSize: "md",
          fontWeight: "bold",
        },
        h4: {
          fontSize: "md",
          fontStyle: "italic",
        },
        p: {
          fontSize: "md",
          lineHeight: "1.4",
          mb: "2",
        },
        a: {
          color: "blue.500",
          _hover: {
            textDecoration: "underline",
            color: "blue.700",
          },
        },
        "ol, ul": {
          pl: "7",
          mb: "2",
        },
        code: {
          fontSize: "sm",
          bg: "gray.100",
          px: "1",
          py: "0.5",
          borderRadius: "md",
        },
        blockquote: {
          borderLeft: "4px solid",
          borderColor: "gray.200",
          pl: "4",
          ml: "0",
          my: "2",
        },
        // large codeblocks
        pre: {
          bg: "gray.100",
          borderRadius: "md",
          p: "4",
          overflow: "auto",
          code: {
            fontSize: "inherit",
            px: "0",
            py: "0",
          },
          my: "2",
        },
      },
    },
  },
});

export default theme;
