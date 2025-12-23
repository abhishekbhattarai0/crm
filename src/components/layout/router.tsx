import { createBrowserRouter, Navigate } from "react-router-dom"

import PageLayout from "@/components/layout/PageLayout"

import Analytics from "@/feathures/dashboard/analytics/Analytics"
import Login from "@/feathures/auth/Login"
import PageNotFound from "../common/PageNotFound"

export const router = createBrowserRouter([
{
    path:'/',
    element: <PageLayout/>,
    children: [
        {
            path: 'index',
            element: <Navigate to="/dashboard/analytics" replace />
        },
        {
            path: 'dashboard/analytics',
            element: <Analytics/>
        },
        {
            path: 'dashboard',
            element: <Navigate to={'/dashboard/analytics'}/>
        }
    ],
},
{
    path:'/',
    element: <PageLayout/>,
    children: [
        {
            path: 'index',
            element: <Navigate to="/apps/analytics/customers" replace />
        },
        {
            path: 'apps/analytics/customers',
            element: <Analytics/>
        },
        {
            path: 'apps',
            element: <Navigate to={'/apps/analytics/customers'}/>
        },
        {
            path: 'apps/analytics',
            element: <Navigate to={'/apps/analytics/customers'}/>
        },
        {
            path: 'apps/analytics/reports',
            element: <Analytics/>
        }
    ],
},
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: '*',
    element: <PageNotFound />
  }
])
