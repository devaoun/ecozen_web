import { createContext, useEffect, useState } from 'react'
import cartApi from '../apis/cart';
import useAuth from '../hooks/useAuth';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const [cartItem, setCartItem] = useState([])
    const { authUser } = useAuth();

    const fetchCartItem = async () => {
        if (!authUser?.id) return
        try {
            const userId = authUser.id
            const res = await cartApi.getCartItemByUserId(userId)
            const data = res.data.reduce((acc, item) => {
                acc.push({ cartId: item.id, size: item.size, ...item.product })
                return acc
            }, [])
            setCartItem(data)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        fetchCartItem();
    }, [authUser])


    return <CartContext.Provider value={{ cartItem,setCartItem,fetchCartItem }}>{children}</CartContext.Provider>
}

