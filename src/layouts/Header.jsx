import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'
import { IconCart, IconProfile } from '../assets/icons/icon'

export default function Header() {
    return (
        <>
            <div className=' w-full h-[100px] px-[30px] py-[15px] flex justify-between items-center font-bold text-[20px]'>
                <div className='flex gap-[30px] w-1/3 h-full'>
                    <img src={logo} />
                    <Link to='/product' className='h-fit my-auto hover:underline'>FOOTWARE</Link>
                </div>
                <Link to='/home' className='w-1/3 text-center text-[40px]'>ECOZEN</Link>
                <div className='flex gap-[30px] w-1/3 justify-end items-center'>
                    <div className='h-fit w-fit'>Tanong</div>
                    <div><IconProfile className='w-[40px] h-[40px]' /></div>
                    <div><IconCart className='w-[40px] h-[40px]' /></div>
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
