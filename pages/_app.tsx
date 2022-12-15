import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../constants/theme";
import "@fontsource/inria-serif";

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
