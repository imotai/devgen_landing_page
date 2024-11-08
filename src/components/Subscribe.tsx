import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Stack from '@mui/joy/Stack'
import CircularProgress from '@mui/joy/CircularProgress'
export default function SubscribePage() {
    return (
        <>
            <Box
                sx={(theme) => ({
                    width: '100%',
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
                                    Confirm the subscription ...
                                </Typography>
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
