import * as React from "react";
import Box from "@mui/joy/Box";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import XCopilotLogo from "./XCopilotLogo";
import { useColorScheme } from "@mui/joy/styles";
import IconButton, { IconButtonProps } from "@mui/joy/IconButton";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

function ColorSchemeToggle(props: IconButtonProps) {
  const { onClick, ...other } = props;
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <IconButton
      aria-label="toggle light/dark mode"
      size="sm"
      variant="plain"
      disabled={!mounted}
      onClick={(event) => {
        setMode(mode === "light" ? "dark" : "light");
        onClick?.(event);
      }}
      {...other}
    >
      {mode === "light" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

export default function HeaderMenu() {
  return (
    <>
      <Box
        sx={{
          gap: 4,
          display: "flex",
          p: 1,
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ gap: 2, display: "flex", alignItems: "center" }}>
          <XCopilotLogo />
          <Stack direction="row" spacing={5}>
            <Link href="/">
              <Typography level="title-md">Download</Typography>
            </Link>
            <Link href="/pricing">
              <Typography level="title-md">Pricing</Typography>
            </Link>
          </Stack>
        </Box>
        <ColorSchemeToggle />
      </Box>
    </>
  );
}
