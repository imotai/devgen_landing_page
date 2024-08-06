import React, { useState, useEffect, useRef } from 'react'
import { useAsyncFn } from 'react-use'
import { useNavigate, useLocation } from 'react-router-dom'
import {
    Client,
    createClient,
    getRepo,
    ping,
    getAuthUrl,
    AuthProvider,
    RpcOptions,
    Quota,
    Usage,
    login,
    refreshToken,
} from 'devgen-sdk'
import { getPlainFromStorage, popupCenter, savePlainToStorage, removePlainFromStorage } from '../utils'

export type UserProfile = {
    login: string
    avatarUrl: string
    role: number
    accessToken: string
}

type IDevgenContext = {
    client: Client
    openLoginWindow: () => void
    login: (code: string, provider: string) => void
    loginState: any
    user?: UserProfile
}

const COPILOT_GRPC_URL = 'https://agent.devgen.xyz'
const DevgenContext = React.createContext({} as IDevgenContext)
function useDevgenContext() {
    return React.useContext(DevgenContext)
}
function DevgenContextProvider({ children }: { children: React.ReactNode }) {
    const isMounted = useRef(false)
    const [client, setClient] = useState(
        createClient({ url: COPILOT_GRPC_URL })
    )
    const [user, setUser] = useState({} as UserProfile)
    const onMessageHandle = useRef<number>()
    const { pathname, search } = useLocation()
    const params = new URLSearchParams(search)
    const swapUserProfile = () => {
        const responseStr = getPlainFromStorage('user')
        if (responseStr) {
            try {
                const response = JSON.parse(responseStr)
                setUser({
                    avatarUrl: response.user.avatar,
                    login: response.user.name,
                    role: response.user.role,
                    accessToken: response.accessToken,
                } as UserProfile)
                const newClient = createClient({
                    url: COPILOT_GRPC_URL,
                    options: {
                        meta: {
                            authorization: `Bearer ${response.accessToken}`,
                        },
                    },
                })
                setClient(newClient)
            } catch (e) {
                console.log(e)
            }
        }
    }
    const [autoLoginState, autoLogin] = useAsyncFn(async () => {
        try {
            const userStr = getPlainFromStorage('user')
            if (userStr) {
                removePlainFromStorage('user')
                const userJson = JSON.parse(userStr)
                const response = await refreshToken(
                    client,
                    userJson.refreshToken
                )
                if (response.user) {
                    const newUserStr = JSON.stringify(response)
                    savePlainToStorage('user', newUserStr)
                    swapUserProfile()
                }
            }
        } catch (e) {
            console.log(e)
        }
    }, [client])
    const [loginFnState, loginFn] = useAsyncFn(
        async (code: string, provider: string) => {
            try {
                const response = await login(client, provider, code)
                if (response.user) {
                    const userJson = JSON.stringify(response)
                    savePlainToStorage('user', userJson)
                }
            } catch (e) {
                console.log(e)
            }
        },
        [client]
    )
    const [openLoginWindowFnState, openLoginWindowFn] = useAsyncFn(async () => {
        const url = await getAuthUrl(client, AuthProvider.GITHUB, 'site')
        const selfLoginWindow = popupCenter({
            url,
            title: 'Login Devgen',
            w: 150,
            h: 180,
        })
        if (onMessageHandle.current) {
            clearTimeout(onMessageHandle.current)
        }
        const tryLogin = () => {
            try {
                const userStr = getPlainFromStorage('user')
                if (userStr) {
                    swapUserProfile()
                    selfLoginWindow?.close()
                } else {
                    setTimeout(tryLogin, 1000)
                }
            } catch (e) {
                console.log(e)
            }
        }
        const newHandle = setTimeout(tryLogin, 1000)
        onMessageHandle.current = newHandle
    }, [client])
    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true
            autoLogin()
        }
    })
    return (
        <DevgenContext.Provider
            value={{
                client,
                openLoginWindow: openLoginWindowFn,
                login: loginFn,
                loginState: loginFnState,
                user,
            }}
        >
            {children}
        </DevgenContext.Provider>
    )
}

export { DevgenContext, useDevgenContext, DevgenContextProvider }
