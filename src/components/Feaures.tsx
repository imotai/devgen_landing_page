import * as React from 'react'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Stack from '@mui/joy/Stack'
import { AspectRatio, Card, Grid, List, ListItem, Sheet } from '@mui/joy'
import {
    MessageCircleQuestion,
    CircleDot,
    GitPullRequestArrow,
    Code,
} from 'lucide-react'

export default function FeaturesPage() {
    return (
        <>
            <Stack
                direction="column"
                spacing={2}
                sx={{
                    mt: 5,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography textAlign={'center'} level="h1">
                    Devgen at a Glance
                </Typography>
                <Grid
                    container
                    spacing={2}
                    sx={(theme) => ({
                        width: { sx: '100%', md: '60%', lg: '60%' },
                        mx: 'auto',
                        alignItems: "stretch",
                    })}
                >
                    <Grid xs={12} sm={12} md={6}>
                        <Sheet
                            variant="outlined"
                            sx={{ p: 2, borderRadius: 'md' }}
                        >
                            <MessageCircleQuestion size={60} />
                            <Typography
                                level="h3"
                                sx={{ mb: 2 }}
                                color="primary"
                            >
                                Ask Question
                            </Typography>
                            <Typography level="body-lg">
                                Get fast answers to straightforward questions
                                about the codebase. Devgen searches the codebase
                                to deliver precise responses instantly.
                            </Typography>
                        </Sheet>
                    </Grid>

                    <Grid xs={12} sm={12} md={6}>
                        <Sheet
                            variant="outlined"
                            sx={{ p: 2, borderRadius: 'md' }}
                        >
                            <CircleDot size={60} />
                            <Typography
                                level="h3"
                                sx={{ mb: 2 }}
                                color="primary"
                            >
                                Chat with Issue
                            </Typography>
                            <Typography level="body-lg">
                                Effortlessly bring GitHub issues into your chat!
                                Simply right-click on any issue page, choose
                                "Add to Chat," and the issue is instantly set up
                                for discussion.
                            </Typography>
                        </Sheet>
                    </Grid>

                    <Grid xs={12} sm={12} md={6}>
                        <Sheet
                            variant="outlined"
                            sx={{ p: 2, borderRadius: 'md' }}
                        >
                            <GitPullRequestArrow size={60} />
                            <Typography
                                level="h3"
                                sx={{ mb: 2 }}
                                color="primary"
                            >
                                Chat with Pull Request
                            </Typography>
                            <Typography level="body-lg">
                                Need to chat about a pull request? Right-click
                                on any GitHub pull request page, select "Add to
                                Chat", and add it to the conversation.
                            </Typography>
                        </Sheet>
                    </Grid>
                    <Grid xs={12} sm={12} md={6}>
                        <Sheet
                            variant="outlined"
                            sx={{ p: 2, borderRadius: 'md' }}
                        >
                            <Code size={60} />
                            <Typography
                                level="h3"
                                sx={{ mb: 2 }}
                                color="primary"
                            >
                                Chat with Code File
                            </Typography>
                            <Typography level="body-lg">
                                To discuss specific files, right-click on any
                                GitHub file page, choose "Add to Chat", and dive
                                into file-specific details together.
                            </Typography>
                        </Sheet>
                    </Grid>
                </Grid>
            </Stack>
        </>
    )
}
