import * as React from 'react'
import Box from '@mui/joy/Box'
import Link from '@mui/joy/Link'
import Card from '@mui/joy/Card'
import Typography from '@mui/joy/Typography'
import Divider from '@mui/joy/Divider'
import List from '@mui/joy/List'
import ListItem from '@mui/joy/ListItem'
import ListItemDecorator from '@mui/joy/ListItemDecorator'
import CardActions from '@mui/joy/CardActions'
import CheckCircle from '@mui/icons-material/Check'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import Grid from '@mui/joy/Grid'
import Button from '@mui/joy/Button'
import Stack from '@mui/joy/Stack'
import { GoLinkExternal } from 'react-icons/go'
import { FaChrome } from 'react-icons/fa'
import Accordion from '@mui/joy/Accordion'
import AccordionDetails from '@mui/joy/AccordionDetails'
import AccordionSummary from '@mui/joy/AccordionSummary'
import AccordionGroup from '@mui/joy/AccordionGroup'
import { Chip } from '@mui/joy'

export default function PricingPage() {
    return (
        <>
            <Box
                component="main"
                sx={{
                    width: '100%',
                    p:1
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
                        <Typography>Pricing</Typography>
                    </Typography>
                    <Typography level="h4">
                        Choose the plan that works best for you.
                    </Typography>
                </Stack>

                <Grid
                    container
                    spacing={2}
                    alignItems="flex-end"
                    sx={(theme) => ({
                        width: { sx: '100%', md: '80%', lg: '80%' },
                        mx: 'auto',
                    })}
                >
                    <Grid xs={12} sm={12} md={4}>
                        <Card size="lg" variant="soft" color="neutral">
                            <Typography level="h2">Free</Typography>
                            <Typography level="title-lg">
                                Try Devgen out for free
                            </Typography>
                            <Divider inset="none" />
                            <List size="sm">
                                <ListItem>
                                    <ListItemDecorator>
                                        <CheckCircle />
                                    </ListItemDecorator>
                                    <Typography level="body-sm">
                                        200 Fast Chat Requests
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemDecorator>
                                        <CheckCircle />
                                    </ListItemDecorator>
                                    <Typography level="body-sm">
                                        2 New Index Requests
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemDecorator>
                                        <CheckCircle />
                                    </ListItemDecorator>
                                    <Typography level="body-sm">
                                        Unlimited Update Index Requests
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemDecorator>
                                        <CheckCircle />
                                    </ListItemDecorator>
                                    <Typography level="body-sm">
                                        Up to 4k tokens per request
                                    </Typography>
                                </ListItem>
                            </List>
                            <Divider inset="none" />
                            <CardActions>
                                <Typography
                                    level="h1"
                                    sx={{ mr: 'auto' }}
                                    startDecorator={
                                        <Typography fontSize="h1">$</Typography>
                                    }
                                    endDecorator={
                                        <Typography
                                            fontSize="sm"
                                            textColor="text.tertiary"
                                        >
                                            / month
                                        </Typography>
                                    }
                                >
                                    0
                                </Typography>
                                <Button
                        variant="outlined"
                        color="neutral"
                        startDecorator={<FaChrome />}
                        onClick={() => {
                            window.open(
                                'https://chromewebstore.google.com/detail/devgen-the-ai-assistant-f/iglkjhingcdlfanjlokiodgfcllmcfoc?authuser=0&hl=en',
                                '_blank'
                            )
                        }}
                        endDecorator={<GoLinkExternal />}
                    >
                        Download
                    </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid xs={12} sm={12} md={4}>
                        <Card size="lg" color="primary" variant="soft">
                             <Chip size="sm" color="primary"  variant="outlined">
                                MOST POPULAR
                            </Chip>
                            <Typography level="h2">Pro</Typography>
                            <Typography level="title-lg">
                                Ideal for daily work
                            </Typography>
                            <Divider inset="none" />
                            <List size="sm">
                                <ListItem>
                                    <ListItemDecorator>
                                        <CheckCircle />
                                    </ListItemDecorator>
                                    <Typography level="body-sm">
                                        Unlimited Fast Chat Requests
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemDecorator>
                                        <CheckCircle />
                                    </ListItemDecorator>
                                    <Typography level="body-sm">
                                        100 Advanced Chat Requests
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemDecorator>
                                        <CheckCircle />
                                    </ListItemDecorator>
                                    <Typography level="body-sm">
                                        10 New Index Requests
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemDecorator>
                                        <CheckCircle />
                                    </ListItemDecorator>
                                    <Typography level="body-sm">
                                        Unlimited Update Index Requests
                                    </Typography>
                                </ListItem>
                                 <ListItem>
                                    <ListItemDecorator>
                                        <CheckCircle />
                                    </ListItemDecorator>
                                    <Typography level="body-sm">
                                        Up to 8k tokens per request
                                    </Typography>
                                </ListItem>
                            </List>
                            <Divider inset="none" />
                            <CardActions>
                                <Typography
                                    sx={{ mr: 'auto' }}
                                    level="h1"
                                    startDecorator={
                                        <Typography fontSize="h1">$</Typography>
                                    }
                                    endDecorator={
                                        <Typography
                                            fontSize="sm"
                                            textColor="text.tertiary"
                                        >
                                            / month
                                        </Typography>
                                    }
                                >
                                    10
                                </Typography>
                                <Button color="primary" variant="solid">
                                    Get Started
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid xs={12} sm={12} md={4}>
                        <Card size="lg" variant="soft" color="neutral">
                            <Typography level="h2">Enterprise</Typography>
                            <Typography level="title-lg">
                                Customized for your team
                            </Typography>
                            <Divider inset="none" />
                            <List size="sm">
                                <ListItem>
                                    <ListItemDecorator>
                                        <CheckCircle />
                                    </ListItemDecorator>
                                    <Typography level="body-sm">
                                        Self-hosted
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemDecorator>
                                        <CheckCircle />
                                    </ListItemDecorator>
                                    <Typography level="body-sm">
                                        GitLab Integration
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemDecorator>
                                        <CheckCircle />
                                    </ListItemDecorator>
                                    <Typography level="body-sm">
                                        Private Repository
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemDecorator>
                                        <CheckCircle />
                                    </ListItemDecorator>
                                    <Typography level="body-sm">
                                        Model Integration
                                    </Typography>
                                </ListItem>
                            </List>
                            <Divider inset="none" />
                            <CardActions>
                                <Link
                                    endDecorator={<KeyboardArrowRight />}
                                    href="mailto:service@xpie.dev"
                                    target="_blank"
                                >
                                    <Typography level="title-lg">
                                        Contact Us for Pricing
                                    </Typography>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>

                <Stack
                    direction="column"
                    spacing={2}
                    sx={{
                        width: { sx: '100%', md: '80%', lg: '80%' },
                        mx: 'auto',
                        mt: 8,
                        mb: 10,
                    }}
                >
                    <Typography
                        level="h2"
                        fontSize="xl2"
                        sx={{ textAlign: 'center', mb: 4 }}
                    >
                        FAQ
                    </Typography>

                    <AccordionGroup size="lg" variant="soft" sx={{p:1,  width: '100%', borderRadius: 'md' }}>
                        <Accordion>
                            <AccordionSummary>
                                <Typography level="title-lg">
                                    What is the difference between Fast Chat and Advanced Chat?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography level="body-md">
                                    Fast Chat provides quick responses for simple queries, while Advanced Chat offers more comprehensive analysis and can handle complex code understanding tasks.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary>
                                <Typography level="title-lg">
                                    What are Index Requests and how do they work?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography level="body-md">
                                    Index Requests allow you to create a searchable index of your codebase. Once indexed, the Devgen can understand your project's structure, dependencies, and code patterns to provide more accurate and context-aware responses to your questions.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary>
                                <Typography level="title-lg">
                                    Which models are supported?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography level="body-md">
                                    We currently support <Link endDecorator={<GoLinkExternal />} href="https://openai.com/api/" target="_blank">OpenAI</Link> and <Link endDecorator={<GoLinkExternal />} href="https://anthropic.com/api" target="_blank">Anthropic</Link> models.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary>
                                <Typography level="title-lg">
                                    Can I cancel my plan?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography level="body-md">
                                    Yes, you can cancel your plan at any time. Your billing will be adjusted accordingly on your next billing cycle.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary>
                                <Typography level="title-lg">
                                    What kind of support do you offer?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography level="body-md">
                                    We offer support through our <Link endDecorator={<GoLinkExternal />} href="https://github.com/getdevgen/devgen/issues" target="_blank">GitHub Issues</Link> for all plans. Enterprise customers receive priority support and dedicated account management.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </AccordionGroup>
                </Stack>
            </Box>
        </>
    )
}
