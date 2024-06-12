
export default function CheckoutItemCard({image, cartId, name, size, model, price, color}) {
    return (
        <>
            <div className=" flex w-full gap-[10px] p-[20px] border-2 rounded-[20px]">
                <div className='flex justify-center items-center gap-[20px]'>
                    <div className='flex items-center w-[200px] h-[190px] rounded-[20px] bg-ec-home-gray'>
                        <img src={image} />
                    </div>
                    <div className='flex flex-col gap-[10px] text-[20px] font-bold h-fit'>
                        <div>{name}</div>
                        <div>Size : {size}</div>
                        <div>Model : {model}</div>
                        <div>Color : {color}</div>
                        <div>THB {price}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
