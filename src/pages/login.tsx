import * as React from 'react'
import Layout from '@theme/Layout'
import { Stack } from '@mui/joy'
import LoginPage from '../components/Login'

export default function Home(): JSX.Element {
    return (
        <Layout title="login" description="login the devgen">
            <Stack direction="column" sx={{}}>
                <LoginPage />
            </Stack>
        </Layout>
    )
}
