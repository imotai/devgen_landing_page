import * as React from 'react'
import AspectRatio from '@mui/joy/AspectRatio'
import Box from '@mui/joy/Box'
import ReactPlayer from 'react-player'

export default function TwoSidedLayout({
    children,
    video,
}: React.PropsWithChildren<{ video: string }>) {
    return (
        <Box
            sx={(theme) => ({
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                [theme.breakpoints.up('md')]: {
                    flexDirection: 'row',
                    gap: 6,
                },
                p: 2,
            })}
        >
            <Box
                sx={(theme) => ({
                    display: 'flex',
                    flexDirection: 'column',
                    width: { xs: '100%', md: '50%' },
                    mx: 'auto',
                    gap: 1,
                })}
            >
                {children}
            </Box>
            <AspectRatio
                ratio="4/3"
                variant="plain"
                sx={(theme) => ({
                    alignSelf: 'stretch',
                    width: { xs: '100%', md: '50%' },
                    flexBasis: '50%',
                })}
            >
                <ReactPlayer
                    url={video}
                    playing={false}
                    width="100%"
                    height="100%"
                    controls={true}
                />
            </AspectRatio>
        </Box>
    )
}
