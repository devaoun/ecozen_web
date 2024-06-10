import { Link } from 'react-router-dom'
import CheckoutItemCard from "../components/CheckoutItemCard";

export default function CheckoutPage() {
  return (
    <>
      <div className="min-h-[80vh] flex justify-center gap-[100px] mt-[40px]">
        <div className="w-[600px] flex flex-col gap-[20px]">
          <div className=" flex flex-col gap-[20px]">
            <div className=" text-[30px] font-semibold">สรุปคำสั่งซื้อ</div>
            <div className="flex flex-col gap-[35px] p-[30px] border-2 h-fit rounded-[20px]">
              <div className=" text-[30px] font-medium">Order Info</div>
              <div className="flex flex-col gap-[30px] text-[20px] font-medium">
                <div className="flex justify-between">Subtotal : <span className=" font-bold">THB</span></div>
                <div className="h-[1px] bg-ec-gray-d3d3d3" />
                <div className="flex justify-between">Total Payment : <span className=" font-bold text-2xl">THB</span></div>
              </div>
            </div>
          </div>
          <div className="border-2 rounded-[20px] flex flex-col items-center py-[20px] text-[20px] font-bold">
            <div>SCB : 12-123-12121</div>
            <div>Account name : Ecozen co.,ltd</div>
          </div>
          <div>
            <div className="flex flex-col gap-[20px] mb-10">
              <CheckoutItemCard />
              <CheckoutItemCard />
              <CheckoutItemCard />
            </div>
          </div>
        </div>
        <div className=" w-fit h-fit rounded-[20px]">
          <div className="flex flex-col gap-[20px]">
            <div className=" text-[30px] font-semibold flex justify-between">
              ที่อยู่ในการจัดส่ง
              <span>
                <Link to='/MyAddress' className=" px-[40px] py-[10px] text-white bg-black rounded-full text-[15px] font-medium hover:opacity-80">Edit</Link>
              </span>
            </div>
            <div className="border-2 w-full rounded-[20px] px-[30px] py-[10px] flex flex-col gap-[10px] text-[20px] font-normal">
              <div>Firstname :</div>
              <div>Lastname :</div>
              <div>Phone :</div>
              <div>Address :</div>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] mt-[60px]">
            <div className=" text-[30px] font-semibold">Upload slip</div>
            <button className="w-[500px] h-[600px] bg-ec-gray-f5f5f5 rounded-[20px] border-2 border-ec-gray-d3d3d3 flex justify-center items-center hover:bg-ec-gray-d3d3d3">
              <div className="w-[100px] h-[100px] bg-white flex justify-center items-center text-ec-gray-d3d3d3 text-[60px] font-light rounded-full">+</div>
            </button>
            <button className=" w-full h-[60px] text-white bg-black rounded-full text-[20px] font-normal hover:opacity-80">CONFIRM PAYMENT</button>
          </div>
        </div>
      </div>
    </>
  )
}
