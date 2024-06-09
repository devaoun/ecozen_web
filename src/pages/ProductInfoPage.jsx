import { useNavigate } from 'react-router-dom'
import { IconCart } from '../assets/icons/icon'
import modelSneaker from '../assets/model-sneaker.png'
import SizeButton from '../components/SizeButton'
import useAuth from '../hooks/useAuth'
import { useEffect, useState } from 'react'
import productApi from '../apis/product'
import { getAccessToken, getSelectedProduct } from '../utils/localStorage'
import cartApi from '../apis/cart'

const allSize = [
    { size: 'US07' },
    { size: 'US08' },
    { size: 'US09' },
    { size: 'US10' },
    { size: 'US11' },
    { size: 'US12' },
    { size: 'US13' },
    { size: 'US14' }
]
// {authUser} = useAuth
//  userId = authUser?.id
// productId = selectedProduct?.id
export default function ProductInfoPage() {
    const [selectedProduct, setSelectedProduct] = useState();
    const [selectedSize, setSelectedSize] = useState('US07');
    const { authUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchSelectedProduct = async () => {
            try {
                const res = await productApi.getProductByName(getSelectedProduct())
                setSelectedProduct(res.data.productName[0])
            } catch (error) {
                console.log(error)
            }
        }
        fetchSelectedProduct()
    }, [])
    const handleAddToCart = async () => {
        try {
            if (!authUser) {
                confirm('Please login to add item to your cart.') ? navigate('/auth') : null
            }
            const isConfirm = confirm('Confirm add product to your cart?')
            if (isConfirm) {
                const data = {
                    userId : authUser?.id,
                    productId : selectedProduct.id,
                    size : selectedSize
                }
                const res = await cartApi.createCartItem(data)
                alert(res.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleClickBlack = async () => {
        try {
            const res = await productApi.getProductByName(getSelectedProduct())
            setSelectedProduct(res.data.productName[1])
            console.log(selectedProduct.id)
        } catch (error) {
            console.log(error)
        }
    }

    const handleClickWhite = async () => {
        try {
            const res = await productApi.getProductByName(getSelectedProduct())
            setSelectedProduct(res.data.productName[0])
            console.log(selectedProduct.id)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='flex justify-center items-center gap-[140px] h-[80vh]'>
                <div className='w-[500px] h-[500px] bg-ec-home-gray flex justify-center items-center my-[40px] rounded-[20px]'>
                    <img src={selectedProduct?.image || modelSneaker} />
                </div>
                <div className='h-fit flex flex-col gap-[30px]'>
                    <div className='flex flex-col gap-5'>
                        <div className=' text-[30px] font-bold'>{selectedProduct?.name}</div>
                        <div className=' text-[20px] font-light flex flex-col gap-5'>
                            <div>{selectedProduct?.model}</div>
                            <div className=' font-bold'><span>THB</span> {selectedProduct?.price}</div>
                        </div>
                    </div>
                    <div className=' bg-ec-gray-d3d3d3 flex justify-center px-4 py-3 w-fit rounded-full gap-[10px]'>
                        <button className='bg-black text-white w-[50px] h-[50px] rounded-full text-[10px] flex justify-center items-center hover:opacity-80 active:opacity-100' onClick={handleClickBlack}>BLACK</button>
                        <button className='bg-white text-black w-[50px] h-[50px] rounded-full text-[10px] flex justify-center items-center hover:opacity-80 active:opacity-100' onClick={handleClickWhite}>WHITE</button>
                    </div>
                    <div className='flex justify-center'>
                        <div className='grid grid-cols-4 gap-x-[10px] gap-y-[5px] justify-center items-center'>
                            {allSize.map(item =>
                                <SizeButton key={item.size} sizeName={item.size} setSelectedSize={setSelectedSize} selectedSize={selectedSize} />
                            )}

                        </div>
                    </div>
                    <button className='w-[500px] h-[72px] bg-black text-white flex justify-center items-center rounded-full hover:opacity-80 gap-2' onClick={handleAddToCart}>
                        <div className=' text-[20px] font-light'>Add to cart</div>
                        <IconCart className='w-[40px] h-[40px]' stroke='#FFFFFF' />
                    </button>
                </div>
            </div>
        </>
    )
}
