import * as React from 'react'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Stack from '@mui/joy/Stack'
import {
    AspectRatio,
    Button,
    Card,
    Grid,
    List,
    ListItem,
    Sheet,
    Link,
    CardCover,
    CardContent,
} from '@mui/joy'
import {
    MessageCircleQuestion,
    CircleDot,
    GitPullRequestArrow,
    Code,
    CircleChevronRight,
    CirclePlay,
    Search,
    Lightbulb,
    PencilRuler,
    Bug
} from 'lucide-react'
import ReactPlayer from 'react-player'

export default function FeaturesPage() {
    return (
        <>
            <Stack
                direction="column"
                spacing={2}
                sx={{
                    mt: 5,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Grid
                    container
                    spacing={2}
                    sx={(theme) => ({
                        width: { sx: '100%', md: '60%', lg: '60%' },
                        mx: 'auto',
                        alignItems: 'stretch',
                    })}
                >
                <Grid xs={12} sm={12} md={6}>
                        <Stack
                            spacing={2}
                            sx={{
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                p: 2,
                                height: '100%',
                                width: '100%',
                            }}
                        >
                            <Typography
                                color="primary"
                                sx={{ fontSize: 'lg', fontWeight: 'lg' }}
                            >
                                Devgen Finds Answers, You Save Time
                            </Typography>
                            <Typography
                                level="h3"
                                sx={{
                                    fontWeight: 'xl',
                                    fontSize:
                                        'clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)',
                                    fontFamily: 'Space Grotesk, sans-serif',
                                    mb: 2,
                                }}
                            >
                                Get Answers from Your Codebase,{' '}
                                <Typography color="primary">Fast</Typography>
                            </Typography>
                            <Typography
                                textColor="text.secondary"
                                level="body-lg"
                                sx={{ fontSize: 'lg', lineHeight: 'lg' }}
                            >
                                Ask questions and get instant answers from your
                                codebase, complete with references to verify the
                                results.
                            </Typography>
                            <Box>
                                <List>
                                    <ListItem>
                                        <Typography
                                            startDecorator={
                                                <Search color="#0B6BCB" />
                                            }
                                            level="body-md"
                                        >
                                            Find how to use code elements
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography
                                            startDecorator={
                                                <MessageCircleQuestion color="#0B6BCB" />
                                            }
                                            level="body-md"
                                        >
                                            Understand what code elements are
                                            and how they work
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography
                                            startDecorator={
                                                <Bug color="#0B6BCB" />
                                            }
                                            level="body-md"
                                        >
                                            Using Devgen for Troubleshooting
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography
                                            startDecorator={
                                                <Lightbulb color="#0B6BCB" />
                                            }
                                            level="body-md"
                                        >
                                            Discover existing solutions for
                                            requirements
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Box>
                            <Button
                                variant="outlined"
                                color="neutral"
                                sx={{
                                    pl: 1,
                                }}
                                endDecorator={<CircleChevronRight />}
                            >
                                Learn More
                            </Button>
                        </Stack>
                    </Grid>

                    <Grid xs={12} sm={12} md={6}>
                        <AspectRatio
                            sx={{
                                width: '100%',
                                borderRadius: 'sm',
                                bgcolor: 'background.level2',
                            }}
                            ratio="4/4"
                            variant="outlined"
                        >
                            <ReactPlayer
                                url="/videos/devgen_ask_how_v2.mp4"
                                width={'100%'}
                                height={'100%'}
                                light={'/img/devgen_ask_how_v2.png'}
                                playing={true}
                                playIcon={<CirclePlay size={64} />}
                            ></ReactPlayer>
                        </AspectRatio>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={2}
                    sx={(theme) => ({
                        width: { sx: '100%', md: '60%', lg: '60%' },
                        mx: 'auto',
                        alignItems: 'stretch',
                        mt: 5,
                    })}
                >
                    <Grid xs={12} sm={12} md={6}>
                        <Stack
                            spacing={2}
                            sx={{
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                p: 2,
                                height: '100%',
                                width: '100%',
                            }}
                        >
                            <Typography
                                color="primary"
                                sx={{ fontSize: 'lg', fontWeight: 'lg' }}
                            >
                                Let Devgen Find the Context for You.
                            </Typography>
                            <Typography
                                level="h3"
                                sx={{
                                    fontWeight: 'xl',
                                    fontSize:
                                        'clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)',
                                    fontFamily: 'Space Grotesk, sans-serif',
                                    mb: 2,
                                }}
                            >
                                Chat with {" "}
                                <Typography color="primary">Issue</Typography>
                            </Typography>
                            <Typography
                                textColor="text.secondary"
                                level="body-lg"
                                sx={{ fontSize: 'lg', lineHeight: 'lg' }}
                            >
                                Ask questions and get instant answers from your
                                codebase, complete with references to verify the
                                results.
                            </Typography>
                            <Box>
                                <List>
                                    <ListItem>
                                        <Typography
                                            startDecorator={
                                                <Search color="#0B6BCB" />
                                            }
                                            level="body-md"
                                        >
                                            Quickly access the issue’s related code and pull requests.
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography
                                            startDecorator={
                                                <PencilRuler color="#0B6BCB" />
                                            }
                                            level="body-md"
                                        >
                                            Effortlessly draft and discuss solutions for the issue directly in the chat.
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Box>
                            <Button
                                variant="outlined"
                                color="neutral"
                                sx={{
                                    pl: 1,
                                }}
                                endDecorator={<CircleChevronRight />}
                            >
                                Learn More
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid xs={12} sm={12} md={6}>
                        <AspectRatio
                            sx={{
                                width: '100%',
                                borderRadius: 'sm',
                                bgcolor: 'background.level2',
                            }}
                            ratio="4/4"
                            variant="outlined"
                        >
                            <ReactPlayer
                                url="/videos/chat_with_issue.mp4"
                                width={'100%'}
                                height={'100%'}
                                light={'/img/chat_issue_cover-min.png'}
                                playing={true}
                                playIcon={<CirclePlay size={64} />}
                            ></ReactPlayer>
                        </AspectRatio>
                    </Grid>
                    <Grid xs={12} sm={12} md={6}>
                        <Sheet
                            variant="soft"
                            color="neutral"
                            sx={{ p: 2, borderRadius: 'md' }}
                        >
                            <MessageCircleQuestion size={60} />
                            <Typography
                                level="h2"
                                sx={{ mb: 2 }}
                                color="primary"
                            >
                                Get Answers from Your Codebase, Fast
                            </Typography>
                            <Typography level="body-lg">
                                Devgen makes it easy to find quick answers to
                                your code questions. Open the Chrome side panel,
                                type your question, and Devgen will search the
                                codebase to deliver accurate responses. If
                                you're unsure about an answer, just click the
                                GitHub reference to verify it directly in the
                                source code—helping you solve problems with
                                confidence.
                            </Typography>
                            <Link
                                underline="none"
                                variant="outlined"
                                color="neutral"
                                sx={{
                                    mt: 2,
                                    '--Link-gap': '0.5rem',
                                    pl: 1,
                                    py: 0.5,
                                    borderRadius: 'md',
                                }}
                                href="/docs/tutorial/ask_question"
                                endDecorator={<CircleChevronRight />}
                            >
                                Learn More
                            </Link>
                        </Sheet>
                    </Grid>

                    <Grid xs={12} sm={12} md={6}>
                        <Sheet
                            variant="soft"
                            color="neutral"
                            sx={{ p: 2, borderRadius: 'md' }}
                        >
                            <CircleDot size={60} />
                            <Typography
                                level="h3"
                                sx={{ mb: 2 }}
                                color="primary"
                            >
                                Chat with Issue
                            </Typography>
                            <Typography level="body-lg">
                                Effortlessly bring GitHub issues into your chat!
                                Simply right-click on any issue page, choose
                                "Add to Chat," and the issue is instantly set up
                                for discussion.
                            </Typography>
                            <Link
                                underline="none"
                                variant="outlined"
                                color="neutral"
                                sx={{
                                    mt: 2,
                                    '--Link-gap': '0.5rem',
                                    pl: 1,
                                    py: 0.5,
                                    borderRadius: 'md',
                                }}
                                href="/docs/tutorial/chat_with_issue"
                                endDecorator={<CircleChevronRight />}
                            >
                                Learn More
                            </Link>
                        </Sheet>
                    </Grid>

                    <Grid xs={12} sm={12} md={6}>
                        <Sheet
                            variant="soft"
                            color="neutral"
                            sx={{ p: 2, borderRadius: 'md' }}
                        >
                            <GitPullRequestArrow size={60} />
                            <Typography
                                level="h3"
                                sx={{ mb: 2 }}
                                color="primary"
                            >
                                Chat with Pull Request
                            </Typography>
                            <Typography level="body-lg">
                                Need to chat about a pull request? Right-click
                                on any GitHub pull request page, select "Add to
                                Chat", and add it to the conversation.
                            </Typography>
                            <Link
                                underline="none"
                                variant="outlined"
                                color="neutral"
                                sx={{
                                    mt: 2,
                                    '--Link-gap': '0.5rem',
                                    pl: 1,
                                    py: 0.5,
                                    borderRadius: 'md',
                                }}
                                href="/docs/tutorial/chat_with_pull_request"
                                endDecorator={<CircleChevronRight />}
                            >
                                Learn More
                            </Link>
                        </Sheet>
                    </Grid>
                    <Grid xs={12} sm={12} md={6}>
                        <Sheet
                            variant="soft"
                            color="neutral"
                            sx={{ p: 2, borderRadius: 'md' }}
                        >
                            <Code size={60} />
                            <Typography
                                level="h3"
                                sx={{ mb: 2 }}
                                color="primary"
                            >
                                Chat with Code File
                            </Typography>
                            <Typography level="body-lg">
                                To discuss specific files, right-click on any
                                GitHub file page, choose "Add to Chat", and dive
                                into file-specific details together.
                            </Typography>
                            <Link
                                underline="none"
                                variant="outlined"
                                color="neutral"
                                sx={{
                                    mt: 2,
                                    '--Link-gap': '0.5rem',
                                    pl: 1,
                                    py: 0.5,
                                    borderRadius: 'md',
                                }}
                                href="/docs/tutorial/chat_with_code_file"
                                endDecorator={<CircleChevronRight />}
                            >
                                Learn More
                            </Link>
                        </Sheet>
                    </Grid>
                </Grid>
            </Stack>
        </>
    )
}
