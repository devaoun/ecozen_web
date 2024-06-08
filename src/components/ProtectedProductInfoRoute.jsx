import useProduct from "../hooks/useProduct"
import Loading from "./Loading";

export default function ProtectedProductInfoRoute({children}) {
    const {isSelectProductLoading} = useProduct();
  return (
    <>
        {isSelectProductLoading && <Loading/>}
        {children}
    </>
  )
}
