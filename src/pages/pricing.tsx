import * as React from 'react'
import Layout from '@theme/Layout'
import { Stack } from '@mui/joy'
import PricingPage from '../components/Pricing'

export default function Pricing(): JSX.Element {
    return (
        <Layout title="Pricing" description="The Pricing Page for Devgen">
            <Stack direction="column" sx={{}}>
                <PricingPage />
            </Stack>
        </Layout>
    )
}
