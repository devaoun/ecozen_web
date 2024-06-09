import { Link, useNavigate } from "react-router-dom";
import CartCard from "../components/CartCard";

export default function CartPage() {
    const navigate = useNavigate()

    const handleCheckout = () => {
        navigate('/checkout')
    }
    return (
        <>
            <div className="h-[80vh]">
                <div className="w-fit mx-auto mt-[50px] mb-[20px] text-[30px] font-bold">My cart</div>
                <div className="flex justify-center gap-[100px] w-fit mx-auto">
                    <div className="flex flex-col gap-[20px]">
                        <CartCard />
                        <CartCard />
                    </div>
                    <div className="flex flex-col gap-[35px] p-[30px] border-2 h-fit rounded-[20px]">
                        <div className=" text-[30px] font-medium">Order Info</div>
                        <div className="flex flex-col gap-[30px] text-[20px] font-medium">
                            <div className="flex justify-between">Subtotal : <span>Sum Price</span></div>
                            <div className="h-[1px] bg-ec-gray-d3d3d3" />
                            <div className="flex justify-between">Total Payment : <span>Total Price</span></div>
                        </div>
                        <button className=' w-[500px] h-[60px] bg-black text-white text-[25px] font-normal rounded-[100px] hover:opacity-80' onClick={handleCheckout}>CHECKOUT</button>
                    </div>
                </div>
            </div>
        </>
    )
}
