


export default function SizeButton({sizeName , setSelectedSize ,selectedSize}) {
  const handleSelectSize = (e) => {
    setSelectedSize(e.target.value)
  }
  return (
    <button value={sizeName} onClick={handleSelectSize} className={`w-[110px] h-[40px] px-[10px] py-[5px] border-ec-gray-d3d3d3 border-[1px] rounded-lg hover:bg-black hover:text-white ${selectedSize === sizeName ? 'bg-black text-white' : null }`}>{sizeName}</button>
  )
}
