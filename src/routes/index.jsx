import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import MainContainer from "../layouts/MainContainer";
import ProductPage from "../pages/ProductPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainContainer />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/product', element: <ProductPage/> },
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