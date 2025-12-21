import { createBrowserRouter } from "react-router-dom"

import PageLayout from "@/components/layout/PageLayout"
import Login from "@/feathures/auth/Login"
import CustomersDetails from "@/feathures/customers/CustomersDetails"
import PageNotFound from "../common/PageNotFound"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PageLayout />,
        children: [

            {
                path: "/customers/:id",
                element: <CustomersDetails />,
            },
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
