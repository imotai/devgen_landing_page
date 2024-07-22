import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Box from "@mui/joy/Box";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import { useAsyncFn } from "react-use";
import ArrowForward from "@mui/icons-material/ArrowForward";
import PlayVideo from "./PlayVideo";
import AspectRatio from "@mui/joy/AspectRatio";
import HeaderMenu from "./HeaderMenu";
import TwoSidedLayout from "./TwoSlideLayout";
import Button from "@mui/joy/Button";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import { Avatar } from "@mui/joy";
import { FaChrome } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaUpRightFromSquare } from "react-icons/fa6";

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
              sx={{ mx: "auto", mt: 10, textAlign: "center" }}
            >
              <Typography
                level="h1"
                fontWeight="xl"
                fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
              >
                <Typography>Devgen</Typography>
                <Typography color="neutral">:</Typography>
                <Typography color="primary">Supercharge</Typography> your GitHub
                workflow with context aware AI assistance
              </Typography>
              <Typography
                fontSize="lg"
                textColor="text.secondary"
                lineHeight="lg"
              >
                Devgen is a Chrome extension that lets you chat with your Github
                repository side by side.
              </Typography>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="baseline"
                spacing={2}
                sx={{ mx: "auto", p: 2 }}
              >
                <Button
                  color="primary"
                  variant="solid"
                  size="lg"
                  startDecorator={<FaChrome />}
                  endDecorator={<FaUpRightFromSquare />}
                >
                  Try it for free
                </Button>
              </Stack>
              <AspectRatio
                sx={(theme) => ({
                  width: { xs: "100%", md: "80%" },
                })}
                variant="plain"
              >
                <img src="./first_look.png" />
              </AspectRatio>
            </Stack>
            <Stack direction="column" spacing={1} sx={{ mx: "auto", mt: 10 }}>
              <TwoSidedLayout>
                <Typography level="h1" fontWeight="xl" 
                fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
                >
                  In-Context Explanation with Linked References

                </Typography>
                <Typography
                  fontSize="xl"
                  textColor="text.secondary"
                  lineHeight="lg"
                >
                  Select any text, and Devgen will search the current GitHub repository to generate a tailored explanation, complete with code breakdowns and technology insights.
                  Devgen can be used for the following purposes:
                </Typography>
                <List marker="disc">
                  <ListItem>
                    <Typography fontSize="xl" level="title-lg">Code Explanation</Typography>
                    <Typography fontSize="xl">
                      Select a code snippet to receive a detailed breakdown of its functionality, including linked code references, relevant issues, and pull requests.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography fontSize="xl" level="title-lg">Technology Explanation</Typography>
                    <Typography fontSize="xl">
                      Select a technology description to get an in-depth explanation of its purpose, implementation, and usage within this repository
                    </Typography>
                  </ListItem>
                </List>
              </TwoSidedLayout>
              <TwoSidedLayout>
                <Typography level="h1" fontWeight="xl" sx={{}}
                fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
                >
                  In-Context Problem Solving
                </Typography>
                <Typography
                  fontSize="lg"
                  textColor="text.secondary"
                  lineHeight="lg"
                >
                  Simply send a question to Devgen, and it will search the
                  current GitHub repository to generate a tailored solution for
                  you.
                </Typography>
                <List marker="disc">
                  <ListItem>
                    <Typography fontSize="xl">Tailored Usage Examples</Typography>
                    <Typography fontSize="md">
                      DevGen crafts personalized usage examples to match your specific requirements
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography fontSize="xl">
                      Strategic Issue Resolution
                    </Typography>
                    <Typography fontSize="md">
                      Choose an issue, and DevGen will develop a detailed plan to address and resolve it effectively
                    </Typography>
                  </ListItem>
                </List>
                <Typography
                  fontSize="lg"
                  textColor="text.secondary"
                  lineHeight="lg"
                >
                  Simply send a question to Devgen, and it will search the
                  current GitHub repository to generate a tailored solution for
                  you.
                </Typography>
              </TwoSidedLayout>
              <TwoSidedLayout>
                <Typography level="h1" fontWeight="xl" sx={{}}
                fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
                >
                  On-demand Code Index
                </Typography>
                <Typography
                  fontSize="lg"
                  textColor="text.secondary"
                  lineHeight="lg"
                >
                  You can refresh the code index at any time to access the most
                  up-to-date information.
                </Typography>
                <List marker="disc">
                  <ListItem>
                    <Typography fontSize="xl">Custom Usage Examples</Typography>
                    <Typography fontSize="md">
                      DevGen creates personalized usage examples based on your
                      specific requirements.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography fontSize="xl">
                      Issue Resolution Planning
                    </Typography>
                    <Typography fontSize="md">
                      Select an issue, and Devgen will generate a comprehensive
                      plan to address and resolve it.
                    </Typography>
                  </ListItem>
                </List>
              </TwoSidedLayout>
            </Stack>
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
