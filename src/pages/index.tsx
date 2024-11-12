import * as React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HeroBanner from '@site/src/components/Hero'
import FeaturesPage from '@site/src/components/Feaures'
import { Stack } from '@mui/joy'
import PricingPage from '../components/Pricing'

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout title="home" description="introduce the devgen ai assistant">
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{}}
            >
                <HeroBanner />
                <FeaturesPage />
            </Stack>
        </Layout>
    )
}
