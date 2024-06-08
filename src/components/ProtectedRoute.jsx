import useAuth from "../hooks/useAuth";
import Loading from "./Loading";

export default function ProtectedRoute({children}) {
    const {isAuthUserLoading} = useAuth();
  return (
    <>
        {isAuthUserLoading && <Loading/>}
        {children}
    </>
  )
}
