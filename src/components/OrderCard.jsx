import { useEffect, useState } from "react";
import ProductOrderInfo from "./ProductOrderInfo";
import { IconArrowUp } from "../assets/icons/icon";


export default function OrderCard({ orderNo, orderItems, status }) {
    const [openInfo, setOpenInfo] = useState(false);
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const sumPrice = orderItems.reduce((total, item) => total += +item.price, 0)
        setTotal(sumPrice)
    }, [orderItems])

    const handleClickInfo = () => {
        setOpenInfo(!openInfo)
    }

    return (
        <>
            <div className="flex flex-col bg-gray-100 border-2 rounded-lg h-fit hover:shadow-lg">
                <div className="flex gap-[60px] w-full px-[40px] py-[20px] justify-center bg-white rounded-lg">
                    <div className=" text-[20px] font-normal w-[100px] h-[30px] flex justify-center">{orderNo}</div>
                    <div className=" text-[20px] font-normal w-[100px] h-[30px] flex justify-center">{total}</div>
                    <div className={` text-[20px] font-normal w-[100px] h-[30px] flex justify-center text-gray-500
                    ${status === 'APPROVE' ? 'text-green-500' : null}`}>{status}</div>
                    <button className=" text-[20px] font-normal w-[100px] h-[30px] flex justify-center items-center" onClick={handleClickInfo}><IconArrowUp className={`w-[30px] h-[30px] ${!openInfo ? 'rotate-180' : null}`} /></button>
                </div>
                {openInfo ?
                    <>
                        <hr className="border-[1px] border-gray-300" />
                        <div className="w-full h-fit flex flex-col justify-center items-center gap-[20px] p-[20px]">
                            <div className="w-fit h-[20px] text-[20px] font-bold">Product</div>
                            <div className="flex flex-col gap-[5px]">
                                <div className="flex gap-[60px] w-fit py-[20px] justify-center">
                                    <div className=" text-[20px] font-normal w-[100px] h-[30px] flex justify-center">name</div>
                                    <div className=" text-[20px] font-normal w-[100px] h-[30px] flex justify-center">model</div>
                                    <div className=" text-[20px] font-normal w-[100px] h-[30px] flex justify-center">color</div>
                                    <div className=" text-[20px] font-normal w-[100px] h-[30px] flex justify-center">size</div>
                                    <div className=" text-[20px] font-normal w-[100px] h-[30px] flex justify-center">price</div>
                                </div>
                                {orderItems?.map(item => <ProductOrderInfo
                                    key={item.id}
                                    size={item.size}
                                    orderProducts={item.product}
                                />)}
                            </div>
                        </div>
                    </>
                    :
                    null
                }
            </div>
        </>
    )
}
