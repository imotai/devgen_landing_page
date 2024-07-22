import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";

export default function TwoSidedLayout({
  children,
  reversed,
}: React.PropsWithChildren<{ reversed?: boolean }>) {
  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        [theme.breakpoints.up("md")]: {
          flexDirection: "row",
          gap: 6,
        },
        p: 2,
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", md: "50%" },
          mx: "auto",
        })}
      >
        {children}
      </Box>
      <AspectRatio
        variant="outlined"
        sx={(theme) => ({
          alignSelf: "stretch",
          [theme.breakpoints.up("md")]: {
            alignSelf: "initial",
            flexGrow: 1,
            "--AspectRatio-maxHeight": "520px",
            "--AspectRatio-minHeight": "400px",
          },
          borderRadius: "sm",
          bgcolor: "background.level2",
          flexBasis: "50%",
        })}
      >
        <img
          src="https://images.unsplash.com/photo-1483791424735-e9ad0209eea2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
      </AspectRatio>
    </Box>
  );
}
