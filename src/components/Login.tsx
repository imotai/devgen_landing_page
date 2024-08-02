import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Stack from '@mui/joy/Stack'
import { useDevgenContext } from './Context'
import { base64UrlDecode } from '../utils'
import CircularProgress from '@mui/joy/CircularProgress'
export default function LoginPage() {
    const mounted = useRef(false)
    const { login, loginState } = useDevgenContext()
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true
            const queryString = window.location.search
            const urlParams = new URLSearchParams(queryString)
            const code = urlParams.get('code')
            const state = urlParams.get('state')
            if (code && state) {
                const strState = base64UrlDecode(state)
                const jsonState = JSON.parse(strState)
                if (jsonState.platform === 'site') {
                    login(code, jsonState.provider)
                }
            }
        }
    })
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
                    <Box
                        component="main"
                        sx={{
                            width: '100%',
                        }}
                    >
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={1}
                            sx={{
                                mx: 'auto',
                                mt: 20,
                                mb: 10,
                                textAlign: 'center',
                            }}
                        >
                            <Typography
                                level="h1"
                                fontWeight="xl"
                                fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
                            >
                                <Typography
                                    startDecorator={<CircularProgress />}
                                >
                                    Login Devgen...
                                </Typography>
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
