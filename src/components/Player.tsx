import ReactPlayer from 'react-player'
import React, { useState, useEffect, useRef } from 'react'
import { CirclePlay } from 'lucide-react'
import { AspectRatio, Card, CircularProgress, Stack } from '@mui/joy'

type PlayerProps = {
    url: string
    light?: string
}

export default function Player(props: PlayerProps) {
    const { url, light } = props
    const player = useRef(null)
    const [playing, setPlaying] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    return (
        <Card color="neutral" variant="outlined">
            {
                isLoading && (
                    <Stack
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            zIndex: 1000
                        }}
                    >
                        <CircularProgress/>
                    </Stack>
                )
            }
            <AspectRatio
                sx={{
                    width: '100%',
                }}
                ratio="4/4"
            >
                <ReactPlayer
                    ref={player}
                    url={url}
                    light={light}
                    playing={playing}
                    onReady={() => {
                        setIsLoading(false)
                    }}
                    onBuffer={() => {
                        setIsLoading(true)
                    }}
                    onBufferEnd={() => {
                        setIsLoading(false)
                    }}
                    width={'100%'}
                    height={'100%'}
                    onEnded={() => {
                        setPlaying(false)
                        player.current.showPreview()
                    }}
                    onClickPreview={() => {
                        setPlaying(true)
                    }}
                    playIcon={<CirclePlay size={64} />}
                />
            </AspectRatio>
        </Card>
    )
}
