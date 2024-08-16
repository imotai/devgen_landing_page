import * as React from 'react'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Stack from '@mui/joy/Stack'
import { AspectRatio, List, ListItem, Sheet } from '@mui/joy'
import { themes } from 'prism-react-renderer'

export default function FeaturesPage() {
    return (
        <>
            <Stack
                direction="column"
                spacing={10}
                sx={{ mx: 'auto', mt: 10, width: '100%', height: '100%', mb: 10 }} 
            >
                <Typography level="h1" textAlign={'center'} fontWeight="xl">
                   Features of Devgen
                </Typography>

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
                            width: { xs: '100%', md: '30%', lg: '30%' },
                            bgcolor: 'transparent',
                        })}
                        variant="plain"
                    >
                        <Stack
                            spacing={2}
                            p={2}
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            sx={{
                                height: '100%',
                            }}
                        >
                            <Box>

                            <Typography level="h1" textAlign={'center'}>
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
                        </Stack>
                    </Sheet>
                    <Stack
                        sx={(themes) => ({
                            width: { xs: '100%', md: '20%', lg: '20%' },
                            mx: 'auto',
                        })}
                    >
                        <AspectRatio
                            variant="outlined"
                            ratio="1/1"
                            sx={{
                                width: '100%',
                                bgcolor: 'transparent',
                                borderRadius: 'xs',
                            }}
                        >
                            <img src="./img/q_a.png" alt="Repository Q&A" />
                        </AspectRatio>
                    </Stack>
                </Stack>
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
                            width: { xs: '100%', md: '30%', lg: '30%' },
                            bgcolor: 'transparent',
                        })}
                    >
                        <Stack
                            direction="column"
                            spacing={2}
                            p={2}
                            justifyContent="center"
                            alignItems="center"
                            sx={{
                                height:'100%',
                            }}
                        >
                            <Box>
                            <Typography level="h1" textAlign={'center'}>
                                Draft code changes
                            </Typography>
                            <Typography level="body-md"></Typography>
                            <Typography
                                fontSize="xl"
                                textColor="text.secondary"
                                lineHeight="lg"
                            >
                                Enhance your github development process
                            </Typography>
                            <List marker="disc">
                                <ListItem>
                                    <Typography fontSize="xl">
                                        Rapidly identify issue context
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography fontSize="xl">
                                        Propose targeted modifications
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography fontSize="xl">
                                        Accelerate code review and collaboration
                                    </Typography>
                                </ListItem>
                            </List>
</Box>
                        </Stack>
                    </Sheet>
                    <Stack
                        sx={(themes) => ({
                            width: { xs: '100%', md: '20%', lg: '20%' },
                        })}
                    >
                        <AspectRatio
                            variant="outlined"
                            ratio="1/1"
                            sx={{
                                width: '100%',
                                bgcolor: 'transparent',
                                borderRadius: 'md',
                            }}
                        >
                            <img
                                src="./img/draft_code_changes.png"
                                alt="Repository Q&A"
                            />
                        </AspectRatio>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}
