import { useEffect } from 'react';
import ProductCard from '../components/ProductCard'
import useProduct from '../hooks/useProduct'

export default function ProductPage() {
    const { allProduct } = useProduct();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="flex flex-col my-[50px] justify-center items-center gap-[50px]">
                <div className="text-[30px] font-bold w-fit">PRODUCTS</div>
                <div className="w-fit grid grid-cols-3 gap-20 justify-center">
                    {allProduct?.map(item => <ProductCard 
                    key={item.id} 
                    id={item.id}
                    image={item.image} 
                    name={item.name} 
                    model={item.model} 
                    color={item.color} 
                    price={item.price} 
                    />)}
                </div>
            </div>
        </>
    )
}
