import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import productApi from "../apis/product";

export default function ProductSportPage() {
    const [model, setModel] = useState([]);

    useEffect(() => {
        const fetchSport = async () => {
            try {
                window.scrollTo(0, 0);
                const res = await productApi.getProductByModel('SPORT')
                console.log(res.data.modelProduct)
                setModel(res.data.modelProduct)
            } catch (error) {
                console.log(error)
            }
        }
        fetchSport();
    }, []);

    return (
        <>
            <div className="flex flex-col my-[50px] justify-center items-center gap-[50px]">
                <div className="text-[30px] font-bold w-fit">SPORT</div>
                <div className="w-fit grid grid-cols-3 gap-20 justify-center">
                    {model?.map(item => <ProductCard
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
