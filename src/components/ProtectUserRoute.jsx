import { Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Loading from "./Loading"

export default function ProtectUserRoute({children}) {
    const { authUser, isAuthUserLoading } = useAuth()
    if (!authUser && !isAuthUserLoading) {
        return <Navigate to='/auth' />
    }
    return (
        <>
        {isAuthUserLoading && <Loading/>}
        {children}
        </>
    )
}
