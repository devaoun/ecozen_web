import { useEffect, useState } from "react"
import useAuth from "../hooks/useAuth";
import userApi from "../apis/user";
import validateProfileInfo from "../validators/validate-info";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'
const initialInput = {
    firstname: '',
    lastname: '',
    phoneNumber: '',
    address: ''
}
const initialInputError = {
    firstname: '',
    lastname: '',
    phoneNumber: '',
    address: ''
}


export default function MyAddressPage() {
    const [input, setInput] = useState(initialInput);
    const [inputError, setInputError] = useState(initialInputError)
    const { authUser, fetchUser } = useAuth();
    const navigate = useNavigate()


    useEffect(() => {
        console.log(document.referrer)
    }, [])

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const isConfirm = confirm('Update your info?')
            if (isConfirm) {
                const error = validateProfileInfo(input);
                if (error) {
                    return setInputError(error)
                }
                setInputError(initialInputError)
                setInput(initialInput)
                await userApi.updateUserInfoById(authUser.id, input)
                fetchUser()
                toast.success('Updated info.')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="min-h-[80vh] m-[60px]">
                <div className=" text-[30px] font-bold w-fit mx-auto mb-[30px]">My address</div>
                <div className="flex justify-center gap-[180px]">
                    <div className="flex flex-col gap-[20px] w-[500px]">
                        <div className=" text-[30px] font-bold">Address</div>
                        <form className="flex flex-col gap-[20px] w-[500px]" onSubmit={handleSubmit}>
                            <div>
                                <input
                                    name="firstname"
                                    className="p-[15px] w-full border-2 border-ec-gray-d3d3d3 rounded-[20px] text-[30px] font-normal"
                                    placeholder="Firstname"
                                    value={input.firstname}
                                    onChange={handleChangeInput}
                                >
                                </input>
                                <div className=" text-red-500">{inputError?.firstname}</div>
                            </div>
                            <div>
                                <input
                                    name="lastname"
                                    className="p-[15px] w-full border-2 border-ec-gray-d3d3d3 rounded-[20px] text-[30px] font-normal"
                                    placeholder="Lastname"
                                    value={input.lastname}
                                    onChange={handleChangeInput}
                                >
                                </input>
                                <div className=" text-red-500">{inputError?.lastname}</div>
                            </div>
                            <div>
                                <input
                                    name="phoneNumber"
                                    className="p-[15px] w-full border-2 border-ec-gray-d3d3d3 rounded-[20px] text-[30px] font-normal"
                                    placeholder="Phone number"
                                    value={input.phoneNumber}
                                    onChange={handleChangeInput}
                                >
                                </input>
                            </div>
                            <div className=" text-red-500">{inputError?.phoneNumber}</div>
                            <div>
                                <textarea
                                    name="address"
                                    className="p-[15px] w-full min-h-32 max-h-32 border-2 border-ec-gray-d3d3d3 rounded-[20px] text-[30px] font-normal"
                                    placeholder="Address"
                                    value={input.address}
                                    onChange={handleChangeInput}
                                >
                                </textarea>
                                <div className=" text-red-500">{inputError?.address}</div>
                            </div>
                            <button className=" w-full p-[15px] text-white bg-black rounded-full text-[20px] font-normal hover:opacity-80">+ NEW INFO</button>
                        </form>
                    </div>
                    <div className="flex flex-col gap-[30px] w-[500px] h-fit">
                        {authUser?.firstname ?
                            <>
                                <div className="text-[30px] font-bold">Info</div>
                                <div className="border-2 w-full rounded-[20px] px-[30px] py-[10px] flex flex-col gap-[10px] text-[20px] font-normal text-wrap">
                                    <div>Firstname : {authUser?.firstname}</div>
                                    <div>Lastname : {authUser?.lastname}</div>
                                    <div>Phone : {authUser?.phoneNumber}</div>
                                    <div className="break-words">Address : {authUser?.address}</div>
                                </div>
                            </>
                            :
                            <div className="text-[30px] font-bold text-center">You have no info.</div>}
                    </div>
                </div>
            </div>
        </>
    )
}
