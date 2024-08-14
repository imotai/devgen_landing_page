import * as React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import PricingPage from '../components/Pricing'

export default function Pricing(): JSX.Element {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout
            title="pricing"
            description="introduce the pricing of devgen ai assistant"
        >
            <PricingPage />
        </Layout>
    )
}
