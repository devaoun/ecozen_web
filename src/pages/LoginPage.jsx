import { useState } from 'react'
import logo from '../assets/Logo.png'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Input from '../components/Input'
import { toast } from 'react-toastify'

export default function LoginPage() {
    const email = localStorage.getItem('email')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const { login } = useAuth();
    const [error,setError] = useState('')

    const handleChangeInput = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const data = { email: email, password: password }
            await login(data);
            navigate('/');
            toast.success('login success')
            localStorage.removeItem('email')
        } catch (error) {
            console.log(error);
            setError('invalid password');
        }
    }

    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className="w-fit h-[200px]">
                <img src={logo} className=' h-full' />
            </div>
            <div className='font-bold text-[60px] h-fit'>ECOZEN</div>
            <div className='mt-[20px] h-fit font-normal'>What's your password</div>
            <div className=' underline decoration-1 h-fit font-normal mb-[30px]'>{email}</div>
            <form className=' flex flex-col items-center' onSubmit={handleSubmit}>
                <Input
                    placeholder='Enter your password'
                    type="password"
                    value={password}
                    onChange={handleChangeInput}
                    error={error}
                />
                <div className='mt-[20px] text-[18px] font-normal w-[520px] h-fit'>
                    การดำเนินการต่อหมายความว่าฉันยอมรับ
                    <span className='underline decoration-1'>นโยบายความเป็นส่วนตัว</span>
                    และ
                    <span className='underline decoration-1'>ข้อกำหนด​การใช้</span>
                    ของ Ecozen
                </div>
                <button className='mt-[20px] px-[60px] py-[25px] bg-gray-800 text-white text-[25px] font-normal rounded-[100px] hover:bg-gray-900'>CONTINUE</button>
            </form>
        </div>
    )
}
