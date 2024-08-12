

import * as React from 'react'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Stack from '@mui/joy/Stack'
import HeaderMenu from './HeaderMenu'
import MarkdownPreview from '@uiw/react-markdown-preview'

import FooterMenu from './Footer'


export default function PrivacyPage() {

    const content = `

## Privacy Policy for devgen


We at devgen (the "Company", "we", or "us") are committed to safeguarding the privacy of our customers. This Privacy Policy outlines how your Personal Information or Usage Information will be collected, used, shared, stored, protected or disclosed by our service. This Privacy Policy applies to the website devgen.xyz and any related services provided by the Company (collectively referred to as "Services"). By using our Services, you agree to be bound by the terms of this Privacy Policy.

## Information We Collect

We collect information about you for the following general purposes:
- To manage your account and facilitate your access to and use of our Services
- To communicate with you and provide information about our Services
- To enable us to publish your reviews, forum posts, and other content
- To respond to your questions and comments
- To prevent potentially prohibited or illegal activities and enforce our Terms of Use

### Collecting and Using Your Personal Data

When you visit or use our Services, we collect information about your computer or mobile device, including:

Technical Information:
- IP address
- Mobile device ID
- Device type
- Web browser
- Operating system

Content Characteristics:
We collect information from the inputs, file uploads, and feedback ("Content") you provide when using our Services.

Cookies:
We use cookies to identify your computer or mobile device. You may be able to change your browser preferences to limit or prevent cookie acceptance.

### Personal Data:
We may ask you to provide personally identifiable information, including:
- Email address
- First name and last name
- Usage and content generation data

## How We Use Your Information

The Company may use Personal Data for purposes including:
- Providing and maintaining our Service
- Managing your account
- Contacting you about updates or communications related to the Service
- Providing news and offers about our products and services
- Managing your requests
- Delivering targeted advertising
- Data analysis and improving our Service

## Sharing Your Information

We do not sell your Personal Information. However, we may share your information with:
- Third-party vendors providing services on our behalf
- Companies within our corporate family
- Business partners
- Other users (for certain public profile information)
- In the event of a business transfer or acquisition
- Government bodies when legally required

### Data Retention

We retain your Personal Data only as long as necessary for the purposes outlined in this Privacy Policy or to comply with legal obligations.

### Data Protection

We implement appropriate administrative, technical, and security procedures to protect your information. However, no method of transmission over the Internet is 100% secure.

### International Data Transfers

By using our Services, you consent to your information being transferred to and processed in the United States.

### Email Marketing

We may use your Personal Data for email marketing. You can opt-out by following the unsubscribe instructions in our emails.

### Payments

We use third-party payment processors. We do not store your payment card details.

## GDPR and CCPA Compliance

We comply with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). Residents of the EU and California have specific rights regarding their personal information, as outlined in the full privacy policy.

## Changes to this Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.

## Contact Us

If you have any questions about this Privacy Policy, you can contact us at:
Email: contact@devgen.xyz
Website: devgen.xyz

`
    return (
        <Box
        sx={(theme) => ({
            width: { xs: '100%', md: '60vw' },
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
                    <HeaderMenu />
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
                                mt: 10,
                                mb: 10,
                                textAlign: 'center',
                            }}
                        >
                            <Typography
                                level="h1"
                                fontWeight="xl"
                                fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
                            >
                                <Typography>Privacy Policy</Typography>
                            </Typography>
                        </Stack>
                        <MarkdownPreview source={content}  style={{
                            backgroundColor: 'transparent',
                            textWrap: 'wrap',
                        }} />
                    </Box>
                    <Box component="footer" sx={{ py: 3 }}>
                        <FooterMenu/>
                        <Typography level="body-xs" textAlign="center">
                            ©devgen {new Date().getFullYear()}
                        </Typography>
                    </Box>
            </Box>
        </Box>
    )

}
