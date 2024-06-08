import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy } from 'react'
import AuthPage from "../pages/AuthPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import MainContainer from "../layouts/MainContainer";
import ProductPage from "../pages/ProductPage";
import ProductInfoPage from "../pages/ProductInfoPage";
import ProtectedRoute from "../components/ProtectedRoute";
import ProductContextProvider from "../contexts/ProductContext";
import ProtectedProduct from "../components/ProtectedProduct";



const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <ProductContextProvider>
                    <MainContainer />
                </ProductContextProvider>
            </ProtectedRoute>
        ),
        children: [
            { path: '/', element: <HomePage /> },
            {
                path: '/product', element: (
                    <ProtectedProduct>
                        <ProductPage />
                    </ProtectedProduct>
                )
            },
            { path: 'product/productInfo', element: <ProductInfoPage /> },
            { path: '/product/sneaker', element: (<h1>sneaker</h1>) },
            { path: '/product/sport', element: (<h1>sport</h1>) }
        ]
    },
    {
        path: '/auth',
        element: <AuthPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
])

export default function Router() {
    return <RouterProvider router={router} />
}