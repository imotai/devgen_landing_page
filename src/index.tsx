import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import LandingPage from './components/LandingPage'
import PricingPage from './components/Pricing'
import LoginPage from './components/Login'

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
                path: 'pricing',
                element: <PricingPage />,
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
        ],
    },
])
createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
