import { createContext, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import orderApi from "../apis/order";

export const OrderContext = createContext()

export default function OrderContextProvider({ children }) {
    const { authUser } = useAuth();
    const [userOrder , setUserOrder] = useState()


    const fetchOrderInfo = async () => {
        if (!authUser?.id) return
        try {
            const userId = authUser.id
            const res = await orderApi.getUserOrder(userId)
            setUserOrder(res.data.message)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        fetchOrderInfo()
    }, [authUser])

    return (
        <OrderContext.Provider value={{userOrder , fetchOrderInfo}}>{children}</OrderContext.Provider>
    )
}
