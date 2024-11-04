import * as React from 'react'
import Stack from '@mui/joy/Stack'
import Typography from '@mui/joy/Typography'
import Typewriter from 'typewriter-effect'
import Button from '@mui/joy/Button'
import { GoLinkExternal } from 'react-icons/go'
import { FaChrome } from 'react-icons/fa'
import { FaPlayCircle } from 'react-icons/fa'
import { Chip, IconButton, Sheet } from '@mui/joy'
import AspectRatio from '@mui/joy/AspectRatio'
import { VscDebugStart } from "react-icons/vsc"


export default function HeroBanner() {
    const player = React.useRef(null)
    const [playing, setPlaying] = React.useState(false)
    return (
        <Stack
            sx={(theme) => ({
                flexDirection: "column",
                width: '100%',
                pt: 15,
            })}
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                direction="column"
                sx={(theme) => ({
                    width: "100%"
                })}
                justifyContent="flex-end"
            >
                <Typography
                    textAlign={'center'}
                    fontWeight="xl"
                    fontSize="60px"
                    sx={{
                        fontFamily: 'Space Grotesk, sans-serif',
                    }}
                >
                    Reading large codebases made easy
                </Typography>
                <Typography
                    fontSize="lg"
                    textColor="text.secondary"
                    lineHeight="lg"
                    textAlign={'center'}
                >
                    Devgen is a codebase research assistant that helps you read large codebases with ease.
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
                        startDecorator={<VscDebugStart />}
                        onClick={() => {
                            location.href = '/docs/getting_started'
                        }}
                    >
                        Getting Started
                    </Button>
                    <Button
                        variant="outlined"
                        color="neutral"
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
                   
                </Stack>
            </Stack>
            <Stack
                sx={(theme) => ({
                    width: { xs: '100%', md: '60%', lg: '50%' },
                    mt:5
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
                                src="https://xu16qi2h34ro0kh7.public.blob.vercel-storage.com/devgen-ECgUhUVtApSZBw97EwGnzm26Z6NyK1.mp4"
                                type="video/mp4"
                            />
                        </video>
                    ) : (
                        <Sheet
                            sx={{
                                backgroundImage:
                                    'url(./img/devgen_first_look.png)',
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
                                    size='lg'
                                >
                                    <Typography
                                        level="title-lg"
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
