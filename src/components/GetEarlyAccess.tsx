import * as React from 'react'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Stack from '@mui/joy/Stack'
import { useAsyncFn } from 'react-use'
import HeaderMenu from './HeaderMenu'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import FormHelperText from '@mui/joy/FormHelperText'
import Input from '@mui/joy/Input'
import Button from '@mui/joy/Button'
import { useDevgenContext } from './Context'
import { joinWaitList, Client } from 'devgen-sdk'
import Stepper from '@mui/joy/Stepper';
import Step, { stepClasses } from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

export default function GetEarlyAccessPage() {
    const afterLoginSend = React.useRef(false)
    const { user, client, openLoginWindow } = useDevgenContext()
    const [email, setEmail] = React.useState('')
    const [error, setError] = React.useState('')
    const [message, setMessage] = React.useState('')
    const [sendApplyState, sendApplyFn] = useAsyncFn(
        async (client: Client, email: string) => {
            // validate the email format
            if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                setError('Invalid email format')
                return
            }
            if (user?.login && client) {
                afterLoginSend.current = false
                try {
                    await joinWaitList(client, email)
                    setMessage('You are in the waitlist!')
                } catch (e: any) {
                    setError(e.message)
                }
            } else {
                afterLoginSend.current = true
                openLoginWindow()
            }
        },
        [user, afterLoginSend]
    )
    React.useEffect(() => {
        if (user && client && afterLoginSend.current) {
            sendApplyFn(client, email)
        }
    }, [user])
    return (
        <>
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
                            sx={{ mx: 'auto', mt: 10, textAlign: 'center' }}
                        >
                            <Typography
                                level="h1"
                                fontWeight="xl"
                                fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
                            >
                                Apply for early access
                            </Typography>
                            <Typography
                                fontSize="lg"
                                textColor="text.secondary"
                                lineHeight="lg"
                            >
                                We are currently in private beta. Sign in to get
                                early access.
                            </Typography>
                            <Stack
                                direction="row"
                                justifyContent="center"
                                alignItems="baseline"
                                spacing={2}
                                sx={{ mx: 'auto', p: 2 }}
                            >
                                <form>
                                    <FormControl>
                                        <FormLabel
                                            sx={(theme) => ({
                                                '--FormLabel-color':
                                                    theme.vars.palette.primary
                                                        .plainColor,
                                            })}
                                        ></FormLabel>
                                        <Input
                                            sx={{
                                                '--Input-decoratorChildHeight':
                                                    '45px',
                                            }}
                                            placeholder="Your email"
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(event) =>
                                                setEmail(event.target.value)
                                            }
                                            endDecorator={
                                                <Button
                                                    variant="solid"
                                                    color="primary"
                                                    sx={{
                                                        borderTopLeftRadius: 0,
                                                        borderBottomLeftRadius: 0,
                                                    }}
                                                    loading={
                                                        sendApplyState.loading
                                                    }
                                                    onClick={() => {
                                                        sendApplyFn(
                                                            client,
                                                            email
                                                        )
                                                    }}
                                                >
                                                    Get Early Access
                                                </Button>
                                            }
                                        />
                                        {error && (
                                            <FormHelperText
                                                sx={(theme) => ({
                                                    color: theme.vars.palette
                                                        .danger[400],
                                                })}
                                            >
                                                {error}
                                            </FormHelperText>
                                        )}
                                        {message && (
                                            <FormHelperText
                                                sx={(theme) => ({
                                                    color: theme.vars.palette
                                                        .success[400],
                                                })}
                                            >
                                                {message}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                </form>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box component="footer" sx={{ py: 3 }}>
                        <Typography level="body-xs" textAlign="center">
                            ©devgen {new Date().getFullYear()}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
