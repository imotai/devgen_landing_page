import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import { StyledEngineProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { Outlet } from "react-router-dom";
import Box from "@mui/joy/Box";

import { useXpieContext, XpieContextProvider } from "./components/Context";

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
