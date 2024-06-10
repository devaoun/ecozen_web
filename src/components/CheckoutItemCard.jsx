
export default function CheckoutItemCard() {
    return (
        <>
            <div className=" flex w-[600px] gap-[10px] p-[20px] border-2 rounded-[20px]">
                <div className='flex justify-center items-center gap-[20px]'>
                    <div className='flex items-center w-[200px] h-[190px] rounded-[20px] bg-ec-home-gray'>
                        <img src='' />
                    </div>
                    <div className='flex flex-col gap-[10px] text-[20px] font-bold h-fit'>
                        <div>name</div>
                        <div>Size : </div>
                        <div>Model : </div>
                        <div>Color : </div>
                        <div>THB : </div>
                    </div>
                </div>
            </div>
        </>
    )
}