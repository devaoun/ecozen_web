import modelSneaker from '../assets/model-sneaker.png'

export default function CartCard() {
    return (
        <>
            <div className=" flex w-[600px] gap-[10px] p-[20px] border-2 rounded-[20px] relative">
                <div className='flex justify-center items-center gap-[20px]'>
                    <div className='flex items-center w-[200px] h-[190px] rounded-[20px] bg-ec-home-gray'>
                        <img src={modelSneaker} />
                    </div>
                    <div className='flex flex-col gap-[10px] text-[20px] font-bold h-fit'>
                        <div>productName</div>
                        <div>Size : Size Enum</div>
                        <div>Model</div>
                        <div>Price</div>
                    </div>
                </div>
                <button className=' absolute top-1 right-1 w-[40px] h-[40px] rounded-full flex items-center justify-center text-[30px] font-normal hover:text-red-500'>x</button>
            </div>
        </>
    )
}
