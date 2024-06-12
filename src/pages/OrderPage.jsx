import OrderCard from "../components/OrderCard";
import useOrder from "../hooks/useOrder";

export default function OrderPage() {
    const { userOrder } = useOrder();
    console.log(userOrder)
    return (
        <>
            <div className="min-h-[70vh] mb-[40px]">
                <div className=" text-[30px] font-bold mx-auto w-fit my-[30px]">My Orders</div>
                <div className="flex flex-col w-fit mx-auto gap-[20px] items-center">
                    <div className="flex gap-[60px] w-fit">
                        <div className=" text-[20px] font-normal w-[100px] h-[30px] flex justify-center">Order No.</div>
                        <div className=" text-[20px] font-normal w-[100px] h-[30px] flex justify-center">Total</div>
                        <div className=" text-[20px] font-normal w-[100px] h-[30px] flex justify-center">Status</div>
                        <div className=" text-[20px] font-normal w-[100px] h-[30px] flex justify-center">Info</div>
                    </div>
                    {userOrder?.map((item,index) => <OrderCard 
                    key={item.id}
                    orderNo={item.id}
                    status={item.status}
                    orderItems={userOrder[index].orderItems}
                    />)}
                </div>
            </div>
        </>
    )
}
