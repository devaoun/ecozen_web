import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [email, setEmail] = useState('')

    return (
        <AuthContext.Provider value={{ email, setEmail }}>{children}</AuthContext.Provider>
    )
}