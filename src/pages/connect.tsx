import * as React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import ConnectPage from '../components/Connect'

export default function Connect(): JSX.Element {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout
            title="connect"
            description="contect to OpenRouter"
        >
            <ConnectPage/>
        </Layout>
    )
}
