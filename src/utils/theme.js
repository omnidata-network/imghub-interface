import { extendTheme } from "@chakra-ui/react";

const colors = {
    primary: {
      500: "#FFFFFF",
      600: "#0707cb",
      700: "#FFFFFF",
      800: "#FFFFFF",
    },
    blue:{
      50: "rgb(231 245 253 / 51%)",
      100: "#03228f",
      500: "#0e73e4",
    },
    orange:{
      300: "#f5c247",
    }
  };
  
  const customTheme = extendTheme({ colors });

export default customTheme
