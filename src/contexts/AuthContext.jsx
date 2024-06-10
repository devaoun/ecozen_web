import { createContext, useEffect, useState } from "react";
import { getAccessToken, removeAccessToken, removeSelectedProduct, setAccessToken } from "../utils/localStorage";
import authApi from "../apis/auth";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [authUser, setAuthUser] = useState(null);
    const [isAuthUserLoading, setIsAuthUserLoading] = useState(true);

    const fetchUser = async () => {
        try {
            if (getAccessToken()) {
                const accessToken = getAccessToken();
                const headers = { Authorization: `Bearer ${accessToken}` };
                const res = await authApi.getAuthUser(headers);
                setAuthUser(res.data.user);
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsAuthUserLoading(false)
        }
    }
    useEffect(() => {
        fetchUser();
    }, [])

    const login = async (credentials) => {
        const res = await authApi.login(credentials);
        setAccessToken(res.data.accessToken);
        const headers = { Authorization: `Bearer ${res.data.accessToken}` }
        const resGetAuthUser = await authApi.getAuthUser(headers);
        setAuthUser(resGetAuthUser.data.user)
    };

    const logout = () => {
        removeAccessToken();
        removeSelectedProduct();
        setAuthUser(null);
        localStorage.removeItem('email')
    }

    return (
        <AuthContext.Provider value={{ login, logout, authUser, setAuthUser, isAuthUserLoading, fetchUser }}>{children}</AuthContext.Provider>
    )
}