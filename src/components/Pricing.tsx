import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Box from "@mui/joy/Box";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import XCopilotLogo from "./XCopilotLogo";
import Divider from "@mui/joy/Divider";
import Grid from "@mui/joy/Grid";
import Chip from "@mui/joy/Chip";
import { useColorScheme } from "@mui/joy/styles";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import CardActions from "@mui/joy/CardActions";
import Check from "@mui/icons-material/Check";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Alert from "@mui/joy/Alert";
export default function PricingPage() {
  const { mode, setMode } = useColorScheme();
  return (
    <>
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
          width: "100%",
          display: "flex",
        })}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100dvh",
            minWidth: "800",
            width: "60%",
            px: 2,
            mx: "auto",
          }}
        >
          <Box
            component="header"
            sx={{
              paddingTop: 2,
              paddingBottom: 1,
              display: "flex",
              width: "100%",
              alignItems: "left",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                gap: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              <XCopilotLogo />
              <Stack direction="row" spacing={4} sx={{ marginLeft: 10 }}>
                <Link href="/">
                  <Typography level="title-lg">主页</Typography>
                </Link>
                <Link>
                  <Typography level="title-lg">文档</Typography>
                </Link>
                <Link href="/pricing">
                  <Typography level="title-lg">定价</Typography>
                </Link>
              </Stack>
            </Box>
          </Box>
          <Divider></Divider>

          <Box
            component="main"
            sx={{
              width: "100%",
            }}
          >
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={4}></Grid>
              <Grid xs={4}>
                <Alert
                  variant="soft"
                  sx={{ marginTop: 10, justifyContent: "center" }}
                  color="warning"
                >
                  Beta内测期间，所有功能免费使用
                </Alert>
              </Grid>
              <Grid xs={4}></Grid>

              <Grid
                xs={12}
                sx={{
                  marginTop: 15,
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
                    gap: 2,
                  }}
                >
                  <Card
                    size="lg"
                    variant="solid"
                    color="neutral"
                    invertedColors
                    sx={{ bgcolor: "neutral.900" }}
                  >
                    <Chip size="sm" variant="outlined" color="neutral">
                      basic
                    </Chip>
                    <Typography level="h2">个人用户</Typography>
                    <Divider inset="none" />
                    <List
                      size="sm"
                      sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}
                    >
                      <ListItem>
                        <ListItemDecorator>
                          <Check />
                        </ListItemDecorator>
                        40000 token/天
                      </ListItem>
                      <ListItem>
                        <ListItemDecorator>
                          <Check />
                        </ListItemDecorator>
                        10个仓库索引
                      </ListItem>
                      <ListItem>
                        <ListItemDecorator>
                          <Check />
                        </ListItemDecorator>
                        支持github
                      </ListItem>
                      <ListItem>
                        <ListItemDecorator>
                          <Check />
                        </ListItemDecorator>
                        支持gitee
                      </ListItem>
                      <ListItem>
                        <ListItemDecorator>
                          <Check />
                        </ListItemDecorator>
                        微信群支持
                      </ListItem>
                    </List>
                    <Divider inset="none" />
                    <CardActions>
                      <Typography level="title-lg" sx={{ mr: "auto" }}>
                        免费{" "}
                        <Typography fontSize="sm" textColor="text.tertiary">
                          / month
                        </Typography>
                      </Typography>
                    </CardActions>
                  </Card>
                  <Card
                    size="lg"
                    variant="solid"
                    color="neutral"
                    invertedColors
                    sx={{ bgcolor: "neutral.900" }}
                  >
                    <Chip size="sm" variant="outlined">
                      Pro
                    </Chip>
                    <Typography level="h2">团队用户</Typography>
                    <Divider inset="none" />
                    <List
                      size="sm"
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        mx: "calc(-1 * var(--ListItem-paddingX))",
                      }}
                    >
                      <ListItem>
                        <ListItemDecorator>
                          <Check />
                        </ListItemDecorator>
                        100000 token/天
                      </ListItem>
                      <ListItem>
                        <ListItemDecorator>
                          <Check />
                        </ListItemDecorator>
                        20个仓库索引
                      </ListItem>
                      <ListItem>
                        <ListItemDecorator>
                          <Check />
                        </ListItemDecorator>
                        独立运行节点
                      </ListItem>
                      <ListItem>
                        <ListItemDecorator>
                          <Check />
                        </ListItemDecorator>
                        支持个性化域名
                      </ListItem>
                      <ListItem>
                        <ListItemDecorator>
                          <Check />
                        </ListItemDecorator>
                        支持对接企业版本gitee
                      </ListItem>
                      <ListItem>
                        <ListItemDecorator>
                          <Check />
                        </ListItemDecorator>
                        支持对接企业版本github
                      </ListItem>
                      <ListItem>
                        <ListItemDecorator>
                          <Check />
                        </ListItemDecorator>
                        7x24小时支持
                      </ListItem>
                    </List>
                    <Divider inset="none" />
                    <CardActions>
                      <Typography level="title-lg" sx={{ mr: "auto" }}>
                        199¥{" "}
                        <Typography fontSize="sm" textColor="text.tertiary">
                          /人/month
                        </Typography>
                      </Typography>
                    </CardActions>
                  </Card>
                  <Card
                    size="lg"
                    variant="solid"
                    color="neutral"
                    invertedColors
                    sx={{ bgcolor: "neutral.900" }}
                  >
                    <Chip size="sm" variant="outlined">
                      私有化部署
                    </Chip>
                    <Typography level="h2">私有化用户</Typography>
                    <Divider inset="none" />
                    <List
                      size="sm"
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        mx: "calc(-1 * var(--ListItem-paddingX))",
                      }}
                    >
                      <ListItem>
                        <ListItemDecorator>
                          <Check />
                        </ListItemDecorator>
                        支持集成第3方大模型
                      </ListItem>
                      <ListItem>
                        <ListItemDecorator>
                          <Check />
                        </ListItemDecorator>
                        支持对接企业内部代码仓库
                      </ListItem>
                      <ListItem>
                        <ListItemDecorator>
                          <Check />
                        </ListItemDecorator>
                        支持对接企业账户系统
                      </ListItem>
                      <ListItem>
                        <ListItemDecorator>
                          <Check />
                        </ListItemDecorator>
                        7x24小时支持
                      </ListItem>
                    </List>
                    <Divider inset="none" />
                    <CardActions>
                      <Link
                        endDecorator={<KeyboardArrowRight />}
                        href="mailto:service@xpie.dev"
                        target="_blank"
                      >
                        联系我们
                      </Link>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box component="footer" sx={{ py: 3 }}>
            <Typography level="body-xs" textAlign="center">
              © X Copilot {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
