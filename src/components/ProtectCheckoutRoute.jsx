import { Navigate } from "react-router-dom"
import useCart from "../hooks/useCart"


export default function ProtectCheckoutRoute({children}){
    const {cartItem} = useCart()
    if(cartItem.length <= 0){
        return <Navigate to='/'/>
    }

    return (
        <>
        {children}
        </>
    )
}