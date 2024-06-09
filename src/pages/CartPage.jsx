import { useNavigate } from "react-router-dom";
import CartCard from "../components/CartCard";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import cartApi from "../apis/cart";

export default function CartPage() {
    const navigate = useNavigate();
    const { authUser } = useAuth();
    const [cartItem, setCartItem] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const fetchCartItem = async () => {
            if (!authUser?.id) return;
            try {
                const userId = authUser.id
                const res = await cartApi.getCartItemByUserId(userId)
                console.log(res)
                const data = res.data.reduce((acc, item) => {
                    acc.push({ cartId: item.id, size: item.size, ...item.product })
                    return acc
                }, [])
                console.log(data)
                setCartItem(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchCartItem();
    }, [authUser])

    useEffect(() => {
        const sumPrice = cartItem.reduce((total, item) => total + (+item.price), 0);
        setTotalPrice(sumPrice);
    }, [cartItem]);

    const handleCheckout = () => {
        navigate('/checkout')
    }

    return (
        <>
            <div className="min-h-[80vh]">
                {cartItem.length > 0 ?
                    <>
                        <div className="w-fit mx-auto mt-[50px] mb-[20px] text-[30px] font-bold">My cart</div>
                        <div className="flex justify-center gap-[100px] w-fit mx-auto">
                            <div className="flex flex-col gap-[20px] mb-10">
                                {cartItem?.map(item =>
                                    <CartCard
                                        key={item.cartId}
                                        color={item.color}
                                        cartId={item.cartId}
                                        productId={item.id}
                                        image={item.image}
                                        model={item.model}
                                        name={item.name}
                                        price={item.price}
                                        size={item.size}
                                        setCartItem={setCartItem}
                                    />)}
                            </div>
                            <div className="flex flex-col gap-[35px] p-[30px] border-2 h-fit rounded-[20px]">
                                <div className=" text-[30px] font-medium">Order Info</div>
                                <div className="flex flex-col gap-[30px] text-[20px] font-medium">
                                    <div className="flex justify-between">Subtotal : <span>{totalPrice}</span></div>
                                    <div className="h-[1px] bg-ec-gray-d3d3d3" />
                                    <div className="flex justify-between">Total Payment : <span>{totalPrice}</span></div>
                                </div>
                                <button className=' w-[500px] h-[60px] bg-black text-white text-[25px] font-normal rounded-[100px] hover:opacity-80' onClick={handleCheckout}>CHECKOUT</button>
                            </div>
                        </div>
                    </>
                    : <div className="w-full h-[80vh] flex justify-center items-center text-[40px] font-bold">Have no item on your cart.</div>
                }
            </div>
        </>
    )
}
