import * as React from 'react'
import Stack from '@mui/joy/Stack'
import Typography from '@mui/joy/Typography'
import Button from '@mui/joy/Button'
import { FaPlayCircle } from 'react-icons/fa'
import { Card, Chip, Link, Sheet } from '@mui/joy'
import AspectRatio from '@mui/joy/AspectRatio'
import {
    CircleChevronRight,
    Chrome,
    SquareArrowOutUpRight,
    Car,
} from 'lucide-react'

export default function HeroBanner() {
    const player = React.useRef(null)
    const [playing, setPlaying] = React.useState(false)
    return (
        <Stack
            sx={(theme) => ({
                flexDirection: 'column',
                width: '100%',
                pt: 10,
            })}
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                direction="column"
                sx={(theme) => ({
                    width: '100%',
                })}
                justifyContent="flex-end"
            >
                <Typography
                    textAlign={'center'}
                    sx={{
                        fontWeight: 'xl',
                        fontSize: 'clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)',
                        fontFamily: 'Space Grotesk, sans-serif',
                    }}
                >
                    Reading large codebases{' '}
                    <Typography color="primary">made</Typography> simple
                </Typography>
                <Typography
                    fontSize="lg"
                    textColor="text.secondary"
                    lineHeight="lg"
                    textAlign={'center'}
                >
                    Devgen is a codebase research assistant that helps you read
                    large codebases with ease.
                </Typography>
                <Stack
                    direction="row"
                    justifyContent="center"
                    spacing={2}
                    sx={{ mx: 'auto', p: 2, alignItems: 'stretch', mt: 2 }}
                >
                    <Button
                        color="primary"
                        variant="solid"
                        size="lg"
                        onClick={() => {
                            location.href = '/docs/getting_started'
                        }}
                        endDecorator={<CircleChevronRight />}
                    >
                        Getting Started
                    </Button>
                    <Button
                        variant="outlined"
                        color="neutral"
                        size="lg"
                        startDecorator={<Chrome />}
                        onClick={() => {
                            window.open(
                                'https://chromewebstore.google.com/detail/devgen-the-ai-assistant-f/iglkjhingcdlfanjlokiodgfcllmcfoc?authuser=0&hl=en',
                                '_blank'
                            )
                        }}
                        endDecorator={<SquareArrowOutUpRight />}
                    >
                        Add to Chrome
                    </Button>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="center"
                >
                    <Link href="/docs/changelogs/v1.1.8">
                    <Typography level='body-sm'>
                    🎉 v1.1.8 released
                    </Typography>
                    </Link>
                </Stack>
            </Stack>
            <Stack
                sx={(theme) => ({
                    width: { xs: '100%', md: '60%', lg: '60%' },
                    mt: 5,
                    p: 1,
                })}
                justifyContent="flex-start"
            >
                <Card color="neutral" variant="outlined">
                    <AspectRatio
                        ratio="16/10"
                        sx={{
                            width: '100%',
                            borderRadius: 18,
                        }}
                    >
                        <img src="/img/overview-min.jpg" />
                    </AspectRatio>
                </Card>
            </Stack>
        </Stack>
    )
}
