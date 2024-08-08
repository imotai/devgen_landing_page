import * as React from 'react'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Stack from '@mui/joy/Stack'
import { useAsyncFn } from 'react-use'
import AspectRatio from '@mui/joy/AspectRatio'
import HeaderMenu from './HeaderMenu'
import Button from '@mui/joy/Button'
import { FaChrome } from 'react-icons/fa'
import { FaPlayCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import ReactPlayer from 'react-player'

export default function LandingPage() {
    const [playVideo, setPlayVideo] = React.useState<boolean>(false)
    const [player, setPlayer] = React.useState<ReactPlayer | null>(null)
    const navigate = useNavigate()
    return (
        <>
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
                            spacing={1}
                            sx={{ mx: 'auto', mt: 10 }}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            <Typography
                                level="h1"
                                fontWeight="xl"
                                fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
                            >
                                Devgen:The AI assistant
                            </Typography>
                            <Typewriter
                                options={{
                                    strings: [
                                        'can read Github repository for you',
                                        'can draft code changes for you',
                                        'can write issues for you',
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 120,
                                    deleteSpeed: 10,
                                }}
                            />
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
                            </Stack>
                            <AspectRatio
                                ratio="16/9"
                                sx={(theme) => ({
                                    width: { xs: '100%', md: '100%' },
                                })}
                                variant="plain"
                            >
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=yf7_ayfqTCU"
                                    playing={playVideo}
                                    width="100%"
                                    height="100%"
                                    light="./first_look.png"
                                    onClickPreview={() => setPlayVideo(true)}
                                    ref={(player) => setPlayer(player)}
                                    onEnded={() => {
                                        setPlayVideo(false)
                                        if (player) {
                                            player.showPreview()
                                        }
                                    }}
                                />
                            </AspectRatio>
                        </Stack>
                        <Stack
                            direction="column"
                            spacing={1}
                            sx={{ mx: 'auto', mt: 10 }}
                        ></Stack>
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
