import ReactPlayer from 'react-player'
import React, { useState, useEffect, useRef } from 'react'
import { CirclePlay } from 'lucide-react'
import { AspectRatio, Card } from '@mui/joy'

type PlayerProps = {
    url: string
    light?: string
}

export default function Player(props: PlayerProps) {
    const { url, light } = props
    const player = useRef(null)
    const [playing, setPlaying] = useState(false)
    return (
        <Card color="neutral" variant="outlined">
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
