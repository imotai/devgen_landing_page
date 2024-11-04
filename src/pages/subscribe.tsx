import * as React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import SubscribePage from '../components/Subscribe'

export default function Connect(): JSX.Element {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout title="subscribe" description="subscribe the Devgen Pro">
            <SubscribePage />
        </Layout>
    )
}
