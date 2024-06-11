import cartApi from '../apis/cart'

export default function CartCard({color,cartId,productId,image,model,name,price,size,setCartItem}) {
    const handleDelete = async() => {
        try {
            const res = await cartApi.deleteCartItemByCartId(cartId);
            alert(res.data.message);
            setCartItem(prev => prev.filter(item => item.cartId !== cartId));
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className=" flex w-[600px] gap-[10px] p-[20px] border-2 rounded-[20px] relative">
                <div className='flex justify-center items-center gap-[20px]'>
                    <div className='flex items-center w-[200px] h-[190px] rounded-[20px] bg-ec-home-gray'>
                        <img src={image} />
                    </div>
                    <div className='flex flex-col gap-[10px] text-[20px] font-normal h-fit'>
                        <div className=' font-black'>{name}</div>
                        <div>Size : {size}</div>
                        <div>Model : {model}</div>
                        <div>Color : {color}</div>
                        <div>THB : {price}</div>
                    </div>
                </div>
                <button className=' absolute top-1 right-1 w-[40px] h-[40px] rounded-full flex items-center justify-center text-[30px] font-normal hover:text-red-500' onClick={handleDelete} >x</button>
            </div>
        </>
    )
}
