import axios from "../config/axios"

const cartApi = {}

cartApi.createCartItem = (data) => axios.post('cart/item',data)

export default cartApi