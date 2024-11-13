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
    Badge,
} from '@mui/joy'
import {
    MessageCircleQuestion,
    CircleChevronRight,
    Search,
    Lightbulb,
    PencilRuler,
    Bug,
    ScanSearch,
    GraduationCap
} from 'lucide-react'
import Player from './Player'

export default function FeaturesPage() {
    return (
        <>
            <Stack
                direction="column"
                spacing={16}
                sx={{
                    mt: 10,
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
                                Quickly get precise answers, with relevant code
                                references, to verify the information you need.
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
                                            Learn How to Use Code Elements
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
                                            Efficient Troubleshooting
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography
                                            startDecorator={
                                                <Lightbulb color="#0B6BCB" />
                                            }
                                            level="body-md"
                                        >
                                            Discover Existing Solutions for Your
                                            Requirements
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
                        <Player
                            url="/videos/devgen_ask_how_v2.mp4"
                            light="/img/devgen_ask_how_v2.png"
                        ></Player>
                    </Grid>
                </Grid>
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
                                Finding Context, Solving Your Issue
                            </Typography>
                            <Badge color="warning" variant="solid" badgeContent="beta">
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
                                Chat with{' '}
                                <Typography color="primary">Issue</Typography>
                            </Typography>
                                </Badge>
                            <Typography
                                textColor="text.secondary"
                                level="body-lg"
                                sx={{ fontSize: 'lg', lineHeight: 'lg' }}
                            >
                                Effortlessly bring GitHub issues into your chat!
                                Simply right-click on any issue page, choose
                                "Add to Chat," and the issue is instantly set up
                                for discussion. 
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
                                            Quickly access the issue’s related
                                            code and pull requests.
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography
                                            startDecorator={
                                                <PencilRuler color="#0B6BCB" />
                                            }
                                            level="body-md"
                                        >
                                            Effortlessly draft and discuss
                                            solutions for the issue directly in
                                            the chat.
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
                            <Player
                                url="/videos/chat_with_issue.mp4"
                                light='/img/chat_issue_cover-min.png'
                            ></Player>
                    </Grid>
                </Grid>
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
                                Reviewing and Understanding Pull Requests Made Easy
                            </Typography>

                                <Badge color="warning" variant="solid" badgeContent="beta">
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
                                Chat with{' '}
                                <Typography color="primary">Pull Request</Typography>
                            </Typography>
                                </Badge>
                            <Typography
                                textColor="text.secondary"
                                level="body-lg"
                                sx={{ fontSize: 'lg', lineHeight: 'lg' }}
                            >
                                A Simple Way for Teams to Review and Discuss Code Changes, even if you do not have a programming background. You can still read the pull request
                            </Typography>
                            <Box>
                                <List>
                                    
                                    <ListItem>
                                        <Typography
                                            startDecorator={
                                                <GraduationCap color="#0B6BCB" />
                                            }
                                            level="body-md"
                                        >
                                            Learn about the pull request with natural language
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography
                                            startDecorator={
                                                <ScanSearch color="#0B6BCB" />
                                            }
                                            level="body-md"
                                        >
                                            Use natural language to review pull requests
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
                            <Player
                                url="/videos/chat_with_pull_request.mp4"
                                light='/img/chat_with_pull_request-min.png'
                            ></Player>
                    </Grid>
                </Grid>
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
                                Reviewing and Understanding Patches Made Easy
                            </Typography>

                                <Badge color="warning" variant="solid" badgeContent="beta">
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
                                Chat with{' '}
                                <Typography color="primary">Commit</Typography>
                            </Typography>
                                </Badge>
                            <Typography
                                textColor="text.secondary"
                                level="body-lg"
                                sx={{ fontSize: 'lg', lineHeight: 'lg' }}
                            >
                                A Simple Way for Teams to Review and Discuss Code Changes, even if you do not have a programming background. You can still read the pull request
                            </Typography>
                            <Box>
                                <List>
                                    
                                    <ListItem>
                                        <Typography
                                            startDecorator={
                                                <GraduationCap color="#0B6BCB" />
                                            }
                                            level="body-md"
                                        >
                                            Learn about the pull request with natural language
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography
                                            startDecorator={
                                                <ScanSearch color="#0B6BCB" />
                                            }
                                            level="body-md"
                                        >
                                            Use natural language to review pull requests
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
                            <Player
                                url="/videos/chat_with_commit.mp4"
                                light='/img/chat_with_commit-min.png'
                            ></Player>
                    </Grid>
                </Grid>

            </Stack>
        </>
    )
}
