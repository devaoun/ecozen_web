import useProduct from "../hooks/useProduct"
import Loading from "./Loading";

export default function ProtectedProduct({children}) {
    const {isAllProductLoading} = useProduct();
  return (
    <>
        {isAllProductLoading && <Loading/>}
        {children}
    </>
  )
}
