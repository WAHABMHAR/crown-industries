import { Box, Button, createTheme, styled, Typography } from "@mui/material";

export const CustomTheme = createTheme({
  palette: {
    primary: {
      main: "#f2c616",
      //   main: "#142033",
      white: "#ffffff",
      light: "#fffff5",
    },
    black: "#000000",
    blackHeading: "#292b2a",
    lightWhite: "#f2f2f2",
    bgBlack: "#2f302f",
    pColor: "#5c5c2f",
    pGrey: "#808487",
    btnColor: "#00acf0",
    orangeColor: "#f56105",
    // #808080
    // lightPrimary: "rgba(255, 255, 255,0.8)",
    lightPrimary: "rgba(0, 171, 240, 0.2)",
    customGradient:
      "linear-gradient(162deg, rgba(0,172,240,1) 0%, rgba(20,32,51,1) 54%)",
  },
  typography: {
    fontFamily: "Oen, Arial, sans-serif",
  },
});

export const CustomBannerText = styled("h1")`
  font-family: "Oswald";
  font-size: 5.3rem;
  font-weight: 500;
  line-height: 1;
  text-shadow: 1px 1px 1px black;
  color: white;
  text-transform: uppercase;
`;
export const CustomButton = styled(Button)`
  font-family: "Open Sans";
  font-weight: 500;
  font-size: 1rem;
  background-color: #f2c616;
  width: 10rem;
  height: 3.5rem;
  color: white;
  &:hover {
    border: 1px solid f2c616;
    color: #f2c616;
    background-color: transparent;
  }
`;
export const SectionHeading = styled(Typography)`
  font-family: "Oswald";
  font-size: 3.3rem;
  font-weight: 500;
`;

export const Line = styled(Box)`
  width: 100%;
  background-color: #fffff5;
  height: 1px;
`;
