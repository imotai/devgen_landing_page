import React from 'react'
import { CssVarsProvider, extendTheme } from '@mui/joy/styles'
import { StyledEngineProvider } from '@mui/joy/styles'
import CssBaseline from '@mui/joy/CssBaseline'
import Box from '@mui/joy/Box'
export default function Root({ children }) {
    return (
        <StyledEngineProvider injectFirst>
            <CssVarsProvider disableTransitionOnChange>
                <CssBaseline />
                {children}
            </CssVarsProvider>
        </StyledEngineProvider>
    )
}
