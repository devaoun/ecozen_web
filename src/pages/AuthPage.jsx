import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/Logo.png'
import authApi from '../apis/auth';
import { useState } from 'react';
import Input from '../components/Input';
import validateEmail from '../validators/validate-auth';

export default function AuthPage() {
    const [input, setInput] = useState('')
    const navigate = useNavigate();
    const [inputError, setInputError] = useState('')

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()

            const error = validateEmail(input);

            if (error) {
                return setInputError(error);
            }

            const res = await authApi.isUser(input)
            localStorage.setItem('email', input)

            if (res.data.message === 'not found') {
                navigate('/register')
            }
            if (res.data.message === 'found email') {
                navigate('/login')
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleChangeInput = (e) => {
        setInput(e.target.value)

    }

    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <Link to='/' className=' flex justify-center items-center flex-col'>
                <div className="w-fit h-[200px]">
                    <img src={logo} className=' h-full' />
                </div>
                <div className='font-bold text-[60px] h-fit'>ECOZEN</div>
            </Link>
            <div className='my-[30px] h-fit font-normal'>Enter your email to join us or sign in.</div>
            <form className=' flex flex-col items-center' onSubmit={handleSubmit}>
                <Input
                    placeholder="Enter your email"
                    value={input}
                    onChange={handleChangeInput}
                    name="email"
                    error={inputError}
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
