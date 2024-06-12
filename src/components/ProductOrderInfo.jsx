


export default function ProductOrderInfo({orderProducts,size}) {
    return (
        <>
        <div className="flex flex-col border-2 bg-white h-fit rounded-lg">
            <div className="flex gap-[60px] w-fit py-[20px] justify-center">
                <div className=" text-[20px] font-normal w-[100px] h-[30px] flex justify-center">{orderProducts.name}</div>
                <div className=" text-[20px] font-normal w-[100px] h-[30px] flex justify-center">{orderProducts.model}</div>
                <div className=" text-[20px] font-normal w-[100px] h-[30px] flex justify-center">{orderProducts.color}</div>
                <div className=" text-[20px] font-normal w-[100px] h-[30px] flex justify-center">{size}</div>
                <div className=" text-[20px] font-normal w-[100px] h-[30px] flex justify-center">{orderProducts.price}</div>
            </div>
        </div>
        </>
    )
}
