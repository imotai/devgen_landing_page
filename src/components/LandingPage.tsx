import * as React from 'react'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Stack from '@mui/joy/Stack'
import { useAsyncFn } from 'react-use'

import { FaPlayCircle } from "react-icons/fa"
import AspectRatio from '@mui/joy/AspectRatio'
import HeaderMenu from './HeaderMenu'
import Button from '@mui/joy/Button'
import { FaChrome } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import { Chip, IconButton, Sheet } from '@mui/joy'
import FooterMenu from './Footer'
import { GoLinkExternal } from "react-icons/go"


export default function LandingPage() {
    const navigate = useNavigate()
    const player = React.useRef(null)
    const [playing, setPlaying] = React.useState(false)
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
                                textAlign={'center'}
                                fontWeight="xl"
                                fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
                            >
                                Devgen:The AI assistant for Github
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
                                textAlign={'center'}
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
                                    endDecorator={
                                        <GoLinkExternal/>
                                    }
                                >
                                    Add to Chrome
                                </Button>
                              <Button
                                    variant="outlined"
                                    color="neutral"
                                    size="lg"
                                    startDecorator={<FaPlayCircle/>}
                                    onClick={() => {
                                        setPlaying(true)
                                    }}
                                >
                                    Watch Video
                                </Button>
                            </Stack>
                            <AspectRatio
                                ratio="16/10"
                                sx={(theme) => ({
                                    width: { xs: '100%', md: '70%' },
                                })}
                                variant="plain"
                            >
                                
                                {playing?(
        <video
          ref={player}
          muted
          autoPlay
          loop
          controls
          >
            <source
              src="https://video.devgen.xyz/devgen.mp4"
              type="video/mp4"
            />
          </video>

                                ):(
                <Sheet sx={{
                    backgroundImage: 'url(./first_look.png)',
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'cover',
                    backgroundColor: 'transparent',
                }}>
                    <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={2}
>
    <Chip variant="outlined"   onClick={() => setPlaying(true)}
    >
    <Typography level='h2'
      startDecorator={<FaPlayCircle/>}>
      See Devgen in action
      </Typography>
    </Chip>
</Stack>
                    
                </Sheet>
                    
                    )}
        
 </AspectRatio>
                        </Stack>
                        <Stack
                            direction="column"
                            spacing={1}
                            sx={{ mx: 'auto', mt: 10 }}
                        ></Stack>
                    </Box>
                    <Box component="footer" sx={{ py: 3 }}>
                        <FooterMenu/>
                        <Typography level="body-xs" textAlign="center">
                            ©devgen {new Date().getFullYear()}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
