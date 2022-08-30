import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#11111",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "#121212",
    },
    text: {
      primary: "#fff",
    },
  },
});