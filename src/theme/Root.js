import React from 'react'
import { CssVarsProvider, extendTheme } from '@mui/joy/styles'
import { StyledEngineProvider } from '@mui/joy/styles'
import CssBaseline from '@mui/joy/CssBaseline'
export default function Root({ children }) {
    return (
        <StyledEngineProvider injectFirst>
            <CssVarsProvider disableTransitionOnChange defaultMode='dark'>
                <CssBaseline />
                {children}
            </CssVarsProvider>
        </StyledEngineProvider>
    )
}
