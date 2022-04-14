import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Lauchpad from "./screen/Launchpad";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Lauchpad />
  </ChakraProvider>,
  document.getElementById("root")
);
