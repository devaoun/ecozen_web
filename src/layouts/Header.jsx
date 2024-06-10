import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/Logo.png'
import { IconCart, IconLogout } from '../assets/icons/icon'
import useAuth from '../hooks/useAuth'

export default function Header() {
    const { authUser, logout } = useAuth();
    const navigate = useNavigate()
    return (
        <>
            <div className=' w-full h-[100px] px-[30px] py-[15px] flex justify-between items-center font-bold text-[20px] shadow'>
                <div className='flex gap-[30px] w-1/3 h-full'>
                    <img src={logo} />
                    <Link to='/product' className='h-fit my-auto hover:underline'>FOOTWARE</Link>
                </div>
                <Link to='/' className='w-1/3 text-center text-[40px]'>ECOZEN</Link>
                <div className='flex gap-[30px] w-1/3 justify-end items-center'>
                    <Link to={authUser ? '/profile' : '/auth'}><div className='h-fit w-fit hover:underline'>{authUser ? authUser?.username : 'login'}</div></Link>
                    <Link to={authUser ? '/cart' : '/auth'}><IconCart className='w-[40px] h-[40px]' /></Link>
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
<div>
    <div></div>
    <div></div>
    <div></div>
</div>
