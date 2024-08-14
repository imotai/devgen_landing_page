import * as React from 'react'
import Layout from '@theme/Layout'
import Box from '@mui/joy/Box'
import Stack from '@mui/joy/Stack'
import Typography from '@mui/joy/Typography'
import Typewriter from 'typewriter-effect'
import Button from '@mui/joy/Button'
import { GoLinkExternal } from 'react-icons/go'
import { FaChrome } from 'react-icons/fa'
import { FaPlayCircle } from 'react-icons/fa'
import { Chip, IconButton, Sheet } from '@mui/joy'
import AspectRatio from '@mui/joy/AspectRatio'

export default function HeroBanner() {
    const player = React.useRef(null)
    const [playing, setPlaying] = React.useState(false)
    return (
        <Stack
            sx={(theme) => ({
                flexDirection: { xs: 'column', md: 'row', lg: 'row' },
                width: '100%',
                pt: 10,
            })}
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                direction="column"
                sx={(theme) => ({
                    width: { xs: '100%', md: '50%', lg: '40%' },
                })}
                justifyContent="flex-end"
            >
                <Typography
                    level="h1"
                    textAlign={'center'}
                    fontWeight="xl"
                    fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
                >
                    Devgen:The Github AI Assistant for You
                </Typography>
                <Typewriter
                    options={{
                        strings: [
                            'can read Github repository for you',
                            'can draft code changes for you',
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
                    textAlign={'center'}
                >
                    Devgen is a Chrome extension that lets you chat with your
                    Github repository side by side
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
                            window.open(
                                'https://chromewebstore.google.com/detail/devgen-the-ai-assistant-f/iglkjhingcdlfanjlokiodgfcllmcfoc?authuser=0&hl=en',
                                '_blank'
                            )
                        }}
                        endDecorator={<GoLinkExternal />}
                    >
                        Add to Chrome
                    </Button>
                    <Button
                        variant="outlined"
                        color="neutral"
                        size="lg"
                        startDecorator={<FaPlayCircle />}
                        onClick={() => {
                            setPlaying(true)
                        }}
                    >
                        Watch Video
                    </Button>
                </Stack>
            </Stack>
            <Stack
                sx={(theme) => ({
                    width: { xs: '100%', md: '50%', lg: '40%' },
                })}
                justifyContent="flex-start"
            >
                <AspectRatio
                    ratio="16/10"
                    sx={{
                        width: '100%',
                    }}
                    variant="plain"
                >
                    {playing ? (
                        <video ref={player} muted autoPlay loop>
                            <source
                                src="https://video.devgen.xyz/devgen.mp4"
                                type="video/mp4"
                            />
                        </video>
                    ) : (
                        <Sheet
                            sx={{
                                backgroundImage: 'url(./img/first_look.png)',
                                width: '100%',
                                height: '100%',
                                backgroundSize: 'cover',
                                backgroundColor: 'transparent',
                            }}
                        >
                            <Stack
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}
                            >
                                <Chip
                                    variant="outlined"
                                    onClick={() => setPlaying(true)}
                                >
                                    <Typography
                                        level="h2"
                                        startDecorator={<FaPlayCircle />}
                                    >
                                        See Devgen in action
                                    </Typography>
                                </Chip>
                            </Stack>
                        </Sheet>
                    )}
                </AspectRatio>
            </Stack>
        </Stack>
    )
}
