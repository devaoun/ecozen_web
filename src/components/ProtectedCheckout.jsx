import { useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { useEffect } from "react"


export default function ProtectedCheckout({children}) {
    const { authUser } = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        if(!authUser?.address){
            console.log(authUser.address)
            confirm('Please create your address before order.') ? navigate('/myAddress') : null
        }
    },[])
    return (
        <>
            {children}
        </>
    )
}
