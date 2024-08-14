import React from 'react'
import { useColorScheme } from '@mui/joy/styles'
import ColorModeToggle from '@theme-original/ColorModeToggle'
import type ColorModeToggleType from '@theme/ColorModeToggle'
import type { WrapperProps } from '@docusaurus/types'

type Props = WrapperProps<typeof ColorModeToggleType>

export default function ColorModeToggleWrapper(props: Props): JSX.Element {
    const { setMode } = useColorScheme()
    const { value } = props
    React.useEffect(() => {
        setMode(value)
    }, [value])
    return (
        <>
            <ColorModeToggle {...props} />
        </>
    )
}
