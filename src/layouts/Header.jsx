import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/Logo.png'
import { IconCart, IconLogout, IconSearch } from '../assets/icons/icon'
import useAuth from '../hooks/useAuth'
import useCart from '../hooks/useCart';
import { useState } from 'react';
import productApi from '../apis/product';
import { toast } from 'react-toastify';
import { setSelectedProduct } from '../utils/localStorage';

export default function Header() {
    const { authUser, logout } = useAuth();
    const { cartItem } = useCart()
    const navigate = useNavigate()
    const [searchInput , setSearchInput] = useState(null)

    const handleChangeSearchInput = (e) => {
        setSearchInput(e.target.value)
    }

    const handleSubmitSearch = async(e) => {
        e.preventDefault()
        try {
            console.log(searchInput)
            const res = await productApi.getProductByName(searchInput)

            if(res.data.productName.length === 0){
                toast.error(`no item ${searchInput}`,{
                    position: 'top-left'
                })
            }
            if(res.data.productName.length > 0){
                setSelectedProduct(searchInput);
                navigate('/product/productInfo')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setSearchInput('')
        }
    }


    return (
        <>
            <div className=' w-full h-[100px] px-[30px] py-[15px] flex justify-between items-center font-bold text-[20px] shadow'>
                <div className='flex gap-[30px] w-1/3 h-full items-center'>
                    <img src={logo} className='h-full' />
                    <Link to='/product' className=' z-20 h-fit my-auto hover:underline'>FOOTWARE</Link>
                    <form className='border-2 hover:border-gray-300 px-4 h-[50px]  rounded-xl flex items-center' onSubmit={handleSubmitSearch}>
                        <input value={searchInput} onChange={handleChangeSearchInput} className=' outline-none h-full bg-transparent' placeholder='search'/>
                        <button className={`${searchInput ? null : 'hidden'}`}><IconSearch className="h-[30px] z-50"/></button>
                    </form>
                </div>
                <Link to='/' className='w-fill text-center text-[40px]'>ECOZEN</Link>
                <div className='flex gap-[30px] w-1/3 justify-end items-center'>
                    <Link to={authUser ? '/profile' : '/auth'}><div className='h-fit w-fit hover:underline'>{authUser ? authUser?.username : 'login'}</div></Link>
                    <Link to={authUser ? '/cart' : '/auth'} className='relative'>
                        <IconCart className='w-[40px] h-[40px]' />
                        {cartItem.length > 0 ?
                            <div className='absolute top-0 -right-1 w-[17px] h-[17px] text-white text-xs bg-red-500 rounded-full flex justify-center items-center'>{cartItem.length}
                            </div>
                            : null
                        }
                    </Link>
                    {authUser ? <button className='h-fit w-fit hover:underline' onClick={() => {
                        const isConfirm = confirm('Confirm log out?')
                        if (isConfirm) {
                            logout();
                            navigate('/auth')
                        }
                    }}><IconLogout className="w-[40px] h-[40px]" /></button>
                        : null
                    }
                </div>
            </div>
        </>
    )
}
