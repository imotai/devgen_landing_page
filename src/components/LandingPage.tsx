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
          width: { xs: '100%', md: '60vw' },
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
              sx={{ mx: "auto", p: 2, mt: 10, textAlign: "center" }}
            >
              <Typography level="h1" fontWeight="xl"
                  fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
              >
                <Typography color="primary">Devgen</Typography>
                <Typography color="neutral">:</Typography>
                Boost your GitHub productivity with AI-powered assistance
              </Typography>
              <Typography
                fontSize="lg"
                textColor="text.secondary"
                lineHeight="lg"
              >
                Devgen is a Chrome extension that lets you chat with your Github
                repository side by side.
              </Typography>
              <AspectRatio sx={{ width: "70%" }} variant="plain">
                <img src="./first_look.png" />
              </AspectRatio>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="baseline"
                spacing={2}
                sx={{ mx: "auto", p: 2 }}
              >
                <Link
                  href="https://chat.kuaima.dev?from=landing_page"
                  underline="none"
                  variant="solid"
                  color="primary"
                  endDecorator={
                    <Chip color="warning" variant="outlined" size="sm">
                      hot
                    </Chip>
                  }
                  sx={{ "--Link-gap": "0.5rem", p: 1 }}
                >
                  <Typography level="title-lg">Apply for Beta</Typography>
                </Link>
              </Stack>
            </Stack>
              <TwoSidedLayout>
                <Typography color="primary" fontSize="lg" fontWeight="lg">
                  The power to do more
                </Typography>
                <Typography
                  level="h2"
                >
                  A large headlinerer about our product features & services
                </Typography>
                <Typography
                  fontSize="lg"
                  textColor="text.secondary"
                  lineHeight="lg"
                >
                  A descriptive secondary text placeholder. Use it to explain
                  your business offer better.
                </Typography>
                <Button size="lg" endDecorator={<ArrowForward />}>
                  Get Started
                </Button>
                <Typography>
                  Already a member? <Link fontWeight="lg">Sign in</Link>
                </Typography>
              </TwoSidedLayout>
              <TwoSidedLayout>
                <Typography color="primary" fontSize="lg" fontWeight="lg">
                  The power to do more
                </Typography>
                <Typography
                  level="h2"
                >
                  A large headlinerer about our product features & services
                </Typography>
                <Typography
                  fontSize="lg"
                  textColor="text.secondary"
                  lineHeight="lg"
                >
                  A descriptive secondary text placeholder. Use it to explain
                  your business offer better.
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
