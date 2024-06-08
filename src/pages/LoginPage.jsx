import { useState } from 'react'
import logo from '../assets/Logo.png'
import authApi from '../apis/auth'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function LoginPage() {
    const email = localStorage.getItem('email')
    const [password,setPassword] = useState('')
    const navigate = useNavigate();
    const {login} = useAuth();

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async(e) => {
        try {
            e.preventDefault();
            const data = { email : email , password : password}
            await login(data);
            navigate('/');
            alert('login success');
        } catch (error) {
            console.log(error);
            alert('invalid password');
        }
    }

    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className="w-fit h-[200px]">
                <img src={logo} className=' h-full' />
            </div>
            <div className='font-bold text-[60px] h-fit'>ECOZEN</div>
            <div className='mt-[20px] h-fit font-normal'>What's your password</div>
            <div className=' underline decoration-1 h-fit font-normal'>{email}</div>
            <form className=' flex flex-col items-center' onSubmit={handleSubmit}>
                <input
                    className='mt-[20px] p-[20px] w-[520px] border-[1px] border-gray-500 rounded-[10px] text-[30px] font-normal'
                    placeholder='Enter your password'
                    type="password"
                    value={password}
                    onChange={handleChangePassword}
                />
                <div className='mt-[20px] text-[18px] font-normal w-[520px] h-fit'>
                    การดำเนินการต่อหมายความว่าฉันยอมรับ
                    <span className='underline decoration-1'>นโยบายความเป็นส่วนตัว</span>
                    และ
                    <span className='underline decoration-1'>ข้อกำหนด​การใช้</span>
                    ของ Ecozen
                </div>
                <button className='mt-[20px] px-[60px] py-[25px] bg-gray-800 text-white text-[25px] font-normal rounded-[100px] hover:bg-gray-900'>COUNTINUE</button>
            </form>
        </div>
    )
}
