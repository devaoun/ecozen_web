import { Link, Navigate, useNavigate } from 'react-router-dom'
import CheckoutItemCard from "../components/CheckoutItemCard";
import useAuth from '../hooks/useAuth';
import { useEffect, useRef, useState } from 'react';
import useCart from '../hooks/useCart';
import { LogoSCB } from '../assets/icons/icon';
import userApi from '../apis/user';
import orderApi from '../apis/order';
import Loading from '../components/Loading';

export default function CheckoutPage() {
  const { authUser } = useAuth();
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItem, fetchCartItem } = useCart();
  const fileEl = useRef();
  const [file, setFile] = useState(null);
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const sumPrice = cartItem.reduce((total, item) => total + (+item.price), 0)
    setTotalPrice(sumPrice)
  }, [cartItem])


  const handleConfirmPayment = async () => {
    try {
      setLoading(true)
      console.log(cartItem)
      if (!file) {
        alert('Please upload your slip')
      }
      if (file) {
        const formData = new FormData();
        formData.append('slip', file)

        const resSlip = await userApi.uploadSlip(formData)
        console.log(resSlip.data.slip)

        console.log(resSlip.data.slip)
        console.log(authUser.id)
        console.log(cartItem)
        const productInput = cartItem.reduce((acc, item) => {
          acc.push({
            productId: item.id,
            price: item.price,
            size: item.size
          })
          return acc
        }, [])
        console.log(productInput)
        const data = {
          slip: resSlip.data.slip,
          userId: authUser.id,
          product: productInput
        }
        const output = await orderApi.createOrder(data)
        console.log(output.data.message)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
      if (file) {
        fetchCartItem()
        navigate('/order')
        }
    }
  }

  return (
    <>
      {loading ? <Loading /> :
        <div className="min-h-[80vh] flex justify-center gap-[100px] my-[40px]">
          <div className="w-[600px] flex flex-col gap-[20px]">
            <div className=" flex flex-col gap-[20px]">
              <div className=" text-[30px] font-semibold">สรุปคำสั่งซื้อ</div>
              <div className="flex flex-col gap-[35px] p-[30px] border-2 h-fit rounded-[20px]">
                <div className=" text-[30px] font-medium">Order Info</div>
                <div className="flex flex-col gap-[30px] text-[20px] font-medium">
                  <div className="flex justify-between">Subtotal : <span className=" font-bold">THB {totalPrice}</span></div>
                  <div className="h-[1px] bg-ec-gray-d3d3d3" />
                  <div className="flex justify-between">Total Payment : <span className=" font-bold text-2xl">THB {totalPrice}</span></div>
                </div>
              </div>
            </div>
            <div className="border-2 rounded-[20px] flex items-center justify-center gap-4 py-[20px] text-[20px] font-bold">
              <LogoSCB className=" w-[200px] h-fit" />
              <div>
                <div>12-123-12121</div>
                <div>Ecozen co.,ltd</div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-[20px] mb-10 h-[60vh] overflow-y-auto p-2">
                {cartItem.map(item =>
                  <CheckoutItemCard
                    key={item.cartId}
                    image={item.image}
                    cartId={item.cartId}
                    name={item.name}
                    size={item.size}
                    model={item.model}
                    price={item.price}
                    color={item.color}
                  />)}
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
                <div>Firstname : {authUser?.firstname}</div>
                <div>Lastname : {authUser?.lastname}</div>
                <div>Phone : {authUser?.phoneNumber}</div>
                <div>Address : {authUser?.address}</div>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] mt-[60px]">
              <div className=" text-[30px] font-semibold">Upload slip</div>
              <input hidden type='file' ref={fileEl} onChange={e => {
                if (e.target.files[0]) {
                  console.log(e.target.files[0]);
                  setFile(e.target.files[0]);
                }
              }} />
              <div onClick={() => fileEl.current.click()} className='relative flex justify-center items-center w-[500px] h-[600px] bg-ec-gray-f5f5f5 rounded-[20px] border-2 border-ec-gray-d3d3d3 hover:bg-ec-gray-d3d3d3 object-contain'>
                {file ?
                  <img src={URL.createObjectURL(file)} className="w-full h-full bg-ec-gray-f5f5f5 rounded-[20px] border-ec-gray-d3d3d3 flex justify-center items-center hover:bg-ec-gray-d3d3d3 object-contain">
                  </img>
                  :
                  <div className='w-[100px] h-[100px] text-ec-gray-d3d3d3 bg-white flex justify-center items-center absolute rounded-full text-[50px] font-light'>+</div>}
              </div>
              <button className=" w-full h-[60px] text-white bg-black rounded-full text-[20px] font-normal hover:opacity-80"
                onClick={handleConfirmPayment}>CONFIRM PAYMENT</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}
