import * as React from "react";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import { StyledEngineProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { Outlet } from "react-router-dom";
import Box from "@mui/joy/Box";

import { useXpieContext, XpieContextProvider } from "./components/Context";
const customTheme = extendTheme({
  typography: {
    h1: {
      background:
        "linear-gradient(-30deg, var(--joy-palette-primary-700), var(--joy-palette-primary-400))",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  },
});
export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <CssVarsProvider defaultMode="dark" disableTransitionOnChange>
        <XpieContextProvider>
          <CssBaseline />
          <Box sx={{ display: "flex", minHeight: "100dvh" }}>
            <Outlet />
          </Box>
        </XpieContextProvider>
      </CssVarsProvider>
    </StyledEngineProvider>
  );
}
