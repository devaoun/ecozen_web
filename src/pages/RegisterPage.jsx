import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/Logo.png'
import authApi from '../apis/auth'
import { toast } from 'react-toastify'



const initial_input = {
    username: '',
    password: '',
    confirmPassword: ''
}


export default function RegisterPage() {
    const [input, setInput] = useState(initial_input);
    const navigate = useNavigate()
    const email = localStorage.getItem('email')

    const inputRef = useRef(null)
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [])

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const data = { email: email, ...input }
            const res = await authApi.register(data)
            if(res.data.message === 'register success'){
                toast.success(res.data.message)
                navigate('/login')
            }
        } catch (error) {
            console.log(error)
            toast.error('invalid register')
        }
    }

    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <Link to='/' className=' flex justify-center items-center flex-col'>
            <div className="w-fit h-[200px]">
                <img src={logo} className=' h-full' />
            </div>
            <div className='font-bold text-[60px] h-fit'>ECOZEN</div>
            </Link>
            <div className='mt-[20px] h-fit font-normal'>Let sign up</div>
            <div className='h-fit font-normal underline decoration-1'>{email}</div>
            <form className='p-[20px] flex flex-col items-center gap-[20px]' onSubmit={handleSubmit} >
                <input
                    ref={inputRef}
                    className='p-[20px] w-[520px] border-[1px] border-gray-500 rounded-[10px] text-[30px] font-normal'
                    placeholder='Username'
                    name="username"
                    value={input.username}
                    onChange={handleChangeInput}
                />
                <input
                    className='p-[20px] w-[520px] border-[1px] border-gray-500 rounded-[10px] text-[30px] font-normal'
                    placeholder='Password must be 6-14 characters'
                    name="password"
                    type='password'
                    value={input.password}
                    onChange={handleChangeInput}
                />
                <input
                    className='p-[20px] w-[520px] border-[1px] border-gray-500 rounded-[10px] text-[30px] font-normal'
                    placeholder='Confirm Password'
                    name='confirmPassword'
                    value={input.confirmPassword}
                    type='password'
                    onChange={handleChangeInput}
                />
                <button className='mt-[20px] px-[60px] py-[25px] bg-gray-800 text-white text-[25px] font-normal rounded-[100px] hover:bg-gray-900'>CREATE ACCOUNT</button>
            </form>
        </div>
    )
}
