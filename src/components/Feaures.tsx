import * as React from 'react'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Stack from '@mui/joy/Stack'
import { AspectRatio, List, ListItem, Sheet } from '@mui/joy'

export default function FeaturesPage() {
    return (
        <>
            <Stack
                direction="column"
                spacing={10}
                sx={{
                    mx: 'auto',
                    mt: 10,
                    width: '100%',
                    height: '100%',
                    mb: 10,
                }}
            >
                <Stack
                    spacing={2}
                    justifyContent="center"
                    sx={(theme) => ({
                        flexDirection: { xs: 'column', md: 'row', lg: 'row' },
                        width: '100%',
                    })}
                >
                    <Sheet
                        sx={(themes) => ({
                            width: { xs: '100%' },
                            bgcolor: 'transparent',
                        })}
                        variant="plain"
                    >
                        <Stack
                            spacing={2}
                            p={2}
                            sx={(theme) => ({
                                flexDirection: {
                                    xs: 'column',
                                    md: 'row',
                                    lg: 'row',
                                },
                                width: '100%',
                                justifyContent: 'space-evenly',
                                alignItems: 'baseline',
                            })}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Box>
                                <Typography
                                    startDecorator={
                                        <img src="img/chat_qa.png" />
                                    }
                                    level="h1"
                                    textAlign={'center'}
                                >
                                    Repository Q&A
                                </Typography>

                                <Typography level="body-md"></Typography>
                                <Typography
                                    fontSize="xl"
                                    textColor="text.secondary"
                                    lineHeight="lg"
                                >
                                    Get expert insights from your codebase in
                                    seconds, with
                                </Typography>
                                <List marker="disc">
                                    <ListItem>
                                        <Typography fontSize="xl">
                                            Seamlessly linked references to code
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography fontSize="xl">
                                            Instant access to relevant issues
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography fontSize="xl">
                                            Quick navigation to associated pull
                                            requests
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Box>
                            <Box>
                                <Typography
                                    level="h1"
                                    textAlign={'center'}
                                    startDecorator={
                                        <img src="img/dev_edit_icon.png"></img>
                                    }
                                >
                                    Draft Pull Request
                                </Typography>
                                <Typography level="body-md"></Typography>
                                <Typography
                                    fontSize="xl"
                                    textColor="text.secondary"
                                    lineHeight="lg"
                                >
                                    Rapidly Launch GitHub Issues
                                </Typography>
                                <List marker="disc">
                                    <ListItem>
                                        <Typography fontSize="xl">
                                            Instantly initiate new issues with preliminary code changes
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography fontSize="xl">
                                            Enable early feedback and collaborative refinement
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography fontSize="xl">
                                            Accelerate the transition from idea to implementation"
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Box>
                        </Stack>
                    </Sheet>
                </Stack>
            </Stack>
        </>
    )
}
