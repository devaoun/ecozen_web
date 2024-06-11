import { createContext, useEffect, useState } from "react";
import productApi from "../apis/product";
import { setSelectedProduct } from "../utils/localStorage";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
    const [allProduct, setAllProduct] = useState(null)
    const [isAllProductLoading, setIsAllProductLoading] = useState(true)

    useEffect(() => {
        const fetchAllProduct = async () => {
            try {
                const res = await productApi.getAllProduct()
                setAllProduct(res.data.allProduct)
            } catch (error) {
                console.log(error)
            } finally {
                setIsAllProductLoading(false)
            }
        }
        fetchAllProduct();
    }, [])

    const selectProduct = async (productName) => {
        try {
            setSelectedProduct(productName)
        } catch (error) {
            console.log(error)
        }
    }



    return <ProductContext.Provider value={{ allProduct, isAllProductLoading,selectProduct}}>{children}</ProductContext.Provider>
}

