import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Box from "@mui/joy/Box";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import { useAsyncFn } from "react-use";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Chip from "@mui/joy/Chip";
import PlayVideo from "./PlayVideo";
import AspectRatio from "@mui/joy/AspectRatio";
import HeaderMenu from "./HeaderMenu";
import TwoSidedLayout from "./TwoSlideLayout";
import Button from "@mui/joy/Button";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";

export default function LandingPage() {
  const [openVideo, setOpenVideo] = React.useState<boolean>(false);
  const [videoUrl, setVideoUrl] = React.useState<string>("");
  const [playVideoState, playVideoFn] = useAsyncFn(async (url: string) => {
    setVideoUrl(url);
    setOpenVideo(true);
  });
  return (
    <>
      <PlayVideo open={openVideo} url={videoUrl} setOpen={setOpenVideo} />
      <GlobalStyles
        styles={{
          ":root": {
            "--Collapsed-breakpoint": "769px", // form will stretch when viewport is below `769px`
            "--Cover-width": "50vw", // must be `vw` only
            "--Form-maxWidth": "800px",
            "--Transition-duration": "0.4s", // set to `none` to disable transition
          },
        }}
      />
      <Box
        sx={(theme) => ({
          width: { xs: "100%", md: "60vw" },
          display: "flex",
          mx: "auto",
        })}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <HeaderMenu />
          <Box
            component="main"
            sx={{
              width: "100%",
            }}
          >
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={1}
              sx={{ mx: "auto",  mt: 10, textAlign: "center" }}
            >
              <Typography
                level="h1"
                fontWeight="xl"
                fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
              >
                <Typography>Devgen</Typography>
                <Typography color="neutral">:</Typography>
                <Typography color="primary">Supercharge</Typography> your GitHub workflow with context awared AI assistance
              </Typography>
              <Typography
                fontSize="lg"
                textColor="text.secondary"
                lineHeight="lg"
              >
                Devgen is a Chrome extension that lets you chat with your Github
                repository side by side.
              </Typography>
              <AspectRatio
                sx={(theme) => ({
                  width: { xs: "100%", md: "80%", lg: "60%" },
                })}
                variant="plain"
              >
                <img src="./first_look.png" />
              </AspectRatio>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="baseline"
                spacing={2}
                sx={{ mx: "auto", p: 2 }}
              >
                <Button variant="solid" color="primary" size="lg" >
                  Get Early Access
                </Button>
              </Stack>
            </Stack>
            <TwoSidedLayout>
              <Typography level="h2">In-context explanation</Typography>
              <Typography
                textColor="text.secondary"
                lineHeight="lg"
              >
                Simply select the desired text, and devgen will generate an
                explanation based on the surrounding GitHub context.
              </Typography>
              <List marker="disc" sx={{ px: 2, py: 2 }}>
                <ListItem>
                  For code: Select a specific method or function to receive an
                  explanation.
                </ListItem>
                <ListItem>
                  For documentation: Highlight key concepts in README files for
                  detailed clarification.
                </ListItem>
                <ListItem>
                  For issues and pull requests: Select relevant portions to
                  understand their context and implications.
                </ListItem>
              </List>
            </TwoSidedLayout>
            <TwoSidedLayout>
              <Typography level="h2">In-context Problem Solving</Typography>
              <Typography
                fontSize="lg"
                textColor="text.secondary"
                lineHeight="lg"
              >
                A descriptive secondary text placeholder. Use it to explain your
                business offer better.
              </Typography>
              <Button size="lg" endDecorator={<ArrowForward />}>
                Get Started
              </Button>
              <Typography>
                Already a member? <Link fontWeight="lg">Sign in</Link>
              </Typography>
            </TwoSidedLayout>
          </Box>
          <Box component="footer" sx={{ py: 3 }}>
            <Typography level="body-xs" textAlign="center">
              ©devgen {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
