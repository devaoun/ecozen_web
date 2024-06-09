import { Link, useNavigate } from 'react-router-dom'
import modelSneaker from '../assets/model-sneaker.png'
import useProduct from '../hooks/useProduct'

export default function ProductCard({ id, name, model, color, price, image }) {
  const navigate = useNavigate()
  const { selectProduct } = useProduct();

  const handleSelectProduct = () => {
    selectProduct(name)
    navigate('/product/productInfo')
  }

  return (
    <div type='button' onClick={handleSelectProduct}>
      <div className='w-[400px] h-[500px] border-[1px] hover:shadow-2xl hover:cursor-pointer active:opacity-80'>
        <div className=' bg-ec-home-gray w-full h-3/5 flex items-center'>
          <img src={image || modelSneaker} />
        </div>
        <div className='px-[30px] border-red-900 flex items-center h-2/5'>
          <div className='flex flex-col gap-[20px] h-fit w-fit'>
            <div className=' font-bold text-xl'>{name}</div>
            <div>{model}</div>
            <div>WHITE , BLACK</div>
            <div>THB {price}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
