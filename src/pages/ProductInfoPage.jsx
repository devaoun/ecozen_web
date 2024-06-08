import { Link, useNavigate } from 'react-router-dom'
import { IconCart } from '../assets/icons/icon'
import modelSneaker from '../assets/model-sneaker.png'
import SizeButton from '../components/SizeButton'
import useAuth from '../hooks/useAuth'
import { useEffect, useState } from 'react'
import productApi from '../apis/product'
import { getSelectedProduct } from '../utils/localStorage'

const allSize = [
    { size: 'US 6' },
    { size: 'US 7' },
    { size: 'US 8' },
    { size: 'US 9' },
    { size: 'US10' },
    { size: 'US11' },
    { size: 'US12' },
    { size: 'US13' }
]

export default function ProductInfoPage() {
    const [selectedProduct , setSelectedProduct] = useState();
    useEffect(() => {
        const fetchSelectedProduct = async() => {
            try {
                const res = await productApi.getProductById(getSelectedProduct())
                console.log(res)
                setSelectedProduct(res.data.selectedProduct)
            } catch (error) {
                console.log(error)
            }
        }
        fetchSelectedProduct()
    },[])
    const { authUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleAddToCart = () => {
        authUser ? navigate('/') : confirm('Please login to add item to your cart.') ? navigate('/auth') : null
    }
    return (
        <>
            <div className='flex justify-center items-center gap-[140px]'>
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
                        <button className='bg-black text-white w-[50px] h-[50px] rounded-full text-[10px] flex justify-center items-center hover:opacity-80 active:opacity-100'>BLACK</button>
                        <button className='bg-white text-black w-[50px] h-[50px] rounded-full text-[10px] flex justify-center items-center hover:opacity-80 active:opacity-100'>WHITE</button>
                    </div>
                    <div className='flex justify-center'>
                        <div className='grid grid-cols-4 gap-x-[10px] gap-y-[5px] justify-center items-center'>
                            {allSize.map(item =>
                                <SizeButton key={item.size} sizeName={item.size} />
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
