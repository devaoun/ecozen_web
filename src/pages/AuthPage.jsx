import { useNavigate } from 'react-router-dom'
import logo from '../assets/Logo.png'
import authApi from '../apis/auth';
import useAuth from '../hooks/useAuth';

export default function AuthPage() {
    const { email, setEmail } = useAuth()
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const res = await authApi.isUser(email)
            localStorage.setItem('email', email)
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
        setEmail(e.target.value)
    }

    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className="w-fit h-[200px]">
                <img src={logo} className=' h-full' />
            </div>
            <div className='font-bold text-[60px] h-fit'>ECOZEN</div>
            <div className='mt-[40px] h-fit font-normal'>Enter your email to join us or sign in.</div>
            <form className=' flex flex-col items-center' onSubmit={handleSubmit}>
                <input
                    className='mt-[40px] p-[20px] w-[520px] border-[1px] border-gray-500 rounded-[10px] text-[30px] font-normal'
                    placeholder='Enter your email'
                    value={email}
                    onChange={handleChangeInput}
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
