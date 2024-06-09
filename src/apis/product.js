import axios from "../config/axios";

const productApi = {}

productApi.getAllProduct = () => axios.get('product/allProduct')
productApi.getProductById = (productId) => axios.get(`product/${productId}`)
productApi.getProductByModel = (productModel) => axios.get(`product/model/${productModel}`)
productApi.getProductByName = (productName) => axios.get(`product/productName/${productName}`)

export default productApi