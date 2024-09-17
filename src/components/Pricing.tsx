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

export default function PricingPage() {
    return (
        <>
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
                            <Typography level="h2">Free Plan</Typography>
                            <Typography level="title-lg">
                                Full feature access for Open Source Repository
                            </Typography>
                            <Divider inset="none" />
                            <List size="sm">
                                <ListItem>
                                    <ListItemDecorator>
                                        <CheckCircle />
                                    </ListItemDecorator>
                                    <Typography level="body-sm">
                                       Repository Q&A
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemDecorator>
                                        <CheckCircle />
                                    </ListItemDecorator>
                                    <Typography level="body-sm">
                                        Draft Pull Request
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemDecorator>
                                        <CheckCircle />
                                    </ListItemDecorator>
                                    <Typography level="body-sm">
                                        5 Update Index Requests
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemDecorator>
                                        <CheckCircle />
                                    </ListItemDecorator>
                                    <Typography level="body-sm">
                                        Multi Model Providers Support
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
                                            month
                                        </Typography>
                                    }
                                >
                                    0
                                </Typography>
                                
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid xs={12} sm={12} md={4}>
                        <Card size="lg" color="primary" variant="soft">
                            <Typography level="h2">Pro Plan</Typography>
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
                                       Unlimited Repository Q&A
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemDecorator>
                                        <CheckCircle />
                                    </ListItemDecorator>
                                    <Typography level="body-sm">
                                        Unlimited Draft Pull Request
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemDecorator>
                                        <CheckCircle />
                                    </ListItemDecorator>
                                    <Typography level="body-sm">
                                        50 Update Index Requests
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemDecorator>
                                        <CheckCircle />
                                    </ListItemDecorator>
                                    <Typography level="body-sm">
                                        Private Repositories Support
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
                                            month
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
            </Box>
        </>
    )
}
