import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import LandingPage from './components/LandingPage'
import PricingPage from './components/Pricing'
import LoginPage from './components/Login'
import GetEarlyAccessPage from './components/GetEarlyAccess'
import PrivacyPage from './components/Privacy'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <LandingPage />,
            },
            {
                path: 'getEarlyAccess',
                element: <GetEarlyAccessPage />,
            },
            {
                path: 'pricing',
                element: <PricingPage />,
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'privacy',
                element: <PrivacyPage />,
            },
        ],
    },
])
createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
