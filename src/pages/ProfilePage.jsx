import { Link } from "react-router-dom"
import { IconCart, IconMyAddress, IconMyOrders } from "../assets/icons/icon"
import useAuth from "../hooks/useAuth"

export default function ProfilePage() {
  const { authUser } = useAuth()

  return (
    <>
      <div className="h-[70vh]">
        <div className="mx-auto text-[30px] font-bold w-fit mt-[60px] mb-[40px]">{authUser?.username}</div>
        <div className=" flex justify-center items-center gap-[100px] text-[20px] font-normal">
          <Link to="/order" className="flex flex-col justify-center items-center w-fit gap-[10px] px-[50px] py-[30px] hover:shadow-2xl">
            <div><IconMyOrders className=" w-[200px] h-[200px]" /></div>
            <div>My orders</div>
          </Link>
          <Link to="/myAddress" className="flex flex-col justify-center items-center  w-fit gap-[10px] px-[50px] py-[30px] hover:shadow-2xl">
            <div><IconMyAddress className="w-[200px] h-[200px]" /></div>
            <div>My address</div>
          </Link>
          <Link to="/cart" className="flex flex-col justify-center items-center  w-fit gap-[10px] px-[50px] py-[30px] hover:shadow-2xl">
            <div><IconCart className="w-[200px] h-[200px]" /></div>
            <div>My cart</div>
          </Link>
        </div>
      </div>
    </>
  )
}
