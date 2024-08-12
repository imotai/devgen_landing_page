import * as React from 'react'
import Box from '@mui/joy/Box'
import Link from '@mui/joy/Link'
import Typography from '@mui/joy/Typography'
import Stack from '@mui/joy/Stack'
import XCopilotLogo from './XCopilotLogo'
import { ImGithub } from 'react-icons/im'
import { useDevgenContext } from './Context'
import { Chip } from '@mui/joy'
import { GoLinkExternal } from "react-icons/go"

export default function FooterMenu() {
    const { user, openLoginWindow } = useDevgenContext()
    return (
        <>
            <Box
                sx={{
                    gap: 2,
                    display: 'flex',
                    p: 1,
                    justifyContent: 'space-between',
                }}
            >
                <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
                    <XCopilotLogo />
                    <Link href="/privacy">
                        Privacy
                    </Link>
                </Box>
                <Stack direction="row" spacing={1} alignItems="center">
                <Link href="https://github.com/getdevgen/devgen" startDecorator={<ImGithub/>}
                endDecorator={<GoLinkExternal/>}
                    target="_blank"
                >  
                    Github
                 </Link>
                </Stack>
            </Box>
        </>
    )
}
