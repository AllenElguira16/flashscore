import React from "react";
import ReactDOM from "react-dom/client";
import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  Theme,
  theme as initialTheme
} from "@chakra-ui/react";
import App from "./App";

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;

const baseTheme: DeepPartial<Theme> = {
  styles: {
    global: {
      "html, body": {
        background: "gray.700"
      }
    }
  },
  components: {
    Card: {
      baseStyle: {
        container: {
          backgroundColor: 'blackAlpha.600',
        }
      }
    },
    Link: {
      baseStyle: {
        textDecoration: 'underline',
        _hover: {
          // color: 'cyan.500',
        },
      },
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false
  }
};
const theme = extendTheme(baseTheme);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
