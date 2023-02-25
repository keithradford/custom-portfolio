import { ChakraProvider } from "@chakra-ui/react";
import theme from "../constants/theme";
import "@fontsource/inria-serif";
import "../styles/prism.css";

function MyApp({ Component, pageProps }: any) {
  const Layout = Component.layout || EmptyLayout;

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

const EmptyLayout = ({ children }: any) => <>{children}</>;

export default MyApp;
