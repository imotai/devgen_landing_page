import * as React from 'react'
import GlobalStyles from '@mui/joy/GlobalStyles'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Stack from '@mui/joy/Stack'
import { useAsyncFn } from 'react-use'
import PlayVideo from './PlayVideo'
import AspectRatio from '@mui/joy/AspectRatio'
import HeaderMenu from './HeaderMenu'
import TwoSidedLayout from './TwoSlideLayout'
import Button from '@mui/joy/Button'
import List from '@mui/joy/List'
import ListItem from '@mui/joy/ListItem'
import { FaChrome } from 'react-icons/fa'
import { FaPlayCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
    const [openVideo, setOpenVideo] = React.useState<boolean>(false)
    const [videoUrl, setVideoUrl] = React.useState<string>('')
    const navigate = useNavigate()
    const [playVideoState, playVideoFn] = useAsyncFn(async (url: string) => {
        setVideoUrl(url)
        setOpenVideo(true)
    })
    return (
        <>
            <PlayVideo open={openVideo} url={videoUrl} setOpen={setOpenVideo} />

            <Box
                sx={(theme) => ({
                    width: { xs: '100%', md: '60vw' },
                    display: 'flex',
                    mx: 'auto',
                })}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                    }}
                >
                    <HeaderMenu />
                    <Box
                        component="main"
                        sx={{
                            width: '100%',
                        }}
                    >
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={1}
                            sx={{ mx: 'auto', mt: 10, textAlign: 'center' }}
                        >
                            <Typography
                                level="h1"
                                fontWeight="xl"
                                fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
                            >
                                <Typography>Devgen</Typography>
                                <Typography color="neutral">:</Typography>
                                The AI assistant that{' '}
                                <Typography color="primary">
                                    knows
                                </Typography>{' '}
                                your GitHub repository
                            </Typography>
                            <Typography
                                fontSize="lg"
                                textColor="text.secondary"
                                lineHeight="lg"
                            >
                                Devgen is a Chrome extension that lets you chat
                                with your Github repository side by side.
                            </Typography>
                            <Stack
                                direction="row"
                                justifyContent="center"
                                alignItems="baseline"
                                spacing={2}
                                sx={{ mx: 'auto', p: 2 }}
                            >
                                <Button
                                    color="primary"
                                    variant="solid"
                                    size="lg"
                                    startDecorator={<FaChrome />}
                                    onClick={() => {
                                        navigate('/getEarlyAccess')
                                    }}
                                >
                                    Get Early Access
                                </Button>
                                <Button
                                    color="neutral"
                                    variant="outlined"
                                    size="lg"
                                    startDecorator={<FaPlayCircle />}
                                >
                                    <Typography>Watch Demo{''}</Typography>
                                </Button>
                            </Stack>
                            <AspectRatio
                                ratio="16/9"
                                sx={(theme) => ({
                                    width: { xs: '100%', md: '100%' },
                                })}
                                variant="plain"
                            >
                                <img src="./first_look.png" />
                            </AspectRatio>
                        </Stack>
                        <Stack
                            direction="column"
                            spacing={1}
                            sx={{ mx: 'auto', mt: 10 }}
                        >
                            <TwoSidedLayout video="https://www.youtube.com/watch?v=mkFi7muxVMQ">
                                <Typography level="h1" fontWeight="xl">
                                    In-Context Repository Q&A
                                </Typography>
                                <Typography
                                    fontSize="xl"
                                    textColor="text.secondary"
                                    lineHeight="lg"
                                >
                                    Select any text, and Devgen will search the
                                    current GitHub repository to generate a
                                    tailored explanation. Devgen can be used for
                                    the following purposes:
                                </Typography>
                                <List marker="disc">
                                    <ListItem>
                                        <Typography
                                            fontSize="xl"
                                            level="title-lg"
                                        >
                                            Code Explanation
                                        </Typography>
                                        <Typography fontSize="xl">
                                            Select a code snippet to receive a
                                            detailed breakdown of its
                                            functionality, including linked code
                                            references, relevant issues, and
                                            pull requests.
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography
                                            fontSize="xl"
                                            level="title-lg"
                                        >
                                            Usage Example Generation
                                        </Typography>
                                        <Typography fontSize="xl">
                                            Devgen crafts personalized usage
                                            examples to match your specific
                                            requirement
                                        </Typography>
                                    </ListItem>
                                </List>
                            </TwoSidedLayout>
                            <TwoSidedLayout video="https://www.youtube.com/watch?v=mkFi7muxVMQ">
                                <Typography level="h1" fontWeight="xl" sx={{}}>
                                    In-Context Issue Solving
                                </Typography>
                                <Typography
                                    fontSize="lg"
                                    textColor="text.secondary"
                                    lineHeight="lg"
                                >
                                    Submit your issue to Devgen, and it will
                                    automatically search the current GitHub
                                    repository to provide a tailored solution.
                                    Devgen's approach involves two key steps:
                                </Typography>
                                <List marker="disc">
                                    <ListItem>
                                        <Typography
                                            fontSize="xl"
                                            level="title-lg"
                                        >
                                            Issue Plan Generation
                                        </Typography>
                                        <Typography fontSize="md">
                                            Devgen breaks down the problem and
                                            creates a detailed, step-by-step
                                            plan to address the issue.
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography
                                            fontSize="xl"
                                            level="title-lg"
                                        >
                                            Code Change Generation
                                        </Typography>
                                        <Typography fontSize="md">
                                            Code Modification Based on the
                                            generated plan, Devgen produces
                                            precise code changes necessary to
                                            resolve the issue
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
    )
}
