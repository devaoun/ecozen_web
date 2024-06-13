import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import MainContainer from "../layouts/MainContainer";
import ProductPage from "../pages/ProductPage";
import ProductInfoPage from "../pages/ProductInfoPage";
import ProtectedRoute from "../components/ProtectedRoute";
import ProductContextProvider from "../contexts/ProductContext";
import ProductSneakerPage from "../pages/ProductSneakerPage";
import ProductSportPage from "../pages/ProductSportPage";
import ProfilePage from "../pages/ProfilePage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import MyAddressPage from "../pages/MyAddressPage";
import CartContextProvider from "../contexts/CartContext";
import ProtectUserRoute from "../components/ProtectUserRoute";
import ProtectCheckoutRoute from "../components/ProtectCheckoutRoute";
import OrderPage from "../pages/OrderPage";
import OrderContextProvider from "../contexts/OrderContext";



const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <ProductContextProvider>
                    <CartContextProvider>
                        <MainContainer />
                    </CartContextProvider>
                </ProductContextProvider>
            </ProtectedRoute>
        ),
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/product', element: <ProductPage /> },
            { path: 'product/productInfo', element: <ProductInfoPage /> },
            { path: '/product/sneaker', element: <ProductSneakerPage /> },
            { path: '/product/sport', element: <ProductSportPage /> },
            {
                path: '', element: (
                    <ProtectUserRoute>
                        <Outlet />
                    </ProtectUserRoute>
                ), children: [
                    { path: 'profile', element: <ProfilePage /> },
                    { path: 'cart', element: <CartPage /> },
                    {
                        path: 'checkout', element: (
                            <ProtectCheckoutRoute>
                                <CheckoutPage />
                            </ProtectCheckoutRoute>
                        )
                    },
                    { path: 'myAddress', element: <MyAddressPage /> },
                    {
                        path: 'order', element: (
                            <OrderContextProvider>
                                <OrderPage />
                            </OrderContextProvider>
                        )
                    }
                ]
            },

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