import * as React from 'react'
import Typography from '@mui/joy/Typography'
import { Avatar } from '@mui/joy'
import { useColorScheme } from '@mui/joy/styles'
import Link from '@mui/joy/Link'

export default function DevgenLogo() {
    const { mode } = useColorScheme()
    return (
        <>
            <Link href="/">
                <Typography
                    level="h4"
                    startDecorator={
                        <Avatar
                            src={
                                mode === 'light' ? './48_black.png' : './48.png'
                            }
                        ></Avatar>
                    }
                ></Typography>
            </Link>
        </>
    )
}
