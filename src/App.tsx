import { Box } from "@chakra-ui/react";
import { Work, Projects, About, Landing } from "./components";

export function App(): JSX.Element | null {
  return (
    <Box
      bg="#353535"
      bgSize="cover"
      background={`url(${
        process.env.PUBLIC_URL + "/assets/scaled_background.png"
      }) no-repeat fixed`}
    >
      <Landing />
      <Box minH="100vh" id="content">
        <About />
        <Projects />
        <Work />
      </Box>
      <footer style={{ textAlign: "center", color: "whitesmoke" }}>
        &copy; 2021 Keith Radford
      </footer>
    </Box>
  );
}
