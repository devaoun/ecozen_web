import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/Logo.png'
import { IconCart, IconProfile } from '../assets/icons/icon'
import useAuth from '../hooks/useAuth'

export default function Header() {
    const { authUser, logout } = useAuth();
    const navigate = useNavigate()
    console.log(authUser)
    return (
        <>
            <div className=' w-full h-[100px] px-[30px] py-[15px] flex justify-between items-center font-bold text-[20px] shadow'>
                <div className='flex gap-[30px] w-1/3 h-full'>
                    <img src={logo} />
                    <Link to='/product' className='h-fit my-auto hover:underline'>FOOTWARE</Link>
                </div>
                <Link to='/' className='w-1/3 text-center text-[40px]'>ECOZEN</Link>
                <div className='flex gap-[30px] w-1/3 justify-end items-center'>
                    <Link to='/' className='hover:underline flex gap-3 items-center'>
                        <div className='h-fit w-fit'>{authUser?.username}</div>
                        <div><IconProfile className='w-[40px] h-[40px]' /></div>
                    </Link>
                    <Link to='/'><IconCart className='w-[40px] h-[40px]' /></Link>
                    {authUser ? <button className='h-fit w-fit hover:underline' onClick={() => {
                        logout();
                        navigate('/auth')
                    }}>logout</button>
                    : null
                }
                </div>
            </div>
        </>
    )
}
<div>
    <div></div>
    <div></div>
    <div></div>
</div>
